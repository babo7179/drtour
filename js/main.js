
$(function(){
	if($(".gnb-typeA").length) nav(".gnb-typeA .nav-menu");
	/* visual */
	$(".visual-slideList").on("init", function(){	
		var $this = $(this);
	}).slick({
		speed: 1000,
		autoplay:true,
		dot:true,
		fade:true,
		nextArrow: '.btn-visual-next',
		prevArrow: '.btn-visual-prev'
	});

	$(".tab-selectbox").tab_select();
	if($(".ui-selectbox").length){ $(".ui-selectbox").TBselectbox();}
	if($(".main-quickSearch").length){ 	mainQuickTab(".main-quickSearch");}

	/* slide */
	/* 홈쇼핑 TV */
	$(".hs-List").on("init", function(){	
		var $this = $(this);
	}).slick({
		infinite: true,
		speed: 500,
		cssEase: "linear",
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000});

	/* 돌발특가 */
	$(".unexp-list").on("init", function(){	
	var $this = $(this);
	}).slick({
		infinite: true,
		speed: 500,
		cssEase: "ease-in",
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000});


	$(".spot-list").on("init", function(){	
		var $this = $(this);
	}).slick({
	speed: 500,
	autoplay:false,
	slidesToShow: 1,
	dot:false,
	asNavFor: ".spot-nav",
	vertical:true,
	arrows: false
	});

	$(".spot-nav").on("unslick").slick({
	accessibility: false,
	autoplay: false,
	arrows: false,
	dots: false,
	slidesToShow: 5,
	draggable: true,
	infinite: false,
	vertical: true,
	verticalSwiping: true,
	verticalScrolling: true,
	centerMode: false,
	focusOnSelect: true,
	asNavFor: ".spot-list"
	});
	/* theme zone */
	themeSlide();
	/* 여행박사추천 */
	recomeSlide();
	/* 하단배너존 */
	bannerSlide();
 
});

/* nav */
function nav (obj) {
	var $obj = $(obj);
	var $item = $(".nav-dep1", $obj);

	$item.on("mouseenter",function(){
		$(this).addClass("on");
		$(this).find(".nav-dep2Layer").stop().slideDown("fast");
		//$(this).find(".arrow").show();
	});
	$item.on("mouseleave", function(){
		$(".nav-dep1").removeClass("on");
		$(".nav-dep2Layer").stop().slideUp("fast");
		//$(this).find(".arrow").hide();
	});
};


function mainQuickTab(obj){
	var $obj = $(obj)
		,$links = $('.quickSearch-tab li a',obj)
		,$content
		,$active;
		
	$active = $($links[0]).parent().addClass("active");
	$content = $($links[0].hash);
	$content.fadeIn("fast");
	$links.not($links[0]).each(function () {
		$(this.hash).hide();
	});
	$links.each(function(){
		$(this).on('click',function(e){
			$links.parent().removeClass('active');
			$content.hide();
			$active = $(this).parent();
			if(this.hash == "#tab-pack" || this.hash == "#tab-free"){
				$content = $('#tab-pack');
			}else{
				$content = $(this.hash);
			}
			$active.addClass('active');
			$content.fadeIn("fast");
			e.preventDefault();		
		});
	});
}


/* quick tab opend */
$.fn.tab_select = function(){
		return this.each(function(i){
		var $obj = $(this)
			, $btn = $(".btn-select", $obj)
			, $value = $(".value", $btn)
			, $list = $(".tab-select", $obj)
			, $options = $("li a", $list)
			, isopen = false;
			
		
		$btn.on('click', openLayer)
		$options.on('click', changeValue)

		function openLayer(){	
			$(".tab-select").removeClass("is-open");
			$btn.addClass("is-open");
			$list.addClass("is-open");
			return false;
		}
		function changeValue(e){
			var target = $(e.target);
			var li = target.parent();
			if(target.closest(".roomType-select").length != 0){return}
			if(target.is("a")){
				$value.text( target.text());
				$list.removeClass("is-open");
				$btn.removeClass("is-open");
				li.addClass('selected').siblings().removeClass('selected');
			}
			return false;
		}
	});
}
$(document).on('click',function(e){
	e.stopPropagation();
	var tabSelectBox = $('.tab-selectbox');
	if(tabSelectBox.has(e.target).length === 0) {
		$(".tab-select").removeClass("is-open");
		$(".btn-select").removeClass("is-open");
	}
});


