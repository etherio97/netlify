
exports.handler = async (event, context, callback) => {
    return {
		statusCode: 200,
		body: JSON.stringify({ status: 200, message: 'Hello Eorlf' });
});

