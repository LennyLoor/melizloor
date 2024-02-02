(() => {

    const elements = [{
        logo: document.querySelector('[data-logo]'),
        header: document.getElementById('header-scroll'),
        mainBox: document.querySelector('.ml-icon-scrollUp'),
        section: document.querySelectorAll("section"),
        menu: document.querySelectorAll(".menu__list > li > a"),
        btn_menu_movil: document.querySelector('.menu__btn a'),
        content_menu: document.querySelector('.header__menu > nav'),
        btn_about_me: document.querySelector('.btn-about-me > a'),
    }];

    elements.forEach((element) => {

        /* HEADER COLOR */
        document.addEventListener('scroll', () => {
            const scrollPos = window.pageYOffset;
            // Posición del Scroll
            if (scrollPos === 0) {
                element.header.style.backgroundColor = "transparent";
            } else {
                element.header.style.backgroundColor = "#20242d";
            }
        });

        function resetHeaderColor() {
            const scrollPos = window.pageYOffset;
            if (scrollPos === 0) {
                element.header.style.backgroundColor = "transparent";
            } else {
                element.header.style.backgroundColor = "#20242d";
            }

        } resetHeaderColor();

        /* ICON SCROLLUP */
        window.addEventListener('scroll', (e) => {
            scrollValue = window.pageYOffset;
            if (scrollValue <= 100) {
                element.mainBox.style.classList = "slideInUp";
                element.mainBox.style.display = "none";
            } else {
                element.mainBox.style.display = "block";
            }
        });

        /* SCROLL TOP */
        element.mainBox.addEventListener('click', () => {
            $('html, body').animate({
                scrollTop: 0,
            }, 500);
        });
        element.logo.addEventListener('click', (e) => {
            $('html, body').animate({
                scrollTop: 0,
            }, 500);
        })

        /* MENU ACTIVE SCROLL*/
        element.menu.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                element.menu.forEach((navLink) => {
                    navLink.setAttribute('class', '');
                }); 
                const targetId = link.getAttribute('href').substring(1); 
                const targetSection = document.getElementById(targetId);
                link.setAttribute('class', 'selected-' + (i + 1)); 
                
                $('html, body').animate({
                    scrollTop: targetSection.offsetTop + (-51),
                }, 500);

                const x = window.matchMedia("(max-width: 768px)");
                if (x.matches) {
                    element.content_menu.style.display = "none";
                    $('html, body').animate({
                        scrollTop: targetSection.offsetTop + (-52),
                    }, 500);
                } 
            });
        });

        /* MENU ACTIVE SCROLL */
        window.onscroll = () => {
            element.section.forEach((item, i) => {
    
                let top = window.scrollY;
                let offset = item.offsetTop - 150;
                let height = item.offsetHeight;
                let id = item.getAttribute("id");
    
                if (top >= offset && top < offset + height) {
                    element.menu.forEach((link) => {
                        const item = document.querySelector(".menu__list__item a[href*=" + id + "]"); 
                        link.setAttribute('class', ''); 
                        if (item != null) {
                            item.classList.add('selected-' + i); 
                        }
                    });
    
                }
            });
        };
    
        /* BUTTON | ABOUT-ME  */
        element.btn_about_me.addEventListener('click', (e) => {
            const targetSection = document.getElementById('sobre-mi');
            $('html, body').animate({
                scrollTop: targetSection.offsetTop + (-51),
            }, 500);
        })

        /* BUTTON | MENU-MOVIL  */
        element.btn_menu_movil.addEventListener('click', () => {
            if (element.content_menu.style.display == 'block') {
                element.content_menu.style.display = "none";
            } else {
                element.content_menu.style.display = "block";
                element.content_menu.classList.add('fadeInDown');
            }
        });

    })

})();