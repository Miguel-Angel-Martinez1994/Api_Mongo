const {Schema, model}=require("mongoose");

const UsuarioSchema=new Schema({
    nombre:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now
    }
})

module.exports=model("servicio",UsuarioSchema);