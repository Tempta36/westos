/**
 * Created by Administrator on 2017/4/21.
 */
$(document).ready(function(){
    //nav选项卡
    nav();
    function nav (){
        var ul=$('.connectUs .nav_ul1');
        $(ul).children().each(function(){
            $(this).hover(function(){
                $(this).css({'backgroundImage':'url("images/xxk1.png")',
                    'background-size':'cover',
                    'background-position': 'center'});
            },function(){
                $('.connectUs .nav ul li:not("#nav_connectUs")').css({'backgroundImage':'url("")'});
            });
        });
    }
});