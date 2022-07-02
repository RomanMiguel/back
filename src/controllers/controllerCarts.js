import { Cart } from '../services/cart.services.js'
import { sendCartMail } from "../utils/nodemailer.js";
import { sms, whatsapp } from "../utils/twilio.js";

let dataCart = new Cart()

export const createCart = async ( req, res ) => {
    
    const {username} = req.params

    res.status(200).json(
        await dataCart.newCart(username)
    )
}

export const deleteCart = async (req, res) => 
    res.status(200).json(
        await dataCart.deleteCart( req.params.id_cart )
    )

export const getAllProducts = async (req, res) =>
    res.status(200).json( 
        await dataCart.getAllProducts ( req.params.id_cart )
    )

export const getUserProducts = async (req, res) =>
    res.status(200).json( 
        await dataCart.getUserCart ( req.params.username )
    )

export const sendOrder = async ( req, res ) => {

    const {username="", email="" } = req.body;
    let productos = await dataCart.getAllProducts( req.params.id_cart )
    
    let carrito = ( 
        productos.map ( prod => {
            return `nombre: ${prod.name}, precio: ${prod.price}
            `
        } )
    ).toString()

    sendCartMail( username, email, carrito )
    sms(
        `Su pedido fue recibido y se encuentra en proceso
        PEDIDOS:
        ${carrito}`
    )
    whatsapp(
        `Su pedido fue recibido y se encuentra en proceso
        PEDIDOS:
        ${carrito}`
    )

    res.status(200).json( productos )
}

export const addProduct = async (req, res) =>
    res.json(
        await dataCart.addProduct(req.params.id_cart, req.params.id_prod)
    )

export const deleteProduct = async (req, res) =>
    res.json(
        await dataCart.deleteProduct(req.params.id_cart, req.params.id_prod)    
    )