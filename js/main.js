document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });
// document.addEventListener("DOMContentLoaded", function () {
//     const prevButton = document.querySelector('.pre');
//     const nextButton = document.querySelector('.next');
//     const items = document.querySelectorAll('.trending-card');
//     let index = 0;
//     function updateItems() {
//         items.forEach(item => item.style.display = 'none');
//         items[index].style.display = 'block';
//     }
//     nextButton.addEventListener('click', () => {
//         index = (index + 1) % items.length;
//         updateItems();
//     });
//     prevButton.addEventListener('click', () => {
//         index = (currentIndex - 1 + items.length) % items.length;
//         updateItems();
//     });
//     updateItems();
// });