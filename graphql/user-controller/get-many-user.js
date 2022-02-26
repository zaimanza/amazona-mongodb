const User = require("../../models/user")

exports.getManyUserSchema = `

extend type Query {
    getManyUser: [userRes!]
}
`;

exports.getManyUserController = {
    Query: {
        getManyUser: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {

                const users = await User.find({})
                return users.map(user => {
                    return {
                        ...user._doc,
                        _id: user.id,
                    }
                })

            } catch (err) {
                throw err;
            }
        },
    },
};