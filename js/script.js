const crit_dir = ['Belief, Nicholas Conrad, 2018.png', 'Blackwell, Olivia de Salve Villedieu, 2019.png', 'Bolita, Elaine Lopez, 2019.png', 'Catologue of Freedom, Robert McConnell, 2019.png', 'Double Standards Manual, Elena Foraker, 2020.png', 'Hey, Candidate, Boyang Xia, 2017 Alum.png', 'I Guess I Hate Banter, Tiger Dingsun, 2019.png', 'The Loop of the World, Jieun Kim, 2019.png', 'The Souvenirs from the Future exhibition catalog, Elaine Lopez, 2019.png', 'This Too Shall Pass, Aleks Dawson, 2020.png'];

const play_dir = ['_Aleph, Infinitely Veritable Typeface, Nick Adam, 2018 Alum.png', '122 Brook to 41 Sheldon, Elena Foraker, 2020.png', 'Ampersands, Olivia Orr, 2020.png', 'Atypical Archetypes, Lake Buckley, 2017 Alum.png', 'Boxing Dada, Maria Rull Bescos, 2019 Alum.png', 'Doodles Turned Digital, Etienne Adams, 2021.png', 'Green, Hirosi Yoshimura, 2019.png', 'The Plot Thins, Zoe Schneider, 2019.png', 'UselessMachine_KanyaratLoetaphirom_2019.png', 'Zoo’s Inner Voices, Zoo Somaini, 2019.png'];

const practice_dir = ['2 Designers Timeline _ Accordion Book, Grace Young, 2020.png', 'Art in_under_from System, Goeun Park.png', 'Bandaloop_DelaneyWeber_2016.png', 'Grünes Haus_RohanChaurasia_2019.png', 'History Timeline_, JavierSyquia_2021.png', 'LichtensteinPoster_JueunJeon_2020.png', 'Notebooks1–4_OliviaDeSalveVilledieu_2019.png', 'Oleanna_AnhLe_2019.png', 'Pause, Amy Auman, 2019.png', 'TypeEssays_MadeleineTeh_2020.png'];

const prototype_dir = ['Algorithmic Reading_ Stranger, Lorraine Li, 2020.png', 'Archive of Default Studies, Lauren Traugott-Campbell, 2018 Alum.png', 'Barcode Book, June Yoon, 2019.png', 'Fruit for Thought, Nathan Young, 2019.png', 'Lightbox, Mostyn Griffith, 2018 Alum.png', 'reading_cover-web-edit copy copy.jpg', 'Screen Shot 2018-09-21 at 12.05.56 AM.png', 'StephaniewinartoBarn.png', 'Tool() Conference Brand, Baron Webster & Lukas Eigler-Harding, Alum 2018 .png', 'USB, Lara Torrance, 2018 Alum.png'];


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

$( "#crit" ).hover(
  function() {
    $( this ).css({"fill": "#f26522", "stroke-width": "1.36px", "stroke": "black", "cursor": "pointer"});
  }, function() {
    $( this ).css({"fill": "none", "stroke-width": "2.27px", "stroke": "#f26522"});
  }
);

// Animate images from category when clicked.
$( "#crit" ).click(
  function() {
    // call populateImages() with the ID of the clicked element
    populateImages($(this).attr('id'), crit_dir);
    dropConfetti();
  }
);
$( "#play" ).click(
  function() {
    // call populateImages() with the ID of the clicked element
    populateImages($(this).attr('id'), play_dir);
    dropConfetti();
  }
);
$( "#practice" ).click(
  function() {
    // call populateImages() with the ID of the clicked element
    populateImages($(this).attr('id'), practice_dir);
    dropConfetti();
  }
);
$( "#prototype" ).click(
  function() {
    // call populateImages() with the ID of the clicked element
    populateImages($(this).attr('id'),prototype_dir);
    dropConfetti();
  }
);

function dropConfetti() {
  let website_height = document.body.clientHeight;
  $( "img" ).animate({ "top": website_height }, 6000, "swing");
}

function populateImages(dir_id, img_dir) {
  // determine which group of images to display
  var filepath = `assets/${dir_id}/`;

  // add each image in directory as an element on the screen
  for (let i = 0; i < img_dir.length; i++) {
    $(".image-confetti").prepend(`<img alt="images" src="${filepath}${img_dir[i]}">`);
  }

  for (let i = 0; i < img_dir.length; i++) {
    // Add CSS to newly created image node
    // To keep from creating a ridiculous number of classes, use first child selector. Since we are prepending the images, the image we just created will always be the first child
    // Calculated as %
    let left = randomIntFromInterval(10, 90);
    // Calculated as pixels
    let width = randomIntFromInterval(100, 200);
    // As of jQuery 1.8, the .css() setter will automatically take care of prefixing the property name.
    var styles = {
      "display":  "block",
      "position": "absolute",
      "top": "-150px",
      "left": `${left}%`,
      "width": `${width}px`,
      "margin":"-60px 0 0 -60px",
      "-webkit-animation":"spin 2s linear infinite",
      "-moz-animation":"spin 2s linear infinite",
      "animation":"spin 2s linear infinite",
      "cursor":"grab"
    }
    // Needs to be +1 because nth-child indexes from 1 instead of 0
    $(`img:nth-child(${i+1})`).css(styles);
    // Make each image draggable
    $(".image-confetti img").draggable();
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
