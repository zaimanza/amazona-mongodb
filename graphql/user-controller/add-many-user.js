const User = require("../../models/user")
const bcrypt = require("bcryptjs")

exports.addManyUserSchema = `
    extend type Mutation {
        addManyUser( 
            users: [userReq!],
        ): Boolean
    }
`;

exports.addManyUserController = {
    Mutation: {
        addManyUser: async (root, {
            users,
        }, {
            req,
            errorName
        }) => {
            try {
                for (const user of users) {
                    const newUser = new User({
                        name: user.name,
                        email: user.email,
                        password: await bcrypt.hash(user.password, 12),
                        isAdmin: user.isAdmin,
                    })

                    const [savedUser] = [await newUser.save()];
                }
                return true

            } catch (err) {
                throw err;
            }
        },
    },
};