document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total-pagar');

  let totalPagar = 0;

  // productos id nombre precio 
  const productos = [
    { id: "Discurso del metodo-Descartes", nombre: "Discurso del método", precio: 400 },
    { id: "Notecreas", nombre: "No te creas todo lo que piensas", precio: 100 },
    { id: "El mito de Sisifo-Camus", nombre: "El mito de Sísifo", precio: 250 },
    { id: "1984-Orwell", nombre: "1984", precio: 300 },
    { id: "El gato que venia el cielo", nombre: "El gato que venía del cielo", precio: 200 },
    { id: "Rebelion en la granja-Orwell", nombre: "Rebelión en la granja", precio: 150 },
    { id: "Metamorfosis-Kafka", nombre: "Metamorfosis", precio: 250 },
    { id: "La teoria del todo", nombre: "La teoría del todo", precio: 300 },
    { id: "El arte de pensar", nombre: "El arte de pensar", precio: 230 },
    { id: "El hombre en busqueda de sentido", nombre: "El hombre en búsqueda de sentido", precio: 200 },
    { id: "La naranja mecanica", nombre: "La naranja mecánica", precio: 250 },
    { id: "Fundacion-Asimov", nombre: "Fundación (Trilogía de la fundación 1)", precio: 500 },
    { id: "Los cuatro acuerdos", nombre: "Los cuatro acuerdos", precio: 300 },
    { id: "Las Mujeres que aman demasiado", nombre: "Las mujeres que aman demasiado", precio: 200 },
    { id: "el nombre del viento", nombre: "El nombre del viento", precio: 1000 }
  ];

  // Renderizar carrito
  carrito.forEach(id => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${producto.nombre}</span><span>$${producto.precio.toFixed(2)}</span>`;
      lista.appendChild(li);
      totalPagar += producto.precio;
    }
  });

  total.textContent = `$${totalPagar.toFixed(2)}`;

  // Validación del formulario al hacer submit
  const form = document.getElementById('form-compra');
  form.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.removeItem('carrito');
    window.location.href = "Gracias.html"; // Redirigir a la página principal
  });
});