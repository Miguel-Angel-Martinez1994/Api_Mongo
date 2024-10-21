const mongoose=require("mongoose")

const connection =async()=>{
    try{

        const resp=await mongoose.connect(process.env.URI_Mongo);
        console.log("BD CONNECTED");
        return resp
    }catch(error){
        console.log(error)
        return {
            ok: false,
            msg: "Error en la conexion"
        }
    }

   
}


module.exports={
    connection
}