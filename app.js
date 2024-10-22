const express=require("express");
require('dotenv').config();
const cors=require("cors")

const {connection}=require("./helpers/dbConnect");

/*SERVER*/
const app=express();
const port=process.env.PORT

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

/*CARPETA ESTATICA*/
app.use(express.static(__dirname + '/public'))

/*CONEXION*/
connection();

/*CORS*/
app.use(cors())

/*RUTAS*/
app.use('/api/v1',require('./routes/apiRouter'))



/*LISTENER*/
app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})