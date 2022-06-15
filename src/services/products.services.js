import "../config/db"
import { ProductosModel } from "../modelos/productos.modules"

export class Contenedor {
    
    constructor () {
        this.productosDB = ProductosModel
    }

    async save ( object ) {
        return await this.productosDB.create(object)
    }

    async getById ( id ) {
        return await this.productosDB.findOne({_id:id})
    }

    async getAll () {
        return await this.productosDB.find({})
    }

    async delete (id) {            

        const res = await this.productosDB.deleteOne({_id:id})
        
        if ( res.deletedCount == 0)                                                       
            return `error al eliminar el producto id:${id}`
        return res
    }

    async deleteAll () {
        return await this.productosDB.deleteMany({})
    }
    
    async update ( ID, object ) {
        return await this.productosDB.updateOne({_id:ID}, object)
    }
}