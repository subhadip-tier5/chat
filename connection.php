
<?php
session_start();
$link = mysql_connect('localhost', 'root', 'root');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db('chat', $link);
return $link;
?>
