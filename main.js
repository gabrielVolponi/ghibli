const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');

// Abrir o menu ao clicar no botão
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('-translate-x-full');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        sideMenu.classList.add('-translate-x-full');
    }
});
