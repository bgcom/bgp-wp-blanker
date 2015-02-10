function parseDate(str,format) {
	format = typeof format !== 'undefined' ? format : "DD/MM/YYYY";
	
	if(format=="YYYY-MM-DD"){
		var reg = /^(19|20)\d\d\/|\.|\-(0[1-9]|1[012])\/|\.|\-(0[1-9]|[12][0-9]|3[01])$/;
	}
	else if(format=="MM-DD-YYYY"){
		var reg = /^(0[1-9]|1[012])\/|\.|\-(0[1-9]|[12][0-9]|3[01])\/|\.|\-(19|20)\d\d$/;
	}
	else{
		var reg = /^(0[1-9]|[12][0-9]|3[01])\/|\.|\-(0[1-9]|1[012])\/|\.|\-(19|20)\d\d$/;
	}
	
	var m = str.match(reg);
	return (m) ? new Date(m[3], m[2]-1, m[1]) : false;
}

$(document).ready(function(){
	
	if($(".game .slider").length>0){
		$(".game .slider").fitVids().flexslider({
			animation: "slide",
			smoothHeight: true,
			useCSS: false,
			video: true
		});
	}
	
	if($(".game section.before").length>0){
		$(".before .ctd span").countdown(bgpsup2.gm_sd, function(event) {
		
			var format = '%d days %H:%M:%S';
			
			if(event.offset.days==0 && event.offset.hours==0){
				format = '%M min %S sec';
			}
			else if(event.offset.days==0){
				format = '%H:%M:%S';
			}
			
			$(this).html(event.strftime(format));
		});
	}

});


$(document).ajaxStart(function() {
  $("#ajaxLoader").show();
});


$(document).ajaxStop(function() {
  $("#ajaxLoader").hide();
});