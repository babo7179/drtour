
var frontUI = frontUI || {};


// office
frontUI.office = function() {

	var office = $(".csListArea .csList a"),
		officeTxt = $(".csListArea .csList a:first-child"),
		listWrap = $("#csCenter"),
		list = listWrap.find("a");

	office.click(function() {
		if ( listWrap.is(":visible") ) {
			listWrap.hide();
		} else {
			listWrap.show();
		}
		return false;
	});

	list.click(function() {
		listWrap.hide();
		officeTxt.text($(this).text());
	});
}

// search
/*
frontUI.searchInput = function() {

	var $inputTxt = $("#header .search input"),
		$inputVal = $inputTxt.val();

	$inputTxt.bind({
		"focusin" : function() {
			$(this).val("");
		},
		"focusout" : function() {
			$(this).val($inputVal);
		}
	});
}
*/

	btnLeft.click(function() {

		if ( $(this).parents(".tablet").length ) {

			leftMenu.show();
			rightMenu.hide();

		} else {

			var nowWidth = parseInt(leftMenu.width());
				nowMargin = parseInt(leftMenu.css("margin-left"));

			if ( nowWidth != 525 ){
				leftMenu.stop(true, true).animate({
					"margin-left":nowMargin+160
				}, 600);
			}
			if ( nowMargin >= 0 ) {
				leftMenu.stop(true, true).animate({
					"margin-left":0
				}, 600);
			}
		}

	});
	

	/* 2014-03-17 Î©îÎâ¥ Î≤ÑÌäº ?ò§Î•? Ï≤òÎ¶¨ */
	btnArea.children("a.btnR").each(function() {
		$(this).on({
			"mouseenter touchstart" : function() {
				$(this).children("img").attr("src", "../images/common/bul_right_on.gif");
				$(this).css("background-color", "#66696c");
			},
			"mouseleave click" : function() {
				$(this).children("img").attr("src", "../images/common/bul_right.gif");
				$(this).css("background-color", "#fff");
			}
		});
	});
	btnArea.children("a.btnL").each(function() {
		$(this).on({
			"mouseenter touchstart" : function() {
				$(this).children("img").attr("src", "../images/common/bul_left_on.gif");
				$(this).css("background-color", "#66696c");
			},
			"mouseleave click" : function() {
				$(this).children("img").attr("src", "../images/common/bul_left.gif");
				$(this).css("background-color", "#fff");
			}
		});
	});


	 $("#gnb").children(".gnbMenu").find("a").each(function() {
	
		$(this).on({
			"mouseenter touchstart" : function() {
				 $("#gnb").children(".gnbMenu").find("a").removeClass("on");
				$(this).addClass("on");
			},
			"mouseleave touchend" : function() {
				$(this).removeClass("on");
			}
		});

	});

}

