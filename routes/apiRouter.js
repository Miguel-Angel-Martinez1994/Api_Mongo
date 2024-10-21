const express=require("express");
const router=express.Router();

const {validateInputs}=require("../middlewares/validateInputs");

const {
    createProductos,
    createServicios,
    deleteProductoById,
    deleteServicioById,
    getProductos,
    getProductosById,
    getServicioById,
    getServicios,
    updateProductoById,
    updateServicioById
}=require("../controllers/apiControllers");
const { check } = require("express-validator");

/*SERVICIOS*/

/*Leer todos los servicios*/
router.get('/servicios',getServicios);
/*Leer un servicio por ID*/
router.get('/servicios/:id',getServicioById);
/*crear un servicio*/
router.post('/servicios',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("fecha","fecha requerida").not().isEmpty(),validateInputs
],createServicios);
/*editar un servicio por ID*/
router.put('/servicios/:id',[
    check("nombre","nombre requerido").not().isEmpty(),
    check("fecha","fecha requerida").not().isEmpty(),
    validateInputs
],updateServicioById);
/*eliminar un servicio por ID*/
router.delete('/servicios/:id',deleteServicioById);

/*PRODUCTOS*/

/*Leer todos los productos*/
router.get('/productos',getProductos);
/*Leer un productos por ID*/
router.get('/productos/:id',getProductosById);
/*crear un productos*/
router.post('/productos',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("descripcion","descripcion requerida").not().isEmpty(),
    validateInputs
],createProductos);
/*editar un productos por ID*/
router.put('/productos/:id',[
    check("nombre","El nombre requerida").not().isEmpty(),
    check("descripcion","descripcion requerida").not().isEmpty(),
    validateInputs
],updateProductoById);
/*eliminar un productos por ID*/
router.delete('/productos/:id',deleteProductoById);

module.exports=router