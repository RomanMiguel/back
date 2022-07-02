import { Router } from 'express'
import { sendOrder, createCart, deleteCart, getAllProducts, addProduct, deleteProduct } from '../controllers/controllerCarts.js'

const router = Router();

router.post     ('/'        , createCart )

router.delete   ('/:id_cart', deleteCart )

router.get      ('/:id_cart/productos'          , getAllProducts )

router.get      ('/:id_cart/order'              , sendOrder )

router.post     ('/:id_cart/productos/:id_prod' , addProduct )

router.delete   ('/:id_cart/productos/:id_prod' , deleteProduct )

export default router;