export default function showMenu() {
    const hamburguer = document.querySelector('[data-responsive="hamburguer"]');

    const handleClick = () => {
        const menu = document.querySelector('[data-anime="menu"]');
        menu.classList.toggle("active");
    }
    hamburguer.addEventListener("click", handleClick);
}
