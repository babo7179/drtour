// ���� Loading ȭ�� : ���� ���� ����  javascripr ����  ����ϴ� �κ��� �ϰ� ���� �ϱ�
var loading = '<div style="width:100%;height:120px;text-align:center;padding:5px;"><img alt="loading" src="/images/ajax-loader.gif" /></div>';
var loading_line = '<div style="width:100%;height:120px;text-align:center;padding:5px;"><img alt="loading" src="/images/ajax-loader_line.gif" /></div>';
var loading_small = '<div style="width:100%;height:120px;text-align:center;padding:5px;"><img alt="loading" src="/images/APloader.gif" /></div>';

var SSLsite = "https://ssl.tourbaksa.com"
//var SSLsite = "http://www.tourbaksa.com"
var SSLnosite = "http://www.tourbaksa.com"

var tourdomain;
var hotel_siteURL;
if (document.domain == "hotel.tourbaksa.com" || document.domain == "www.tourbaksa.com"){
    tourdomain = "http://www.tourbaksa.com"
    hotel_siteURL = "http://hotel.tourbaksa.com"
} else {
    tourdomain = "http://www.tourbaksa.com"
    hotel_siteURL = "http://booking.tourbaksa.com"
}

//[150409 Harin] ȣ�� ���˽� ó��////////////////////
var _date  = new Date();
var _year  = _date.getFullYear();
var _month = "" + (_date.getMonth() + 1);
var _day   = "" + _date.getDate();
var _hours = "" + _date.getHours();
var _minutes = "" + _date.getMinutes();
if( _month.length == 1 ) _month = "0" + _month;
if( _day.length == 1 ) _day = "0" + _day;
if( _hours.length == 1 ) _hours = "0" + _hours;
if( _minutes.length == 1 ) _minutes = "0" + _minutes;
var datetime_now = "" + _year + _month + _day + _hours + _minutes;
var Hotel_Connect_ErrorMSG = ""
var Rent_Connect_ErrorMSG  = ""
if(datetime_now > "201504120059" && datetime_now < "201504120500"){
	Hotel_Connect_ErrorMSG = "�ؿ�ȣ�� ���� ���� ���Դϴ�.\n\n���� �ð� : 2015�� 4�� 12��(��) ���� 1:00 ~���� 5:00"
	Rent_Connect_ErrorMSG  = "��Ʈī ���� ���� ���Դϴ�.\n\n���� �ð� : 2015�� 4�� 12��(��) ���� 1:00 ~���� 5:00"
}
/////////////////////////////////////////////////////

var NewOpenWidnow = "";
var MovingYN = "N";

//####################################################
// �߿�!!! ������ ó�� ������ �ε��ÿ� ���� �Ǵ� �κ��� �������� ����
//####################################################
//$(document).ready(function(){
//	var currentPosition = parseInt($(".sideArea").css("top"));
//	$(window).scroll(function() {
//		var position = $(window).scrollTop(); // ���� ��ũ�ѹ��� ��ġ���� ��ȯ�մϴ�.
//		$(".sideArea").stop().animate({"top":position+currentPosition+"px"},1000);
//	});
//});
//####################################################

/* ��� : ��� ����� �ڵ��ϼ� ��� �κ�*/
function SearchDisplay(){
	if ($(".autoCompletion").css("display") == "none"){
		$(".autoCompletion").css("display", "block");
		$("#q").focus();
	}
	else{
		//$("#q").blur();
		$(".autoCompletion").css("display", "none");

	}

	//AutoCompleteONOFF();
}

function top_go_Enter() {          //����Ű �Է½� �̺�Ʈ
	if (event.keyCode == 13) {          // ���� �Է½� ��ȸ
		event.returnValue = false;
		//search();
		SearchSubmit();
	}
}

/*��� �˻� ��ư */
function SearchSubmit(){
	var f = document.searchTop;

	if (Search_Word != "")
	{
		if (f.q.value == "")
		{
			alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
			return false;
		}
		else if (Search_URL != "" && f.q.value == Search_Word)
		{
			f.q.value = Search_Word;
			f.action = Search_URL;
			f.method = "post";
			f.submit();
		}
		else{
			f.submit();
		}

	}else{
		if (f.q.length < 1)
		{
			alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
			return false;
		}
		else{
			if (f.q.value == "")
			{
				alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
				return false;
			}
			else{
				f.submit();
			}
		}
	}
}

