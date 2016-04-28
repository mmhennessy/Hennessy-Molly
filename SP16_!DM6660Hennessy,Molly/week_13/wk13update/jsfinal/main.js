//This was created with the assistance of the fallowing website sources: APO Documentation, W3Schools and Stock Overflow

$(document).ready(function() {
	$("a").on('click', function() {
		$(this).css("background-color", "yellow");
	});
//This makes a yellow background for links when they are clicked on.


    $("#slides > div:gt(0)").hide();

    setInterval(function() {
      $('#slides > div:first')
      .fadeOut(3000)
      .next()
      .fadeIn(3000)
      .end()
      .appendTo('#slides')
    }, 5000);
//Slideshow of images on home page


  $(document).click(function() {
    $('#slides').toggle("highlight");
  });
//highlights images when clicked


  $(document).click(function() {
    $('#action').toggle("highlight");
  });

  $('.camp').hover(function() {
    $('.boating').slideToggle(300);
  });
//This function causes the list items to appear under each activity element, the next six elements assist with the same thing.


    $('.camp').hover(function() {
    $('.cook').slideToggle(300);
  });

    $('.camp').hover(function() {
    $('.hike').slideToggle(300);
  });

    $('.camp').hover(function() {
    $('.rock').slideToggle(300);
  });  

    $('.camp').hover(function() {
    $('.art').slideToggle(300);
  });

    $('.camp').hover(function() {
    $('.group').slideToggle(300);
  });

    $('.camp').hover(function() {
    $('.fish').slideToggle(300);
  });  

  $('h1').on("dblclick", function() {
    $(this).css("font-size", "275%")
  });
//Causes headers to enlarge when double clicked.


  $('h2').on("dblclick", function() {
    $(this).css("font-size", "150%")
  });
 //Causes sub-headings to enlarge when double clicked. 

});  






