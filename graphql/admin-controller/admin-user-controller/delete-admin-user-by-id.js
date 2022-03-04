const User = require("../../../models/user")

exports.deleteAdminUserByIdSchema = `

extend type Query {
    deleteAdminUserById(
        id: String!
    ): Boolean!
}
`;

exports.deleteAdminUserByIdController = {
    Query: {
        deleteAdminUserById: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const user = await User.deleteOne({ _id: id, })
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};