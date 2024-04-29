const validateUserAuth = (req,res,next) =>{
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
            message:'Something went wrong',
            data: {},
            success: false,
            err: 'Email or Password missing in request'
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next) =>{
    if(!req.body.id){
        return res.status(400).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: 'User id not given'
        });
    }
    next();
}

module.exports ={
    validateUserAuth,
    validateIsAdminRequest
}