/*
*	Sobriety Calculator Client.
*	@package Sobriety Calculator
*	Plugin Name: Sobriety Calculator
*	Description: Calculate sobriety and display a message by range  
*	Version: 1.00
*	Author: Harrison DeStefano
*	Author URI: http://www.harrisondestefano.com
*/

HARRISONDESTEFANO = {
	// let's get this party started!
	init:function(){
		HARRISONDESTEFANO.navigation.interaction();	
	},
	// all things to do with moving around the ui
	navigation: {
		// navigation based click events captured from the ui
		interaction: function(){
			$('#navigation-menu a').on('click', function(){
				var item = $(this);
				var itemIndx = item.parent().index() + 3;
				console.log(itemIndx)
				// get that item and pull it into view
				HARRISONDESTEFANO.navigation.skipTo( $('#pageWrapper').children(':nth-child('+itemIndx+')'));
			});
		},
		// provide an object and bring said object into view via 
		skipTo: function(someElement){
			if(typeof(someElement) !== 'object'){
				return 'accept objects only, please pass an object';
			}
			else{
				var elementPosition = someElement.position().top;
				$("html, body").animate({ scrollTop: elementPosition });	
			}
		}
	}
}
// load
jQuery(document).ready( function(){
	// do not clobber 
	HARRISONDESTEFANO.init();
});