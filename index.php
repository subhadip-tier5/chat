<?php 
$db=require_once('./connection.php');
if($_SESSION['log_in']==1)
{
   $base= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].substr($_SERVER['SCRIPT_NAME'], 0, strpos($_SERVER['SCRIPT_NAME'], basename($_SERVER['SCRIPT_FILENAME'])));
  
  header("Location:".$base."chat.php");
}

?>




<!DOCTYPE html>
<html>
<head>


<!--META-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login Form</title>

<!--STYLESHEETS-->
<link href="../css/style.css" rel="stylesheet" type="text/css" />


<!--SCRIPTS-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript" src="../js/jquery.validate.js"></script>
<!--Slider-in icons-->
<script type="text/javascript">
$(document).ready(function() {
	$(".username").focus(function() {
		$(".user-icon").css("left","-48px");
	});
	$(".username").blur(function() {
		$(".user-icon").css("left","0px");
	});
	
	$(".password").focus(function() {
		$(".pass-icon").css("left","-48px");
	});
	$(".password").blur(function() {
		$(".pass-icon").css("left","0px");
	});

    $('.login-form').validate();
});
</script>
<style>
.error
{
    color:red;
}
</style>

</head>
<body>

<!--WRAPPER-->
<div id="wrapper">

	<!--SLIDE-IN ICONS-->
    <div class="user-icon"></div>
    <div class="pass-icon"></div>
    <!--END SLIDE-IN ICONS-->

<!--LOGIN FORM-->
<form name="login-form" class="login-form" action ="login.php" method="post">

	<!--HEADER-->
    <div class="header">
    <!--TITLE--><h1>Login</h1><!--END TITLE-->
    <!--DESCRIPTION--><span>Fill out the form below to Enter To The Chat Room.</span><!--END DESCRIPTION-->
    </div>
    <!--END HEADER-->
	
	<!--CONTENT-->
    <div class="content">
	<!--USERNAME--><input name="email" type="email" class="input username required email"  onfocus="this.value=''" placeholder="Email Address" /><!--END USERNAME-->
    <!--PASSWORD--><input name="pass" type="password" class="input password required"  onfocus="this.value=''" placeholder="Password"/><!--END PASSWORD-->
    <br><br>
     <input type="checkbox" value="1" name="is_admin"><span class="adm_clk">Click If Admin</span>
    </div>
    <!--END CONTENT-->
    
    <!--FOOTER-->

    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" name="submit" value="Login" class="button" /><!--END LOGIN BUTTON-->
    <!--REGISTER BUTTON <input type="submit" name="submit" value="Register" class="register" />END REGISTER BUTTON-->
    <!--<a  class="register" href="<?php echo $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME'];?>" > Home Page </a>-->
    <a  class="register" href="<?php echo $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'];?>" > Home Page </a>
    </div>
    <!--END FOOTER-->

</form>
<!--END LOGIN FORM-->

</div>
<!--END WRAPPER-->

<!--GRADIENT--><div class="gradient"></div><!--END GRADIENT-->

</body>
</html>