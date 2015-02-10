<?php

/*
Theme Name: BLANK
Theme URI: http://bgcom.ch
Description: A blank canvas theme for webdevelopers using WP
Author: Guillaume Molter - B+G & Partners SA, Montreux, Switzerland
Author URI: http://bgcom.ch
Version: 1.0
*/

/* 
 *
 * All the function code should go into /customize :
 * /customize/admin.php > All admin styles and tweaks code
 * /customize/ajax.php > All methodes to handle ajax calls via wp-admin
 * /customize/posts-taxos.php > All custom post and custom taxonomies code
 * /customize/widgets.php > If you use widgets they should be defined here
 * /customize/theme.php > All the code and tweaks realted to the this theme 
 * /customize/toolkit.php > Everything that doesn't fit in the previous files
 *
 */

require_once("customize/admin.php"); 
require_once("customize/ajax.php");
require_once("customize/theme.php"); 
require_once("customize/posts-taxos-roles.php");
require_once("customize/toolkit.php"); 
require_once("customize/layout.php"); 
?>