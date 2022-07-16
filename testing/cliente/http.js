import http from "http";

// ------------ GET --------------

const options = {
    hostname: "localhost",
    port: 8080,
    path: "/api/productos",
    method: "get",
};

const request = http.request(options, (res) => {
    console.log(res.statusCode);
    res.on("data", (data) => {
        process.stdout.write(data);
    });
});

request.on("error", (error) => {
    console.log(error);
});

request.end();

// ------------ POST --------------

const data = new TextEncoder().encode(
    JSON.stringify({
        name: "BOTINES DE FUTBOL KAPPA MEGRATRON MAX",
        price: 11499,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-force-fg-azul-39501311r1wwa84-1.jpg",
        description: "Demostrá tu talento en cada partido y entrenamiento con los botines KAPPA Force. Diseñado para tener una tracción mejorada, comodidad y durabilidad en canchas de césped natural.",
        stock: 10
    }),
);

const options2 = {
  hostname: "localhost",
  port: 8080,
  path: "/api/productos",
  method: "post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const request2 = http.request(options2, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});

request2.on("error", (err) => console.log(err));
request2.write(data);
request2.end();

// ------------ PUT --------------

const data3 = new TextEncoder().encode(
    JSON.stringify({
        name: "BOTINES DE FUTBOL KAPPA OPTIMUS MAX",
        price: 7499,
        thumbnail: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-kappa-force-fg-azul-39501311r1wwa84-1.jpg",
        description: "Demostrá tu talento en cada partido y entrenamiento con los botines KAPPA Force. Diseñado para tener una tracción mejorada, comodidad y durabilidad en canchas de césped natural.",
        stock: 10
    }),
);

const options3 = {
  hostname: "localhost",
  port: 8080,
  path: "/api/productos/62d16c8b8fa544f888af1dad",
  method: "put",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data3.length,
  },
};

const request3 = http.request(options3, (res) => {
  res.on("data", (data) => {
    process.stdout.write(data);
  });
});

request3.on("error", (err) => console.log(err));
request3.write(data3);
request3.end();

// ------------ DELETE --------------

const options4 = {
  hostname: "localhost",
  port: 8080,
  path: "/api/productos/62d16c8b8fa544f888af1dad",
  method: "delete"
};

const request4 = http.request(options4, (res) => {
    
    console.log(res.statusCode)

    res.on("data", (data) => {
        process.stdout.write(data);
    });
});

request4.on("error", (err) => console.log(err));
request4.end();