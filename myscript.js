



/* Pour que Jquery attende que le document soit prêt */

$( document ).ready(function() {
    console.log( "ready!" );
    $('body').removeClass('overflow');
    /* Spinner loading page */
    $('html').addClass('overflow').delay(6300).queue(function(next){
         $(this).removeClass('overflow');
         next();
    });
    $('#all').delay(4500).fadeIn(2000);
    $('#spinner').delay(4500).fadeOut(2000); 

/* fin de la déclaration ready */


/* Navigation en cercle */


  // MODAL MENU SCRIPT
  $('.menu-link').on("click", function(e) {
    if ($("body").hasClass('overlay')) {
      $("body").removeClass("overlay");
    } else {
      $("body").addClass("overlay");
    }
    if ($(this).data("modal")) {
      var modalTarget = $(this).data("modal");
      $("." + modalTarget).parent().toggleClass("active");
      $(this).toggleClass("close");
      e.stopPropagation();
    }
  });

  $('body').on('click', function(e) {
    if (!$(event.target).closest('.modal-mask').length) {
      $("body").removeClass("overlay");
      $(".modal-mask").removeClass('active');
      $(".menu-link").removeClass('close');
    }
  });

  $('.link').on('click', function(e) {
      $("body").removeClass("overlay");
      $(".modal-mask").removeClass('active');
      $(".menu-link").removeClass('close');
  });







/* SERVICES Jquery */

jQuery(document).ready(function ($) {

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height(1.1);
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
  
    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });
 

$('.control_next').click(function () {
  
 var $next = $('.animation.active').removeClass('active').next('.animation');
  
  if ($next.length) {
    $next.addClass('active'); 
}
else {
    $(".animation:first").addClass('active');
}
});
  

$('.control_prev').click(function () {
  
 var $prev = $('.animation.active').removeClass('active').prev('.animation');
  
  if ($prev.length) {
    $prev.addClass('active'); 
}
else {
    $(".animation:last").addClass('active');
}
});
  
});    


/* FIN FIN FIN Services Jquery */



/* Partie réalisations / TABLEAU */

$('#tous').click(function(){
    console.log('Coucou');
    $('.motion_cat').show(1000);
    $('.web_cat').show(1000);
    $('.graphics_cat').show(1000);
});

$('#motion').click(function(){
    $('.motion_cat').show('slow', function(){
        console.log('Élément #d est caché/affiché');
    });
    $('.une_cat').hide(1000);
    $('.web_cat').hide(1000);
    $('.graphics_cat').hide(1000);
});

$('#web').click(function(){
    $('.web_cat').show('slow', function(){
        console.log('Élément #d est caché/affiché');
    });
    $('.une_cat').hide(1000);
    $('.motion_cat').hide(1000);
    $('.graphics_cat').hide(1000);
});

$('#graphics').click(function(){
    $('.graphics_cat').show('slow', function(){
        console.log('Élément #d est caché/affiché');
    });
    $('.une_cat').hide(1000);
    $('.motion_cat').hide(1000);
    $('.web_cat').hide(1000);
});



/* catégories réalisations */  




/* open modal réalisations */  


    $("#wild, .modal-close, .modal-overlay").click(function() {
    $("#wild_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#wild_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });
  
  $("#impermanence, .modal-close, .modal-overlay").click(function() {
    $("#impermanence_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#impermanence_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#modal_opened").on("show", function () {
  $("body").addClass("body.modal-open");
}).on("hidden", function () {
  $("body").removeClass("body.modal-open")
});
  
 $("#daaquam, .modal-close, .modal-overlay").click(function() {
    $("#daaquam_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow'); 
  });

 $(".modal-close, .modal-overlay").click(function() {
    $("#daaquam_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

 $("#icone, .modal-close, .modal-overlay").click(function() {
    $("#icone_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

 $(".modal-close, .modal-overlay").click(function() {
    $("#icone_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#cigales, .modal-close, .modal-overlay").click(function() {
    $("#cigales_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

 $(".modal-close, .modal-overlay").click(function() {
    $("#cigales_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

 $("#xd_ifps, .modal-close, .modal-overlay").click(function() {
    $("#xd_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

 $(".modal-close, .modal-overlay").click(function() {
    $("#xd_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#lia_art, .modal-close, .modal-overlay").click(function() {
    $("#lia_art_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

 $(".modal-close, .modal-overlay").click(function() {
    $("#lia_art_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

   $("#tropical, .modal-close, .modal-overlay").click(function() {
    $("#tropical_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#tropical_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#portes_ouvertes_ifps, .modal-close, .modal-overlay").click(function() {
    $("#portes_ouvertes_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#portes_ouvertes_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#logo_ifps, .modal-close, .modal-overlay").click(function() {
    $("#logos_ifps_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#logos_ifps_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

    $("#saliot, .modal-close, .modal-overlay").click(function() {
    $("#saliot_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#saliot_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

    $("#japan, .modal-close, .modal-overlay").click(function() {
    $("#japan_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#japan_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

    $("#filles, .modal-close, .modal-overlay").click(function() {
    $("#filles_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#filles_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });

  $("#badin, .modal-close, .modal-overlay").click(function() {
    $("#badin_modal").addClass("modal-opened");
    $('.menu').hide();
    $('#footer').hide();
    $('body').addClass('overflow');
  });

  $(".modal-close, .modal-overlay").click(function() {
    $("#badin_modal").removeClass("modal-opened");
    $('.menu').show();
    $('#footer').show();
    $('body').removeClass('overflow');
  });



/* FIN FIN FIN modal réalisations */

/* Carousel Logos Clients */



});