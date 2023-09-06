const Authenticate = require('./middlewares/auth')
const ApiResponse = require('./middlewares/response')

exports.services = {
    Authenticate,
    ApiResponse: ApiResponse.response
}