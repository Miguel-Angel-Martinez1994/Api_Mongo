const Servicio=require("../models/serviciosModel");
const Producto=require("../models/productosModel");

/*Servicios*/


const getServicios =async(req,res)=>{
    try{
        const servicios=await Servicio.find()

       return res.status(200).json({
            ok:true,
            msg:"exito en obtener servicios",
            data:servicios
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en obtener servicios"
        })
    }
}

const getServicioById =async(req,res)=>{
    try{
        const id = req.params.id
        const servicioEncontrado = await Servicio.findById(id);

        res.status(200).json({
            ok:true,
            msg:" servicio ID",
            data:servicioEncontrado
        })

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en obtener 1 servicio"
        })
    }
}

const createServicios =async(req,res)=>{
    try{
        const body = req.body
        const servicio = new Servicio(body)
        const crearServicios = await servicio.save()

        res.status(201).json({
            ok:true,
            msg:"Creado servicio",
            data:crearServicios
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en crear servicio"
        })
    }
    
}

const updateServicioById =async(req,res)=>{
    try{
        const id=req.params.id; 
        const body = req.body;
        const servicio = await Servicio.findOneAndUpdate({ _id:id }, body, { new: true })

        if (!servicio) {
            return res.status(404).json({
                of:false,
                msg: "Error en update servicio",
            })
        }

        res.status(200).json({
            ok:true,
            msg:"actualizado servicio",
            data:servicio
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en editar servicio"
        })
    }
    
}

const deleteServicioById =async(req,res)=>{
    try{
        const id = req.params.id
        const servicioEliminado = await Servicio.findByIdAndDelete(id);

        if (!servicioEliminado) {
            return res.status(404).json({
                ok: false,
                msg: 'Servicio no encontrado'
            })
        }

        res.status(200).json({
            ok:true,
            msg:"Exito borrar servicio",
            data:servicioEliminado
        })

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en borrar servicio"
        })
    }
}


/*Productos*/


const getProductos =async(req,res)=>{
    try{
        const productos=await Producto.find()

       return res.status(200).json({
            ok:true,
            msg:"exito en obtener productos",
            data:productos
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en obtener productos"
        })
    }
}

const getProductosById =async(req,res)=>{
    try{
        const id = req.params.id
        const productoEncontrado = await Producto.findById(id);

        res.status(200).json({
            ok:true,
            msg:" producto ID",
            data:productoEncontrado
        })

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en obtener 1 producto"
        })
    } 
}

const createProductos =async(req,res)=>{
    try{
        const body = req.body
        const producto = new Producto(body)
        const crearProductos = await producto.save()

        res.status(201).json({
            ok:true,
            msg:"Creado producto",
            data:crearProductos
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en crear producto"
        })
    }  
}

const updateProductoById =async(req,res)=>{
    try{
        const id=req.params.id; 
        const body = req.body;
        const producto = await Producto.findOneAndUpdate({ _id:id }, body, { new: true })

        if (!producto) {
            return res.status(404).json({
                of:false,
                msg: "Error en update producto",
            })
        }

        res.status(200).json({
            ok:true,
            msg:"actualizado producto",
            data:producto
        })
    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en editar producto"
        })
    } 
}

const deleteProductoById =async(req,res)=>{
    try{
        const id = req.params.id
        const productoliminado = await Producto.findByIdAndDelete(id);

        if (!productoliminado) {
            return res.status(404).json({
                ok: false,
                msg: 'producto no encontrado'
            })
        }

        res.status(200).json({
            ok:true,
            msg:"Exito borrar producto",
            data:productoliminado
        })

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Error en borrar producto"
        })
    }   
}

module.exports={
    getServicios,
    getServicioById,
    createServicios,
    updateServicioById,
    deleteServicioById,
    getProductos,
    getProductosById,
    createProductos,
    updateProductoById,
    deleteProductoById
}
