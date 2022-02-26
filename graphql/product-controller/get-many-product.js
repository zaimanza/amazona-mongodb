const Product = require("../../models/product")

exports.getManyProductSchema = `

extend type Query {
    getManyProduct: [productRes!]
}
`;

exports.getManyProductController = {
    Query: {
        getManyProduct: async (root, {
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