const User = require("../../models/user")

exports.getClientIdSchema = `

extend type Query {
    getClientId: String!
}
`;

exports.getClientIdController = {
    Query: {
        getClientId: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                return process.env.PAYPAL_CLIENT_ID

            } catch (err) {
                throw err;
            }
        },
    },
};