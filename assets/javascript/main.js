
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
$("#contact").click(function() {
        console.log('clickedddddd');
        $('html, body').animate({
        scrollTop: $("#row3").offset().top
      }, 1500);
        });
$("#laptop1").click(function() {
         $(".navbar").fadeOut();
         $("#row1").fadeOut();
         $("#row2").fadeOut();
         $("#row3").fadeOut();
         $("#row4-laptop1").removeClass("hidden").fadeIn(2000);
  });
$("#laptop2").click(function() {
           $(".navbar").fadeOut();
           $("#row1").fadeOut();
           $("#row2").fadeOut();
           $("#row3").fadeOut();
           $("#row4-laptop2").removeClass("hidden").fadeIn(2000);
    });
$("#laptop3").click(function() {
             $(".navbar").fadeOut();
             $("#row1").fadeOut();
             $("#row2").fadeOut();
             $("#row3").fadeOut();
             $("#row4-laptop3").removeClass("hidden").fadeIn(2000);
      });
$("#laptop1-exit").click(function() {
           $(".navbar").fadeIn();
           $("#row1").fadeIn();
           $("#row2").fadeIn();
           $("#row3").fadeIn();
           $("#row4-laptop1").addClass("hidden").fadeOut(2000);
    });
$("#laptop2-exit").click(function() {
               $(".navbar").fadeIn();
               $("#row1").fadeIn();
               $("#row2").fadeIn();
               $("#row3").fadeIn();
               $("#row4-laptop2").addClass("hidden").fadeOut(2000);
        });
$("#laptop3-exit").click(function() {
                   $(".navbar").fadeIn();
                   $("#row1").fadeIn();
                   $("#row2").fadeIn();
                   $("#row3").fadeIn();
                   $("#row4-laptop3").addClass("hidden").fadeOut(2000);
});
$("#mobile1").click(function() {
         $(".navbar").fadeOut();
         $("#row1").fadeOut();
         $("#row2").fadeOut();
         $("#row3").fadeOut();
         $("#row2-mobile1").removeClass("hidden").fadeIn(2000);
  });
  $("#mobile1-exit").click(function() {
                     $(".navbar").fadeIn();
                     $("#row1").fadeIn();
                     $("#row2").fadeIn();
                     $("#row3").fadeIn();
                     $("#row2-mobile1").addClass("hidden").fadeOut(2000);
  });
  $("#mobile2").click(function() {
           $(".navbar").fadeOut();
           $("#row1").fadeOut();
           $("#row2").fadeOut();
           $("#row3").fadeOut();
           $("#row2-mobile2").removeClass("hidden").fadeIn(2000);
    });
    $("#mobile2-exit").click(function() {
                       $(".navbar").fadeIn();
                       $("#row1").fadeIn();
                       $("#row2").fadeIn();
                       $("#row3").fadeIn();
                       $("#row2-mobile2").addClass("hidden").fadeOut(2000);
    });
    $("#mobile3").click(function() {
             $(".navbar").fadeOut();
             $("#row1").fadeOut();
             $("#row2").fadeOut();
             $("#row3").fadeOut();
             $("#row2-mobile3").removeClass("hidden").fadeIn(2000);
      });
      $("#mobile3-exit").click(function() {
                         $(".navbar").fadeIn();
                         $("#row1").fadeIn();
                         $("#row2").fadeIn();
                         $("#row3").fadeIn();
                         $("#row2-mobile3").addClass("hidden").fadeOut(2000);
      });
