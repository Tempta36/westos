/**
 * Created by Administrator on 2017/4/22 0022.
 */
$(document).ready(function(){
    //nav选项卡
    nav();
    function nav (){
        var li=$('.signIn .nav_ul1_li');
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

    setWidth();
    function setWidth(){
        var height=$('.index2_left').css('height');
        $('.index2_right').css({'height':height,
            'overflow-y':'scroll',
            'background-image': "url('../images/note.png')",
            'background-size': 'contain',
            'background-repeat': 'no-repeat'});
    }
});