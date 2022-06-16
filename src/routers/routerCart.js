import { Router } from 'express'
import { createCart, deleteCart, getAllProducts, addProduct, deleteProduct } from '../controllers/controllerCarts'

export const routerCart = Router();

routerCart.post('/', createCart )

routerCart.delete('/:id_cart', deleteCart )

routerCart.get('/:id_cart/productos', getAllProducts )

routerCart.post('/:id_cart/productos/:id_prod', addProduct )

routerCart.delete('/:id_cart/productos/:id_prod', deleteProduct)