$(function () {
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top,
      });
    }
  });
  $('[data-toggle="popover"]').popover();
});