$.fn.TBselectbox = function(){
	var $obj = $(this)
		, $btn = $(".btn-selBtn", $obj)
		, $value = $(".value", $btn)
		, $list = $(".tab-select", $obj)
		, $options = $("li a", $list);


		var selectBox = function (e) {
			e.stopPropagation();
			e.preventDefault();
			if (isOpened()) {
				closeSelectbox();
				clear();
			}
			else {
				openSelectbox();
				$(document).one('click', documentClick);
				$obj.find('.ui-select-list > li').one('click', ListClick);
			}
		};
		$obj.on('click', selectBox);

		var openSelectbox = function () {
			$('.ui-selectbox').removeClass('on');
			$obj.addClass('on');

		};
		var closeSelectbox = function () {
			$obj.removeClass('on');
		};
		var isOpened = function () {
			return $obj.hasClass('on');
		};
		var documentClick = function () {
		closeSelectbox();
		clear();
		};
		var ListClick = function (e) {
			// document click event 전달 방지
			e.stopPropagation();
			e.preventDefault();
			
			var $target = $(e.target);
			var value = $target.attr('value'); //input or radio
			var text = $target.text();
		
			$value.text(text);
			closeSelectbox();
			clear();
		};
		var clear = function () {
			$options.off('click', ListClick);
			$(document).off('click', documentClick);
		};
};


function themeSlide(){
	var themeSlider = $(".slide-theme-list").bxSlider({infiniteLoop: true, pager: false,auto:true,controls: false})
	var allianceSlider = $(".slide-alliance-list").bxSlider({infiniteLoop: true, pager: false,auto:true,controls: false})
	
	$(".btn-theme-prev").off().on("click",function(){ themeSlider.goToPrevSlide();return false;})
	$(".btn-theme-next").off().on("click",function(){ themeSlider.goToNextSlide();return false;})
	$(".btn-alliance-prev").off().on("click",function(){ allianceSlider.goToPrevSlide();return false;})
	$(".btn-alliance-next").off().on("click",function(){ allianceSlider.goToNextSlide();return false;})
}

function bannerSlide(){
	var option = {
		mode: 'horizontal',infiniteLoop: true, pager: false,auto:true,controls: false,speed: 1000
	}
	var exhibitionSlider = $(".exhibition-bnrlist ul").bxSlider(option);
	var eventSlider = $(".event-bnr-list ul").bxSlider(option);

	$(".btn-exhib-prev").off().on("click",function(){ exhibitionSlider.goToPrevSlide();return false;})
	$(".btn-exhib-next").off().on("click",function(){ exhibitionSlider.goToNextSlide();return false;})
	$(".btn-event-prev").off().on("click",function(){ eventSlider.goToPrevSlide();return false;})
	$(".btn-event-next").off().on("click",function(){ eventSlider.goToNextSlide();return false;})

}

function recomeSlide(){
	var tabItem = $(".recome-tab a");

	var recomeSlider = $('.recome-list').bxSlider({
		infiniteLoop: true, pager: false,auto:false, controls: false,
		onSliderLoad: function(currentIndex){
			tabItem.removeClass("active");
			tabItem.eq(currentIndex).addClass("active");
		},
		onSlideNext: function($slideElement, oldIndex, newIndex) {
			recomeSlider.goToNextSlide(newIndex)
			tabItem.removeClass("active");
			tabItem.eq(newIndex).addClass("active");
		},
		onSlidePrev: function($slideElement, oldIndex, newIndex) {
			recomeSlider.goToPrevSlide(oldIndex)
			tabItem.removeClass("active");
			tabItem.eq(oldIndex).addClass("active");
		}
	})
	
	tabItem.each(function(index){
		$(this).click(function(){
			tabItem.removeClass("active");
			$(this).addClass("active");
			recomeSlider.goToSlide(index);
			return false;
		});
	});
	$(".btn-recome-prev").off().on("click",function(){ recomeSlider.goToPrevSlide();return false;})
	$(".btn-recome-next").off().on("click",function(){ recomeSlider.goToNextSlide();return false;})

}
