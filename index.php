<?php
	/**
	 * The main template file 
	 *
	 * Harrison DeStefano
	 * harrison.destefano@gmail.com
	 *
	 * This is the main template file that calls all the other files.
	 * Without this file all would be lost.
	 *
	 */
?>
<html>
	<head>
	    <title>Harrison DeStefano</title>
	    
		<link href="css/normalize.3.0.1.css" media="screen" rel="stylesheet" type="text/css">
		<link href="css/styles.css" media="screen" rel="stylesheet" type="text/css">
	</head>
	<body>
	<section id="pageWrapper">
<?php
	 require('header.php');
	 require('hero.php');
	 require('griditems.php');
	 require('block.php');
	 require('github.php');
	 require('footer.php');
?>