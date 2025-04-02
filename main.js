document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const sideMenu = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  if (menuButton && sideMenu) {
    menuButton.addEventListener('click', () => {
      sideMenu.classList.toggle('-translate-x-full');
      menuOverlay.classList.toggle('hidden');
    });
  } else {
    console.error('Menu button or side menu not found in the DOM.');
  }

  // Fechar o menu ao clicar no overlay
  menuOverlay.addEventListener('click', () => {
    sideMenu.classList.add('-translate-x-full');
    menuOverlay.classList.add('hidden');
  });
});