import { Router } from 'express';
import { getAllProducts, saveProduct, updateProduct, deleteProduct, getProductById } from '../controllers/controllerProducts'

export const routerProducts = Router();

routerProducts.get('/', getAllProducts )

routerProducts.get('/:id', getProductById )

routerProducts.post('/', saveProduct)

routerProducts.put('/:id', updateProduct)

routerProducts.delete('/:id', deleteProduct)