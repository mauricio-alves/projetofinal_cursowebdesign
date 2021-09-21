(function() {
  var $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  //  habilitando o botão menu hamburguer
  var menu = new Menu({
    container: ".header__nav",
    toggleBtn: ".header__btnMenu",
    widthEnabled: 1024
  });

  // habilitando o carrossel de imagens do laptop
  var carouselImgs = new Carousel({
    container: ".slideshow",
    items: "figure",
    btnPrev: '.prev',
    btnNext: ".next",
  });

  // habilitando o carrossel de comentários 
  var carouselQuotes = new Carousel({
    container: ".quote-slideshow",
    items: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });
})();