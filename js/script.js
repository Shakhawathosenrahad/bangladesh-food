const menu = document.querySelector("nav ul > li"),
    mobilenav = document.querySelector("ul > .mobile-nav")



menu.addEventListener("click", () => {
    mobilenav.style.right = mobilenav.style.right == `-60px` ? `-320px` : `-60px`;
})