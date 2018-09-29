// Fill text categories when hovering
$( "#play" ).hover(
  function() {
    $( this ).css({"fill": "#f2b113", "stroke-width": "1.36px", "stroke": "black", "cursor": "pointer"});
  }, function() {
    $( this ).css({"fill": "none", "stroke-width": "2.27px", "stroke": "#f2b113"});
  }
);

$( "#practice" ).hover(
  function() {
    $( this ).css({"fill": "#2e3092", "stroke-width": "1.36px", "stroke": "black", "cursor": "pointer"});
  }, function() {
    $( this ).css({"fill": "none", "stroke-width": "2.27px", "stroke": "#2e3092"});
  }
);

$( "#prototype" ).hover(
  function() {
    $( this ).css({"fill": "#0db14b", "stroke-width": "1.36px", "stroke": "black", "cursor": "pointer"});
  }, function() {
    $( this ).css({"fill": "none", "stroke-width": "2.27px", "stroke": "#0db14b"});
  }
);

$( "#critique" ).hover(
  function() {
    $( this ).css({"fill": "#f26522", "stroke-width": "1.36px", "stroke": "black", "cursor": "pointer"});
  }, function() {
    $( this ).css({"fill": "none", "stroke-width": "2.27px", "stroke": "#f26522"});
  }
);

// Animate images from category when clicked.
$( "#play" ).click(
  function() {
    populateImages();
    dropConfetti();
  }
);

function dropConfetti() {
  $( "img" ).animate({ "top": "200vh"}, 6000, "linear");
}

function populateImages() {
  // determine which group of images to display
  // add each image in directory as an element on the screen
  var filepath = "assets/play/";
  $(".image-confetti").prepend(`<img alt="images" src="${filepath}_Aleph, Infinitely Veritable Typeface, Nick Adam, 2018 Alum.png">`);
}

$(".image-confetti img").draggable();
