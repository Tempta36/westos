/**
 * Created by Administrator on 2017/4/13.
 */
$(document).ready(function(){
    //nav选项卡
    nav();
    function nav (){
        var ul=$('.aboutUs .nav ul');
        $(ul).children().each(function(){
            $(this).hover(function(){
                $(this).css({'backgroundImage':'url("images/xxk1.png")',
                    'background-size':'cover',
                    'background-position': 'center'});
            },function(){
                $('.aboutUs .nav ul li:not("#nav_aboutUs")').css({'backgroundImage':'url("")'});

            });
        });
    }
});