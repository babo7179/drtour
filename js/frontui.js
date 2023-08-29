
/* Document Ready */
$(document).ready(function() {

	//if ( $("html").length ) frontUI.screenSize();

	if ( $(".proDtoList").length ) frontUI.itemAutoSizing();  /* 20150806 tabautosizing */

	if ( $("#csCenter").length ) frontUI.office();

	if ( $(".btnAll").length ) frontUI.gnb();

	//if ( $(".search").length ) frontUI.searchInput();

	if ( $(".slider").length ) frontUI.sliderGraph();

	if ( $(".sideArea").length ) frontUI.quickMenu();

	if ( $(".searchArea").length ) frontUI.tab();

	if ( $(".top5Area").length ) frontUI.bestTop();

	if ( $(".bannerArea").length ) frontUI.bannerZone();

	if ( $("#priceSelect").length ) frontUI.priceTable();

	if ( $(".mapArea").length ) frontUI.japanMap();

	if ( $(".recieveInfo").length ) frontUI.buyPass();

	if ( $(".tableBox").length ) frontUI.includeBox();

	if ( $(".totalMenuControl").length ) frontUI.allMenu();

	if ( $("#departureCity").length ) frontUI.mainTab();
/*  2013-09-17  ??õð Ðì?×Ì ???? Øù? */
	if ( $(".sideArea").length ) frontUI.quickPaging();

	if ( $(".reservationTable").length ) frontUI.trHighlight();

	if ( $("#passMypageSelect").length ) frontUI.coaTableList();    /* 2014-02-18 em.lee 2???ÏÝ Pass Mypage*/

	if ( $("#insuranceMypageSelect").length ) frontUI.insuranceTableList();  /* 2014-02-18 em.lee 2???ÏÝ insurance Mypage*/
	
	// ?Öï Øù? ø¢??
	if($('#auto_q').val() == '') {$(this).siblings('label').show();} else {$(this).siblings('label').hide();}		
	$('#auto_q_txt').click(function(){ $('#auto_q_txt').hide();$('#auto_q').focus();});

	if ( $(".int_id").length ) frontUI.labelToggle(".int_id"); /* 20150710 label toggleØù? */

});