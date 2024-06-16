// this code is writen by sammy nisammy40@gmail.com

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById('scrollMenu');
    let isAtTop = true;
    let scrollBUt = document.getElementById('scrollUpBut');

    window.addEventListener('scroll', function () {
        if (window.scrollY === 0) {
            if (!isAtTop) {
                menu.classList.remove('fixed', 'top-0', 'shadow-md', 'bg-primaryColor-950', 'animate-menu-slide-in');
                menu.classList.add('absolute');
                scrollBUt.classList.add('hidden');
                scrollBUt.classList.remove('grid', 'animate-Fade-on-anim');
                isAtTop = true;
            }
        } else {
            if (isAtTop) {
                menu.classList.remove('absolute');
                menu.classList.add('fixed', 'top-0', 'shadow-md', 'bg-primaryColor-950', 'animate-menu-slide-in');
                scrollBUt.classList.add('grid', 'animate-Fade-on-anim');
                scrollBUt.classList.remove('hidden');
                isAtTop = false;
            }
        }
    });
    document.getElementById("closeMenuBut").addEventListener('click', function () {
        openAndCloseMenu("insideMenu", this);
    });
    window.addEventListener("popstate", function () {
        var closebt = document.getElementById("closeMenuBut");
        openAndCloseMenu("insideMenu", closebt);
    });

});

const openAndCloseMenu = (menuId, element) => {
    const menuSelfElement = document.getElementById(menuId);
    const closeButElem = element;
    const menuNow = closeButElem.getAttribute('data-menu-now');
    if (menuNow && menuNow === "opened") {
        // closing now
        menuSelfElement.classList.remove('block', 'animate-Inside-menu-sizingIn')
        menuSelfElement.classList.add('hidden')
        closeButElem.setAttribute('data-menu-now', 'closed');
        closeButElem.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        // openning now
        menuSelfElement.classList.add('block', 'animate-Inside-menu-sizingIn');
        menuSelfElement.classList.remove('hidden');
        closeButElem.setAttribute('data-menu-now', 'opened');
        closeButElem.innerHTML = '<i class="fas fa-close"></i>';
    }

}