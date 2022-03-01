const Product = require("../../../models/product")

exports.updateProductByIdSchema = `

extend type Query {
    updateProductById(
        id: String!
        updateData: updateProductReq
    ): Boolean!
}
`;

exports.updateProductByIdController = {
    Query: {
        updateProductById: async (root, {
            id,
            updateData,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }
                const productExists = await Product.exists({ _id: id, })
                if (productExists) {
                    let toUpdateProductInfo = {}
                    if (updateData.name) toUpdateProductInfo.name = updateData.name;
                    if (updateData.slug) toUpdateProductInfo.slug = updateData.slug;
                    if (updateData.price) toUpdateProductInfo.price = updateData.price;
                    if (updateData.category) toUpdateProductInfo.category = updateData.category;
                    if (updateData.image) toUpdateProductInfo.image = updateData.image;
                    if (updateData.brand) toUpdateProductInfo.brand = updateData.brand;
                    if (updateData.countInStock) toUpdateProductInfo.countInStock = updateData.countInStock;
                    if (updateData.description) toUpdateProductInfo.description = updateData.description;
                    if (updateData.toUpdateProductInfo)
                        await Product.update({ _id: id, },
                            {
                                $set: toUpdateProductInfo
                            })
                }
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};