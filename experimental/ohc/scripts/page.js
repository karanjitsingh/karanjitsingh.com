var scrollHidden=false;
var scrollOffset;
var CURPAGE=0;
var SCROLL=600;
var PAGEMAX=6;
var $window = $(window);
var showingFooter=false;
var isAnimating = false;

window.onclick=function(e) {
	if(!(!$('#menu').attr("class")) && e.clientX > 200)
	{
		toggleElement('menu');
	}
}

function update(){ 

	if(scrollHidden==true)
		return;

	var pos = $window.scrollTop();
	var newCURPAGE=(pos-pos%SCROLL)/SCROLL;

	if(newCURPAGE >= PAGEMAX)
		newCURPAGE=PAGEMAX-1;

	var top = "-" + newCURPAGE + "00%";



	if(pos <= SCROLL*PAGEMAX)
		if(newCURPAGE!=CURPAGE)
		{

			toggleElement('menu',false);
			$('#container').animate({top:top},300,"easeOutExpo");
		}
			
	CURPAGE=newCURPAGE;

	$('#menu a').each(function() { $(this).attr("class","");} );
	$('#menu a')[CURPAGE].className="selected";

	if(CURPAGE==PAGEMAX-1)
		$("#scrollButton").attr("class","rotate dark");
	else if (CURPAGE==0)
		$("#scrollButton").attr("class","dark");
	else
		$("#scrollButton").attr("class","");

	if(!$('#menu').attr("class"))
	{
		if(CURPAGE==1)
			$("#menuButton").attr("class","");
		else
			$("#menuButton").attr("class","dark");
	}

	if(CURPAGE < PAGEMAX)
	{
		var $element = $("#v"+(CURPAGE+1));

		if(($element.attr("class")).indexOf("bg-parallax")!=-1)
		{

			var velocity=0.2;
			if($element.attr("data-speed")!=undefined)
				velocity=$element.attr("data-speed");

			var height = $element.height();
			var margin=($window.height()-height)/2;
			var pos2= -pos - $element.attr("data-offset");

			pos2=-pos+newCURPAGE*SCROLL - $element.attr("data-offset");

			$element.css('backgroundPosition', '50% ' + Math.round((pos2) * velocity) + 'px'); 
		}

		if(($element.attr("class")).indexOf("child-bg-parallax")!=-1)
		{
			$element.find('.bg-parallax').each( function() {
				var velocity=0.2;
				$element=$(this);
				if($element.attr("data-speed")!=undefined)
					velocity=$element.attr("data-speed");

				var height = $element.height();
				var margin=($window.height()-height)/2;
				var pos2= -pos - $element.attr("data-offset");

				pos2=-pos+newCURPAGE*SCROLL - $element.attr("data-offset");

				$element.css('backgroundPosition', '50% ' + Math.round((pos2) * velocity) + 'px');
			});
		}
	}


	if(CURPAGE < PAGEMAX)
	{
		var $element = $("#v"+(CURPAGE+1));

		$element.find('.text-parallax').each( function() {

			var $element = $(this);
			var velocity=0.2;
			if($element.attr("data-speed")!=undefined)
				velocity=$element.attr("data-speed");

			var height = $element.height();
			pos2=pos-newCURPAGE*SCROLL;
			
			$element.css('paddingTop', ($element.attr("data-offset") - Math.round((pos2) * velocity)) + 'px'); 

		});
	}
}

$window.bind('scroll', update);

function toggleElement(page,value) {
	switch(page)
	{
		case "v4":
			if(isAnimating==true)
				return;

			if(value==true || (!$('#workshopContent').attr("class") && value==undefined)) {
				toggleElement('menu',false);
				$("#workshopPrograms").css("display","block");
				$("#workshopContent").attr("class","open");
				$("#scrollButton").attr("class","hide");
				$("#menuButton").attr("class","hide");
				scrollHidden=true;
				scrollOffset=$window.scrollTop();
				$window.scrollTop(0);
				$("#workshopPrograms").attr("class","open");
				$("#scrollOffset").css("height","0px");
				isAnimating=true;
				setTimeout('isAnimating=false',1000);
			}
			else {

				$("#scrollButton").attr("class","");
				$("#menuButton").attr("class","");
				$("#workshopContent").attr("class","");
				setTimeout('$("#workshopPrograms")[0].className=""',0);
				isAnimating=true;
				setTimeout('$("#scrollOffset").css("height",(PAGEMAX*SCROLL)+"px");$window.scrollTop(scrollOffset);$("#workshopPrograms").css("display","none");scrollHidden=false;isAnimating=false;',1000);

			}

			break;

		case "menu":
			if(value==true || (!$('#menu').attr("class") && value==undefined)) {
				$("#menu").attr("class","open");
				$("#menuButton").attr("class","dark");
			}
			else {
				$("#menu").attr("class","");
				if(CURPAGE==1)
					$("#menuButton").attr("class","");
				else
					$("#menuButton").attr("class","dark");
			}
			
			break;
	}
}

function goToPage(page)
{
	toggleElement('menu',false);
	$("html, body").animate({ scrollTop: page*SCROLL + 100 }, 500, "easeOutQuad");
}

function nextPage(){
	if(CURPAGE<PAGEMAX-1)
		goToPage(CURPAGE+1);
	else
		goToPage(0);
}

function $id(obj)
{
	return document.getElementById(obj);
}

function $tag(obj)
{
	return document.getElementsByTagName(obj);
}