// quickMenu
frontUI.quickMenu = function() {

	var quick = $(".sideArea"),
		btnOpen = quick.children(".sideOpen"),
		quickWrap = quick.children(".sideInnerWrap"),
		quickOpen = quickWrap.children(".innerWrap"),
		quickClose = quickWrap.children(".innerWrapClose"),
		closeMenu = quickClose.find("a");

	if ( $(window).width() < 1110 ) quick.hide();

	if ( $(window).width() < 1280 ) close();

	$(window).resize(function() {
		if ( $(window).width() >= 1110 ) {
			quick.show();
		} else {
			quick.hide();
		}
		if ( $(window).width() < 1280 ) {
			close();
		} else {
			open();
		}
	});

	function close() {
		quick.css("width",46);
		quickOpen.hide();
		quickClose.show();
		btnOpen.css("top", "35%");/*?îåÎ°úÌåÖÎ∞∞ÎÑà ?ôú?Ñ±?ôî?ãú 59% Îπ?35%*/
		btnOpen.children("img").attr("src", btnOpen.children("img").attr("src").replace("close.png", "open.png"));

		if($(".float_banner").length){
			$(".float_banner a").children("img").attr("src", $(".float_banner a").children("img").attr("src").replace("/images/submain/170619_floating_bn02.png", "/images/submain/170619_floating_bn01.png"));
		}
	}

	function open() {
		quick.css("width",99);
		quickOpen.show();
		quickClose.hide();
		btnOpen.css("top", "45%");/*?îåÎ°úÌåÖÎ∞∞ÎÑà ?ôú?Ñ±?ôî?ãú 62% Îπ?45%*/
		btnOpen.children("img").attr("src", btnOpen.children("img").attr("src").replace("open.png", "close.png"));
		if($(".float_banner").length){
			$(".float_banner a").children("img").attr("src", $(".float_banner a").children("img").attr("src").replace("/images/submain/170619_floating_bn01.png", "/images/submain/170619_floating_bn02.png"));
		}

	}

    // [20130917 ?ò§?Ñ±???] ??µÎ≤Ñ?äº ?ã´Í∏?, ?ó¥Í∏? Ïø†ÌÇ§Í∞? ????û•
	btnOpen.click(function() {
        var quickOpenKind = "Y"
		if ( quickOpen.is(":visible") ) {
		    quickOpenKind = "N"
			close();
		} else {
		    quickOpenKind = "Y"
			open();
		}
		var ifrmQuickOpenURL = tourdomain+"/item/inc/PvItem_close.asp?PvItem_close="+quickOpenKind;
		if($("#ifrmQuickOpen").length > 0){
		    $("#ifrmQuickOpen").attr("src", ifrmQuickOpenURL);
		} else {
            $("body").append("<iframe id='ifrmQuickOpen' src='"+ifrmQuickOpenURL+"' style='display:none'></iframe>");
        }
		return false;

	});



	closeMenu.each(function() {

		$(this).on({
			mouseenter : function() {
				$(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png"));
			},
			mouseleave : function() {
				$(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png"));
			},
			click : function() {
				if ( $(this).parent("li").index() != 2 ) {
					open();
					return false;
				}
			}
		});

	});

	$(window).scroll(function(){
		var top = $(document).scrollTop(),
			contentTop = $("#content").position();

		if($(window).width() > 768){
			if ( top>=contentTop.top ) {
				quick.stop().animate({"top":top+10}, 500);
			} else {
				quick.stop().animate({"top":contentTop.top+15}, 500);
			}
		}
	});
}


// tab
frontUI.tab = function() {

	var $tabTrigger = $(".searchArea ul li h4 a"),
		$tabCon = $(".searchArea").find(".searchInput");

	$tabTrigger.each(function(i) {
		$(this).bind({
			click : function() {
				$tabCon.hide();
				$tabCon.eq(i).show();
				$tabTrigger.parent("h4").removeClass("on");
				$(this).parents("h4").addClass("on");
				return false;
			}
		});
	});

}

// top5
frontUI.bestTop = function() {
	var trigger_parent = $(".top5Area");

	trigger_parent.each(function(){
		var trigger = $(this).find("li");
		trigger.mouseenter(function() {
			trigger.removeClass("on");
			$(this).addClass("on");
				return false;
		});
	});
}

// priceTable
frontUI.priceTable = function() {

	var select = $('#priceSelect'),
		table = select.parents('table'),
		target = table.find('tbody').find('td');

	select.on({
		change : function() {
			var thisVal = $(this).find('option:selected').val();

			target.hide();
			target.filter('td.fix').css({"display":""});
			target.filter('td.'+thisVal).show();
		}
	});


// priceTable
frontUI.coaTableList = function() {

	var select = $('#passMypageSelect'),
		table = select.parents('table'),
		target = table.find('tbody').find('td');


	select.on({
		change : function() {
			//$('body').blur();
			var thisVal = $(this).find('option:selected').val();
			target.hide();
			target.filter('td.fix').css({"display":""});
			target.filter('td.swH001').show();
			target.filter('td.swH002').show();
			target.filter('td.'+thisVal).show();
		}
	});

}

// insuranceMypageSelect
frontUI.insuranceTableList = function() {

	var select = $('#insuranceMypageSelect'),
		table = select.parents('table'),
		target = table.find('tbody').find('td');


	select.on({
		change : function() {
			//$('body').blur();
			var thisVal = $(this).find('option:selected').val();
			target.hide();
			target.filter('td.fix').css({"display":""});
			target.filter('td.sw001').show();
			target.filter('td.sw002').show();
			target.filter('td.sw003').show();
			target.filter('td.'+thisVal).show();
		}
	});

	/*
	$(window).resize(function() {
		//target.css({"display":""});
		//select.children("option").attr("selected", "");
		//select.children("option").eq(0).attr("selected", "selected");
		var selectedIdx = $("#insuranceMypageSelect option").index($("#insuranceMypageSelect option:selected"));
		if (selectedIdx == 0)
		{
			target.css({"display":""});
			select.children("option").attr("selected", "");
			select.children("option").eq(0).attr("selected", "selected");
		}
	});

	*/
}

// japan map
frontUI.japanMap = function() {

	var mapArea = $(".mapArea"),
		btnHotel = mapArea.find(".type").children("button").eq(0),
		btnRyokan = mapArea.find(".type").children("button").eq(1),
		btnShow = $(".mapShow"),
		btnHide = $(".mapHide"),
		map = mapArea.children(".map"),
		wholeMap = $(".wholeMap"),
		localMap = $(".localMap"),
		ryokanMap = $(".ryokanMap"),
		wholeTrigger = wholeMap.children("a"),
		localTrigger = localMap.find("a"),
		ryokanTrigger = ryokanMap.children("a");


	btnHotel.click(function() {
		ryokanMap.hide()
		wholeMap.show();
		$(this).attr("class", "deBtn type4");
		btnRyokan.attr("class", "deBtn type3");
	});

	btnRyokan.click(function() {
		wholeMap.hide()
		ryokanMap.show();
		$(this).attr("class", "deBtn type4");
		btnHotel.attr("class", "deBtn type3");
		localMap.children("div").hide();
		mapArea.find(".wholeMap").children("a").removeClass("selected");
		imgOff();
	});

	btnShow.click(function() {
		map.css("border-bottom", "1px solid #dcdcdc");
		map.slideDown(600);
		btnShow.hide();
		btnHide.show();
	});

	btnHide.click(function() {
		map.css("border-bottom", 0);
		map.slideUp(400, function() {
			btnShow.show();
		});
		btnHide.hide();
		localMap.children("div").hide();
		mapArea.find(".wholeMap").children("a").removeClass("selected");
		imgOff();
	});

	wholeTrigger.on({
		mouseenter : function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png"));
		},

		mouseleave : function() {
			if ( !$(this).hasClass("selected") ) {
				$(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png"));
			}
		},

		click : function() {
			var thisName = $(this).attr("class");
			localMap.children("div").hide();
			localMap.children("div").filter("#"+thisName).show("scale", { percent: 100 }, 400);
			imgOff();
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png"));
			wholeTrigger.removeClass("selected");
			$(this).addClass("selected");
			return false;
		}
	});

	localTrigger.on({
		mouseenter : function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png"));
		},

		mouseleave : function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png"));
		}
	});

	ryokanTrigger.on({
		mouseenter : function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png"));
		},

		mouseleave : function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png"));
		}
	});

	function imgOff() {
		wholeTrigger.each(function() {
			$(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png"));
		});
	}

}