/*��� �˻� ��ư 2015-07-06 target �߰� by wendy */
function SearchSubmit2(){
//	if (_LoginUserID == "2330") {
//		alert('1');
//	}
	var f = document.searchTop;
	if(f.searchTarget.value != "")
	{
		f.target = f.searchTarget.value;
	}
//	if (_LoginUserID == "2330") {
//		if(f.q.value=="��¥����"){
//			location.href = "http://www.tourbaksa.com/pr/view_v2.asp?idx=5078";
//			return false;
//		}
//		if(f.q.value=="�Ｚī��"){
//			location.href = "http://www.tourbaksa.com/promotion/2016/1206_samsungcard/index.asp";
//			return false;
//		}
//	}
	if (Search_Word != "")
	{
		
		if (f.q.value == "")
		{
			alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
			return false;
		}
		else if (Search_URL != "" && f.q.value == Search_Word)
		{
			//location.href = Search_URL;

			f.q.value = Search_Word;
			f.action = Search_URL;
			f.method = "post";
			f.submit();
		}
		else{
			f.submit();
		}

	}else{

		if (f.q.length < 1)
		{
			alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
			return false;
		}
		else{
			if (f.q.value == "")
			{
				alert("�ּ� 1 ���� �̻��� �Է� ���ֽñ� �ٶ��ϴ�.");
				return false;
			}
			else{
				f.submit();
			}
		}
	}
}

/* �ڵ� �ϼ����*/
function AutoComplete(){
	if ($("#q").val().length > 1)
	{
		$("#WordArea").html(loading_small);
		$("#categoryArea").html(loading_small);
		CategoryAutoComplete();
		$.ajax({
			url: '/xml/AutoComplete_xml.asp',
			data : 'aq=' + $("#q").val(),
			type: 'GET',
			dataType: 'xml',
			timeout: 1000,
			error: function(){
			},
			success: function(xml){
				var itemText = "";
				$(xml).find('item').each(function(){
					itemText = $(this).text();
					if (itemText != "-")
					{
						$("#WordArea").html(itemText);
					}

				});
			}
		});

	}

}

function CategoryAutoComplete(){
	var cnt = 0;
	var menuhtml = "<ul>";
	var xCnt = 0;
	$.ajax({
		url: '/xml/search_bridge.asp',
		data : 'query=' + $("#q").val() + "&collection=MenuCategory&listCount=3" ,
		type: 'GET',
		dataType: 'xml',
		timeout: 1000,
		error: function(){
		},
		success: function(xml){
			$(xml).find('Result').each(function(){
				cnt = $(this).attr("TotalCount")
				var mc = $(this);
				mc.find('Row').each(function(){
					var RowData = $(this);
					var M1SEQ, M2SEQ, M3SEQ, M4SEQ, M5SEQ;
					var M1NM, M2NM, M3NM, M4NM, M5NM;
					RowData.find('M1SEQ').each(function(){M1SEQ = trim($(this).text());});
					RowData.find('M2SEQ').each(function(){M2SEQ = trim($(this).text());});
					RowData.find('M3SEQ').each(function(){M3SEQ = trim($(this).text());});
					RowData.find('M4SEQ').each(function(){M4SEQ = trim($(this).text());});
					RowData.find('M5SEQ').each(function(){M5SEQ = trim($(this).text());});

					RowData.find('M1NM').each(function(){M1NM = $(this).text();});
					RowData.find('M2NM').each(function(){M2NM = $(this).text();});
					RowData.find('M3NM').each(function(){M3NM = $(this).text();});
					RowData.find('M4NM').each(function(){M4NM = $(this).text();});
					RowData.find('M5NM').each(function(){M5NM = $(this).text();});

					var linkURL = "/item/index.asp?M1=" + M1SEQ + "&M2=" + M2SEQ + "&M3=" + M3SEQ + "&M4=" + M4SEQ + "&M5=" + M5SEQ;
					var guide = M1NM + " " + M2NM;
					if (Math.ceil(M3SEQ) > 0)
						guide += " &gt; " + M3NM;
					if (Math.ceil(M4SEQ) > 0)
						guide += " &gt; " + M4NM;
					if (Math.ceil(M5SEQ) > 0)
						guide += " &gt; " + M5NM;

					menuhtml += "<li><a href='" + linkURL + "'>" + guide + "</li>"

				});
			});
			$("#categoryArea").html(menuhtml + "</ul>");


		}
	});
}


