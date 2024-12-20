document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });

const header = document.getElementById("header");

window.addEventListener("scroll", () =>{
  if (window.scrollY > 590) {
    header.classList.add('scrolled'); 
  } else {
    header.classList.remove('scrolled');
  }
})


function setProgress(circle, percentage) {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference - (percentage / 100) * circumference}`;
}


setProgress(document.querySelector('.stat-1 .progress'), 39);