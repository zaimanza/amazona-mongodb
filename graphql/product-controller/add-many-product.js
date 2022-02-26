const Product = require("../../models/product")

exports.addManyProductSchema = `
    extend type Mutation {
        addManyProduct( 
            products: [productReq!],
        ): Boolean
    }
`;

exports.addManyProductController = {
    Mutation: {
        addManyProduct: async (root, {
            products,
        }, {
            req,
            errorName
        }) => {
            try {
                for (const product of products) {
                    const newProduct = new Product({
                        name: product.name,
                        slug: product.slug,
                        category: product.category,
                        image: product.image,
                        isFeatured: product.isFeatured,
                        featuredImage: product.featuredImage,
                        price: product.price,
                        brand: product.brand,
                        rating: product.rating,
                        numReviews: product.numReviews,
                        countInStock: product.countInStock,
                        description: product.description,
                    })

                    const [savedProduct] = [await newProduct.save()];
                }
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};