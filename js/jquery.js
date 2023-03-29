$(document).ready(function(){
	
	function adsVerEffect(){
		$("div#adscontainer").addClass("adsvercontainer container").css("width", leftPart);
		
		var divAdscontainerHeight = $("div#adscontainer").height();
		$("span#adstext").addClass("adsvertext adstext").css("top", divAdscontainerHeight);

		var spanAdstextHeight = $("span#adstext").height();
		var totalHeight = divAdscontainerHeight + spanAdstextHeight;

		$("span#adstext").animate({"top": '-=485'}, 30000, function(){
			adsVerEffect();
		});
	}

	function adsHorEffect(){
		$("div#adscontainer").addClass("adshorcontainer container").css("left", $("main").position().left).css("width", fullMain);

		var divAdscontainerWidth = $("div#adscontainer").width();
		$("span#adstext").addClass("adshortext adstext").css("left", divAdscontainerWidth);
		
		var spanAdstextWidth = $("span#adstext").width();
		var totalWidth = divAdscontainerWidth + spanAdstextWidth;

		$("span#adstext").animate({"left": "-=2219"}, 30000, function(){
			adsHorEffect();
		});
	}

	//-----------------------------------------------------------------------------//
	var d = new Date();
	var ads = "Khách hàng có ngày sinh trong tháng " +d.getMonth()+ " sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng."; 
	$("footer").append( "<div id='adscontainer'><span id='adstext'> <h2>"+ads+"</h2></span></div>");

	var fullScreen = $(window).width();
	var fullMain = $("main").width();
	var leftPart = (1/2)*(fullScreen-fullMain)-20;

	if(leftPart >= 200){
		adsVerEffect();
	}
	else{
		adsHorEffect();
	}

	//----------------------------------------------------------------------------//
	var headlineContent=[ 
		{	"title":"Bánh flan sữa chua - sự kết hợp hoàn hảo", 
			"photo":"images/headline/headline1.jpg"},
		{	"title":"Sữa chua làm từ sữa dê - đậm đà hương vị khó quên", 
			"photo":"images/headline/headline2.jpg"},
		{	"title":"Thưởng thức sữa chua theo cách của bạn", 
			"photo":"images/headline/headline3.jpg"}
	];

	$("#FeaturedNews").append("<div id='headline'></div>");
	for(var i=0; i<headlineContent.length; i++){
		var divContent = "<div><span><h3>"+headlineContent[i].title+"</h3></span><img src="+headlineContent[i].photo+"></div>";
		$("#headline").append(divContent);

		if(i>0){
			$("#headline div:last-child").hide();
		}
	}

	$(function(){
		setInterval();
	});

	function setInterval(){
		$("#headline div:first-child").delay(5000).fadeOut();
		$("#headline div:nth-child(2)").delay(5000).fadeIn(1000, function(){
			var firstChild = $("#headline div:first-child").html();
			
			$("#headline").append("<div>"+firstChild+"</div>"); 
			$("#headline div:last-child").hide();
			$("#headline div:first-child").remove();
			setInterval();
		});
	}
});
	