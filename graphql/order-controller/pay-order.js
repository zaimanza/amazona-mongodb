const Order = require("../../models/order")
const mergeModel = require("../../middleware/merge-model")

exports.payOrderSchema = `

extend type Query {
    payOrder(
        orderId: String!,
        id: String!,
        status: String!,
        email_address: String!,
    ): orderRes!
}
`;

exports.payOrderController = {
    Query: {
        payOrder: async (root, {
            orderId,
            id,
            status,
            email_address,
        }, {
            req,
            errorName
        }) => {
            try {

                const order = await Order.findOne({ _id: orderId, })
                if (order) {
                    order.isPaid = true;
                    order.paidAt = Date.now();
                    order.paymentResult = {
                        id: id,
                        status: status,
                        email_address: email_address,
                    };
                    const paidOrder = await order.save();

                    return {
                        ...paidOrder._doc,
                        _id: paidOrder.id,
                        user: mergeModel.user(paidOrder.user),
                        orderItems: paidOrder.orderItems.map((orderItem) => {
                            return {
                                ...orderItem._doc,
                                id: orderItem.id,
                            }
                        }),
                    }
                } else {
                    throw err;
                }

            } catch (err) {
                throw err;
            }
        },
    },
};