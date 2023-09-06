exports.response = ((res, {statusCode, data}) => {

    return res.status(statusCode).json(
        data
    )
})