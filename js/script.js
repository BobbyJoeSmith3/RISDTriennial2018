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
    // call populateImages() with the ID of the clicked element
    populateImages($(this).attr('id'));
    dropConfetti();
  }
);

function dropConfetti() {
  $( "img" ).animate({ "top": "200vh"}, 6000, "linear");
}

function populateImages(dir_id) {
  // determine which group of images to display
  var filepath = `assets/${dir_id}/`;
  // add each image in directory as an element on the screen
  var play_dir = ['_Aleph, Infinitely Veritable Typeface, Nick Adam, 2018 Alum.png', '122 Brook to 41 Sheldon, Elena Foraker, 2020.png', 'Ampersands, Olivia Orr, 2020.png', 'Atypical Archetypes, Lake Buckley, 2017 Alum.png', 'Boxing Dada, Maria Rull Bescos, 2019 Alum.png', 'Doodles Turned Digital, Etienne Adams, 2021.png', 'Green, Hirosi Yoshimura, 2019.png', 'The Plot Thins, Zoe Schneider, 2019.png', 'UselessMachine_KanyaratLoetaphirom_2019.png', 'Zoo’s Inner Voices, Zoo Somaini, 2019.png'];
  for (let i = 0; i < play_dir.length; i++) {
    $(".image-confetti").prepend(`<img alt="images" src="${filepath}${play_dir[i]}">`);
    // Add CSS to newly created image node
    // To keep from creating a ridiculous number of classes, use first child selector. Since we are prepending the images, the image we just created will always be the first child
    // Calculated as %
    let left = randomIntFromInterval(10, 90);
    // Calculated as pixels
    let width = randomIntFromInterval(100, 200);
    $(".image-confetti:first-child").css({
      "display":  "block",
      "position": "absolute",
      "top": "-150px",
      "left": `${left}%`,
      "width": `${width}px`,
      "margin":"-60px 0 0 -60px",
      "-webkit-animation":"spin 2s linear infinite",
      "-moz-animation":"spin 2s linear infinite",
      "animation":"spin 2s linear infinite"
    })
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

$(".image-confetti img").draggable();
