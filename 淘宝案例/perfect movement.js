function startMove(obj,json,fn){
 clearInterval(obj.timer)
 obj.timer=setInterval(function(){
 var flag=true;	 
 for(var attr in json)
 { 
//1.获取当前值
 var icur=0;
  if(attr=='opacity'){
  icur=parseFloat(getStyle(obj,attr))*100
  }else{
  icur=Math.round(parseInt(getStyle(obj,attr)))
  }
//2.算速度     var icur=parseInt(getStyle(obj,attr))
 var speed=(json[attr]-icur)/5
 speed=speed>0?Math.ceil(speed):Math.floor(speed)
//检测停止 
  if(icur!=json[attr]){
   flag=false;
  }
   if(attr=='opacity'){
   obj.style['opacity']=(icur+speed)/100;
   obj.style.filter='alpha(opacity:'+(icur+speed)+')';   
   }else{
   obj.style[attr]=icur+speed+'px'
   }
  }
   if(flag){
   clearInterval(obj.timer)
     if(fn){
	 fn();	 
	 }   
   }  
 },30)
}

//获取css样式
function getStyle(obj,attr){
 if(obj.currentStyle){
 return obj.currentStyle[attr];
 }else{
 return getComputedStyle(obj,false)[attr];
 }
}