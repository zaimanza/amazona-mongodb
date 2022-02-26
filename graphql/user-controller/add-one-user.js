const User = require("../../models/user")
const bcrypt = require("bcryptjs")

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
                    password: await bcrypt.hash(user.password, 12),
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