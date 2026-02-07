function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function showAll() {
    document.querySelectorAll(".item").forEach(i => i.style.display = "block");
}

function showKuruthi() {
    showAll();
    document.querySelectorAll(".item:not(.kuruthi)").forEach(i => i.style.display = "none");
}

function showSkirt() {
    showAll();
    document.querySelectorAll(".item:not(.skirt)").forEach(i => i.style.display = "none");
}

function showJeans() {
    showAll();
    document.querySelectorAll(".item:not(.jeans)").forEach(i => i.style.display = "none");
}
