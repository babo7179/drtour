
$(function() {
	if($(".ui-selectbox").length){ $(".ui-selectbox").TBselectbox();}
	/* hotol info popslder */
	$(".hotel-info-slider").slick({
		prevArrow: $(".btn-prev"),
		nextArrow: $(".btn-next")
	});
	$("input:text").focus(function () {
		offPlaceHolder(this);
	}).blur(function () {
		onPlaceHolder(this);
	});
	
	/* gnb search bar */
	$(".btn-ActSearch").on("click",  function() {gnbSearchOpen(this);});
	$(".btn-gnb-search").on("click", function(){gnbSearchClose(".btn-ActSearch")});
	$(document).on("click",function(e){
		e.stopPropagation();
		e.preventDefault();
		var search = $(".gnb-search");
		if(search.has(e.target).length === 0) {
			gnbSearchClose(".btn-ActSearch")
		}
	});
	
	$(".accordion-wrap").accordDetail();

	function notice(){
		var noticeSlider = $(".head-rolling-list").bxSlider({mode: "vertical",infiniteLoop: true, pager: false,auto:true,controls: false});
		$(".btn-rolling-prev").off().on("click",function(){ noticeSlider.goToPrevSlide();return false;})
		$(".btn-rolling-next").off().on("click",function(){ noticeSlider.goToNextSlide();return false;})
	}
	notice();

	var floatingTab = {
		init:function(){
			if($("#floatingWrap").length){
				this.floatingbar = $("#floatingWrap");
				this.$header = $("#header");
				this.$detialView = $(".detail-view");
				this.$breadcrum = $(".breadcrum-inner");
				this.topHeight = this.$header.outerHeight() + this.$detialView.outerHeight() + this.$breadcrum.outerHeight()+this.floatingbar.outerHeight();
				this.$anchor = $("a",this.floatingbar);
				this.start = false;
				this.didScroll = false;
				this.scrolling= false;
				this.sections = {};
	
	
				this.scrollinterval();
				this.$anchor.on('click.floatingTab', $.proxy(this.handleClick, this));
				$(window).on('scroll', $.proxy(this.fixedScroll, this));
			}
		},
		scrollChange: function() {
			var windowTop = $(window).scrollTop();
			//var position = this.getSection(windowTop);
			var $parent;
	
			if(position !== null) {
				$ele = this.floatingbar.find('a[href$="#' + position + '"]')
				$parent = $ele.parent();
	
				if(!$parent.hasClass("on")) {
					if(this.scrolling) {
						this.scrolling($parent);
					}
				}
			}
	
		},
		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var $section = '#' + $link.attr('href').split('#')[1];
	
			if(!$parent.hasClass("on")) {
				self.changeNav($link, $parent)	
				self.unbindInterval();
				self.scrollTo($section);
			}
			e.preventDefault();
		},
		changeNav:function(ele,parent){
			if(!ele.parents("ul").is(".tab-dep2")){
				var dep1Layer = parent.find(".tab-inner"); //1dep
				$(".tab-inner").hide();
				dep1Layer.show();
				dep1Layer.find(".tab-dep2").css({
					'top':-10,
					'opacity':0,
				}).stop().animate({
					'top':0,
					'opacity':1
				},500,'easeOutExpo');	
			}
			parent.addClass("on").siblings("li").removeClass("on");
		},
		scrollTo:function(target){
			var self = this;
			var offset = $(target).offset().top;
			
			$('html, body').stop().animate({
				scrollTop: (offset - this.floatingbar.outerHeight())
				}, 500,	function(){
					self.scrollinterval();
			});	
		},
		fixedScroll:function(){
			var self = this;
			var offset = $(window).scrollTop();
			
			if (self.topHeight  < offset) {
				self.floatingbar.addClass("fixed");
				self.floatingbar.find(".floatingTab").animate({top: 0},0);
			}
			else { 
				if(self.floatingbar.hasClass("fixed")){
					self.floatingbar.removeClass("fixed");
					self.floatingbar.find(".floatingTab").removeAttr('style');
				}
			}
		},
		scrollinterval: function() {
			var self = this;
			var docHeight;
	
			//scroll event처리.....
			$(window).on('scroll.floatingTab', function() {
				self.didScroll = true;
			});
	
			self.t = setInterval(function() {
				if(self.didScroll) {
					self.didScroll = false;
					self.fixedScroll();
					//self.scrollChange();
				}
			}, 250);
		},
		unbindInterval: function() {
			clearInterval(this.t);
			$(window).unbind('scroll');
		}
	};
	floatingTab.init();





	var detailSlider = {
		init:function(){
			this.productImg();
			this.hotelInfo();
		},
		productImg:function(){
			var $targetSlider = $(".main-view ul");
			var $targetPager = $(".photo-list a")
			if($targetSlider.length){
				var product_slider = $targetSlider.bxSlider({
					controls: false,
					auto: false,
					mode:"fade",
					pagerCustom: $targetPager
				});
	
				$targetPager.click(function() {
					var idx = $targetPager.index(this);
					product_slider.goToSlide(idx);
				});
			}
		},
		hotelInfo:function(){
			var $wrapSlider = $(".hotel-gallery-wrap");
			var $subSlder = [];
			var bxConfig = {
				auto: false,
				controls: false,
				touchEnabled:false,
				slideWidth: '395'
				
			};
			$('.hotel-gallery-view ul').each(function (i) {
				$subSlder[i] = $(this).bxSlider(bxConfig);
				
			});
			if($wrapSlider.length){
				var hotol_slider = $wrapSlider.bxSlider({
					pager: false,
					infiniteLoop: false,
					touchEnabled:false,
					onSliderLoad:function(currentIndex){
						gotoSlide();
						subslider(currentIndex)
					},
					onSlideBefore: function($slideElement, oldIndex, newIndex){
						gotoSlide();
						subslider(newIndex)
						
					}
				});
				function subslider(idx){
					var $pager = $(".pager").eq(idx).find("a");
					if ($subSlder[idx] != null) {
						$subSlder[idx].destroySlider();
						$subSlder[idx].reloadSlider(bxConfig);
						$(".pager").find("a").removeClass("on");
						$pager.eq(0).addClass("on");
					}
					$pager.off().on("click",function(){
						var index = $pager.index(this);
						$(this).addClass("on").siblings().removeClass("on");
						$subSlder[idx].goToSlide(index);
					});
				}
				function gotoSlide() {
					var idx = hotol_slider.getCurrentSlide();
					var total = hotol_slider.getSlideCount();
					$('span.currentIdx').html(idx+1);
					$('span.totalIdx').html(total);
				}
			}
		}
	};
	detailSlider.init();

});


