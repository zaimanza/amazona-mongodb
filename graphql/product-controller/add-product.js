

exports.addProductSchema = `
    extend type Mutation {
        addProduct: Boolean
    }
`;

exports.addProductController = {
    Mutation: {
        addProduct: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};