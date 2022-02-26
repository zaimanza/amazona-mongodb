const User = require("../../models/user")

exports.addOneUserSchema = `
    extend type Mutation {
        addOneUser( 
            user: userReq,
        ): Boolean
    }
`;

exports.addOneUserController = {
    Mutation: {
        addOneUser: async (root, {
            user,

        }, {
            req,
            errorName
        }) => {
            try {

                const newUser = new User({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    isAdmin: user.isAdmin,
                })

                const [savedUser] = [await newUser.save()];
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};