<?php
	function checkEmail($email)
	{
		if($email=="")
			return 2;
		if(preg_match("/^[\s]+$/",$email)==1)
			return 2;
		if(preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/",$email))
		{
			list($username,$domain)=split('@',$email);
			if(!checkdnsrr($domain,'MX'))
				return 0;
				
			return 1;
		}
		return 0;
	}
	
	function checkName($name)
	{
		if(preg_match("/^[0-9\._-\s]+$/",$name)==0 && preg_match("/^[a-zA-Z0-9\._-\s]+$/",$name)==1)
		{
			return 1;
		}
		return 0;
	}
	
	function checkMsg($msg)
	{
		if(preg_match('~[a-zA-Z]~', $msg))
		{
			return 1;
		}
		return 0;
	}
	
	
	if(isset($_POST['name']))
	{
		$name=checkName($_POST['name']);
	}
	else
		$name=0;
		
	if(isset($_POST['email']))
	{
	
		$email=checkEmail($_POST['email']);
	}
	else
		$email=1;
		
	if(isset($_POST['msg']))
	{
		$msg=checkmsg($_POST['msg']);
	}
	else
		$msg=0;
	
	if($email==2)
		$status="$name 1 $msg";
	else
		$status="$name $email $msg";
	
	echo $status;
	
	if($status=="1 1 1")
	{
		if($email==2)
			$email="";
		if($email==1)
			$email=$_POST['email'];
		$msg=$_POST['msg'];
		$name=$_POST['name'];
		
		$today=getdate();
		$file=$today['0'];
		
		$body="Name: $name<br /><br />Email: $email<br /><br />Message:<br />$msg";
		
		if(!file_exists("./mailbox/new/$file.html"))
			$file="./mailbox/new/$file.html";
		else
		{
			$i=1;
			while(file_exists("./mailbox/new/$file.$i.html"))
				$i=$i+1;
			
			$file="./mailbox/new/$file.$i.html";
		}
		
		$stream=fopen($file,'w');
		fwrite($stream,$body,strlen($body));
		fclose($stream);
		
		$link="http://karanjitsingh.com".(substr($file,1));
		
		$to      = 'karan1866@gmail.com';
		$subject = 'You were contacted at karanjitsingh.com by '.$name;
		$message = 'File: <a href="'.$link.'">'.$link.'</a>'.'<br /><br />'.$body;
		
		
		$headers = 'From: karanjitsingh.com <no-reply@karanjitsingh.com>' . "\r\n" .
		'Content-type: text/html; charset=iso-8859-1' . "\r\n".
    		'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $message, $headers);
	}
?>
