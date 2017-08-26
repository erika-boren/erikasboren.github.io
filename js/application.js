$(document).ready(function() {
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });

  $(".star").on('click', function(event){
    event.preventDefault();
    var circle = $(this);
    var test =  $(circle).parent().siblings().find("p");

    if (test.hasClass("hidden")){
       $(test).removeClass("hidden");
      $(circle).css( "color", "white");

    }else{
      $(circle).css( "color", "#0E7C7B");
      $(test).addClass("hidden");
    }
  })

  $( ".timeline-box" ).hover(function() {
    var box = $(this);
    var circle = $(box).siblings("a").find(".star")
    var paragraph =  $(box).children("p");

    if (paragraph.hasClass("hidden")){
       $(paragraph).removeClass("hidden");
       $(circle).css( "color", "white");

    }else{
      $(paragraph).addClass("hidden");
      $(circle).css( "color", "#0E7C7B");
    }
  }
);
})

