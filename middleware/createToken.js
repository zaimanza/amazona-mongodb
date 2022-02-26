const jwt = require("jsonwebtoken");

exports.createVendorAccessToken = (vendor, fcmToken) => {

    const accessToken = jwt.sign({
        vendorId: vendor.id,
        name: vendor.name,
        email: vendor.email,
        pNumber: vendor.pNumber,
        fcmToken: fcmToken,
    },
        process.env.AUTH_KEY);
    return {
        accessToken
    };
};