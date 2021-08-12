export default function animationScroll() {

    function animationCss() {
        const imageIntro = document.querySelector('[data-anime="image-intro"]');
        const imageTop = imageIntro.getBoundingClientRect().top;
        const header = document.querySelector('[data-responsive="header"]');

        if (imageTop < 0) {
            // adiciona propriedade no elemento para aplicar a animação
            header.dataset.anime = 'show-down-menu';

            header.classList.add('active');
            // estilo menu
            header.style.position = 'fixed';
            header.style.right = '0';
            header.style.left = '0';
            header.style.zIndex = '99999';

        } else {
            header.style.position = 'static';
            header.classList.remove('active');
        }
    }

    document.addEventListener("scroll", animationCss);

    const sections = [...document.querySelectorAll('[data-scroll="scroll"]')];

    // ativa animações na primiera section
    sections[0].dataset.anime = sections[0].parentNode.dataset.anime;
    sections[0].classList.add('active');

    function sectionTransition() {

        sections.forEach((section) => {
            const height = section.getBoundingClientRect().top;
            const halfscreen = window.innerHeight * 0.5;

            if (height < halfscreen) {
                section.dataset.anime = section.parentNode.dataset.anime;
                section.classList.add('active');
            }
        })
    }

    document.addEventListener("scroll", sectionTransition);
}