const {ApiResponse} = require('../../services').services
exports.home = ( async (req, res) => {
    
    return ApiResponse(res, 200,{
        status : true,
        data: {},
        message: "Working Successfully"
    }) 
})

exports.docs = ( async (req, res) => {

    return res.redirect("https://documenter.getpostman.com/view/");
    
})