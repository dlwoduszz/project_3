$(document).ready(function(){

    $('.prev').click(function(){
        $('.slide>li').last().prependTo('.slide');
        $('.slide').css('margin-left','-100%')
        $('.slide').animate({'margin-left':'0'})
    });

    
    $('.next').click(function(){
        $('.slide').animate({'margin-left':'-100%'},function(){
            $('.slide>li').first().appendTo('.slide');
            $('.slide').css('margin-left','0')
        })
    })

    $('.search_icon').hover(function(){
        $(this).prepend('<div></div>');

        function icon_back(){
            $('.search_icon').children('div').stop().animate({'margin':'0','width':'100px','height':'100px','opacity':'0%'},900,function(){
                $(this).css({'margin':'10px','width':'80px','height':'80px','opacity':'100%'})
            })
        }  
        icon_back()
        setInterval(icon_back,2000);
        
    },function(){
        $('.search_icon').children('div').remove()
    })

})