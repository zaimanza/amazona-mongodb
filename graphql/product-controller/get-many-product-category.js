
const Product = require("../../models/product")

exports.getManyProductCategorySchema = `

extend type Query {
    getManyProductCategory: [String!]
}
`;

exports.getManyProductCategoryController = {
    Query: {
        getManyProductCategory: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {

                const categories = await Product.find({},
                    { category: 1, _id: 0 }
                )
                    .distinct('category')
                return categories

            } catch (err) {
                throw err;
            }
        },
    },
};