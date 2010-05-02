$(document).ready(function(){
	$('a[rel]').click(function(){
		$("." + $(this).attr("rel")).show("slow");
		$(this).addClass("active");
		return false;
	});
});