import "../config/db.js"
import { CarritosModel } from "../modelos/carrito.modules.js"
import { ProductosModel } from "../modelos/productos.modules.js"

export class Cart {

    constructor() {
        this.carritosDB = CarritosModel
        this.productosDB = ProductosModel
    }

    async newCart () {
        try{

            return await this.carritosDB.create({
                time: new Date(),
                productos: []
            })

        }catch (err) {
            console.log("Error al crear el carrito:", err)
        }
    }

    async deleteCart (id) {
        try{
            const res = await this.carritosDB.deleteOne({_id:id})
            if(res.deletedCount == 0 ) 
                return `Carrito id:${id} No se pudo eliminar`
            
            return`Carrito id:${id} Eliminado`
        }catch(err){ 
            console.log("Error al eliminar carrito: ", err)
        }
    }

    async addProduct (id_cart, id_prod) {
        try{
        
            let producto = await this.productosDB.find({_id:id_prod})
            let carrito = await this.carritosDB.findOne({_id: id_cart})
            carrito.productos.push({
                name: producto[0].name,
                price: producto[0].price,
                thumbnail: producto[0].thumbnail,
                id: id_prod
            })
            
            return await this.carritosDB.updateOne({_id:id_cart},carrito)

        }catch(err) {
            console.log("error al agregar productos al carrito: ", err)
        }
    }

    async deleteProduct ( id_cart, id_prod) {
        
        try{

            let carrito = await this.carritosDB.findOne({_id: id_cart})
            
            carrito.productos = carrito.productos.filter( prod => prod.id !== id_prod)
            
            let {modifiedCount} = await this.carritosDB.updateOne({_id:id_cart},{productos:carrito.productos})
            if(modifiedCount== 0)
                return {error: "Error al eliminar producto"}
            return {message:"producto Eliminado del carrito"}
            
        }catch(err){
            console.log(`Error al eliminar producto: ${id_prod}, del carrito: ${id_cart}`,err);
        }
    }

    async getAllProducts (id_cart) {
        try{
            let carrito = await this.carritosDB.findOne({_id: id_cart})
            return carrito.productos
        }catch(err) {
            console.log(`Error al traer carrito: ${id_cart}: `,err)
        }
    }
}