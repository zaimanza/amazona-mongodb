const Order = require("../../models/order")
const mergeModel = require("../../middleware/merge-model")

exports.payOrderSchema = `

extend type Query {
    payOrder(
        id: String!
    ): orderRes!
}
`;

exports.payOrderController = {
    Query: {
        payOrder: async (root, {
            id,
        }, {
            req,
            errorName
        }) => {
            try {

                const order = await Order.findOne({ _id: id, })
                if (order) {
                    order.isPaid = true;
                    order.paidAt = Date.now();
                    order.paymentResult = {
                        id: req.body.id,
                        status: req.body.status,
                        email_address: req.body.email_address,
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