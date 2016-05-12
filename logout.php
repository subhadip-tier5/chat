<?php 
		 $base= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].substr($_SERVER['SCRIPT_NAME'], 0, strpos($_SERVER['SCRIPT_NAME'], basename($_SERVER['SCRIPT_FILENAME'])));
		$db=require_once('./connection.php');
		if($_SESSION['admin_log_in']=='')
		{
		$query1 = "update `users` set `login` ='0' WHERE `uid` = '".$_SESSION['user_log_id']."'";
		$results1 = mysql_query($query1);
		}
		$_SESSION['username'] ='';
		$_SESSION['log_in']='';	
		$_SESSION['admin_log_in']='';
		header("Location: ".$base);
	
?>