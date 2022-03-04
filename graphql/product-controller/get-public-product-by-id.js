const Product = require("../../models/product")

exports.getPublicProductByIdSchema = `

extend type Query {
    getPublicProductById(
        id: String!
    ): productRes!
}
`;

exports.getPublicProductByIdController = {
    Query: {
        getPublicProductById: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const product = await Product.findOne({ _id: id, })
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