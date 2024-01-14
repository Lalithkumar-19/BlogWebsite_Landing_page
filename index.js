const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const Arrow1 = document.getElementById("arrow1");
const Arrow2 = document.getElementById("arrow2");
const Arrow3 = document.getElementById("arrow3");

const dropdown = document.querySelectorAll("#dropdown");
let List_status = {
    "list1": false,
    "list2": false,
    "list3": false,
};
let clicked_list = 2;

function update_styles() {
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
    else if (clicked_list = 3) {

        list1.style.display = "none";
        list2.style.display = "none"
        list3.style.display = List_status.list3 ? "flex" : "none";
        Arrow1.style.transform = "rotate(0deg)";
        Arrow2.style.transform = "rotate(0deg)";
        Arrow3.style.transform = List_status.list3 ? "rotate(180deg)" : "rotate(0deg)";
    }
    else {
        list1.style.display = "none";
        list2.style.display = "none"
        list3.style.display = "none";
        Arrow1.style.transform = "rotate(0deg)";
        Arrow2.style.transform = "rotate(0deg)";
        Arrow3.style.transform = "rotate(0deg)";
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
    update_styles();

}
