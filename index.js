const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");

const Arrow1 = document.getElementById("arrow1");
const Arrow2 = document.getElementById("arrow2");
const Arrow3 = document.getElementById("arrow3");

//mobile options
const list1_mob = document.getElementById("list1_mob");
const list2_mob = document.getElementById("list2_mob");
const list3_mob = document.getElementById("list3_mob");
const dropdown = document.querySelectorAll("#dropdown");

console.log(dropdown);
const Arrow1_mob = document.getElementById("arrow1_mob");
const Arrow2_mob = document.getElementById("arrow2_mob");
const Arrow3_mob = document.getElementById("arrow3_mob");
let List_status = {
    "list1": false,
    "list2": false,
    "list3": false,
    "list1_mob": false,
    "list2_mob": false,
    "list3_mob": false,
};
let clicked_list = 0;

//accesing hamburger and close icons
const mobile_menu = document.getElementById("mob_menu");
const hamburger = document.getElementById("hamburger");
const close_icon = document.getElementById("close_icon");


function update_styles() {
    console.log(clicked_list);

    if (clicked_list === 1) {

        list1.style.display = List_status.list1 ? "flex" : "none";
        list2.style.display = "none"
        list3.style.display = "none";
        Arrow1.style.transform = List_status.list1 ? "rotate(180deg)" : "rotate(0deg)";
        Arrow2.style.transform = "rotate(0deg)";
        Arrow3.style.transform = "rotate(0deg)";

    }
    else if (clicked_list === 2) {
        list1.style.display = "none";
        list2.style.display = List_status.list2 ? "flex" : "none";
        list3.style.display = "none";
        Arrow1.style.transform = "rotate(0deg)";
        Arrow2.style.transform = List_status.list2 ? "rotate(180deg)" : "rotate(0deg)";
        Arrow3.style.transform = "rotate(0deg)";
    }
    else if (clicked_list === 3) {

        list1.style.display = "none";
        list2.style.display = "none"
        list3.style.display = List_status.list3 ? "flex" : "none";
        Arrow1.style.transform = "rotate(0deg)";
        Arrow2.style.transform = "rotate(0deg)";
        Arrow3.style.transform = List_status.list3 ? "rotate(180deg)" : "rotate(0deg)";
    }
    //mobile menu
    else if (clicked_list === 4) {
        list1_mob.style.display = List_status.list1_mob ? "flex" : "none";
        list2_mob.style.display = "none";
        list3_mob.style.display = "none";
        Arrow1_mob.style.transform = List_status.list1_mob ? "rotate(180deg)" : "rotate(0deg)";
        Arrow2_mob.style.transform = "rotate(0deg)";
        Arrow3_mob.style.transform = "rotate(0deg)";

    } else if (clicked_list === 5) {

        list2_mob.style.display = List_status.list2_mob ? "flex" : "none";
        list1_mob.style.display = "none";
        list3_mob.style.display = "none";

        Arrow1_mob.style.transform = "rotate(0deg)";
        Arrow2_mob.style.transform = List_status.list2_mob ? "rotate(180deg)" : "rotate(0deg)";
        Arrow3_mob.style.transform = "rotate(0deg)";
    } else if (clicked_list === 6) {

        list3_mob.style.display = List_status.list3_mob ? "flex" : "none";
        list2_mob.style.display = "none";
        list1_mob.style.display = "none";

        Arrow1_mob.style.transform = "rotate(0deg)";
        Arrow2_mob.style.transform = "rotate(0deg)";
        Arrow3_mob.style.transform = List_status.list3_mob ? "rotate(180deg)" : "rotate(0deg)";
    }
    else {
        list1.style.display = "none";
        list2.style.display = "none"
        list3.style.display = "none";
        list1_mob.style.display = "none";
        list2_mob.style.display = "none"
        list3_mob.style.display = "none";

        Arrow1.style.transform = "rotate(0deg)";
        Arrow2.style.transform = "rotate(0deg)";
        Arrow3.style.transform = "rotate(0deg)";
        Arrow1_mob.style.transform = "rotate(0deg)";
        Arrow2_mob.style.transform = "rotate(0deg)";
        Arrow3_mob.style.transform = "rotate(0deg)";
    }

}


function show_list(param) {
    if (param === 1) {
        List_status.list1 = (!List_status.list1);
        clicked_list = 1;
    }
    else if (param === 2) {
        List_status.list2 = !List_status.list2;
        clicked_list = 2;
    } else if (param === 3) {
        List_status.list3 = !List_status.list3;
        clicked_list = 3;
    }
    else if (param === 4) {
        List_status.list1_mob = (!List_status.list1_mob);
        clicked_list = 4;
        console.log(List_status)

    }
    else if (param === 5) {
        List_status.list2_mob = (!List_status.list2_mob);
        clicked_list = 5;
    }
    else if (param === 6) {
        List_status.list3_mob = (!List_status.list3_mob);
        clicked_list = 6;
    }
    else {
        clicked_list = 0;
    }
    update_styles();

}



function handle_openMenu() {
    hamburger.style.display = "none";
    close_icon.style.display = "block";
    mobile_menu.style.display = "flex";
}
function handle_closeMenu(){
    hamburger.style.display = "block";
    close_icon.style.display = "none";
    mobile_menu.style.display = "none";
}
