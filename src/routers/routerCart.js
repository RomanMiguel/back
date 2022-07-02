import { Router } from 'express'
import { getUserProducts, sendOrder, createCart, deleteCart, getAllProducts, addProduct, deleteProduct } from '../controllers/controllerCarts.js'

const router = Router();

router.post     ('/:username'   , createCart )

router.delete   ('/:id_cart'    , deleteCart )

router.get      ('/:id_cart/productos'          , getAllProducts )

router.get      ('/:username'         , getUserProducts )

router.get      ('/:id_cart/order'              , sendOrder )

router.post     ('/:id_cart/productos/:id_prod' , addProduct )

router.delete   ('/:id_cart/productos/:id_prod' , deleteProduct )

export default router;