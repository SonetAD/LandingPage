$(function () {
  const $gallery = $('.gallery a').simpleLightbox();
});

$('a').click(function (e) {
  e.preventDefault();
  $('body,html').animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    2000
  );
});
