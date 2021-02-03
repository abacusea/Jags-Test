 // Click function
 $(".filter_button").click(function () {
    // var tab_id = $(this).attr('data-tab');

    if($('.filter_dropdown').hasClass('show')) {
        $('.filter_dropdown').removeClass('show');
    }
    else {
        $(this).siblings('.filter_dropdown').addClass('show');
    }  
  });

  var mouse_is_inside = false;

  $(document).ready(function()
  {
      $('.filter_button').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
  
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.filter_dropdown').removeClass('show');
      });
  });