/* nav */
function nav(dep1, dep2) {
	var $obj = $(".gnb-typeB");
	var $item = $(".nav-dep1");
	var $anchor = $("a", $obj);
	var dep1Idx = 0;
	var gnbHeight = 97;
	
	/* 활성화 */
	$("a[data-midx="+ dep1 +"]").parent().addClass("on");
	$("a[data-midx="+ dep2 +"]").parent().addClass("on");
	dep1Idx = $item.filter(".on").index();
	$("#sub2Dep" + (dep1Idx + 1)+"").addClass("open");

	/*
	if(dep1Idx < 4 ){
		$obj.height(gnbHeight);
	
	}
*/
		$(document)
		.on('mouseenter', ".nav-dep1" , function(){
			var idx = $(".nav-dep1").index(this)
			if(idx < 4){
				$(".nav-dep2Layer").removeClass("open");
				$(this).addClass("on").siblings().removeClass("on")
				$obj.height(gnbHeight);
				$("#sub2Dep" + (idx + 1)+"").addClass("open");
		}
	});
	
}


/* 공통 input placeHolder */
function offPlaceHolder(input) {
	$(input).siblings(".txt_placeholder").addClass("hidden");
}

function onPlaceHolder(input) {
	if ($(input).val() == "") {
		$(input).siblings(".txt_placeholder").removeClass("hidden");
	}
}
/* 요금표 */
function optPrice(opt){
	var $obj = $(opt).closest(".opt-select-area");
	$(".opt-select-area").removeClass("open");
	$(".opt-dep2list").css("display","none");
	$obj.addClass("open");
	if($obj.next(".opt-dep2list").length !=0){
		$obj.next(".opt-dep2list").css("display","");
	}		
}

function gnbSearchOpen(e){
	var layer = $(e).siblings(".search-layer");
	if(!$(e).hasClass("is-open")){
		$(e).addClass("is-open");
		layer.addClass("is-open");
		//TweenMax.to(layer, 0.2 ,{alpha:1, width:"545px",x: "0",ease: Power2.easeInOut })
	}
	return false;
	
}
function gnbSearchClose(e){
	var layer = $(e).siblings(".search-layer");
	var input = layer.find("input:text");
	if($(e).hasClass("is-open")){
		$(e).removeClass("is-open");
		layer.removeClass("is-open");
		input.val("").siblings(".txt_placeholder").removeClass("hidden");
		//TweenMax.to(layer, 0.5 ,{alpha:0, width:"0",x: "0",ease: Power2.easeInOut,onComplete:function(){
		//	input.val("").siblings(".txt_placeholder").removeClass("hidden");
	//	}}); 	
	}
	return false;
}
/* dropdown */
function dropdown(that){
	var $this = $(that);
	
	$this.parents(".ui-dropdown").toggleClass("on");
	if($this.parent().hasClass("on")){
		$this.siblings().slideDown("fast");
	}else{
		$this.siblings().slideUp("fast");
	}		
}

