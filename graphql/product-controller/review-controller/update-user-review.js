

const Product = require("../../../models/product")
const mergeModel = require("../../../middleware/merge-model")

exports.updateUserReviewSchema = `

extend type Query {
    updateUserReview(
        id: String!
        comment: String
        rating: Int!
    ): Boolean!
}
`;

exports.updateUserReviewController = {
    Query: {
        updateUserReview: async (root, {
            id,
            comment,
            rating,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const product = await Product.findOne({ _id: id, }).populate('reviews')
                if (product) {
                    const existReview = product.reviews.find((review) => review.user == req._id);
                    if (existReview) {
                        await Product.updateOne(
                            {
                                _id: id,
                                'reviews._id': existReview._id
                            },
                            {
                                $set: {
                                    'reviews.$.comment': comment,
                                    'reviews.$.rating': Number(rating),
                                },
                            }
                        );

                        const updatedProduct = await Product.findById(id).populate('reviews')
                        updatedProduct.numReviews = updatedProduct.reviews.length;
                        updatedProduct.rating =
                            updatedProduct.reviews.reduce((a, c) => c.rating + a, 0) /
                            updatedProduct.reviews.length;
                        await updatedProduct.save();

                        return true;
                    } else {
                        const review = {
                            user: req._id,
                            name: req.name,
                            rating: Number(rating),
                            comment: comment,
                        };
                        product.reviews.push(review);
                        product.numReviews = product.reviews.length;
                        product.rating =
                            product.reviews.reduce((a, c) => c.rating + a, 0) /
                            product.reviews.length;
                        await product.save();

                        return true;
                    }

                }
            } catch (err) {
                throw err;
            }
        }
    }
};