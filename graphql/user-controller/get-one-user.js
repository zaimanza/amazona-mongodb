const User = require("../../models/user")

exports.getOneUserSchema = `

extend type Query {
    getOneUser(
        id: String!
    ): userRes!
}
`;

exports.getOneUserController = {
    Query: {
        getOneUser: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const user = await User.findOne({ _id: id, })
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