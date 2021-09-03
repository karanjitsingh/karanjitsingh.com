function clearForm(type) {
	
	var i;
	for(i=0;i<3;i++)
	{
		var className= $id("form").getElementsByTagName("div")[i].className;
		$id("form").getElementsByTagName("div")[i].className=className.replace(' err','');
	    $id("form").getElementsByTagName("div")[i].innerHTML = "";
    }
    /*if (type) {
        $id("msgstatus").className = "hidden"
    }*/
}

function validateForm() {
	var validation=true;
	divs=$('#form div');
	var i=0;
	for(i=0;i<3;i++){
		if(divs[i].innerText.trim()=="")
		{
			validation=false;
			if(divs[i].className.indexOf(' err')==-1)
				divs[i].className+=' err';
		}
		else {
			if(divs[i].className.indexOf('err')!=-1)
				divs[i].className=divs[i].className.replace(' err','');
		}
	}
	
	return validation;
}


function submitForm() {
	//if(!validateForm())
		// return;
		

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    var name = $id("form").getElementsByTagName("div")[0].innerText;
    var email = $id("form").getElementsByTagName("div")[1].innerText;
    if ($id("form").getElementsByTagName("div")[0].innerHTML) {
        var msg = $id("form").getElementsByTagName("div")[2].innerHTML;
    } else {
        msg = ""
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            submission(xmlhttp.responseText)
        }
    };
    ///
    /*$id("msgstatus").className = "";
    $id("msgstatus").innerHTML = "sending...";
    $("#msgstatus").css("opacity", "1");
    $("#msgstatus").stop();*/
    xmlhttp.open("POST", "submit.php?name=asdf", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&msg=" + encodeURIComponent(msg))
}

function submission(msg) {
    if (msg == "1 1 1") {
        /*$id("msgstatus").innerHTML = "sent";
        $id("msgstatus").className = "green";
        $("#msgstatus").animate({
            opacity: 0
        }, 3000);*/
        clearForm(0);
    } else {
        /*$id("msgstatus").innerHTML = "error";
        $id("msgstatus").className = "red";*/
        
		var i;
		for(i=0;i<3;i++)
		{
			var className= $id("form").getElementsByTagName("div")[i].className;
			$id("form").getElementsByTagName("div")[i].className=className.replace(' err','');
    	}
        
        errors = msg.split(" ");
        if (errors[0] == 0) {
            $id("form").getElementsByTagName("div")[0].className += " err"
        }
        if (errors[1] == 0) {
            $id("form").getElementsByTagName("div")[1].className += " err"
        }
        if (errors[2] == 0) {
            $id("form").getElementsByTagName("div")[2].className += " err"
        }
    }
};

function inputBlur()
{
	if(this.innerText.trim()=="")
		this.innerHTML="";
}