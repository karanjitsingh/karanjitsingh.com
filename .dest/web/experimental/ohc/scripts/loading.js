progress=0;
var t;

var imgs= new Array("/images/bgs/dojo.jpg","/images/bgs/home.jpg","/images/bgs/logo.png","/images/noise.jpg","/images/team/asif.jpg","/images/team/raja.jpg","/images/team/shrushti.jpg","/images/team/nopic.png");

var i;
for(i=0;i<imgs.length;i++)
{
	var img=new Image();
	img.src=imgs[i];
	img.onload = loader;
}

window.onload=function() {
	
	
};

function loader()
{
	progress+=40;
	var percent= progress / 4;
	
	document.getElementById('progress_bar').style.width=progress + "px";
	document.getElementById('progress').innerText=parseInt(percent) + "%";
}