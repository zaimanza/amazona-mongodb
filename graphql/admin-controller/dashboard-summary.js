const Order = require("../../models/order")
const Product = require("../../models/product")
const User = require("../../models/user")

exports.dashboardSummarySchema = `
type salesDataRes {
    _id: String!,
    totalSales: Float!,
}

type dashboardSummaryRes {
    ordersCount: Int!,
    productsCount: Int!,
    usersCount: Int!,
    ordersPrice: Float!,
    salesData: [salesDataRes!],
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
                if (!req._id || !req.isAdmin) {
                    throw new Error(errorName.UNAUTHORIZED);
                }

                const ordersCount = await Order.count({})
                const productsCount = await Product.count({})
                const usersCount = await User.count({})
                let ordersPrice = 0.0;
                let salesData = [];
                orders = await Order.find({}, { totalPrice: 1, createdAt: 1 })

                let ordersPriceTempt = 0.0;
                orders.map((order) => {

                    ordersPriceTempt = ordersPriceTempt + order.totalPrice;
                })
                ordersPrice = ordersPriceTempt


                orders.map((order) => {
                    const options = { year: 'numeric', month: 'numeric' };
                    _id = new Date(order.createdAt).toLocaleDateString('en-EN', options)

                    if (salesData) {
                        let salesDataTrue = false;
                        salesData.forEach((salesDataOne) => {
                            if (salesDataOne._id == _id) {
                                salesDataTrue = true;
                            }
                        });
                        if (salesDataTrue) {
                            salesData[salesData.findIndex((salesDataOne => salesDataOne._id == _id))].totalSales = salesData[salesData.findIndex((salesDataOne => salesDataOne._id == _id))].totalSales + order.totalPrice
                        } else {
                            salesData.push({
                                _id: _id,
                                totalSales: order.totalPrice
                            })
                        }
                    } else {
                        salesData.push({
                            _id: _id,
                            totalSales: order.totalPrice
                        })
                    }
                })
                console.log(salesData)


                return {
                    ordersCount: ordersCount,
                    productsCount: productsCount,
                    usersCount: usersCount,
                    ordersPrice: ordersPrice,
                    salesData: salesData,
                }

            } catch (err) {
                throw err;
            }
        },
    },
};