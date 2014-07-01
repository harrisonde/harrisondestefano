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
		<script href="js/vendor/jQuery-10.1.2.js" type="text/javascript"></script>
		<script src="js/vendor/jQuery-10.1.2.js" type="text/javascript"></script>
		<script src="js/client.js" type="text/javascript"></script>
	</head>
	<body>
	<section id="pageWrapper">
<?php
	 require('templates/header.php');
	 require('templates/hero.php');
	 require('templates/griditems.php');
	 require('templates/block.php');
	 require('templates/github.php');
	 require('templates/footer.php');
?>