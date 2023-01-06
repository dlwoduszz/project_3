$(document).ready(function(){


    var ham_width=function(){
        $('.ham').hover(function(){
            $(this).find('span').eq(1).stop().animate({'width':'30px'},150)
        },function(){
            $(this).find('span').eq(1).stop().animate({'width':'20px'},150)
        }); 
    }
    ham_width();
    
    $('.menu_btn').click(function(){

        

        $(this).children('p').toggle();
        
        if($(this).children('p').css('display')=='block'){ 
            $('.side_menu').stop().slideDown(1000,'swing');
            $('.side_wrap').stop().fadeIn(1500,'swing').css('display','flex');
            


            $('.ham>span').eq(0).css({'transform':'translate(0,7.5px) rotate(-135deg)','transition':'0.2s'})
            $('.ham>span').eq(1).css({'transform':'translate(0,-7.5px) rotate(135deg)','width':'30px','transition':'0.2s'})
            $('.ham>span').eq(2).hide();
            $('.ham').mouseleave(function(){
                $(this).find('span').eq(1).stop().animate({'width':'30px'},150)
            });
            
        }else{
            $('.side_wrap').stop().fadeOut(500,'swing');
            $('.side_menu').stop().delay(200).slideUp(1000,'swing');
            

            ham_width(); 
            $('.ham>span').eq(0).css({'transform':'translate(0,0) rotate(0)','transition':'0.2s'})
            $('.ham>span').eq(1).css({'transform':'translate(0,0) rotate(0)','width':'20px','transition':'0.2s'})
            $('.ham>span').eq(2).show();
            


        }
        
    })




        $('.side_inner>li>a').mouseover(function(){
            if($(this).siblings().is('ul')){
            $(this).parent().find('li').stop().fadeIn(200).animate({'margin-left':'0'},300);
            $(this).after("<span></span>");
            $(this).next('span').stop().delay(100).animate({'opacity':'100%','width':'160px'},500);
            
            }
        });
  

        $('.side_inner>li').mouseleave(function(){
            $('.side_inner>li>a').parent().find('li').stop().animate({'margin-left':'-50px'},300);
            $('.side_inner>li>a').parent().find('li').stop().delay(100).fadeOut(300);
            $('.side_inner>li>a').next('span').stop().animate({'opacity':'0%','width':'50px'},400,function(){
                $(this).remove();
            });
            if($('.side_inner ul li').mouseover()){
                $(this).css('display','block').stop().animate({'margin-left':'0'});
            }
        });

        


        

})