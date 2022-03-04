const { deleteObjectFromURL } = require("../../../aws/s3");
const Product = require("../../../models/product")

exports.addDummyProductSchema = `

extend type Query {
    addDummyProduct: productRes!
}
`;

exports.addDummyProductController = {
    Query: {
        addDummyProduct: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const newProduct = new Product({
                    name: 'sample name',
                    slug: 'sample-slug-' + Math.random(),
                    image: '/images/shirt1.jpg',
                    price: 0,
                    category: 'sample category',
                    brand: 'sample brand',
                    countInStock: 0,
                    description: 'sample description',
                    rating: 0,
                    numReviews: 0,
                });
                const product = await newProduct.save();
                return {
                    ...product._doc,
                    _id: product.id,
                }


            } catch (err) {
                throw err;
            }
        },
    },
};