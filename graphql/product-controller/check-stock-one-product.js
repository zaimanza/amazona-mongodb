const Product = require("../../models/product")

exports.checkStockOneProductSchema = `

extend type Query {
    checkStockOneProduct(
        id: String!,
        quantity: Int!,
    ): Boolean!
}
`;

exports.checkStockOneProductController = {
    Query: {
        checkStockOneProduct: async (root, {
            id,
            quantity,
        }, {
            req,
            errorName
        }) => {
            try {

                const productExist = await Product.exists({ _id: id, })

                if (!productExist)
                    return false


                if (productExist.countInStock < quantity) {
                    return false;
                }

                return true

            } catch (err) {
                throw err;
            }
        },
    },
};