function AutoCompleteONOFF(){
	var _cookiesOnOFF = $.cookie("AutoComp");
	alert($.cookie("AutoComp"));
	if (_cookiesOnOFF == undefined)
	{
		$.cookie("AutoComp", "Y");
	}else{
		if (_cookiesOnOFF == "Y")
		{
			$.cookie("AutoComp", "N");
		}else{
			$.cookie("AutoComp", "Y");
		}
	}

}

function AutoInfo(){
	if ($("#AutoCompleteArea").css("display") == "none")
	{
		$("#AutoCompleteArea").css("display", "block");
	}else{
		$("#AutoCompleteArea").css("display", "none");
	}
}

/// ������ üũ �� ���  Layer  Display Area
function InfoLayerDisplay(){
	if (_AgentMobileYN == 'N')
	{

		var chkHTML = '';
		var DontDP, WeekDP, DpYN;
		DontDP =  $.cookie('NeverDP');
		WeekDP = $.cookie('WeekDP');
		if (DontDP == undefined)
		{
			DontDP = "";
		}
		if (WeekDP == undefined)
		{
			WeekDP = "";
		}

		DpYN = "N";
		// ���� �ȿ�������, ������� �ƴϰ�, ��Ű���� ���� ���
		if ((MovingYN == "N") && ((DontDP == "") && (WeekDP == "")) && (_AgentMobileYN == "N"))
		{
			DpYN = "Y";
		}
		chkHTML = '<style type="text/css">.TopMainInformation{position:absolute;top:0px;left:0px;z-index:300000;box-shadow:5px 5px 5px silver;-moz-box-shadow:5px 5px 5px silver;-webkit-box-shadow:5px 5px 5px silver;filter:progid:DXImageTransform.Microsoft.Shadow(color=silver,direction=120, strength=5);}.wrappopup {background-color:#f3f3f3; padding-top:10px; overflow:hidden;position:relative;padding-bottom:10px;}.noticeimg {float:left; margin:0 20px 10px 20px;}.checkpop {background-color:#333; height:13px; color:#CCC; text-align:right; padding:3px 20px 5px 0;position:relative;}.dis_txt { line-height:18px; padding:0 20px;}.point1 {font-weight:bold; color:#00b5a2;}.point2 {font-weight:bold; color:#ff5a00;}</style>' +
			'<div id="TopMainInformation" class="TopMainInformation">' +
			'<div class="wrappopup">' +
			'	<div class="noticeimg"><img src="//www.tourbaksa.com/images/seoul_banner/web_popimg.jpg" alt="�̹���" width="128" height="72" /></div>' +
			'	<div class="dis_txt">' +
			'		<dl>' +
			'			<dd>����ڻ� ����Ʈ�� <span class="point1">������ ��</span>���� �����Ǿ� <span class="point1">��/���� ��⺰ ȯ���̳� ������ ũ�⿡ ���� ȭ�� ������ �޶����ϴ�. </span> ���� ���ô� ȭ���� ������ ũ�Ⱑ �پ�꿡 ���� ����� ����� �����ϵ��� ������ ȭ������, <span class="point2">PC�� ����ȭ�� ȭ���� ���÷��� ������ ũ�⸦ �ÿ� �ּ���. </span> �����Ͽ� �ñ��Ͻ� ���� <u><a href="http://www.tourbaksa.com/Community/community_list.asp?catediv=2xa" target="_blank">������ �亯 �Խ���</a></u>�� �����ֽø� �ȳ��� �帮�ڽ��ϴ�. </dd>' +
			'		</dl>' +
			'	</div>' +
			'</div>' +
			'<div class="checkpop">' +
			'	<dt><dd><input name="input" type="checkbox" value="Y" onclick="DontDpSetCookies();"> &nbsp;�ٽ� ���� �ʱ�&nbsp;&nbsp;&nbsp;&nbsp;l&nbsp;&nbsp;&nbsp;&nbsp;<input name="" type="checkbox" value="Y" onclick="WeekDpSetCookies();" >&nbsp; �����ϰ� ���� �ʱ�</dd></dt>' +
			'</div>' +
			'</div>';
		if (DpYN == "Y")
		{
			$("#wrapper").before(chkHTML);
			$("#TopMainInformation").hide();
			$('#TopMainInformation').delay(200).slideDown();
			MovingYN = "Y";
		}
	}
}

