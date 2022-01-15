const dropdownListBtns = document.querySelectorAll("header .dropdown-list .title");
const toggleMobileMenuBtns = document.querySelectorAll("nav > img");
const showMobileMenuBtn = document.querySelector("nav .toggle-menu");
const closeMobileMenuBtn = document.querySelector("nav .close");
const navMenus = document.querySelector("nav .menus");
const subMenuLinks = document.querySelectorAll("nav .sub-menu a");

// Show/hide Dropdown Lists on clicking
dropdownListBtns.forEach(btn => {
  btn.onclick = function () {
    // Remove class "active" from all siblings btns parents of the clicked btn
    dropdownListBtns.forEach(btn => {
      // Check if all siblings btn parents have class "active
      if (btn.parentElement.classList.contains("active")) {
        if (btn.parentElement.id !== this.parentElement.id) { // except the clicked btn
          btn.parentElement.classList.remove("active");
        }
      }
    });
    // Toggle class "active" to the clicked btn parent
    this.parentElement.classList.toggle("active");
  }
});

// Toggle Mobile Menu Nav on Click
toggleMobileMenuBtns.forEach(btn => {
  btn.onclick = function () {
    if (this.classList.contains("toggle-menu")) {
      toggleMobileMenu(this, closeMobileMenuBtn);
    } else {
      toggleMobileMenu(this, showMobileMenuBtn);
    }
  }
});

// When you click on one link, close the opened menus
subMenuLinks.forEach(link => {
  link.onclick = function () {
    // Remove "active" from its dropdown list 
    this.parentElement.parentElement.parentElement.classList.remove("active");
    // Remove class "show" from mobile nav menu
    navMenus.classList.remove("show");
    // Remove class "active" from close button
    closeMobileMenuBtn.classList.remove("active");
    // Add class "active" to toggleMenu button
    showMobileMenuBtn.classList.add("active");
  }
})


/** Helper Functions */
function toggleMobileMenu(clickedBtn, otherBtn) {
  clickedBtn.classList.remove("active");
  otherBtn.classList.add("active");
  navMenus.classList.toggle("show");
}