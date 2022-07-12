import ProductosDaoFactory from "./daos/productosDaoFactory.js"
import {asDto} from "./dtos/productosDto.js";

const productosDao = new ProductosDaoFactory;

export class Contenedor {
    
    constructor () {
        this.productosDB = productosDao;
    }

    async save ( object ) {
        return await this.productosDB.save(object)
    }

    async get (id) {
        
        if ( id ) {
            let prod = await this.productosDB.getById(id)
            if(prod.msg)
                return prod.msg
            return asDto(prod)
        } else {
            let prod = await this.productosDB.getAll()
            return asDto(prod)
        }
    }

    async delete (id) {            
        if(id) {
            const res = await this.productosDB.delete( id )
            
            if ( res.deletedCount == 0)                                                       
                return `error al eliminar el producto id:${id}`
            
            return res
        } else {
            return await this.productosDB.deleteAll()
        }
    }
    
    async update ( ID, object ) {
        return await this.productosDB.update( ID, object )
    }
}