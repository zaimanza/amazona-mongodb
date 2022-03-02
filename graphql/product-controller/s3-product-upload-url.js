const { generateUploadURL } = require("../../aws/s3");


exports.s3ProductUploadUrlSchema = `

extend type Query {
    s3ProductUploadUrl: String!
}
`;

exports.s3ProductUploadUrlController = {
    Query: {
        s3ProductUploadUrl: async (root, {
        }, {
            req,
            errorName
        }) => {
            try {
                return generateUploadURL()

            } catch (err) {
                throw err;
            }
        },
    },
};