export default function animationScroll() {

    function animationCss() {
        const imageIntro = document.querySelector('[data-anime="image-intro"]');
        const rect = imageIntro.getBoundingClientRect();
        const imageTop = rect.top;
        const header = document.querySelector('[data-responsive="header"]');

        if (imageTop < 0) {
            // adiciona propriedade no elemento para aplicar a animação
            header.dataset.anime = 'show-down-menu';
            header.classList.add('active');
            header.style.position = 'fixed';

        } else {
            header.style.position = 'static';
            header.classList.remove('active');
        }
    }

    document.addEventListener("scroll", animationCss);

    function sectionTransition() {
        const sections = [...document.querySelectorAll('main section')];
        sections[0].classList.add('active');
        
        sections.forEach((section) => {
            const height = section.getBoundingClientRect().top;
            const halfscreen = window.innerHeight * 0.5;
            
            if(height < halfscreen) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }

            console.log(height)


        })

    }

    document.addEventListener("scroll", sectionTransition);


}