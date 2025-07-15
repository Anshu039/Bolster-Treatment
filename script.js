// footer-start


    document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentItem = btn.parentElement;

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== currentItem) item.classList.remove('active');
    });

    currentItem.classList.toggle('active');
  });
});




// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar-2").classList.toggle("show");
});





  function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('show');
  }




