const Product = require("../../models/product")

exports.getProductSchema = `

extend type Query {
    getProduct: [productRes!]
}
`;

exports.getProductController = {
    Query: {
        getProduct: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {

                const products = await Product.find({})
                return products.map(product => {
                    return {
                        ...product._doc,
                        _id: product.id,
                    }
                })

            } catch (err) {
                throw err;
            }
        },
    },
};