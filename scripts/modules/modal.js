export default function initModal() {
    const btnOpenModal = document.querySelector('[data-modal="open"]');
    const btnCloseModal = document.querySelector('[data-modal="close"]');
    const containerModal = document.querySelector('[data-mddal="container"]');


    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle("active");
    }

    function externalClickModal(event) {
        (event.target === this) && containerModal.classList.remove("active");
    }

    btnOpenModal.addEventListener('click', toggleModal);
    btnCloseModal.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', externalClickModal);
}

