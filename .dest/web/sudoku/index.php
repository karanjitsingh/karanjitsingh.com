<html>

<head>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<head>
    <meta name="keywords" content="sudoku solver,solver,sudoku">
	<title>Sudoku Solver</title>
    <link rel="SHORTCUT ICON" href="icon.ico">
    <link href="scripts/style.css" rel="stylesheet">
    <script type="text/javascript" src="scripts/script.js"></script>
</head>

<body onLoad="loaded()">
<table style="width:100%; padding-bottom:60px;">
<tr>
<td class="heading">
Sudoku Solver
</td>
</tr>
<tr>
<td>
<table style="padding:12px 40px 8px 40px; background:#ddd;" align="center" >
<?php
	//$table="<table class=\"mini\"><tr><td></td><td/><td/></tr><tr><td></td><td/><td/></tr><tr><td></td><td/><td/></tr></table>";
	function printTable($x,$y)
	{
	$table="<table class=\"mini\">";
	for($i=0;$i<3;$i++)
	{
		$table.= "<tr>";
		
		for($j=0;$j<3;$j++)
		{
			$table.= "<td><input type=text tabindex=".($j +$i*9 + $y*27 + $x*3 +1)."/></td>";
		}
		
		$table.= "</tr>";
	}
	$table.="</table>";
	
		return $table;
	}
	for($i=0;$i<3;$i++)
	{
		echo "<tr>";
		
		for($j=0;$j<3;$j++)
		{
			echo "<td>".printTable($j,$i)."</td>";
		}
		
		echo "</tr>";
	}
?>
<tr><td id="invalid" colspan="3">Invalid Sudoku</td></tr>
</table>
</td>
</tr>
<tr>
<td>
<table style="padding:11px 44px 12px 44px; background:#ddd; margin-top:10px;" align="center">
<tr>
<td ><input type=button class=button value="clear" style="margin-right:20px" onClick="reset()" tabindex=82/><input type=button class=button value="solve" onClick="submit()" tabindex=83/></td>
</tr>
</table>
</td>
</tr>
</table>
<a  class="button download" href="https://github.com/karanjitsingh/buoyancy/tree/master/Sudoku%20Solver" tabindex=84>Source Code</a>
</body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41972386-1', 'karanjitsingh.com');
  ga('send', 'pageview');

</script>
</html>
