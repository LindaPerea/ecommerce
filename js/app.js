const botonComprar = document.querySelector(".comprar");
const tarjetasContenedor = document.querySelector(".tarjetasContenedor");

botonComprar.addEventListener("click", (e)=> {
  botonComprar.innerHTML = "Ou YEAA!";

})
function changeColor(color) {
  document.body.style.background = color
  
}

function run() {
  changeColor('yellow');
  
}

tarjetasContenedor.addEventListener("click", (e) => {
  const button = tarjetasContenedor.querySelector("button");
})

const tarjetas = [
  {
    id: 1,
    titulo: 'Ccori',
    descripcion: 'Pasion',
    imagen: './assets/c1.jpg',
    price: 'S/.75.00'
  },
  {
    id: 2,
    titulo: 'Cori Cristal',
    descripcion: 'aroma suave',
    imagen: './assets/c1.jpg',
    price: 'S/.70.00'
  },
  {
    id: 3,
    titulo: 'Ccori',
    descripcion: 'aroma fuerte',
    imagen: './assets/c1.jpg',
    price: 'S/.80.00'
  },

]



function mostrarProductos() {
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
mostrarProductos()


