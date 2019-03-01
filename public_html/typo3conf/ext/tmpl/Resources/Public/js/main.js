$(document).ready(function(){

	$('input[placeholder], textarea[placeholder]').placeholder();

	$('input, textarea').focus(function(){
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	$('input.mask-phone').mask('+7 (999) 999 99 99');

    $('.magnificPopup').magnificPopup();
    
    $(document).toShowHide({
        button: '.bt-menu',
        button_close: '.bt-menu',
        close_only_button: false,
        box: '.menu',
        onShow: function(el){
            el.find('.bt-menu').addClass('close');
        },
        onHide: function(el){
            el.find('.bt-menu').removeClass('close');
        }
    });

    $('.menu > ul > li').toShowHide({
        button: '> a',
        box: 'ul',
        effect: 'slide',
        close_only_button: true,
        onBefore: function(el){
            el.addClass('active');
        },
        onAfter: function(el){
            el.removeClass('active');
        }
    });

    $('.slider-stocks').slick({
        autoplay: false,
        speed: 600
    });
	
});