const User = require("../../models/user")
const {
    signToken
} = require("../../middleware/createToken")
const bcrypt = require("bcryptjs")

exports.userRegisterSchema = `


extend type Mutation {
    userRegister(
        name: String!,
        email: String!,
        password: String!
    ): userLoginRes!
}
`;

exports.userRegisterController = {
    Mutation: {
        userRegister: async (root, {
            name,
            email,
            password,
        }, {
            req,
            errorName
        }) => {
            try {

                const newUser = new User({
                    name: name,
                    email: email,
                    password: await bcrypt.hash(password, 12),
                    isAdmin: false,
                })

                const [user] = [await newUser.save()];

                const token = signToken(user);
                return {
                    token: token,
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                }

            } catch (err) {
                throw err;
            }
        },
    },
};