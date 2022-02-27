const User = require("../../models/user")
const {
    signToken
} = require("../../middleware/createToken")
const bcrypt = require("bcryptjs")

exports.userUpdateSchema = `

type userUpdateRes {
    token: String!,
    _id: String!,
    name: String,
    email: String,
    isAdmin: Boolean,
}

extend type Mutation {
    userUpdate(
        name: String,
        email: String,
        password: String,
    ): userUpdateRes!
}
`;

exports.userUpdateController = {
    Mutation: {
        userUpdate: async (root, {
            name,
            email,
            password,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const user = await User.findOne({ _id: req._id, })
                if (name) user.name = name;
                if (email) user.email = email;
                if (password) user.password = await bcrypt.hash(password, 12)

                await user.save();

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