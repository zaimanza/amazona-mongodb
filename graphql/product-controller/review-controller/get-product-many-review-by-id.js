const Product = require("../../../models/product")
const mergeModel = require("../../../middleware/merge-model")

exports.getProductManyReviewByIdSchema = `

extend type Query {
    getProductManyReviewById(
        id: String!
    ): [reviewRes!]
}
`;

exports.getProductManyReviewByIdController = {
    Query: {
        getProductManyReviewById: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const product = await Product.findOne({ _id: id, }).populate('reviews')

                return product.reviews.map((review) => {
                    return {
                        ...review._doc,
                        user: mergeModel.user(review.user),
                        createdAt: review.createdAt
                    }
                })

            } catch (err) {
                throw err;
            }
        },
    },
};