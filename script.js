// VARIABLES GLOBALES
let currentIndex = 0;
const slides = document.querySelectorAll('.slide'); // Selecciona todas las diapositivas
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');
const buttons = document.querySelectorAll('.producto button');
const carrito = [];
const carritoItems = document.getElementById("carrito-items");
const total = document.getElementById("total");
const botonVaciar = document.getElementById("vaciar-carrito");
const botonesAgregar = document.querySelectorAll(".añadir-carrito");
const contadorCarrito = document.getElementById("contador-carrito"); // Contador en el ícono del carrito
 const audio = document.getElementById("preview");
 let timeoutId = null;
let slideInterval; // ID del intervalo del slider

// FUNCIONES DEL SLIDER
function updateSliderWidth() {
    const slideWidth = slides[0]?.offsetWidth || 0;
    sliderContainer.style.width = `${totalSlides * slideWidth}px`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function stopSlider() {
    clearInterval(slideInterval);
}

function startSlider() {
    slideInterval = setInterval(showNextSlide, 3000);
}

// Pausa el slider al pasar el ratón
sliderContainer?.addEventListener("mouseenter", stopSlider);
sliderContainer?.addEventListener("mouseleave", startSlider);

// ALERTA DINÁMICA EN LA INTERFAZ
function mostrarMensaje(mensaje) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.className = "alerta-carrito";
    document.body.appendChild(alerta);

    setTimeout(() => {
        document.body.removeChild(alerta);
    }, 3000);
}

// ACTUALIZAR CONTADOR DEL CARRITO
function actualizarContadorCarrito() {
    contadorCarrito.textContent = carrito.length; // Número de productos en el carrito
}

// AÑADIR AL CARRITO
botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);

        // Verifica si el producto ya está en el carrito
        const productoExistente = carrito.find(producto => producto.nombre === nombre);
        if (productoExistente) {
            mostrarMensaje("Este producto ya está en el carrito");
        } else {
            carrito.push({ nombre, precio });
            actualizarCarrito();
            actualizarContadorCarrito(); // Actualiza el contador
        }
    });
});

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    carritoItems.innerHTML = ""; // Limpia el contenido previo
    let totalCarrito = 0;

    carrito.forEach((producto) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio} USD`;
        carritoItems.appendChild(item);
        totalCarrito += producto.precio;
    });

    total.textContent = `Total: $${totalCarrito} USD`;

    // Muestra u oculta el carrito según su contenido
    document.getElementById("carrito").style.display = carrito.length ? "block" : "none";

    // Guarda en el Local Storage
    guardarCarrito();
}

// VACIAR CARRITO
botonVaciar.addEventListener("click", () => {
    carrito.length = 0; // Vacía el carrito
    actualizarCarrito();
    actualizarContadorCarrito(); // Actualiza el contador
});

// LOCAL STORAGE - GUARDAR Y CARGAR
function guardarCarrito() {
    try {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } catch (error) {
        console.error("No se pudo guardar el carrito", error);
    }
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
        carrito.length = 0; // Limpia el carrito actual
        carrito.push(...carritoGuardado); // Carga los productos
        actualizarCarrito();
        actualizarContadorCarrito(); // Actualiza el contador
    }
}

// Cargar carrito al iniciar la página
cargarCarrito();

// AÑADIR MENSAJE EN BOTONES DE PRODUCTOS
buttons.forEach(button => {
    button.addEventListener('click', () => {
        mostrarMensaje('Producto añadido al carrito');
    });
});

//CARRITO FLOTANTE DESPLAZO
const carritoFlotante = document.getElementById("carrito-flotante");

carritoFlotante.addEventListener("click", () => {
    const carritoSeccion = document.getElementById("carrito"); // Reemplaza con el ID de tu carrito
    if (carritoSeccion) {
        carritoSeccion.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente hacia el carrito
    }
});

  audio.addEventListener("play", () => {
    clearTimeout(timeoutId); // evita múltiples temporizadores si se reproduce más de una vez
    timeoutId = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // opcional: reinicia al principio
    }, 15000); // 15000 milisegundos = 15 segundos
  });

  audio.addEventListener("pause", () => {
    clearTimeout(timeoutId); // limpia el temporizador si el usuario pausa antes
  });

