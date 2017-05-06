<?php


function validate($x)
{
	
	for($j=0;$j<9;$j++)
	{
		for($i=0;$i<9;$i++)
		{
			if($x[$i][$j]>0)
			{
				for($k=$i+1;$k<9;$k++)
				{
					if($x[$i][$j]==$x[$k][$j])
					{
						return false;
					}
				}
			}
		}
	}
	
	for($j=0;$j<9;$j++)
	{
		for($i=0;$i<9;$i++)
		{
			if($x[$j][$i]>0)
			{
				for($k=$i+1;$k<9;$k++)
				{
					if($x[$j][$i]==$x[$j][$k])
					{
						return false;
					}
				}				
			}
		}
	}
	
	$box=array();
	
	for($j=0;$j<9;$j+=3)
	for($i=0;$i<9;$i+=3)
	{
		for($b=0;$b<3;$b++)
		for($a=0;$a<3;$a++)
		{
			$box[$b*3+$a]=$x[$j + $b][$i+$a];
		}
		
		for($z=0;$z<9;$z++)
		{
			if($box[$z]>0)
			{
				for($k=$z+1;$k<9;$k++)
				{
					if($box[$z]==$box[$k])
					{
						return false;
					}
				}
			}
		}
	}
	
	return true;
	
}


	if(isset($_REQUEST['data']))
	{
		$data=$_REQUEST['data'];
		
		$sudoku=array(array());
	
		//if(strlen($data)!=81)
		//	exit("-1");
	
		for($i=0;$i<81;$i++)
		{
			if(!is_numeric((string)substr($data, $i, 1))){
				exit("-1");
			}
		
			$y=intval($i/9);
			$x=$i%9;
			
			$sudoku[$x][$y]=(int)substr($data, $i, 1);
			
		}
		
		/*for($j=0;$j<9;$j++)
		{
			for($i=0;$i<9;$i++)
			{
				echo $sudoku[$i][$j];
				echo " ";
			}	
			echo "<br>";
		}*/
		
		if(!validate($sudoku))
		{
			exit("-2");
		}
		
		$result=  shell_exec("./a.out $data");
		
		if($result=="overflow")
			exit("-1");
			
		echo $result;
	}

?>
