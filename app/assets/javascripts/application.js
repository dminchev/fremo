// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {

	function remoteContent(selector, elements, destination) {
		selector
			.bind("ajax:loading",	function() {
				console.log('loading ...');
			})
			.bind("ajax:complete", function(event, data, status, xhr) {
				$(destination).html(data.responseText);
				remoteElements(destination, destination);
		});
	}

	function remoteElements(elements, destination) {
		remotePrepare();
		$(elements).children().each(function(){
			if ($(this).attr('data-remote')) {
				remoteContent($(this), elements, destination);
			}
		});
	}

	function remotePrepare() {
		$('.remote').each(function(){
			$(this).attr("data-remote", "true");
		});
	}

	if ($(".remote-navi").length > 0) {
		remoteElements(".remote-navi", ".remote-content");
	}

	if ($(".remote-navi-2").length > 0) {
		remoteElements(".remote-navi-2", ".other-remote-content");
	}

});