function InfoLayerDisplayNone(){
	if (MovingYN == "Y")
	{
		$("#TopMainInformation").animate({ height: 0 }, 300);
		$("#TopMainInformation").remove();
		MovingYN = "N";
	}
}
function DontDpSetCookies(){
	$.cookie('NeverDP', 'Y', { expires: 365, path: '/', domain: 'tourbaksa.com' });
	InfoLayerDisplayNone();
}

function WeekDpSetCookies(){
	$.cookie('WeekDP', 'Y', { expires: 7, path: '/', domain: 'tourbaksa.com' });
	InfoLayerDisplayNone();
}
/// ������ üũ �� ���  Layer  Display Area END



/// �α��� �κ�
function GoLogin(gubun){
	if (SSLsite != SSLnosite)
	{
		location.href = SSLsite + "/Join/Login/JL001.asp?loginPageType=login&gubun=" + gubun + "&ReturnURL=" + LoginReturnUrl + "&chk=&pDomain=" + LoginSiteDomain;
	}else{
		location.href = SSLnosite + "/Join/Login/JL001.asp?loginPageType=login&gubun=" + gubun + "&ReturnURL=" + LoginReturnUrl + "&chk=&pDomain=" + LoginSiteDomain;
	}

}

/// �α��� �κ�
function GoLogin2(gubun){
	if (SSLsite != SSLnosite)
	{
		location.href = SSLsite + "/Join/Login/JL001.asp?loginPageType=login&gubun=" + gubun + "&ReturnURL=" + LoginReturnUrl + "&chk=&pDomain=" + LoginSiteDomain;
	}else{
		location.href = SSLnosite + "/Join/Login/JL001.asp?loginPageType=login&gubun=" + gubun + "&ReturnURL=" + LoginReturnUrl + "&chk=&pDomain=" + LoginSiteDomain;
	}

}

/* ��� : Ŭ�� �̺�Ʈ ī��Ʈ��	'/', 'href', '_self', 'MK', '4', '', '', '');*/
function fn_Click(ClickURL, ActionEvent, ActionTarget, g1, g2, g3, g4, g5){

	$.ajax({
		url: '/xml/Link_Click_Count.asp',
		data : 'parm1=' + g1 + "&parm2=" + g2 + " &parm3=" + g3 + "&parm4=" + g4 + "&g5=" + g5 + "&LandingURL=" + ClickURL,
		type: 'GET',
		dataType: 'xml',
		timeout: 4000,
		error: function(){
			//���� ���� ó�� Ȯ�� �� ó�� ����	--> Ȥ�� Error �� ���� ���� �ϰ� �̵� ��.
			if (ActionEvent.toLowerCase() == "href")
			{
				if (ActionTarget.toLowerCase() != "_blank")
				{
					location.href = ClickURL;
				}else{
					 window.open(ClickURL);
//					var nw = window.open();
//					nw.location.href = ClickURL;
				}
			}
			else{
				eval(ClickURL);
			}
		},
		success: function(xml){
			if (ActionEvent.toLowerCase() == "href")
			{

				if (ActionTarget.toLowerCase() != "_blank")
				{
					location.href = ClickURL;
				}else{
					//location.href = ClickURL;
					window.open(ClickURL);

				}
			}
			else{
				eval(ClickURL);
			}
		}
	});
}




function stimer() {
	$(this).stopTime("countTimer")
}

//---------------------------------------------------//
//  Ŭ�� �̵�			                             //
//---------------------------------------------------//
var InterVal;
function Click_Motion(rtnnum, id)
{
	AllCnt=$("#"+id+"Cnt").val();

	if (rtnnum > AllCnt )
	{
		rtnnum = 1;
	}

	if(rtnnum == 0)
	{
		rtnnum = AllCnt;
	}

	$("[id^="+id+"]").css('display', 'none');
	$("#"+id+rtnnum).css('display', 'block');

	stimer();
	timer(rtnnum);
}

