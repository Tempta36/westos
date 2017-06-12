/**
 * Created by Administrator on 2017/4/15 0015.
 */
$(document).ready(function(){

    //nav选项卡
    nav();
    function nav (){
        var ul=$('.eduTrain .nav_ul1');
        $(ul).children().each(function(){
            $(this).hover(function(){
                $(this).css({'backgroundImage':'url("images/xxk1.png")',
                    'background-size':'cover',
                    'background-position': 'center'});
            },function(){
                $('.eduTrain .nav ul li:not("#nav_eduTrain")').css({'backgroundImage':'url("")'});
            });
        });
    }

    //课程列表的左移右移(course_list),课程内容的显示(eduTrain3_ul)
    course_list();
    function course_list (){
        var left=$('#course_left');
        var right=$('#course_right');
        var ul=$('.course_list ul');
        var ul_content=$('.eduTrain3_ul');
        var ul_content_content=$('.eduTrain4_left_content');
        var width=parseInt($(ul).css('width'));

        $('.eduTrain4_left').css('height',$('.display_block').css('height'));

        $(ul).children().not('.course_list_this').each(function(){
            $(this).hover(function(){
                $(this).css({'background-color': '#959F6A',
                    'color': 'white',
                    'border-bottom': '3px solid #A6B51C'});
            },function(){
                $(this).css({'background-color': '',
                    'color': '',
                    'border-bottom': ''});
            });
        });

        $(left).click(function(){
            if(parseInt($(ul).css('marginLeft'))==0){
                $(ul).animate({'marginLeft':-width/6*2+'px'},800,'linear');
            }
        });
        $(right).click(function(){
            if(parseInt($(ul).css('marginLeft'))!=0){
                $(ul).animate({'marginLeft':0},800,'linear');
            }
        });

        $(ul).children().each(function(index){
            $(this).click(function(){
                var len=$(ul).children().length;
                $(ul_content).each(function(index){
                    if($(this).hasClass('eduTrain3_ul_block')){
                        $(this).removeClass('eduTrain3_ul_block');
                    }
                });
                $(ul_content).eq(index).addClass('eduTrain3_ul_block');

                $('.eduTrain3_ul_block').children().each(function(index){
                    $(this).click(function(){
                        var num=$(this).parent().attr('num');
                        switch (index){
                            case 0:
                                num=3*num-2;break;
                            case 1:
                                num=3*num-1;break;
                            case 2:
                                num=3*num;break;
                            default:break;
                        }
                        //console.log($(ul_content_content).length);
                        $(ul_content_content).each(function(){
                            if($(this).hasClass('display_block')){
                                $(this).removeClass('display_block');
                            }
                        });
                        console.log(index,num)
                        $(ul_content_content).eq(num-1).addClass('display_block');
                    });
                });
            });
        });
    }

});