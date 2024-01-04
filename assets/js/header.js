(() => {

    /* HEADER COLOR */
    document.addEventListener('scroll', function () {
        const scrollPos = window.pageYOffset;
        const header = document.getElementById('header-scroll');

        // Posición del Scroll
        if (scrollPos === 0) {
            header.style.backgroundColor = "transparent";
        } else {
            header.style.backgroundColor = "#20242d";
        }
    });

    function resetHeaderColor() {
        const scrollPos = window.pageYOffset;
        const header = document.getElementById('header-scroll');
        if (scrollPos === 0) {
            header.style.backgroundColor = "transparent";
        } else {
            header.style.backgroundColor = "#20242d";
        }

    } resetHeaderColor();

    /* ICON SCROLLUP */
    window.addEventListener('scroll', function (e) {

        scrollValue = window.pageYOffset;
        const mainBox = document.querySelector('.ml-icon-scrollUp');

        if (scrollValue <= 100) {
            mainBox.style.classList = "slideInUp";
            mainBox.style.display = "none";
        } else {
            mainBox.style.display = "block";
        }

    });

    /* MENU ACTIVE SCROLL */
    let section_ = document.querySelectorAll("section");
    let menu_ = document.querySelectorAll(".menu__list__item a");

    window.onscroll = () => {
        section_.forEach((item, i) => {

            let top = window.scrollY;
            let offset = item.offsetTop - 150;
            let height = item.offsetHeight;
            let id = item.getAttribute("id");

            if (top >= offset && top < offset + height) {
                menu_.forEach((link) => {
                    const item__ = document.querySelector(".menu__list__item a[href*=" + id + "]"); 
                    link.setAttribute('class', '');
                    link.addEventListener('click', function (a) { 
                        responsiveMenu(x);
                    });
                    if (item__ != null) {
                        item__.classList.add('selected-' + i); 
                    }
                });

            }
        });
    };

    /* BUTTON | MENU-MOVIL  */
    const btnMenuMovil = document.querySelector('.header__icon a');
    const contentMenu = document.querySelector('.header__menu');

    btnMenuMovil.addEventListener('click', function () {
        if (contentMenu.style.display == 'block') {
            contentMenu.style.display = "none";
        } else {
            contentMenu.style.display = "block";
            contentMenu.classList.add('fadeInDown');
        }
    });
    
    /* RESPONSIVE | HIDE MENU CONTENT */
    const x = window.matchMedia("(max-width: 768px)");
    function responsiveMenu(x) {
        if (x.matches) {
            contentMenu.style.display = "none";
        }
    }

})();