// buy pass
frontUI.buyPass = function() {

	var typeRadio = $(".buyingStep.select").find("input[type=radio]"),
		typeBox = $(".recieveInfo");

	typeRadio.click(function() {

		var thisClass = $(this).attr("class");

		typeRadio.attr("checked", false);
		$(this).attr("checked", true);
		typeBox.hide();
		typeBox.filter("."+thisClass).show();

	});
}


// seasonTour
function seasonTourUi(){
	var seasonTourUiIdx = 0;
	function seasonTourUiStart(){
		$("#seasonTourUl a").each(function(i){
			this.idx = i;
			$(this).css({"display":"block"});
		}); // addIdx;
		$("#seasonTourUl li").each(function(i){
			this.idx = i;
		}); // addIdx;
		$("#seasonTourUl li").each(function(i){
			$("#seasonTourUl li").each(function(i){
				var wid = (0==i) ? "46%" : "17.6%";
				$(this).css({ "width":wid });
			});
		}); // width ?Ñ§?†ï;
		$("#seasonTourUl a").bind("mouseover",function(){
			moveSeasonTourUl(this.idx);
		});

		function moveSeasonTourUl(iidx){
			var idx = iidx;
			seasonTourUiIdx = iidx;
			$("#seasonTourUl li").each(function(i){
				var wid = (this.idx==idx) ? "46%" : "17.6%";
				$(this).stop().animate({ "width":wid },200,function(){
					$("#seasonTourUl li").removeClass("on").eq(iidx).addClass("on");
				});
			});

		}

		//?îåÎ¶¨ÌÇπ UI?ãú?ûë.
		// init
		var nTouch = true; // ?ÉàÎ°úÏö¥ ?Ñ∞Ïπ?
		var isFlick = false; // ?îåÎ¶¨ÌÇπ Ï§ëÏù∏Í∞?
		var isScroll = false; // ?ä§?Å¨Î°? Ï§ëÏù∏Í∞?
		var sX = 0; // ?îåÎ¶¨ÌÇπ?ãú?ùò DIV XÏ¢åÌëú
		var sY = 0; // ?îåÎ¶¨ÌÇπ?ãú?ùò DIV YÏ¢åÌëú
		var sT; // ?îåÎ¶¨ÌÇπ ?ãúÍ∞?
		var oT = new Date().getTime(); // ?òÑ?û¨?ãúÍ∞?

		$("#seasonTourUl").bind("touchstart",function(event){
			var e = event.originalEvent.touches[0];
			sX = e.screenX;
			sY = e.screenY;
			sT = new Date().getTime();
			if(sT-oT<500){
				oT = sT;
				event.stopPropagation();
				event.preventDefault();
				return false;
			};
			oT = sT;
		});
		$("#seasonTourUl").bind("touchmove",function(event){
			var e = event.originalEvent.touches[0];
			if(nTouch && !isScroll){
				if(Math.abs(sX-e.screenX)>Math.abs(sY-e.screenY)){
					isFlick=true;
					nTouch=false;
				}else{
					isScroll = true;
				}
			};
			if(isFlick){
				var pWid = 1024; // ?îåÎ¶¨ÌÇπ?ù¥ ?ê† ?òÅ?ó≠?ùò Í∞?Î°úÍ∞í
				event.stopPropagation();
				event.preventDefault();
				var c=(((sX-e.screenX)/pWid)+aceIdx)* -pWid;
				$("#conWrap").css({"left":c+"px"});
			}
		});
		$("#seasonTourUl").bind("touchend",function(event){
			var eT = new Date();
			eT = eT.getTime();
			var e = event.originalEvent.changedTouches[0];
			if(isFlick){
				var d = sX-e.screenX;
				if(d<0){
					moveSeasonTourUl(((seasonTourUiIdx-1)+4)%4);
				}else if(d>0){
					moveSeasonTourUl(((seasonTourUiIdx+1)+4)%4);
				};
			};
			if(isScroll){
				isScroll = false;
			};
		});

	};
	function seasonTourUiDel(){
		$("#seasonTourUl li").attr("style","");
		$("#seasonTourUl a").unbind("mouseover");
	};
	$(window).resize(function(){
		if( $("html").hasClass("tablet") || $("html").hasClass("desktop") ){
			seasonTourUiStart();
		}else{
			seasonTourUiDel();
		};
	});
	if( $("html").hasClass("tablet") || $("html").hasClass("desktop") ){
		seasonTourUiStart();
	}else{
		seasonTourUiDel();
	};
};


