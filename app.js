document.addEventListener('DOMContentLoaded', () => {
  // 1) Carga del carrito
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // 2) Función para actualizar el contador
  function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    contador.textContent = carrito.length;
  }

  // 3) Función para restaurar el estado de cada botón
  function restaurarEstadoBotones() {
    document.querySelectorAll(".bagf").forEach(boton => {
      const id = boton.getAttribute("data-id");
      const icon = boton.querySelector("i");

      if (carrito.includes(id)) {
        boton.classList.add("added");
        icon.classList.remove("bi-bag-plus");
        icon.classList.add("bi-bag-check");
      } else {
        boton.classList.remove("added");
        icon.classList.add("bi-bag-plus");
        icon.classList.remove("bi-bag-check");
      }
    });
  }

  // 4) Event listeners para clic en cada bolsa
  document.querySelectorAll(".bagf").forEach(boton => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-id");
      const icon = boton.querySelector("i");

      boton.classList.toggle("added");
      icon.classList.toggle("bi-bag-plus");
      icon.classList.toggle("bi-bag-check");

      if (boton.classList.contains("added")) {
        if (!carrito.includes(id)) carrito.push(id);
      } else {
        carrito = carrito.filter(item => item !== id);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarContador();
    });
  });

  // 5) Al final, restaura estados y contador
  actualizarContador();
  restaurarEstadoBotones();
}); // <-- Aquí cierra DOMContentLoaded
