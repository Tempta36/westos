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
                    obj.style.filter = 'alpha(opacity:' + (val + speed) + ')';  //IE�����

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
    //��������������ʱ��Ĺ����ǻ�ȡ�ö��������ֵ
    //��������������ʱ��Ĺ��������øö�������Ե�ֵ
    //arguments ���Ǳ��洫�ݲ���������
    if(arguments.length==2)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[prop];  // IE �������ʹ��
        }
        else
        {
            return getComputedStyle(obj,false)[prop];  //FF  chrome �߰汾�������
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