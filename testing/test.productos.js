import assert from "assert";
import productosDaoFile from "../src/services/daos/productosDaoFile.js";

assert.strict

const productos= [
    {
        name: "BOTINES DE FUTBOL KAPPA FORCE FG AZUL",
        price: 6499,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-force-fg-azul-39501311r1wwa84-1.jpg",
        description: "Demostrá tu talento en cada partido y entrenamiento con los botines KAPPA Force. Diseñado para tener una tracción mejorada, comodidad y durabilidad en canchas de césped natural.",
        stock: 20
    },
    {
        name: "ZAPATILLAS PUMA GRAVITION NEGRA",
        price: 13529,
        thumbnail: "https://thumbs.nosto.com/quick/rbxh5h46/8/451718_alt_1ed15353b5e57bc891a473c7858a1b0866c733157d9df7fdab0c74f7036b11c4/1ca63d103b58260ea83a6a0b48ff9c2e61cc96c9932e5ee325b7158959f3dbf0a/A",
        description: "Las Graviton se inspiran en la colección de running tradicional de PUMA con una estética desenfada y sensación futurista.La plantilla Softfoam, proporciona mayor amortiguación, durabilidad óptima y facilita la zancada.",
        stock: 20
    },
    {
        name: "CAMISETA DE ARGENTINA ADIDAS OFICIAL BLANCA",
        price: 12220,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-argentina-adidas-oficial-blanca-74435814-100020fs6565001-1.jpg",
        description: "Hecha para un verdadero hincha, demostrá tu pasión por la selección Argentina con esta camiseta de fútbol ADIDAS. Refleja la unión que genera en todo el mundo tanto en el juego como en los estadios y en las calles.",
        stock: 50
    },
    {
        name: "CAMPERA DE ARGENTINA ADIDAS AFA NEGRA",
        price: 13999,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-argentina-adidas-afa-negra-100020fh8589001-1.jpg",
        description: "Demostrá que sos hincha de la selección Argentina con esta campera de fútbol ADIDAS. Hace parte del uniforme de presentación que usan los jugadores en sus desplazamientos desde y hacia los partidos.",
        stock: 15
    },
    {
        name: "CAMPERA UNDER ARMOUR ENTRENAMIENTO RUSH COLORBLOCK MUJER BLANCA",
        price: 24200,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-under-armour-entrenamiento-rush-colorblock-mujer-blanca-700021368355100-1.jpg",
        description: "El tejido con minerales incorporados absorbe la energía que desprendes y la devuelve de nuevo a tus músculos, para que sientas menos cansancio y te recuperes más rápido.",
        stock: 15
    },
    {
        name: "ZAPATILLAS RUNNING ADIDAS SHOWTHEWAY MUJER FUCSIA",
        price: 10499,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-adidas-showtheway-mujer-fucsia-100010fx3750001-1.jpg",
        description: "Su silueta delgada con un logo de adidas en la lengueta y las 3 Tiras en el mediopié hacen que estas zapatillas combinen a la perfección con calzas o tus jeans favoritos.",
        stock: 5
    },
    {
        name: "MOCHILA",
        price: 5000,
        thumbnail: "me vale",
        description: "practica",
        stock: 0
    },
    {
        name: "REMERA DE BOCA ADIDAS TEAMGEIST BLANCA",
        price: 13550,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-de-boca-adidas-teamgeist-blanca-100020hb0562001-1.jpg",
        description: "Esta remera de fútbol de Boca Juniors rinde homenaje a los 15 años de historia del balón ADIDAS Teamgeist.",
        stock: 27
    }
]

describe("Test de Productos", () => {

    it("Deberia crear la instancia", async () => {
        try{
            const productos = new productosDaoFile()
            assert.strictEqual( await productos.getAll().length, 0)
        }catch(error){
            console.log("Error al crear instacia" , error)
        }
    });

    it("Deberia traer todos los productos", async () => {
        try {
            const Productos = new productosDaoFile()
            Productos.connect()
            assert.deepStrictEqual( JSON.parse( Productos.getAll() ), productos)
        } catch (error) {
            console.log("Error al traer todos los productos, ", error)
        }
    });

})
