<?php

	if(isset($_GET['l'])) {
	
		switch($_GET['l'])
		{
			case 'profile':
				 header('Location: https://docs.google.com/document/d/1WfNbRg6zwUpuyeQjUzlBFblnv5on4nGTMPb_Fo4YS4w/edit?usp=sharing');
				 break;
			default:
				 header('Location: http://karanjitsingh.com/');
		}
	}

?>