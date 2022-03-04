const User = require("../../../models/user")

exports.getAdminAllUserSchema = `

extend type Query {
    getAdminAllUser(
        id: String!
    ): userRes!
}
`;

exports.getAdminAllUserController = {
    Query: {
        getAdminAllUser: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const user = await User.findOne()
                return {
                    ...user._doc,
                    _id: user.id,
                }

            } catch (err) {
                throw err;
            }
        },
    },
};