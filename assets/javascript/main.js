
$("#about").click(function() {
  console.log('clickedddddd');
  $('html, body').animate({
    scrollTop: $("#row2").offset().top
  }, 1500);
});
$("#projects").click(function() {
  console.log('clickedddddd');
  $('html, body').animate({
    scrollTop: $("#row3").offset().top
  }, 1500);
});
$("#review").click(function() {
  console.log('clickedddddd');
  $('html, body').animate({
    scrollTop: $("#testimonialNew").offset().top
  }, 1500);
});
$("#contact").click(function() {
  console.log('clickedddddd');
  $('html, body').animate({
    scrollTop: $("#shareicon").offset().top
  }, 1500);
});