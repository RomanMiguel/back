import mongoose from "mongoose";
import { ProductosModel } from "../../modelos/productos.modules.js"
import logger from "../../utils/logger.js";


export default class productosDaoMongo {

    constructor (mongo_url) {
        this.productosDB = ProductosModel
        this.mongo = mongo_url;
    }

    async connect () {
        try {
            await mongoose.connect(this.mongo);
            logger.info("Conectado a Mongo")
        } catch (error) {
            logger.error("Error al conectarde a mongo: ", error)
        }
    }
    
    async disconnect () {
        try {
            await mongoose.disconnect();
            logger.info("Desconectado a Mongo")
        } catch (error) {
            logger.error("Error al desconectarse de mongo: ", error)
        }
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