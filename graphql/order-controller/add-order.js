const Order = require("../../models/order")
const bcrypt = require("bcryptjs")
const mergeModel = require("../../middleware/merge-model")


exports.addOrderSchema = `
    extend type Mutation {
        addOrder( 
            paymentMethod: String!,
            orderItems: [orderItemReq!],
            shippingAddress: shippingAddressReq!,
            itemsPrice: Float,
            shippingPrice: Float,
            taxPrice: Float,
            totalPrice: Float,
        ): orderRes
    }
`;

exports.addOrderController = {
    Mutation: {
        addOrder: async (root, {
            paymentMethod,
            orderItems,
            shippingAddress,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,

        }, {
            req,
            errorName
        }) => {
            try {
                if (!req._id) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const newOrder = new Order({
                    user: req._id,
                    orderItems: orderItems,
                    shippingAddress: shippingAddress,
                    paymentMethod: paymentMethod,
                    itemsPrice: itemsPrice,
                    shippingPrice: shippingPrice,
                    taxPrice: taxPrice,
                    totalPrice: totalPrice,
                })

                const [savedOrder] = [await newOrder.save()];
                console.log(savedOrder)
                return {
                    ...savedOrder._doc,
                    _id: savedOrder.id,
                    user: mergeModel.user(savedOrder.user),
                    orderItems: savedOrder.orderItems.map((orderItem) => {
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