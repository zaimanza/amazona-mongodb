const Product = require("../../models/product")

exports.checkStockOneProductSchema = `

extend type Query {
    checkStockOneProduct(
        id: String!
    ): Boolean!
}
`;

exports.checkStockOneProductController = {
    Query: {
        checkStockOneProduct: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const productExist = await Product.exists({ _id: id, })

                if (!productExist)
                    return false
                else
                    return true

            } catch (err) {
                throw err;
            }
        },
    },
};