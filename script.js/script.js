// Initialisation du carrousel SwiperJS
// Ce code s'exécute uniquement si un élément avec la classe .swiper est trouvé sur la page.
const swiper = new Swiper('.swiper', {
  // Option pour que le carrousel tourne en boucle
  loop: true,

  // Ajout des points de pagination en bas
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Ajout des flèches de navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
