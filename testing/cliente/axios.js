import axios from "axios";

const baseURL = "http://localhost:8080"

const api = axios.create({baseURL});


// ---------- GET ----------

const GetAxios = async () => {
    let res = await api.get("api/productos")
    console.log(res.data)
}

GetAxios();

const GetOneAxios = async () => {
    let res = await api.get("api/productos/6261f151d7f51fe4894c5261")
    console.log(res.data)
}

// GetOneAxios();


// ---------- POST ----------

const data = {
    name: "BOTINES DE MESSI",
    price: 11499,
    thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-force-fg-azul-39501311r1wwa84-1.jpg",
    description: "Demostrá tu talento en cada partido y entrenamiento con los botines KAPPA Force. Diseñado para tener una tracción mejorada, comodidad y durabilidad en canchas de césped natural.",
    stock: 10
}

const PostAxios = async () => {
    
    try {
        
        let res = await api.post("api/productos", data);
        console.log(res.data)

    } catch (error) { console.log("post Error: ", error)}
}

// PostAxios();

// ---------- PUT ----------

const data2 = {
    name: "BOTINES DE CR7",
    price: 12499,
    thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-force-fg-azul-39501311r1wwa84-1.jpg",
    description: "Demostrá tu talento en cada partido y entrenamiento con los botines KAPPA Force. Diseñado para tener una tracción mejorada, comodidad y durabilidad en canchas de césped natural.",
    stock: 10
}

const PutAxios = async () => {
    
    try {
        
        let res = await api.put("api/productos/62d198318fa544f888af1dbb", data2);
        console.log(res.data)

    } catch (error) { console.log("put Error: ", error)}
}

// PutAxios();


// ---------- DELETE ----------


const DeleteAxios = async () => {
    
    try {
        
        let res = await api.delete("api/productos/62d198318fa544f888af1dbb");
        console.log(res.data)

    } catch (error) { console.log("put Error: ", error)}
}

// DeleteAxios();

