const Order = require("../../models/order")
const Product = require("../../models/product")
const User = require("../../models/user")

exports.dashboardSummarySchema = `

type dashboardSummaryRes {
    ordersCount: Int!,
    productsCount: Int!,
    usersCount: Int!,
}

extend type Query {
    dashboardSummary: dashboardSummaryRes!
}
`;

exports.dashboardSummaryController = {
    Query: {
        dashboardSummary: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }
                const ordersCount = await Order.count({})
                const productsCount = await Product.count({})
                const usersCount = await User.count({})

                return {
                    ordersCount: ordersCount,
                    productsCount: productsCount,
                    usersCount: usersCount,
                }

            } catch (err) {
                throw err;
            }
        },
    },
};