// ?è¨?ï®Î∂àÌè¨?ï®
frontUI.includeBox = function() {

	var boxType0 = $(".tableBox.type0 "),
		boxType1 = $(".tableBox.type1"),
		boxType0H = $(".tableBox.type0").height(),
		boxType1H = $(".tableBox.type1").height();

	if ( $("html").hasClass("tablet") || $("html").hasClass("desktop") ) {
		if ( boxType0H > boxType1H ) {
			boxType1.css("height", boxType0H);
		} else if ( boxType0H < boxType1H ) {
			boxType0.css("height", boxType1H);
		}
	}

	$(window).resize(function(){
		if( $("html").hasClass("tablet") || $("html").hasClass("desktop") ){
			if ( boxType0H > boxType1H ) {
				boxType0.css("height", boxType0H);
				boxType1.css("height", boxType0H);
			} else if ( boxType0H < boxType1H ) {
				boxType0.css("height", boxType1H);
				boxType1.css("height", boxType1H);
			}
		} else {
			boxType0.css("height", "");
				boxType1.css("height", "");
		}
	});

}


// ?†ÑÏ≤¥Î©î?â¥ ?ò®?ò§?îÑ
frontUI.allMenu = function() {

	var btnAll = $(".btnAll"),
		totalMenu = $("#totalMenuControl")

	btnAll.on("click", function() {
		if ( totalMenu.is(":visible") ) {
			totalMenu.hide();
			btnAll.removeClass("on");
		} else {
			totalMenu.show();
			btnAll.addClass("on");
		}

	});

	$("#closeBtn").on( "click", function(){
		totalMenu.hide();
		btnAll.removeClass("on");
		return false;
	})

	/* 2015-05-18 Ï∂îÍ?? */
	$("a.totalMenuControl").on("click", function(e){ 
		e.preventDefault();
		
	});

}

