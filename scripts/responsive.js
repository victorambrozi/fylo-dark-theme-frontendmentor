const hamburguer = document.querySelector('[data-responsive="hamburguer"]');

const showMenu = () => {
    const menu = document.querySelector(".menu");

    console.log('clicou')
    menu.classList.toggle("active");
}

hamburguer.addEventListener("click", showMenu);