/* sns */
function shareOpen(ele){
	var $ele = $(ele);
	if(!$ele.hasClass("is-open")){
		$ele.addClass("is-open");
		$ele.siblings().addClass("is-open");
	}
}
function shareClose(ele){
	var $btn = $(ele).closest("li").find(".ico-sns");
	$btn.removeClass("is-open");
	$btn.siblings().removeClass("is-open");
}



$.fn.accordDetail = function(options) {
	var defaults = {
		btn : " dt > a",
		layer :"dd"
	}
	options = $.extend(defaults, options);
	return this.each(function(i){
		var o = options
			, $obj = $(this)
			, $btn = $(o.btn, $obj)
			, $layer = $(o.layer, $obj);
			

		$btn.each(function(idx){
			$(this).click(function(){
				var $next = $(this).parent().next();
				if($(this).hasClass("on")){
					$btn.removeClass('on');
					$layer.slideUp();
				}else{
					$btn.removeClass('on');
					$layer.slideUp();
					$(this).addClass('on');
					$next.slideDown();
				}
			});
		});
	});
}


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

function openOptCont(ele){
	var $this = $(ele)
		,$wrapper = $(".opt-fixed-wrap")
		,$layer = $(".opt-content");
		
	if($layer.is(':visible')) {
		$('.opt-content').slideUp(500);
	} else {
		$('.opt-content').slideDown(500);
	}
	
	if($(".opt-tab").length) {
		var $opttab = $(".opt-tab");
		var $tabNav = $("a", $opttab);

		$tabNav.each(function(){
			$(this).on("click",function(){
				$opttab.find(".on").removeClass("on");
				$(this).closest(".opt-fixed-wrap").addClass("on");
				$(".opt-innerCont").hide();
				$(this.hash).fadeIn(200);
			});
		});
	}
}

/* tab Menu */
$.fn.tab = function(options) {
	var that = $(this);
	var setting = {
		navs:'> li',
		contents:'active',
		current:'on',
	}
	o = $.extend({}, setting , options);
	that.init = function () {
		that.find("a").on('click', show);
	}
	that.init();

	function show(e) {
		var $this = $(this), navs= that.find(o.navs),deps = $this.parent()[0],$current;
		if(e) {
			e.preventDefault();
		}
		if($.inArray(deps, navs) >= 0) {
			$this = $this.parent();
		}
		that.find("."+ o.current).removeClass(o.current);
		$this.addClass(o.current);
		$(this.hash).addClass(o.contents)
			.siblings().removeClass(o.contents);
		return false;
	}
	this.go = function(index) {
		that.find(o.navs).eq(index).trigger('click');
	};
	return this.each(function () {
		var elem = $(this);
	});

};


/* layerpopup */
function openLayer(target,vertical){
	var browser_width = $(window).width();
	var browser_height = $(window).height();
	var cont_width = $(target).outerWidth();
	var cont_height =$(target).outerHeight();
	var margin_top = Math.floor(cont_height /2) * (-1) + "px";
	var margin_left = Math.floor(cont_width /2) * (-1) + "px";
	var modal_width = Math.floor(browser_width) + "px";
	var modal_height = Math.floor(browser_height) + "px";
	var top = $(window).scrollTop() + (($(window).outerHeight() - cont_height) / 2);
	var ele ="";


	$(target).show();
	if(vertical === "fixed"){
		$(target).css({
			"position":"fixed",
			"left": "50%",
			"margin-left" : margin_left,
			"zIndex": "1001",
			"opacity": 0
		}).animate({
			"top":"50%",
			"margin-top" : margin_top,
			"opacity": 1
		});
	}else{
		$(target).css({
			"position":"absolute",
			"left": "50%",
			"margin-left" : margin_left,
			"zIndex": "1001",
			"opacity": 0
		}).animate({
			"top" : top,
			"opacity": 1
		});

	}
		// overray 생성
	var $overray = $("<div class='overray'></div>");
	$overray.height(Math.max($(window).height(), $(document.body).height())).appendTo($(document.body));

	$(target).find(".close").keydown(function(e){
		if(e.keyCode == 9 && !e.shiftKey){console.log($this);$(this).click()}
	})
}

function closeLayer(target) {
	$(target).hide();
	$(".overray").remove();
	return false;
}



	
