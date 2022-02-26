const Product = require("../../models/product")

exports.addOneProductSchema = `
    extend type Mutation {
        addOneProduct( 
            product: productReq,
        ): Boolean
    }
`;

exports.addOneProductController = {
    Mutation: {
        addOneProduct: async (root, {
            product,

        }, {
            req,
            errorName
        }) => {
            try {

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
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};