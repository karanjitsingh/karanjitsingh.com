function reset()
{
	document.getElementById("invalid").style.display="none";
	var list= document.getElementsByTagName('input');

	for(var i=0;i<81;i++)
	{
		list[i].className="";
		list[i].value="";
	}
}

function getcell(r)
{
	var list= document.getElementsByTagName('input');
	var j=parseInt((r-1)/27);
	var i=parseInt(((r-1)%9)/3);
	var x=parseInt((r-j*27 -1)/9)*3 + parseInt(((r-1)%9)%3);
	return j*27 + i*9 + x;
}

function getbox(r)
{
	var list= document.getElementsByTagName('input');
	var j=parseInt((r-1)/27);
	var i=parseInt(((r-1)%9)/3);
	
	return j*3 +i;
}


function gotocell(r)
{
	var list= document.getElementsByTagName('input');
	var j=parseInt((r-1)/27);
	var i=parseInt(((r-1)%9)/3);
	var x=parseInt((r-j*27 -1)/9)*3 + parseInt(((r-1)%9)%3);
	list[j*27 + i*9 + x].focus();
	
}

function down(e)
{
var src=e.srcElement.tabIndex;

switch(e.keyCode)
{
	case 37:
	case 65:
		if((src-1)%9==0)
		{
		
		}
		else
			gotocell(src-1);
			break;
	case 39:
	case 68:
		if((src)%9==0)
		{
		
		}
		else
			gotocell(src+1);
			break;
	case 38:
	case 87:
		if(src<10)
		{
		
		}
		else
			gotocell(src-9);
			break;
	case 40:
	case 83:
		if(src>72)
		{
		
		}
		else
			gotocell(src+9);
			break;
}


	
	if((e.keyCode>48 && e.keyCode<58)||e.keyCode==8)
	{	
		e.srcElement.className="";
		e.srcElement.value="";
	}
	else if(e.keyCode==48)
	{
		e.srcElement.value="";
		e.preventDefault();
	}
	else if(e.keyCode==9){}
	else
		e.preventDefault();
}
function validate()
{
	document.getElementById("invalid").style.display="none";
	var list= document.getElementsByTagName('input');
	var v=true;
	
	var su=""
	
	var x = new Array(9);
  	for (var i = 0; i < 9; i++)
    	x[i] = new Array(9);

	for(var j=0;j<9;j++)
	{
		for(var i=0;i<9;i++)
		{
			if(list[getcell(j*9 +i + 1)].value!="")
			{
				
				x[i][j]=list[getcell(j*9 +i + 1)].value;
				su+=x[i][j] + "";
				list[getcell(j*9 +i + 1)].className="";
			}
			else
			{
				x[i][j]=0;
				su+="0";
			}
		}
	}
	
	for(var j=0;j<9;j++)
	{
		for(var i=0;i<9;i++)
		{
			if(x[i][j]>0)
			{
				for(var k=i+1;k<9;k++)
				{
					if(x[i][j]==x[k][j])
					{
						list[getcell(j*9 +i + 1)].className="error";
						list[getcell(j*9 +k + 1)].className="error";
						v=false;
					}
				}
				
				
			}
		}
	}
	
	for(var j=0;j<9;j++)
	{
		for(var i=0;i<9;i++)
		{
			if(x[j][i]>0)
			{
				for(var k=i+1;k<9;k++)
				{
					if(x[j][i]==x[j][k])
					{
						list[getcell(i*9 +j + 1)].className="error";
						list[getcell(k*9 +j + 1)].className="error";
						v=false;
					}
				}
				
				
			}
		}
	}
	
	for(var a=0;a<9;a++)
	{
		for(var i=0;i<9;i++)
		{
			if(list[a*9 + i].value>0)
			{
				for(var k=i+1;k<9;k++)
				{
					if(list[a*9 + i].value==list[a*9 + k].value)
					{
						list[a*9 + i].className="error";
						list[a*9 + k].className="error";
						v=false;
					}
				}
			}
		}
	}
	
	
	if(!v)
		return false;
	else
		return su;
	
}

function submit()
{
var list= document.getElementsByTagName('input');
var data=validate();
	if(data)
	{
		
		var xmlhttp;
		if (window.XMLHttpRequest)
  			xmlhttp=new XMLHttpRequest();
		else
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	
		xmlhttp.onreadystatechange=function()
  		{
  			if (xmlhttp.readyState==4 && xmlhttp.status==200)
    		{
    			
    			var result=xmlhttp.responseText;
    			if(result=="-1")
    				document.getElementById('invalid').style.display="table-cell";
    			else if(result=="-2")
    				validate();
    			else
    			{
    				for(var i=0;i<81;i++)
    				list[getcell(i+1)].value=result.charAt(i);
    			}
    		}
  		}
	
		xmlhttp.open("POST","solve.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("data=" + data);
	}
}

function loaded()
{

	var list= document.getElementsByTagName('input');
	
	for(var i=0;i<81;i++)
	{
		list[i].onkeydown=down;
		//list[i].value=i+1;
	}
	
}