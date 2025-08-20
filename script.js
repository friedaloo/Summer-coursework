const sidePanelMenu = document.querySelector('.side-menu');
const menu = document.querySelector('.menu');
const sidePanel = document.querySelector('.side-panel');

menu.addEventListener('click', openNav);
sidePanelMenu.addEventListener('click', closeNav);


function openNav() {
    sidePanel.style.width = '250px';
    sidePanel.style.padding = '0 15px';
    console.log('Side panel opened');
}

function closeNav() {
    sidePanel.style.width = '0';
    sidePanel.style.padding = '0';
}