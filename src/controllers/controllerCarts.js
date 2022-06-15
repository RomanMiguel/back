import { Cart } from '../services/cart.services'

let dataCart = new Cart()

export const createCart = async ( req, res ) => 
    res.status(200).json(
        await dataCart.newCart()
    )

export const deleteCart = async (req, res) => 
    res.status(200).json(
        await dataCart.deleteCart( req.params.id_cart )
    )

export const getAllProducts = async (req, res) => 
    res.status(200).json(
        await dataCart.getAllProducts( req.params.id_cart )
    )

export const addProduct = async (req, res) =>
    res.json(
        await dataCart.addProduct(req.params.id_cart, req.params.id_prod)
    )

export const deleteProduct = async (req, res) =>
    res.json(
        await dataCart.deleteProduct(req.params.id_cart, req.params.id_prod)    
    )