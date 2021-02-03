// Hover function
var mouse_is_inside = false;

$(document).ready(function()
{ $(".menu_tab").hover(function () {
    var tab_id = $(this).attr('data-tab');

    $(".menu_tab").removeClass("active");
    $('.menu-list').removeClass('show');
    $('.menu-wrap').addClass('show');

    $(this).toggleClass("active");
    $("#"+tab_id).addClass('show');
    $('.nav-block').addClass('bg-black');

    mouse_is_inside=true; 
  }, function(){ 
      mouse_is_inside=false; 
  });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside)  $('.nav-block').removeClass('bg-black');
        $('.menu-wrap').removeClass('show');
        $(".menu_tab").removeClass("active");
    });
});


 $(".nav-icons").hover(function () {
  $('.nav-block').removeClass('bg-black');
  $('.menu-wrap').removeClass('show');
  $(".menu_tab").removeClass("active");
});


 // Click function
 $(".menu_tab").click(function () {
  var tab_id = $(this).attr('data-tab');

  $('.menu-list').removeClass('show');
  $('.menu-wrap').addClass('show');
  $(".menu_tab").removeClass("active");

  $(this).addClass("active");
  $("#"+tab_id).addClass('show');
});

 // Close function
 $(".menu_close").click(function () {
  $('.menu-wrap').removeClass('show');
  $(".menu_tab").removeClass("active");
  $('.nav-block').removeClass('bg-black');
});

// Mobile-Menu Nav
 // Click function
 $(".mobile-menu-icon").click(function () {
  $('.mobile-menu-wrap').addClass('show');
});

//menu
$(document).ready(function() {
  $('.mobile-menu_button').click(function() {
    var tab_id = $(this).attr('data-tab');
    $(".mobile-menu-wrap.show").css("height", "100vh");
    if ($('.mobile-menu_dropdown').hasClass("show")) {
      $('.mobile-menu_dropdown').removeClass('show');
      $('.mobile-menu-arrow').removeClass('show');
      $(".mobile-menu-wrap.show").css("height", "100vh");
    } else {
      $("#"+tab_id).addClass('show');
      $(this).children('.mobile-menu-arrow').addClass('show');
      $(".mobile-menu-wrap.show").css("height", "auto");
    }
  });
});
 

 // Close function
$(".mobile-menu_close").click(function () {
  $('.mobile-menu_dropdown').removeClass('show');
  $(".mobile-menu-arrow").removeClass("show");
  $('.mobile-menu-wrap').removeClass('show');
  $(".mobile-menu-wrap.show").css("height", "100vh");
});

