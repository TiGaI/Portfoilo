$("#seemore").click(function() {
  event.preventDefault();
  $('#videoText').fadeOut("slow", function() {
    var div = $("<div id='videoDiv' class='embed-responsive'><video id='videoVideo' onClick='playPause();' autoplay='' loop='loop'><source src='/assets/video/nextProject.mp4' type='video/mp4'>There was a problem loading video on your browser.</video></div>").hide();
    $('#videoText').replaceWith(div);
    $('#videoDiv').fadeIn("slow");
  });

})

function playPause() {
  var myVideo = document.getElementById("videoVideo");
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}