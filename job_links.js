const profileMenu = document.querySelector(".wrapper");
const profileImg = document.querySelector(".profile-pic");


function toggleMenu() {
    profileMenu.classList.toggle("open");
}

profileImg.addEventListener("click", toggleMenu);