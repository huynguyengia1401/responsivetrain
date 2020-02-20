function showMenu() {
    var idmenu = document.getElementById("myTopnav");

    if (idmenu.className === "topnav") {
        idmenu.className += " responsive";
    } else {
        idmenu.className = "topnav";
    }
}