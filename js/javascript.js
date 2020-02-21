function showMenu() {
    var idmenu = document.getElementById("myTopnav");

    if (idmenu.className === "") {
        idmenu.className += " responsive";
    } else {
        idmenu.className = "";
    }
}