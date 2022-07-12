import fs from "fs";
import logger from "../../utils/logger.js";


export default class productosDaoFile {
    constructor() {
        this.file = "./productos/productos.json";
        this.productos = [];
    }
    
    async connect () {
        try{
            const data = await fs.promises.readFile(this.file,"utf-8");
            this.productos = JSON.parse(data);
        } catch (err) {
            logger.error("Error connect File, ", err)
        }
    }

    async save ( object ) {    
        try{
            object.id = Math.random().toString();
            this.productos.push(object)
            const data = await fs.promises.writeFile(this.file , JSON.stringify(this.productos))
            return object
        } catch(err){
            logger.error("Error a guardar archivo productos.json")    
        }
    }

    async getById ( id ) {
        let producto = this.productos.find(prod => prod.id == id);
        
        if(!producto)
            return {msg: "Error: Id incorrecto"}
        
        return producto
    }

    async getAll () {
        return this.productos; 
    }

    async delete (id) {
        try {
            let filter = this.productos.filter( prod => prod.id !== id )
            
            if(!filter) 
                return {msg:"error id incorrecto, producto no encontrado"}

            await fs.promises.writeFile(this.file, JSON.stringify(filter))
            
            return { msg: "Producto eliminado", id: id }
        } catch (error) {
            return { msg: "Error al elimiar producto", id: id }
        }
    }

    async deleteAll () {
        try {
            this.productos= [];
            await fs.promises.writeFile(this.file, JSON.stringify(this.productos));
            return {msg:"Productos Eliminados"}
        } catch (err) {
            return {msg:"Error al eliminar productos"}
        }
    }
    
    async update ( ID, object ) {
        try {
            let producto = this.productos.find( prod => prod.id === ID)
            
            if(producto){
                let filter = this.productos.filter( prod => prod.id !== ID)
                
                let newProducto = {
                    ...producto,
                    name: object.name,
                    price: object.price,
                    thumbnail: object.thumbnail,
                    description: object.description,
                    stock: object.stock
                }
                filter.push(newProducto);
                this.productos = filter;
                await fs.promises.writeFile(this.file, JSON.stringify(this.productos))
                return {msg: "Actualido con exito"}
            }

            return {msg: "Producto no encontrado, ID incorrecto"}

        } catch (error) {
            logger.error("Error al actualizar producto")
            return {msg:"Error al actualizar producto"}
        }
    }
}