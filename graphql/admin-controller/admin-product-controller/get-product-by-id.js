const Product = require("../../../models/product")

exports.getProductByIdSchema = `

extend type Query {
    getProductById(
        id: String!
    ): productRes!
}
`;

exports.getProductByIdController = {
    Query: {
        getProductById: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

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