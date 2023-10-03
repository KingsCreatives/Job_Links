const profileMenu = document.querySelector(".wrapper");
const profileImg = document.querySelector(".profile-pic");


function toggleMenu() {
    profileMenu.classList.toggle("open");
}

profileImg.addEventListener("click", toggleMenu);

const sidebar = document.querySelector(".user-activities");
const showMoreBtn = document.querySelector(".show-more-text");
console.log(showMoreBtn);

function showSideBar() {
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        showMoreBtn.textContent = "Show less - ";
    } else {
        showMoreBtn.textContent = "Show more + ";
    }
}

showMoreBtn.addEventListener("click", showSideBar);