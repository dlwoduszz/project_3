$(document).ready(function(){

    // 메인 페이지 번호&슬라이드
    var count = 1;
    $('.prev').click(function(){
        count--; 
        if(count==0){
            count=2;
        }
        $('.page b').text(count);
        $('.slide>li').last().prependTo('.slide');
        $('.slide').css('margin-left','-100%')
        $('.slide').animate({'margin-left':'0'})
    });
    
    $('.next').click(function(){
        count++;
        if(count==3){
            count=1;
        }
        $('.page b').text(count);
        $('.slide').animate({'margin-left':'-100%'},function(){
            $('.slide>li').first().appendTo('.slide');
            $('.slide').css('margin-left','0')
        })
    })

    
    //돋보기 효과 
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


    // section1 scroll시 fade 효과
    $(window).scroll(function() {  
        $('h1').text($(window).scrollTop())
        if($(window).scrollTop()===0){
            $('h1').text('DEERS')
        }
        
        if($(window).scrollTop()>=200){
            $('.section1 h2').css({'margin-top':'100px'});
            $('.section1 h2').animate({'margin-top':'0px','opacity':'1'},500);
        }
        if($(window).scrollTop()>=700){
            $('.section1>p').css({'margin-top':'150px'});
            $('.section1>p').animate({'margin-top':'50px','opacity':'1'},600);
        }
        if($(window).scrollTop()>=760){
            $('.section1 .btn').css({'margin-top':'100px'});
            $('.section1 .btn').animate({'margin-top':'0px','opacity':'1'},500);
        }
    });  
    

    // section1 회사소개서 다운로드 효과
    $('.section1 .btn').hover(function(){
        $(this).children('div:first').append('<p>회사 소개서 다운로드</p>');
        $(this).children('div:last').append('<p>↓</p>');
        $(this).children('div').children('p:nth-child(1)').animate({'margin-top':'-40px'},200);
        $(this).children('span').css({'border-bottom':'2px solid gold'})
    },function(){
        $(this).children('div').children('p:nth-child(1)').animate({'margin-top':'0'},200,function(){
            $(this).siblings().remove();
        })
        $(this).children('span').css({'border-bottom':'2px solid black'})

    })

    // section2 비전 토글 효과
    let count1=0;
    $('.section2 h3').click(function(){
        $(this).siblings('p').slideToggle();
        // if($(this).siblings('p').css('display')=='block'){
        //     $(this).css({'color':'gold'})
        // }else {
        //     $(this).css({'color':'#e8e8e8'})
        // }
        
        count1++;
        console.log(count1);
        if(count1%2==0){
            $(this).css({'color':'gray'})
        }else{
            $(this).css({'color':'gold'})
        }
    })
})