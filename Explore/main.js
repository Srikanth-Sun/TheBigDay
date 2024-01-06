$(document).ready(function(){

    $('.fa-bars').click(function(){

        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')

    });

    $(window).on('scroll load', function(){

        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

    

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();

            if(top >= offset && top < (offset + height)){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }

        });

    });

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });

    // $('.gallery').magnificPopup({
    //     delegate:'a',
    //     type:'image',
    //     gallery:{
    //         enabled: true
    //     }

    // });

});