// ?†ÑÏ≤¥Î©î?â¥ ?É≠
frontUI.mainTab = function() {

	var obj = $('#departureCity');
	var list = obj.find(">li");
	var oldLayer = $("#city1");

	list.bind( "click", displayControl );

	function displayControl( e ){
		var idx = $(this).index();
		var display = $($(this).find("a")[0].hash)
		oldLayer.hide();
		display.show();
		list.removeClass("on");
		list.eq(idx).addClass("on");
		oldLayer = display;
		return false;
	}

}

//  ??µÎ©î?â¥ ?éò?ù¥Ïß?
frontUI.quickPaging = function() {

	$("#curPage").text("1");
	$("#maxPage").text($(".todayGood").find(".inner").find("ul").length);
	$(".todayGood").find(".inner").find("ul").hide();
	$(".todayGood").find(".inner").find("ul").eq(0).show();

	$("#sidebarPrev").on("click", function () {
		if ($("#curPage").text() - 1 > 0) {
			$(".todayGood").find(".inner").find("ul").hide();
			$(".todayGood").find(".inner").find("ul").eq($("#curPage").text() - 2).show();
			$("#curPage").text(parseInt($("#curPage").text()) - 1);
			return false;
		} else {
			return false;
		}
	});

	$("#sidebarNext").on("click", function () {
		if ($("#curPage").text() < $(".todayGood").find(".inner").find("ul").length) {
			$(".todayGood").find(".inner").find("ul").hide();
			$(".todayGood").find(".inner").find("ul").eq($("#curPage").text()).show();
			$("#curPage").text(parseInt($("#curPage").text()) + 1);
			return false;
		} else {
			return false;
		}
	});

}

