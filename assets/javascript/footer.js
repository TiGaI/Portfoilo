$("#nextProject").on('mouseover', function() {
  $('#videoText').css("display", "none");
  $("#videoDiv").css("display", "block"); //
// $('#videoDiv').children("video")[0].play();
})

$("#nextProject").on('mouseout', function() {

  // var el = $('#videoDiv').children("video")[0].play();
  // el.pause();
  // el.currentTime = 0;
  $('#videoText').css("display", "block");
  $("#videoDiv").css("display", "none");

})