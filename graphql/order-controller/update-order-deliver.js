const Order = require("../../models/order")
const mergeModel = require("../../middleware/merge-model")

exports.updateOrderDeliverSchema = `

extend type Query {
    updateOrderDeliver(
        id: String!
    ): orderRes
}
`;

exports.updateOrderDeliverController = {
    Query: {
        updateOrderDeliver: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const order = await Order.findOne({ _id: id, })
                if (!order) {
                    return {}
                }
                order.isDelivered = true;
                order.deliveredAt = Date.now();
                const deliveredOrder = await order.save();
                return {
                    ...order._doc,
                    _id: order.id,
                    user: mergeModel.user(order.user),
                    orderItems: order.orderItems.map((orderItem) => {
                        return {
                            ...orderItem._doc,
                            id: orderItem.id,
                        }
                    }),
                }

            } catch (err) {
                throw err;
            }
        },
    },
};