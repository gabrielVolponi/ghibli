const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

// Abrir o menu
menuButton.addEventListener('click', () => {
    sideMenu.classList.remove('-translate-x-full');
    menuOverlay.classList.remove('hidden');
});

// Fechar o menu ao clicar no overlay
menuOverlay.addEventListener('click', () => {
    sideMenu.classList.add('-translate-x-full');
    menuOverlay.classList.add('hidden');
});