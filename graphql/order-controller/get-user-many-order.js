const Order = require("../../models/order")

exports.getUserManyOrderSchema = `

extend type Query {
    getUserManyOrder: [orderRes!]
}
`;

exports.getUserManyOrderController = {
    Query: {
        getUserManyOrder: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const orders = await Order.find({ user: req._id })
                return orders.map(order => {
                    return {
                        ...order._doc,
                        _id: order.id,
                    }
                })

            } catch (err) {
                throw err;
            }
        },
    },
};