//2��ư class, display on,off ��� //
function areadis(b_id, n_id){
	$("#"+n_id).css('display', 'none');
	$("#b"+n_id).attr('class', '');

	$("#"+b_id).css('display', 'block');
	$("#b"+b_id).attr('class', 'on');
}

//��� : ������ ��ũ�� ������(NAME)���� ���� Ŭ����
function ScrollMove(p){
	// �ش� �±װ� �ִ��� Ȯ��
	
	if($("#" + p).length > 0){
		if(_AgentMobileYN == 'Y'){
			window.setTimeout(function(){
				var position = $("#" + p).offset();
				$("html, body").animate({scrollTop :position.top}, 500);
			},2000);
		}else{
			if($(window).width() > 768){
				var position = $("#" + p).offset();
				$("html, body").animate({scrollTop :position.top}, 500);
			}else{
				window.setTimeout(function(){
					var position = $("#" + p).offset();
					$("html, body").animate({scrollTop :position.top}, 500);
				},2000);

			}
		}
	}
}


function fn_auction(link,gubun,target,table_gubun,table_seq,idx,area_gubun, a){
	//fn_Click(link, gubun, target, table_gubun, table_seq, idx, area_gubun, '');

	//if (target=="_self"){
//		location.href=link;
//	}else{
		//target.location.href=link;
//	}

}

function formatNumber(s){
	var str  = s.replace(/\D/g,"");
	var len  = str.length;
	var tmp  = "";
	var tm2  = "";
	var i    = 0;
	while (str.charAt(i) == '0') i++;
	str = str.substring(i,len);
	len = str.length;
	if(len < 3) {
		return str;
	} else {
		var sit = len % 3;
		if (sit > 0) {
			tmp = tmp + str.substring(0,sit) + ',';
			len = len - sit;
		}
		while (len > 3) {
			tmp = tmp + str.substring(sit,sit+3) + ',';
			len = len - 3;
			sit = sit + 3;
		}
		tmp = tmp + str.substring(sit,sit+3) + tm2;
		str = tmp;
	}
	return str;
}

