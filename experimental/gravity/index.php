<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <link href='http://fonts.googleapis.com/css?family=Poiret+One|Open+Sans:300' rel='stylesheet' type='text/css' />
    <title>gravity</title>
    <script>
    	var icons= {"folder":'svg version="1.1" fill="#aaa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="folder-icon" d="M225.087,138.265c-12.762,0-25.004-5.055-34.048-14.059L158.35,91.66H50v328.68h412V138.265H225.087z"/></svg'
    		,"code":'svg version="1.1" fill="#aaa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="css-code-icon" d="M140.869,256c17.686,7.75,30.25,24.5,30.25,54v34.457c0,24.955,22.379,32.912,41.548,33.494v36.861	c-52.265,0-83.112-17.9-83.112-66.234v-38.383c0-24.547-19.499-35.537-39.353-35.537v-37.316c19.854,0,39.353-10.989,39.353-35.536	v-38.384c0-48.333,30.848-66.234,83.112-66.234v36.861c-19.169,0.582-41.548,8.539-41.548,33.495V202	C171.119,231.5,158.555,248.25,140.869,256z M340.881,202v-34.456c0-24.956-22.379-32.913-41.548-33.495V97.188	c52.265,0,83.112,17.901,83.112,66.234v38.384c0,24.547,19.499,35.536,39.353,35.536v37.316c-19.854,0-39.353,10.99-39.353,35.537	v38.383c0,48.334-30.848,66.234-83.112,66.234v-36.861c19.169-0.582,41.548-8.539,41.548-33.494V310c0-29.5,12.564-46.25,30.25-54	C353.445,248.25,340.881,231.5,340.881,202z"/></svg'
    		,"pic":'svg version="1.1" fill="#aaa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="image-file-2-icon" d="M173.443,245.694c0-12.111,9.82-21.932,21.933-21.932c12.111,0,21.932,9.82,21.932,21.932	c0,12.113-9.82,21.933-21.932,21.933C183.264,267.627,173.443,257.808,173.443,245.694z M284.686,248.659l-36.355,51.654	l-19.759-20.364l-55.747,75.149h174.26L284.686,248.659z M297.818,90v85.75h85.864V422H128.317V90H297.818 M322.818,50H88.317v412	h335.365V150.75L322.818,50z"/></svg'
    		,"html":'svg version="1.1" fill="#aaa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="html-code-icon" d="M282.521,137.595h39.674l-90.048,236.811h-39.452L282.521,137.595z M462,272.385L345.031,338.12	v-40.762l68.109-38.409l-68.109-38.014v-40.867L462,245.805V272.385z M50,245.805l116.97-65.736v40.867L98.86,258.949l68.109,38.409	v40.762L50,272.385V245.805z"/></svg'
    		};
    </script>
    <style>
        body {
            background:url('bg-body.jpg');
            margin:0px;
            padding:0px;
            font-family:'Open Sans', sans-serif;
            font-weight:300;
            padding:100px;
            padding-top:60px;
            }

		span.heading
		{
			font-size:48px;
			text-shadow: 0px 1px 1px #fff;
			display:block;
			margin-bottom:20px;
		}


		#container div
		{
			height:160px;
			width:160px;
			float:left;
		}

		#container div a:visited,a
		{
			height:120px;
			width:120px;
			margin:20px;
			color:#333;
			display:block;
			text-decoration: none;
			margin-bottom:0px;
			background:white;
			border-radius: 2px;
			box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
			
		}   
		
		
		
		#container div a div
		{
			margin:20px !important;
			margin-top:10px !important;
			margin-bottom:0px !important;
			width:80px;
			height:80px;
			
		}
		
		#container div a span
		{
			margin:5px !important;
			width:100px;
			height:20px;
			overflow: hidden;
			text-wrap: normal;
			word-wrap:break-word;
			white-space:nowrap;
    		text-overflow:ellipsis;
    		font-size:12px;
    		text-align:center;
			vertical-align:center;
			display:inline-block;
		}
		
		#container div a:hover,a:active
		{
			margin-top:25px;
			color:#333;
			box-shadow: 0px 0px 5px rgba(0,0,0,0.6);
		}
		#container div a:hover svg,a:active svg
		{
			fill:#666;
		}   
		
		#container
		{
			width:auto;
			max-width: 960px;
			margin-left:auto;
			margin-right:auto;
			height:auto;
		}
    </style>
    <script type="text/javascript" src="/resources/script/kjsanalytics.js"></script>
</head>
<body>

<div id="container">
<span class="heading">gravity</span>
<center>
<?php
	$files=shell_exec("ls -1");
	
	
	$files=explode("\n",$files);
	
	//echo count($files);
	
	function printTile($f,$i)
	{
		echo "<div><a href=\"".$f."\"><div><icons[".$i."]></div><span>".$f."</span></a></div>";
	}
	
	foreach($files as $file)
	{
		if(is_dir($file))
			printTile($file,"folder");
		else if(preg_match("(.html$)",$file))
			printTile($file,"html");
		else if(preg_match("(.cpp$|.c$)",$file))
			printTile($file,"code");
		else if(preg_match("(.jpg$|.jpeg$|.png$|.gif$|.psd$|.webp$)",$file))
		{
			if($file != "bg-body.jpg" )
			printTile($file,"pic");
		}	
			
		
	}
?>
</center>
</div>
<script>
	document.body.innerHTML=document.body.innerHTML.replace(/icons\[code\]/g,icons["code"]);
	document.body.innerHTML=document.body.innerHTML.replace(/icons\[html\]/g,icons["html"]);
	document.body.innerHTML=document.body.innerHTML.replace(/icons\[pic\]/g,icons["pic"]);
	document.body.innerHTML=document.body.innerHTML.replace(/icons\[folder\]/g,icons["folder"]);
</script>
</body>
</html>
