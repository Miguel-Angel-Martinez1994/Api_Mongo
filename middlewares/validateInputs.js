const {validationResult}=require("express-validator");

const validateInputs = (req,res,next) =>{
    const errores=validationResult(req)

    if(!errores.isEmpty()){
        return res.status(400).json({
            ok:false,
            errores:errores.mapped()
        })
    }
    next();
}

module.exports={
    validateInputs
}