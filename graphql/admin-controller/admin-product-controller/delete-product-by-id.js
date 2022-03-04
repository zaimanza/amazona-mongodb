const { deleteObjectFromURL } = require("../../../aws/s3");
const Product = require("../../../models/product")

exports.deleteProductByIdSchema = `

extend type Query {
    deleteProductById(
        id: String!
    ): Boolean!
}
`;

exports.deleteProductByIdController = {
    Query: {
        deleteProductById: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const deletedProduct = await Product.findOneAndDelete({ _id: id, })
                return await deleteObjectFromURL(deletedProduct.image)


            } catch (err) {
                throw err;
            }
        },
    },
};