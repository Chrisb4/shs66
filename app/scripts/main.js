$( document ).ready(function() {

  // When any of the thumbnail pics are clicked, pass it into the function to get the id
  $('.pic-thumbnail').click(function(e){
    // get the id of the thumbnail that was clicked
    var img = document.getElementById(e.target.id);
    //target the img element in the modal div so it can be set when it is launched
    var modalImg = document.getElementById("modalImage");
    // Function to launch the modal.  It changes the display from none to block and inherits the image
    //source to the image id that was clicked on
    var modalLauncher = function() {
      var modal = document.getElementById('myModal');
      var download = document.getElementById('downloadButton');
      modal.style.display = "block";
      modalImg.src = img.src;
      download.href = img.src;
    }
    modalLauncher();
  });
  // Closes the modal when the X is clicked
  $('#closeSpan').click(function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  });

var what = "the fuck";
});
