const {Schema,model}=require("mongoose");

const ProductoSchema=new Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String
    }
})

module.exports=model("producto",ProductoSchema);