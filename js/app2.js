const tarjetasContenedor = document.querySelector(".tarjetasContenedor");



// function insertarProducto1(arr) {
//   console.log(array.join(""));
//   probandoElCarrito.innerHTML = arr.join("");
// }

const redBtn = document.querySelector(".redButton");
// const blueBtn = document.querySelector(".blueButton");
// const showBlue = document.querySelector(".showBlue");
const container = document.querySelector(".container");
const showRed = document.querySelector(".showRed");
// const showAll = document.querySelector(".showAll");
// let deleteClick = document.querySelectorAll("delete");

let squares = [];
// van a crear dos botones más
// el primero debe mostrar todos los cuadros rojos
// el segundo debe volver a mostrar todos los cuadros (rojos y azules)
// showBlue.addEventListener("click", () => {
//   const blueSquares = squares.filter((square) => square.includes("blue"));
//   insertSquares(blueSquares);
// });

showRed.addEventListener("click", () => {
  const redSquares = squares.filter((square) => square.includes("red"));
  insertSquares(redSquares);
});

// showAll.addEventListener("click", () => {
//   const allSquares = squares.filter((square) => square.includes(square));
//   insertSquares(allSquares);
// });

redBtn.addEventListener("click", (e) => {
  console.log("agregando rojo");
  // que debe hacer?
  // crear un div
  createSquare("red");
  insertSquares(squares);
});


// redBtn.addEventListener("click", (e) => {
//   console.logction insertSquares(arr) {
//   console.log(squares.join(""));
//   container.innerHTML = arr.join("");
// }("red");
//   insertSquares(squares);
// });

// blueBtn.addEventListener("click", (e) => {
//   console.log("agregando azul");
  // que debe hacer ?
  // crear un div
//   createSquare("blue");
//   insertSquares(squares);
// });

function createSquare(color) {
  const square = `<div class="square ${color}"></div>`;
  squares.push(square);
}

// pintar los datos / pintar la información
function insertSquares(arr) {
  console.log(squares.join(""));
  container.innerHTML = arr.join("");
}

// Create - Read -

// probando con arreglo subir mis productos.

const tarjetas = [
  {
    id: 1,
    titulo: 'producto 1',
    descripcion: 'mas detalle de producto',
    imagen: './assets/c1.jpg',
    price: 'S/.75.00'
  },
  {
    id: 2,
    titulo: 'producto 2',
    descripcion: 'mas detalle de producto',
    imagen: './assets/c1.jpg',
    price: 'S/.70.00'
  },
  {
    id: 3,
    titulo: 'producto 3',
    descripcion: 'mas detalle de producto',
    imagen: './assets/c1.jpg',
    price: 'S/.80.00'
  },
  // {
  //   id: 1,
  //   titulo: 'producto 4',
  //   descripcion: 'mas detalle de producto',
  //   imagen: './assets/c1.jpg',
  // }

]



function pintarTarjetas() {
  let html = '';
  for (let tarjeta of tarjetas){
    html += `
    <article class="tarjeta">
      <img src="${tarjeta.imagen}" alt= ${tarjeta.titulo}" class = "imagen__tarjeta">
      <div class="cuerpo__tarjeta">
        <h2 class="titulo__tarjeta"> ${tarjeta.titulo}</h2>
        <p class="descricion__tarjeta"> ${tarjeta.descripcion}</p>
        <p class="price"> ${tarjeta.price}</p>
        <button class="agregar__btn" data-id=" ${tarjeta.id}">Agregar</button>
      </div>
    </article>
    `
  }
  tarjetasContenedor.innerHTML = html  
}

pintarTarjetas()

const clickEnImagen = document.querySelector(".agregar__btn");
let array = [];

clickEnImagen.addEventListener("click", (e) => {
  crearEspacioParaMostrar(tarjets.price);
  insertarProducto(array);
}); 


function crearEspacioParaMostrar(color) {
  const espacio = `<div class="carritoALlenar ${color}"></div>`;
  array.push(espacio);
}

function insertarProducto(arr) {
  console.log(array.join(""));
  probandoElCarrito.innerHTML = arr.join("");
  
}

// function insertSquares(arr) {
//   console.log(squares.join(""));
//   container.innerHTML = arr.join("");
// }


// function createSquare(color) {
//   const square = `<div class="square ${color}"></div>`;
//   squares.push(square);
// }

// redBtn.addEventListener("click", (e) => {
//   console.log("agregando rojo");
  // que debe hacer?
  // crear un div
//   createSquare("red");
//   insertSquares(squares);
// });
