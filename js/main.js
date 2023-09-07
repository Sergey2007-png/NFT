

    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header-menu');
    const creators_main_inner = document.querySelectorAll('.creators_main-inner');
    const creative = document.querySelectorAll('.creative');


    burger.addEventListener('click', function() {
        headerMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
   

    for (let i = 0; i < creative.length; i++) {
        creators_main_inner[i].addEventListener('click', function() {
            creative[i].classList.toggle('shows');
        });
    }
   

  

AOS.init();
