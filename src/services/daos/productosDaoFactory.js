import productosDaoMongo from "./productosDaoMongo.js";
import productosDaoFile from "./productosDaoFile.js";
import dotenv from "dotenv"

dotenv.config();
const opcion = process.argv[2] || "mongo";

let mongo= process.env.MONGO_URL;
let dao;

switch( opcion ) {
    case "mongo":
        dao = new productosDaoMongo( mongo )
        dao.connect();
        break;
    case "file":
        dao = new productosDaoFile()
        dao.connect();
        break;
}

export default class ProductosDaoFactory {
    
    static instancia;

    constructor () {
        if(!ProductosDaoFactory.instancia) {
            ProductosDaoFactory.instancia = dao;
            console.log("Instancia creada: ", ProductosDaoFactory.instancia)
            return ProductosDaoFactory.instancia;
        } else {
            console.log("Ingreso a la instancia: ", ProductosDaoFactory.instancia)
            return ProductosDaoFactory.instancia;
        }
    }
}