const Product = require("../../models/product")

exports.getOneProductSchema = `

extend type Query {
    getOneProduct(
        slug: String!
    ): productRes!
}
`;

exports.getOneProductController = {
    Query: {
        getOneProduct: async (root, {
            slug,
        }, {
            req,
            errorName
        }) => {
            try {

                const product = await Product.findOne({ slug: slug, }).populate('reviews')
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