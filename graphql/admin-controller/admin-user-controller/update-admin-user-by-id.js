const User = require("../../../models/user")

exports.updateAdminUserByIdSchema = `

extend type Query {
    updateAdminUserById(
        id: String!,
        name: String,
        email: String
    ): Boolean!
}
`;

exports.updateAdminUserByIdController = {
    Query: {
        updateAdminUserById: async (root, {
            id,
            name,
            email,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const user = await User.findOne({ _id: id, })
                if (name) user.name = name;
                if (email) user.email = email;

                await user.save();

                return true

            } catch (err) {
                throw err;
            }
        },
    },
};