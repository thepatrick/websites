$(document).ready(function(){
	$('a[rel]').click(function(){
	  if($(this).is(".active")) {
  		$("." + $(this).attr("rel")).hide("slow");
  		$(this).removeClass("active");
	  } else {
  		$("." + $(this).attr("rel")).show("slow");
  		$(this).addClass("active");
	  }
		return false;
	});
});