const Order = require("../../models/order")

exports.getManyOrderSchema = `

extend type Query {
    getManyOrder: [orderRes!]
}
`;

exports.getManyOrderController = {
    Query: {
        getManyOrder: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const orders = await Order.find().populate('user')
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