/**
 * Created by Administrator on 2017/4/8.
 */
$(document).ready(function(){
    //nav选项卡
    nav();
    function nav (){
        var li=$('.student .nav_ul1_li');
        $(li).each(function(){
            $(this).hover(function(){
                $(this).css({'backgroundImage':'url("images/xxk1.png")',
                    'background-size':'cover',
                    'background-position': 'center'});
            },function(){
                $(this).css({'backgroundImage':'url("")'});
            });
        });
    }


    //main1.gif轮播
    loop1();
    function loop1(){
        var loop=$('.loop ul');
        var left=$('#index_loop_left');
        var right=$('#index_loop_right');
        //获取当前页面宽度下的img宽
        var width=$('.loop ul img').css('width');
        var tmp=0;
        var timer=setInterval(function(){
            tmp=-parseInt(width)+parseInt(tmp)+'px';
            loop.animate({left:tmp},1000,'linear',function(){
                if(parseInt(loop.css('left'))==-parseInt(width)*2){
                    loop.css('left',0);
                    tmp=0;
                }
            });
        },3000);

        left.hover(function(){
            clearInterval(timer);
            $(this).click(function(){
                if(parseInt(loop.css('left'))==-2*(parseInt(width))){
                    tmp=0+'px';
                }else{
                    tmp=parseInt(tmp)-parseInt(width)+'px';
                }
                loop.animate({left:tmp},1000,'linear');
            });
        },function(){
            timer=setInterval(function(){
                tmp=-parseInt(width)+parseInt(tmp)+'px';
                loop.animate({left:tmp},1000,'linear',function(){
                    if(parseInt(loop.css('left'))==-parseInt(width)*2){
                        loop.css('left',0);
                        tmp=0;
                    }
                });
            },3000);
        });

        right.hover(function(){
            clearInterval(timer);
            $(this).click(function(){
                if(parseInt(loop.css('left'))==0){
                    tmp=-2*parseInt(width)+'px';
                }else{
                    tmp=parseInt(tmp)+parseInt(width)+'px';
                }
                loop.animate({left:tmp},1000,'linear');
            });
        },function(){
            timer=setInterval(function(){
                tmp=-parseInt(width)+parseInt(tmp)+'px';
                loop.animate({left:tmp},1000,'linear',function(){
                    if(parseInt(loop.css('left'))==-parseInt(width)*2){
                        loop.css('left',0);
                        tmp=0;
                    }
                });
            },3000);
        });
    }

    //index_edu_loop无缝滚动
    loop2();
    function loop2(){
        var loop=$('.index_edu_loop ul');
        var width=parseInt(loop.css('width'))*2+'px';
        var right=$('#edu_loop_right');
        var left=$('#edu_loop_left');
        var timer=null;
        var i=parseInt(loop.offset().left)+3;
        loop.html(loop.html()+loop.html());
        loop.css('width',width);
        var images=$('.index_edu_loop ul img');

        timer=setInterval(function(){
            if(parseInt(loop.offset().left)<=-(parseInt(width)/2)){
                loop.css('left',0);
            }else{
                loop.css('left',parseInt(loop.offset().left)-i+'px');
            }
        },30);

        //console.log(images.length);
        $(images).each(function(index) {
            $(this).hover(function () {
                clearInterval(timer);
                $(this).attr('url','images/h-'+index+1+'-hover.png');
            }, function () {
                timer = setInterval(function () {
                    if (parseInt(loop.offset().left) <= -(parseInt(width) / 2)) {
                        loop.css('left', 0);
                    } else {
                        loop.css('left', parseInt(loop.offset().left) - i + 'px');
                    }
                }, 30);
            })
        });

        $(left).hover(function(){
            clearInterval(timer);
            $(this).click(function(){
                if(parseInt(loop.offset().left)>=-parseInt(width)/16*7){
                    $(loop).animate({left:(parseInt(loop.css('left'))-parseInt(width)/16)+'px'},1000,'linear');
                }
            });
        },function(){
            timer=setInterval(function(){
                if(parseInt(loop.offset().left)<=-(parseInt(width)/2)){
                    loop.css('left',0);
                }else{
                    loop.css('left',parseInt(loop.offset().left)-i+'px');
                }
            },30);
        });

        $(right).hover(function(){
            clearInterval(timer);
            $(this).click(function(){
                if(parseInt(loop.offset().left)>=-parseInt(width)/16*15&&parseInt(loop.offset().left)<=-parseInt(width)/16){
                    $(loop).animate({left:parseInt(loop.offset().left)+parseInt(width)/16+'px'},1000,'linear');
                }
            });
        },function(){
            timer=setInterval(function(){
                if(parseInt(loop.offset().left)<=-(parseInt(width)/2)){
                    loop.css('left',0);
                }else{
                    loop.css('left',parseInt(loop.offset().left)-i+'px');
                }
            },30);
        });
    }

    //.edu_info_left选项卡
    xxk1();
    function xxk1(){
        var tabs=$('.edu_info_left1>div');
        var content=$('.edu_info_left2');
        $(tabs).each(function(index){
            $(this).click(function(){
                $(content).css('display','none');
                $(content).eq(index).css('display','block');
            });
        });
    }

    //.index_students_loop无缝滚动
    loop3();
    function loop3(){
        var loop=$('.students_loop_ul ul');
        var width=parseInt(loop.css('width'))*2+'px';
        var left=$('#students_loop_left');
        var right=$('#students_loop_right');
        var timer=null;
        var i=loop.offset().left;
        loop.html(loop.html()+loop.html());
        loop.css('width',width);
        var images=$('.students_loop_ul img');

        timer=setInterval(function(){
            if(parseInt(loop.css('left'))>=(-parseInt(width)/2)){
                loop.css('left',(loop.offset().left-i+14)+'px');
            }else{
                loop.css('left',0);
            }
        },30);

        $(images).each(function(){
            $(this).hover(function(){
                clearInterval(timer);
                $(this).css('transform','scale(1.05)');
            },function(){
                timer=setInterval(function(){
                    if(parseInt(loop.css('left'))>=(-parseInt(width)/2)){
                        loop.css('left',(loop.offset().left-i+14)+'px');
                    }else{
                        loop.css('left',0);
                    }
                },30);
                $(this).css('transform','scale(1)');
            });
        });

        $(left).hover(function(){
            clearInterval(timer);
            $(this).click(function(){ console.log((loop.offset().left))
                if(parseInt(loop.css('left'))>=(-parseInt(width)/20*19)&&parseInt(loop.css('left'))>=(-parseInt(width)/20*11)){
                    $(loop).animate({left:(loop.offset().left-parseInt(width)/20*3)+'px'},1000,'linear');
                }
            });
        },function(){
            timer=setInterval(function(){
                if(parseInt(loop.css('left'))>=(-parseInt(width)/2)){
                    loop.css('left',(loop.offset().left-i+14)+'px');
                }else{
                    loop.css('left',0);
                }
            },30);
        });

        $(right).hover(function(){
            clearInterval(timer);
            $(this).click(function(){
                if(parseInt(loop.css('left'))<=(-parseInt(width)/20)){
                    $(loop).animate({left:(loop.offset().left+parseInt(width)/20)+'px'},1000,'linear');
                }
            });
        },function(){
            timer=setInterval(function(){
                if(parseInt(loop.css('left'))>=(-parseInt(width)/2)){
                    loop.css('left',(loop.offset().left-i+14)+'px');
                }else{
                    loop.css('left',0);
                }
            },30);
        });
    }
});


