 // Obtén referencias a los elementos del DOM
 const toggleButton = document.getElementById('toggle-menu');
 const mainMenu = document.getElementById('main-menu');
 
 // Agrega un evento clic al botón de menú
 toggleButton.addEventListener('click', () => {
     mainMenu.classList.toggle('mostrar'); // Agrega o quita la clase "mostrar"
 });