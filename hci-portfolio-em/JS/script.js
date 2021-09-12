
  
    $(".step").click( function() {
		$(this).addClass("active").prevAll().addClass("active");
		$(this).nextAll().removeClass("active");
	});
	
	$(".step01").click( function() {
		$("#line-progress").css("width", "10%");
		$("#intro").addClass("active").siblings().removeClass("active");
		document.body.scrollTop = document.documentElement.scrollTop=0;
	});
	
	$(".step02").click( function() {
		$("#line-progress").css("width", "38%");
		$("#data").addClass("active").siblings().removeClass("active");
		document.body.scrollTop = document.documentElement.scrollTop=0;
	});
	
	$(".step03").click( function() {
		$("#line-progress").css("width", "69%");
		$("#develop").addClass("active").siblings().removeClass("active");
		document.body.scrollTop = document.documentElement.scrollTop=0;
	});
	
	$(".step04").click( function() {
		$("#line-progress").css("width", "100%");
		$("#conclusion").addClass("active").siblings().removeClass("active");
		document.body.scrollTop = document.documentElement.scrollTop=0;
	});
	
