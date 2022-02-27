const Order = require("../../models/order")
const mergeModel = require("../../middleware/merge-model")

exports.getOneOrderSchema = `

extend type Query {
    getOneOrder(
        id: String!
    ): orderRes!
}
`;

exports.getOneOrderController = {
    Query: {
        getOneOrder: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const order = await Order.findOne({ _id: id, })
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