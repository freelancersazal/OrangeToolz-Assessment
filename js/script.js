// for menu fix 
window.addEventListener("scroll", function () {
    const main_menu = document.querySelector(".dashboard_menu");
    main_menu.classList.toggle("menu_fix", this.window.scrollY > 0);
});


// for main menu
const main_menu = document.querySelector(".dashboard_menu_right");

main_menu.onclick = function () {
    main_menu.classList.toggle(".active");
};


// for sidebar menu
const sidebar_menu = document.querySelector(".droapdown");

sidebar_menu.onclick = function () {
    sidebar_menu.classList.toggle(".active");
};


// for tabs 
const tabs = document.querySelector(".dashboard_tab_area");
const tabButton = document.querySelectorAll(".tab_button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}


// for mobile menu
const sidebar = document.querySelector(".dashboard_sidebar");
const mobile_menu = document.querySelector(".mobile_menu_btn")

mobile_menu.onclick = function () {
    sidebar.classList.toggle(".show");
};






