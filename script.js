window.onload = function(){
    // For header hamburger menu; source: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
    
    //Selects the relevant elements
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const cakeIcon = document.querySelector(".cake-figure")
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {
    if (menu.classList.contains("showMenu")) { // If the menu is showing...
        menu.classList.remove("showMenu"); // ... hide the menu,
        closeIcon.style.display = "none"; // ... hide the x,
        menuIcon.style.display = "block"; // ... show the hamburger icon.
    } else { // Otherwise, if the menu is hidden...
        menu.classList.add("showMenu");  // ... show the menu,
        closeIcon.style.display = "block"; // ... show the x icon,
        menuIcon.style.display = "none"; // ... hide the hamburger icon.
    }
    }
    hamburger.addEventListener("click", toggleMenu); // Links the toggleMenu function to the click event.

    // Executes the toggleMenu function when any menu link is clicked.
    menuItems.forEach( 
        function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
        }
    )
}