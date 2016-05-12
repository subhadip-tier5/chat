<?php 

require_once('./connection.php');
$base= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].substr($_SERVER['SCRIPT_NAME'], 0, strpos($_SERVER['SCRIPT_NAME'], basename($_SERVER['SCRIPT_FILENAME'])));
//exit;

if($_POST)
{
  	$email=$_POST['email'];
	$password=$_POST['pass'];
	$is_admin=$_POST['is_admin'];

	if($email!='' && $password!='')
	{

	if($is_admin==1)
	{
		
	$query = "SELECT * FROM `Admin` WHERE `email` = '".$email."' and `password` = '".md5($password)."'";
	$results = mysql_query($query);
	$row = mysql_fetch_assoc($results);
	

	if($row)
	{
		$_SESSION['username'] = $row['name'];
		$_SESSION['log_in']=1;	
		$_SESSION['user_log_id']= $row['id'];	
		$_SESSION['admin_log_in']=1;
		header("Location: ".$base."chat.php");
	}
	
	else
	{
		header("Location: ".$base);
	}

	}
	

	else
	{

		$query = "SELECT * FROM `users` WHERE `email` = '".$email."' and `password` = '".md5($password)."'";
		$results = mysql_query($query);
		$row = mysql_fetch_assoc($results);
		

		if($row)
		{
			$_SESSION['username'] = $row['fname']." ".$row['lname'];
			$_SESSION['log_in']=1;	
			$_SESSION['user_log_id']= $row['uid'];	
			$_SESSION['admin_log_in']='';
			$query1 = "update `users` set `login` ='1' WHERE `uid` = '".$row['uid']."'";
			$results1 = mysql_query($query1);
			header("Location: ".$base."chat.php");
		}
		
		else
		{
			header("Location: ".$base);
		}

	 }
	}		
}
?>