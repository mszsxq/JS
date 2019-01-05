var  ml150 =document.getElementById('ml150');
var  ml200 =document.getElementById('ml200');
var  xuanze =document.getElementById('xuanze');
ml150.onclick=function(){
 	xuanze.innerHTML="'150ml'";
 	ml150.style.backgroundImage="url('images/duigou.png')";
 	ml150.style.backgroundRepeat="no-repeat";
 	ml150.style.backgroundPosition="23px 4px";
 	ml200.style.backgroundImage=""

}
ml200.onclick=function(){
	xuanze.innerHTML="'200ml'";
	ml200.style.backgroundImage="url('images/duigou.png')";
	ml200.style.backgroundRepeat="no-repeat";
 	ml200.style.backgroundPosition="23px 4px";
	ml150.style.backgroundImage="";
}
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var shumu=document.getElementById('shumu');
btn1.onclick=function(){
		if(shumu.value>1){
			shumu.value--;
			btn2.style.cursor="pointer";
		}
		else{
			btn1.style.cursor="not-allowed";
		}
}
btn2.onclick=function(){
	if(shumu.value<5){
		btn1.style.cursor="pointer";
		shumu.value++;
	}
	else{
		btn2.style.cursor="not-allowed";
	}
}


var  mengzhao =document.getElementById('mengzhao');
var gouwucghe =document.getElementById('gouwuche');
var jixu =document.getElementById('jixu');
var cha=document.getElementById('cha');
gouwuche.onclick=function(){
	mengzhao.style.display='block';
}
jixu.onclick=function(){
	mengzhao.style.display='none';
}
cha.onclick=function(){
	mengzhao.style.display='none';
}



//放大镜部分
var z1=document.getElementById('z1');
var z2=document.getElementById('z2');
var z3=document.getElementById('z3');
var z4=document.getElementById('z4');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var tu=document.getElementById('tu');
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var imgf = document.getElementById('imgf'); 
z1.onclick=function(){
	if(z2.style.border='none'){
		z2.style.border='2px solid #ff9003';
		z3.style.border='none';	
		tu.src="images/pp0.jpeg";
		Bimg.src="images/pp0.jpeg";
	}
}
z2.onmouseover=function(){
	z2.style.border='2px solid #ff9003';
	z3.style.border='none';	
	tu.src="images/pp0.jpeg";
	Bimg.src="images/pp0.jpeg";
}
z3.onmouseover=function(){
	z3.style.border='2px solid #ff9003';
	z2.style.border='none';
	tu.src="images/pp1.jpeg";
	Bimg.src="images/pp1.jpeg";
}
z4.onclick=function(){
	if(z3.style.border='none'){
		z3.style.border='2px solid #ff9003';
		z2.style.border='none';
		tu.src="images/pp1.jpeg";
		Bimg.src="images/pp1.jpeg";
	}
}
img1.onmouseover=function(){
    slider.style.display='block';
	img2.style.display='block';
	imgf.style.width="818px";
}
img1.onmouseout=function(){
    slider.style.display='none';
	img2.style.display='none';
	imgf.style.width="408px";
}
img1.onmousemove=function(ev){
	var ev=ev||event;
	var oL=ev.clientX-imgf.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-imgf.offsetTop-slider.offsetHeight/2;
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px';
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
	Bimg.style.width="816px";
	Bimg.style.height="816px";
}