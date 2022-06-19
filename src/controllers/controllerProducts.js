import { Contenedor } from '../services/products.services.js';

const productos = new Contenedor();

export const getAllProducts = async (req, res) =>
    res.send( await productos.getAll() )

export const getProductById = async (req, res) => 
    res.json( await productos.getById( req.params.id) )

export const saveProduct = async (req, res) => {
    if( req.headers.admin == "false" )
        return res.status(401).json( 'No está autorizado para realizar esta operación.')

    res.json(
        await productos.save(req.body)
    )
}

export const updateProduct = async (req, res) =>{     
    if( req.headers.admin == "false" )
        return res.status(401).json( 'No está autorizado para realizar esta operación.')

    res.json(
        await productos.update(req.params.id, req.body)
    )
}

export const deleteProduct = async (req, res) => {
    if( req.headers.admin == "false" )
        return res.status(401).json( 'No está autorizado para realizar esta operación.')

    res.json(
        await productos.delete( req.params.id )
    )
}