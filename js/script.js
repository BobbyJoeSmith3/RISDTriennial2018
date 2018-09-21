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

$( "#play" ).click(
  function() {
    $( "img" ).animate({ "top": "200vh"}, 6000, "linear");
  }
);