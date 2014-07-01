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
		HARRISONDESTEFANO.navigation.offcanvas();
	},
	// method uses github api to pull information from user defined repos at runtime. The method expects an array of repos
	github:{
		// add data to page
		add: function(json){
			var template = '<div class="comment">'
			  +'<div class="comment-image">'
			  	+'<div class="icon-git"></div> ' 
			  +'</div>'
			  +'<div class="comment-content">'
			    +'<h1>'+json.name+'</h1>'
			    +'<p>A little plugin to set, get, and remove cookies.</p>'
				 +'<p class="comment-detail">Created @ '+json.created_at+' Pushed @ '+json.pushed_at+'</p>'
				 +'<p class="comment-detail">Clone</p>'
				 +'<label class="label-switch">'
				 	+'<input type="checkbox" onchange="if($(this).parent().siblings(\'input\').attr(\'disabled\')===\'disabled\'){ $(this).parent().siblings(\'input\').attr(\'disabled\', false);}else{$(this).parent().siblings(\'input\').attr(\'disabled\', true);};"/>'
				 +'<div class="checkbox"></div>'
				+'</label>'
				+'<input disabled="disabled" type="search" value="'+json.clone_url+'"/>'
			  +'</div>'
			+'</div>';
			// add to DOM
			$(template).insertAfter( $('.progress-bar') );
			// remove progress bar, set up a little false loading
			if( $('.comment').length === HARRISONDESTEFANO.github.respositiores.length){
				// count up to loader up to 100%
				try{
					var meter = $('.meter');
					meterReading = meter.attr('style');
					meterReading = parseInt(meterReading.split(' ')[1]);
					while( meterReading < 100 ){
						meterReading = meterReading + 1;
						meter.css('width', meterReading+'%');	
					}
					$('.progress-bar').removeClass('loading').addClass('complete');
				}
				catch(error){
					return error;
				}
				
			}
		},
		// request data from github and retun as json
		pull: function(repositories){
			var i = 0;
			for(repo in repositories){
				junk = repositories;
				var repo = repositories[i].repo;
				var user = repositories[i].user;
				// make ajax request for github data
				$.ajax({
					url: 'https://api.github.com/repos/'+user+'/'+repo,
					dataType: 'json',
					error: function(textStatus, errorThrown, jqXHR ){ 
						return 'error pulling repository';						
					},
					type: "GET",
					success: function(json){
						HARRISONDESTEFANO.github.add(json);
					}
				});	
				i++;
			}
		},
	},
	// all things to do with moving around the ui
	navigation: {
		// navigation based click events captured from the ui
		interaction: function(){
			$('.nav a').on('click', function(){
				var item = $(this);
				// get the position of the current element and relate said position to the overall DOM structure. 
				if( item.parent().parent().parent().hasClass('footer-links') === true){
					itemIndx = item.parent().index() + 2;
				}
				else{
					itemIndx = item.parent().index() + 3;
				}
				// get that item and pull it into view
				HARRISONDESTEFANO.navigation.skipTo( $('#pageWrapper').children(':nth-child('+itemIndx+')'));
			});
		},
		offcanvas: function(){
			var menu = $('#navigation-menu');
			  var menuToggle = $('#js-mobile-menu');
			  $(menuToggle).on('click', function(e) {
			    e.preventDefault();
			    menu.slideToggle(function(){
			      if(menu.is(':hidden')) {
			        menu.removeAttr('style');
			      }
			    });
			  });
			
			
		},
		// provide an object and bring said object into view via 
		skipTo: function(someElement){
			if(typeof(someElement) !== 'object'){
				return 'accept objects only, please pass an object';
			}
			else{
				// remove the fixed header height
				var elementPosition = (someElement.position().top) - 60;
				// get that bad boy into view, please.
				$("html, body").animate({ scrollTop: elementPosition });	
			}
		}
	}
}
// load
jQuery(document).ready( function(){
	// do not clobber 
	HARRISONDESTEFANO.init();
	HARRISONDESTEFANO.github.respositiores = [
		{
			repo:'cookies',
			user:'harrisonde'
		},
		{
			repo:'cleanbox',
			user:'harrisonde'
		}
	]
	HARRISONDESTEFANO.github.pull(HARRISONDESTEFANO.github.respositiores);
});