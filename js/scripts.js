// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400, user-scalable=0"/>');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
});


jQuery('.dll').click(function() { 
     jQuery('.hide-xss').slideToggle(''); 
     jQuery('.dll').toggleClass("str-full");  
});



$(document).ready(function()
{
    if($(".card-i").height()>790){
        $(".card-i").addClass( "paused" ); 
    }
});



$(document).ready(function()
{
	$("#contentbox").keyup(function()
	{
		var box=$(this).val();
		var main = box.length *100;
		var value= (main / 250);
		var count= 250 - box.length;

		if(box.length <= 250)
		{
			$('#count').html(count);
			$('#bar').animate(
			{
				"width": value+'%',
			}, 1);
		}
		else
		{
			alert('Максимальное кол-во символов');
		}
		return false;
	});
});
	

   
    $(document).ready(function () {

            //main nav
            $(window).on('scroll load', function () {
                updateMainNav();
            });

            function updateMainNav() {
                if ($(window).scrollTop() >= 790) {
                    $('body').addClass('minimize-menu');
                } else {
                    $('body').removeClass('minimize-menu');
                }
            }

            $('.user-nav > a').on('click', function () {
                $('body').toggleClass('show-user-nav');
            });

            $(document).on('click', function (event) {
                $('body').removeClass('show-user-nav');
            });

            $('.collapse-main-nav').on('click', function () {
                if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
                return false;
            });

        });


	
	
	

 



 

  

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10, controls: ['zoomControl']
    }),


        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
           
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
           
        }),

    
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                  balloonContent: '<div class="sp1"><img class="img-responsive" src="img/m2.png"><div class="show-content"><a href="#" class="scrt sta1"><i class="fa fa-play"></i></a><a href="#" class="scrt sta2"><i class="fa fa-heart"></i></a><a href="#" class="scrt sta3"><i class="fa fa-comment"></i></a></div><div class="oblt">1910-1920</div><div class="fll soc-area"><a href="#"><div class="s1"><img src="img/soc1.png" alt=""><span>33</span></div></a><a href="#"><div class="s1 sl2"><img src="img/soc2.png" alt=""><span>97</span></div></a><a href="#"><div class="s1 sl3"><img src="img/soc3.png" alt=""><span>11</span></div></a></div></div><div class="sp-down"><h2><a href="#">Спасский монастырь. Спасо-Преображенский собор</a></h2><p>Спасо-Преображенский монастырь - один из древнейших монастырей на Руси. Первый раз на страницах летописей он упоминается под 1096 г. Это было...</p></div> <hr><div class="lon-area"><div class="logo-ava"><img src="img/av1.png"><span>Лозовой Антон</span></div></div></div></div>'
        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });


                 myPlacemark2 = new ymaps.Placemark([55.76, 37.78], {
            // Свойства.
            balloonContent: '<div class="sp1"><img class="img-responsive" src="img/sp2.png"><div class="show-content"><a href="#" class="scrt sta1"><i class="fa fa-play"></i></a><a href="#" class="scrt sta2"><i class="fa fa-heart"></i></a><a href="#" class="scrt sta3"><i class="fa fa-comment"></i></a></div><div class="oblt">1910-1920</div><div class="fll soc-area"><a href="#"><div class="s1"><img src="img/soc1.png" alt=""><span>33</span></div></a><a href="#"><div class="s1 sl2"><img src="img/soc2.png" alt=""><span>97</span></div></a><a href="#"><div class="s1 sl3"><img src="img/soc3.png" alt=""><span>11</span></div></a></div></div><div class="sp-down"><h2><a href="#">Андреевский мужской монастырь в Москве</a></h2><span class="slk">История: <a href="#">Спасский монастырь. Спасо-Преображенский</a></span><span class="spa-nw">№ 8745</span></div></div></div>'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps.png',
               iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });




                 myPlacemark3 = new ymaps.Placemark([55.9198471, 37.7654985], {
            // Свойства.
            balloonContent: '<div class="spl2"><h2><a href="#">Лесной переулок, 12</a></h2><div class="sple"><input type="file" size="1"></div></div>'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps.png',
               iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });



        
myMap.behaviors.disable('scrollZoom');

if($(window).width() < 768) {

myMap.behaviors.disable('drag');


} else { 
    // change functionality for larger screens
}

    myMap.geoObjects.add(myPlacemark)
        .add(myPlacemark2).add(myPlacemark3)}
        


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 
 
 
 
 $(document).ready(function() {
  
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});
 
  // zoom off mobile
 
 document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);
 
 
 
 
 	(function($) {
		$(function() {
			$('.form-control, select, input[type="radio"], input[type="checkbox"]').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		
	if($(window).width() > 768) {

		$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


} else { 
    // change functionality for larger screens
}



  
    
        $(document).ready(function() {
	        
	        
	        
	        

var xpaused = false;
var previous = 0;
var poh = true;
var pof = true;

$(".pause").on("click", function() {
	if( xpaused ) {
  	$(".slider").slick("play");
  } else {
  	$(".slider").slick("pause");
  }
  xpaused = !xpaused;
  $(this).toggleClass( "paused" );
});


$(".go").on("click", function() {
 	$(".slider").slick("prev");
});

$(".go2").on("click", function() {
 	$(".slider").slick("next");
});

$(".poh").on("click", function() {
 	$(".slider").slick("setOption", "pauseOnHover", !poh, true );
  poh = !poh;
  $(this).toggleClass( "paused" );
});

$(".pof").on("click", function() {
 	$(".slider").slick("setOption", "pauseOnFocus", !pof, true );
  pof = !pof;
  $(this).toggleClass( "paused" );
});


     $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: true,
});

        
            $('.modal').on('shown.bs.modal', function (e) {
      $('.slider').resize();
       
    })

    });
    



$(".imgl").click(
  function () {
    $(this).toggleClass("result_hover_p");
  }
);   

 $( function() {
    $( ".datepicker" ).datepicker();
  } ); 
	
	
initSample();
		







 $('.dspl-n').on('click', function () {
                $('.hide-stn').toggleClass('shows-nt');
            });
    
    
  
    
    
    $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  } );
  
  
  
   $( function() {
    $( ".tool" ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
  
  
  
   
 	if($(window).width() > 768) {


$(".scroller-b").mCustomScrollbar({
					axis:"y",			
					autoDraggerLength:false,
				
				});	


} else { 
    // change functionality for larger screens
}
	
  

  
  /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





$(document).ready(function() {
    $("#datepicker").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });


$(document).ready(function() {
    $("#datepicker2").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });
 
 
 $(document).ready(function() {
    $("#datepicker3").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });
 
 
 $(document).ready(function() {
    $("#datepicker4").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });

  jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Далее',

		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],

	  monthNamesShort: [ "Январь", "Феваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});			
	
	
	

	
	