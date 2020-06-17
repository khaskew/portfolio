$(document).ready(function(){

    // sticky menu:
  	$(window).scroll(function(){
      if ($(window).scrollTop() >= 60) {
         $('header').addClass('menuFixed');
      }
      else {
         $('header').removeClass('menuFixed');
      }
  	});

    // opacity hover:
  	$('.work').hover(function(){	
      	$(this).addClass('workTrans');
   		}, function(){
     		$(this).removeClass('workTrans');
    });

    // isotope:
    $(function(){
      // init Isotope
      var $grid = $('.grid_gallery').isotope({
        itemSelector: '.work',
        layoutMode: 'masonry'
      });

      // bind filter button click
      $('.filters-button-group').on('click', 'button',function(){
        var filterValue = $(this).attr('data-filter');
        // filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.button-group').each( function(buttonGroup){
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function(){
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
      
    });

});