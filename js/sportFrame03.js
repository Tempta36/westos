/**
 * Created by Administrator on 2016/8/11 0011.
 */

//{width:400,height:400}
function sportFrame(obj,json,fn)
{
    clearInterval(obj.timer);

    var speed=0;
    var val=0;

    obj.timer=setInterval(function(){

        var stop=true;
        for(var name in json) {

            if (name == 'opacity') {
                val = Math.round(cssStyle(obj, name) * 100);
            }
            else {
                val = parseInt(cssStyle(obj, name));

            }

            speed = (json[name] - val) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (json[name] != val)
            {
                stop=false;
            }

                if (name == 'opacity') {
                    obj.style.opacity = (val + speed) / 100;
                    obj.style.filter = 'alpha(opacity:' + (val + speed) + ')';  //IE浏览器

                } else {
                    cssStyle(obj, name, (val + speed));
                }
            }

        if(stop) {

            clearInterval(obj.timer);
            if (fn) {
                fn();
                        }
        }

    },30);



}

function cssStyle(obj,prop,value)
{
    //传递两个参数的时候的功能是获取该对象的属性值
    //传递三个参数的时候的功能是设置该对象的属性的值
    //arguments 就是保存传递参数的数组
    if(arguments.length==2)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[prop];  // IE 浏览器的使用
        }
        else
        {
            return getComputedStyle(obj,false)[prop];  //FF  chrome 高版本的浏览器
        }
    }
    else if(arguments.length==3)
    {
        obj.style[prop]=value+'px';
    }
    else
    {

    }
}