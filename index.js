const list1 = document.getElementById("list1")
const list2 = document.getElementById("list2")
const list3 = document.getElementById("list3")
const dropdown = document.querySelectorAll("#dropdown");
function showlist() {
    dropdown.forEach((item, index) => {
        item.addEventListener('mouseover', (e) => {
            if (index === 0) {
                list1.style.display = "flex";
                list2.style.display = "none"
                list3.style.display = "none";
            }
            else if (index === 1) {
                list1.style.display = "none";
                list2.style.display = "flex"
                list3.style.display = "none";

            }
            else if (index = 2) {
                list1.style.display = "none";
                list2.style.display = "none"
                list3.style.display = "flex";
            }
            else {
                list1.style.display = "none";
                list2.style.display = "none"
                list3.style.display = "none";

            }
        })
    })
}

function hideAll() {
    list1.style.display = "none";
    list2.style.display = "none"
    list3.style.display = "none";

}
