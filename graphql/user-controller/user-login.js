const User = require("../../models/user")
const {
    signToken
} = require("../../middleware/createToken")
const bcrypt = require("bcryptjs")

exports.userLoginSchema = `

type userLoginRes {
    token: String!,
    _id: String!,
    name: String,
    email: String,
    isAdmin: Boolean,
}

extend type Query {
    userLogin(
        email: String!,
        password: String!
    ): userLoginRes!
}
`;

exports.userLoginController = {
    Query: {
        userLogin: async (root, {
            email,
            password,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req.vendorId || !req.isAuth) {
                    throw new Error(errorName.UNAUTHORIZED);
                    console.log('hi')
                }
                console.log('hilua')

                const user = await User.findOne({ email: email, })
                if (user && bcrypt.compare(password, user.password)) {
                    const token = signToken(user);
                    return {
                        token: token,
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    }
                } else {
                    console.log("Error");
                }

            } catch (err) {
                throw err;
            }
        },
    },
};