function trim (str) {
    str = this != window? this : str;
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

/******************************************************
 * Function�� : NullStringCheck(üũ��,��Ŀ����,�����޽���)
 * ��      �� : �ʼ��Է� üũ(TEXT)
 ******************************************************/
function TTNullStringCheck(obj,focobj,msg){
    if (trim(obj.value)==""){
        if(msg!="")
            alert(msg);
        if(focobj!="")
            focobj.focus();
        return false;
    }
    return true;
}

// ���ڼ� üũ(����,��,����)
function TTcheck_length(strchar,strreal_byte,len) {
    real_byte = strreal_byte.value.length;
    for (ii=0; ii < strreal_byte.value.length; ii++){
        temp = strreal_byte.value.substr(ii,1).charCodeAt(0);
        if (temp > 127) { real_byte++; }
    }
    if (real_byte > len){
        alert(strchar+"��(��) "+len+"byte�� ������ �����ϴ�.")
        return false;
    }
    return true;
}

/******************************************************
 * Function�� : NullRadioCheck(üũ��,��Ŀ����,�����޽���)
 * ��      �� : �ʼ��Է� üũ(RADIO)
 ******************************************************/
function NullRadioCheck(obj,focobj,msg){
	var pi = 0
	for(var i=0; i<obj.length;i++){
		if(obj[i].checked == true) pi=1;
	}
	if(pi != 1){
		alert(msg + "��(��) ������ �ּ���");
        if(focobj!="")
            focobj.focus();
        return false;
	}
	return true;
}


/******************************************************
 * Function�� : TTIsNumber(üũ��,��Ŀ����,�����޽���)
 * ��      �� : ������üũ
 ******************************************************/
function TTIsNumber(obj,focobj,msg){
       for(var i=0; i<obj.value.length; i++){
        var chr = obj.value.substr(i,1);
        if((chr < '0' || chr > '9')){
		if(msg!="")
			alert(msg);
		if(focobj!="")
			focobj.focus();
            return false;
        }
    }
    return true;
}

/******************************************************
 * Function�� : res_cancel
 * ��      �� : ������ҽ� Ȯ�� â �� ������ ���ư���
 ******************************************************/
function res_cancel(rtnURL){
	if (confirm("���� ��Ҹ� �����Ͻðڽ��ϱ�?"))
	{
		alert("���� ��Ұ� �Ϸ�Ǿ����ϴ�.");
		location.href=rtnURL;
	}
}


function siteArea(area){
	var StartCityArea = $.cookie("SCA");
	if ((StartCityArea == undefined) || (StartCityArea == ''))
	{
		if (_LoginUserID != "")
		{
			$.ajax({
				type : "Post"
				, async		: true
				, url		: "/xml/siteArea.asp"
				, dateType	: "html"
				, timeout	: 30000
				, cache		: false
				, data		: "area="+area
				, error		: function(request, status, error){
					//alert("code:" + request.status +"\r\nmessage:" +request.reponseText);
				}
				, success : function(response, status, error){
				//����ó��
					alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���. ");
					$.removeCookie("SCA");
					$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
					siteAreaLog(area);
				}
				, beforeSend : function(){
				//��� �����Ҷ� ó��
				}
				, complete : function(){
				//��� �Ϸ�� �� ó��

				}
			});
		}else{
			$.removeCookie("SCA");
			$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
			alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���. ");
			siteAreaLog(area);
		}
	}else{
		$.removeCookie("SCA");
		$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
		alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���.");
		siteAreaLog(area);
	}
}

function siteArea2(area){
	var StartCityArea = $.cookie("SCA");
	if ((StartCityArea == undefined) || (StartCityArea == ''))
	{
		if (_LoginUserID != "")
		{
			$.ajax({
				type : "Post"
				, async		: true
				, url		: "/xml/siteArea.asp"
				, dateType	: "html"
				, timeout	: 30000
				, cache		: false
				, data		: "area="+area
				, error		: function(request, status, error){
					alert("code:" + request.status +"\r\nmessage:" +request.reponseText);
				}
				, success : function(response, status, error){
				//����ó��
					alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���. ");
					$.removeCookie("SCA");
					$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
					location.reload();
				}
				, beforeSend : function(){
				//��� �����Ҷ� ó��
				}
				, complete : function(){
				//��� �Ϸ�� �� ó��

				}
			});
		}else{
			$.removeCookie("SCA");
			$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
			alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���. ");
			location.reload();
		}
	}else{
		$.removeCookie("SCA");
		$.cookie('SCA' , area, { expires : 365, path : '/', domain : 'tourbaksa.com'});
		alert("�� �����Ͻ� �������� �⺻ ����������� �����Ǿ����ϴ�. \n\n������� �����Ͻø� �ؿ����� Ȥ�� �ؿ���Ű�� �޴��� Ŭ�� ��, �����Ͻ� ����� ��ǰ �������� �켱 �̵��մϴ�. \n\n�׹��� �ڼ��� ������ ������> �����Ͻô� ������ �ִ� ����� Ȱ������ ������ �ּ���. ");
		location.reload();
	}
}

function siteAreaLog(area){
	// �α� ������ ����
	$.ajax({
		type : "Post"
		, async		: true
		, url		: "/xml/siteAreaLog.asp"
		, dateType	: "xml"
		, timeout	: 30000
		, cache		: false
		, data		: "area="+area
		, error		: function(request, status, error){
			alert("code:" + request.status +"\r\nmessage:" +request.reponseText);
		}
		, success : function(response, status, error){
			//����ó��
			location.reload();
		}
		, beforeSend : function(){
		//��� �����Ҷ� ó��
		}
		, complete : function(){
		//��� �Ϸ�� �� ó��
		}
	});
}



//// ����Ʈ �˻����� ���//////
function dep1Select(ob){
	if (ob.checked == true)
	{
		if (ob.value == "474")
		{
		}else{
			$.ajax({
				url: '/xml/main_menu_list_xml.asp',
				data : 'pidx=' + ob.value + "&dep=3&sta" + document.SmartProductfrm.starta.value ,
				type: 'GET',
				dataType: 'xml',
				timeout: 1000,
				error: function(){
				},
				success: function(xml){
					$("select[name='dep2'] option").remove();
					$("<option></option>").text("����").attr("value", "").appendTo("select[name='dep2']");
					$(xml).find('result').each(function(){
						var txt = $(this).text().split(":");

						$("<option></option>").text(txt[1]).attr("value", txt[0]).appendTo("select[name='dep2']");
					});
				}
			});
		}
	}
}
function dep2Select(obj, v){
	if (obj.value != "")
	{
		$.ajax({
			url: '/xml/main_menu_list_xml.asp',
			data : 'pidx=' + obj.value + "&dep=4&sta" + document.SmartProductfrm.starta.value ,
			type: 'GET',
			dataType: 'xml',
			timeout: 1000,
			error: function(){
			},
			success: function(xml){
				$("select[name='dep3'] option").remove();
				$("<option></option>").text("����").attr("value", "").appendTo("select[name='dep3']");
				var c = 1;
				$(xml).find('result').each(function(){
					var txt = $(this).text().split(":");
					if (txt[1] != "0")
					{
						$("<option></option>").text(txt[1]).attr("value", txt[0]).appendTo("select[name='dep3']");
						if (txt[0] == v)
						{
							$("select[name='dep3'] option:eq(" + c + ")").attr("selected", "selected");
						}
					}else{
						$("<option></option>").text('��ü').attr("value", txt[0]).appendTo("select[name='dep3']");
					}

					c++;
				});
			}
		});
	}
}

function MoveLocation(a){
	if (a != "")
	{
		location.href = a;
	}
}

function MobileLeftClick(a, b, c){
	for (var k = 1;k <= c ;k++ )
	{
		if (k == b)
		{
			$("#" + a + k).css("display", "block");
		}else{
			$("#" + a + k).css("display", "none");
		}
	}

}

function MobileLeftClick2(a, b){
	for (var k = 0;k <= DpLayCnt;k++ )
	{
		if ($("#" + a + b) != undefined)
		{
			if (k == b)
			{
				$("#" + a + k).css("display", "block");
			}else{
				$("#" + a + k).css("display", "none");
			}
		}
	}
}


/* main �Ը��� ��ȹ�� Ÿ�̸� */
var InterVal;
var TimerIDX=1;
function timer(idx) {
	$(this).everyTime(1000, "countTimer", function() {
	var now = new Date();
	var rehour	= 0
	var reday	= 0
	var remonth = 0

	TimerIDX = idx;

	eyy=$("#timer"+TimerIDX+"yy").val();
	emm=Number($("#timer"+TimerIDX+"mm").val());
	edd=$("#timer"+TimerIDX+"dd").val();
	ehh=$("#timer"+TimerIDX+"hh").val();
	emi=$("#timer"+TimerIDX+"mi").val();

	//���� ��+1 �� ���� Number�� �������� -1�� ���ش�.

	emm = emm - 1
	if (emm < 10 )
	{
		emm = "0" + emm;
	}


	var lastday = new Date(eyy,emm,edd,ehh,emi);

	//var lastday2 = new Date('10/2/2013');
	var nowday	= new Date();


	var day_calc = (Math.ceil((lastday.getTime() - nowday.getTime())/24/60/60/1000))-1 //���� ���
	var day_calc2 = (Math.ceil((lastday.getTime() - nowday.getTime())/60/60/1000)) //�ð� ���


	//var day_calc = 5
	if (day_calc < 0)
	{
		$('#dayCount1'+TimerIDX).text(0);
		$('#dayCount2'+TimerIDX).text(0);
		$('#minCount1'+TimerIDX).text(0);
		$('#minCount2'+TimerIDX).text(0);
		$('#hourCount1'+TimerIDX).text(0);
		$('#hourCount2'+TimerIDX).text(0);
		$('#secCount1'+TimerIDX).text(0);
		$('#secCount2'+TimerIDX).text(0);
	}
	else{
		var minCount = emi - now.getMinutes() //�� ���
		if (minCount<0)						  //������ �к��� ������
		{
			minCount = 60 + minCount		  //60���� �����ش�
			rehour = -1						  //1�ð��� ���ش�
		}
		var hourCount = ehh - now.getHours() + rehour //�ð� ���
		if (hourCount<0)							  //������ �ð����� ������
		{
			hourCount = 24 + hourCount				  //24�ø� �����ش�
			reday = -1                                //�Ϸ縦 ���ش�
		}
		//var dateCount = day_calc + 	reday	  //���� ���Ȱſ� �ð��� 0���� ������� 1���� ���ֱ� ����
		var dateCount = day_calc
		var secCount = 60 - now.getSeconds();		  //��

		//���� ���̽��� ���ؼ� �տ� 0�� �ٿ��ش�.
		if ( dateCount < 10 ) {
			dateCount = '0' + dateCount;
		}else{
			dateCount = '' + dateCount;
		}
		if ( secCount < 10 ) {
			secCount = '0' + secCount;
		}else{
			secCount ='' + secCount
		}
		if ( secCount == 60 ) {
			secCount = '00';
		}
		if ( minCount < 10 ) {
			minCount = '0' + minCount;
		}else{
			minCount = '' + minCount;
		}

		if ( hourCount < 10 ) {
			hourCount = '0' + hourCount;
		}else{
			hourCount = '' + hourCount;
		}
		//ȭ�鿡 �ѷ��ش�
		$('#dayCount1'+TimerIDX).text(dateCount.charAt(0));
		$('#dayCount2'+TimerIDX).text(dateCount.charAt(1));
		$('#minCount1'+TimerIDX).text(minCount.charAt(0));
		$('#minCount2'+TimerIDX).text(minCount.charAt(1));
		$('#hourCount1'+TimerIDX).text(hourCount.charAt(0));
		$('#hourCount2'+TimerIDX).text(hourCount.charAt(1));
		$('#secCount1'+TimerIDX).text(secCount.charAt(0));
		$('#secCount2'+TimerIDX).text(secCount.charAt(1));
	}
	//ȭ�鿡 �ѷ��ش�
   })
}
// true : moblie / false : pc

function isMoblie(){
	if (navigator.userAgent.match(/iPad/) != null
		|| navigator.userAgent.match(/iPhone|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null) //�����
	{
		return true;
	} else {
		return false;
	}

}

function travel_private_revisionPopUP(u, w, h){
	window.open(u,'','toolbar=no,menubar=no,location=no,directions=no, scrollbars=yes,status=yes,width='+w+',height='+h);

}

//2014-07-14 KEC �߰�
function closeToplineBanner2(bnr){
	$("#topBannerNotice").animate({'marginTop':'-61px'}, 300);
	$('#header').css('margin-top', '0');
	setLayCookie7(bnr, "yes" , 1);  // 1�� �� ��Ű����
}


/*function closeToplineBanner2(){
	$("#topline_banner2").animate({'marginTop':'-61px'}, 300);
	$('#header').css('margin-top', '0');
	setLayCookie7("ToplineBanner", "yes" , 1);  // 1�� �� ��Ű����
}
*/

//ȯ������ ��� ���� ����
$(function(){
		$("#agree_yes").click(function(){
				$(".refund_info").css('display','block' );  // ȯ������ �����.
		});
		$("#agree_no").click(function(){
				$(".refund_info").css('display','none' );  // ȯ������ ��� �� ��.
		});
 });


 //ȯ������ �˾�
function pop_refund(rd, rs, rsnm, gb){
	if ((gb == "res" ||gb == "hotel" ) && (rsnm == ""))
	{
		alert("������ ���� �Է� ���ֽñ� �ٶ��ϴ�.");
		return;
	}
	window.open(SSLsite + "/common/pop_refund.asp?res_day=" + rd + "&res_seq=" + rs + "&res_nm=" + rsnm + "&gubun=" + gb,"refundaccount","scrollbars=no,width=385, height=420")
}


/* ������� ���̾� 2014-10-17 */
function show_guideAge_indi(gnum){
		$("#" + gnum).css("display", "block");
}

function noshow_guideAge_indi(gnum){
        $('#' + gnum ).css('display', 'none');
}
/* ��� �̹��� Ŭ��*/
function TopBannerClick(){
	$('#top_area').show();
}
function lyop(){
	layer_open('cf_mlayer2');
	return false;
}

// ���๮����
$(function(){ 
	$(".new_tour_cust_center_area ul li > span").click(function() {
		$(".new_tour_cust_center_area ul li > span").removeClass("on");

		$(this).addClass("on");
		$(this).parents('.new_tour_cust_center_area').find('.new_tour__telDetail').hide();

		//$(".new_tour__telDetail").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).show();
	});
});