frontUI.itemAutoSizing = function() {

	/* 20150806 : ?ú†?†ï?†Å?ù∏ ?É≠Íµ¨Ï°∞ ?àò?†ï....... */
	$(document).ready(function(){
		if($(window).width() >= 1100){ // ?ç∞?Éë?ùº?ïåÎß? ?ã§?ñâ
			autoHeight();
		}
	});
	$(window).resize(function(){
		if($(window).width() >= 1100){
			autoHeight();
		}else{
			$('.proDtoList > div').css("height","auto")
		}
	});
		
	var autoHeight = function(){
			var  idx = null
				,nidx = null
				,$cDiv = $('.proDtoList > div')
				,$arrHeight = $cDiv.map(function(){ //Í∞ÅÎ∞∞?ó¥?ùò ?Üí?ù¥Í∞íÏùÑ Î¶¨ÌÑ¥?ï®
				 return $(this).height();}).get()
				,maxHeight = Math.max.apply(Math, $arrHeight); // Î∞∞Ïó¥Ï§? Í∞??û•?Å∞ ?Üí?ù¥
				
			//ie7, 8
			if (!Array.indexOf) {
				Array.prototype.indexOf = function (obj, start) {
					for (var i = (start || 0); i < this.length; i++) {
						if (this[i] == obj) {
							return i;
						}
					}
				}
			}
			mxidx = $arrHeight.indexOf(maxHeight) //Í∞??û•?Å∞?Üí?ù¥?ùÑ Í∞?ÏßÑÏïÑ?ù¥?ùò ?õê?ûò index
			if(mxidx % 2 == 1){
				var nidx = mxidx-1;
			}else{
				var nidx = mxidx+1;
			}
			//$cDiv.eq(nidx).height(maxHeight);
		}

}




 /* 20150710 label toggleÏ∂îÍ?? */
frontUI.labelToggle = function(obj){
	var  $obj = $(obj)
		, $input = $obj.find("input")
		, $label = $obj.find("label");


	$input.each(function(idx){
		if($(this).val().length != 0){
			$(this).next().addClass("out");
		}
		$(this).focus(function(){
			$(this).next().addClass("out");
		});
		$(this).blur(function(){
			if($(this).val().length == 0){
				$(this).next().removeClass("out");
			}
		});
	});


	$("input:text").focus(function () {
		offPlaceHolder(this);
	}).blur(function () {
		onPlaceHolder(this);
	}).on("keyup keypress", function (e) {
		return e.which !== 13;
	});


}


// Ï∂úÎ∞ú?ùºÎ≥¥Í∏∞ ?ïò?ù¥?ùº?ù¥?ä∏
frontUI.trHighlight = function() {
// .reservationTable ?ù∏ ?Öå?ù¥Î∏îÏù¥ AJAXÎ•? ?Üµ?ï¥?Ñú Î°úÎìúÍ∞? ?êòÍ∏? ?ïåÎ¨∏Ïóê complate?êò?äî ????ù¥Î∞çÏóê "frontUI.trHighlight();" Î≥? ?ï®?àòÎ•? ?ã§?ñâ?ïò?ó¨ Ï£ºÏãúÍ∏? Î∞îÎûç?ãà?ã§.

$(function(){
	setTimeout(function(){
		$(".reservationTable").find("td").each(function() {
			$(this).on({
				mouseenter : function() {
					$(".reservationTable").find("tr").css({"background-color":""});
					$(this).parent("tr").css({"background-color":""});
				},
				mouseleave : function() {
					
				}
			});
		});
	});
});
}

/* placeHolder */
function offPlaceHolder(input) {
	$(input).siblings(".txt_placeholder").addClass("screen_out");
}

function onPlaceHolder(input) {
	if ($(input).val() == "") {
		$(input).siblings(".txt_placeholder").removeClass("screen_out");
	}
}
