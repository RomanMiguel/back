import { Router } from 'express'
import { createCart, deleteCart, getAllProducts, addProduct, deleteProduct } from '../controllers/controllerCarts.js'

const router = Router();

router.post('/', createCart )

router.delete('/:id_cart', deleteCart )

router.get('/:id_cart/productos', getAllProducts )

router.post('/:id_cart/productos/:id_prod', addProduct )

router.delete('/:id_cart/productos/:id_prod', deleteProduct)

export default router;