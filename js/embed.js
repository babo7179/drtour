//���ó : �Ϻ����� �÷���
function flashMenu(url,width,height,num,sitecode) { 

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+width+'" height="'+height+'" />');
	document.write('<param name=movie value="'+url+'" />');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<param name="flashvars" value="&flashflag=' + num + '&sitecode=' + sitecode + '&" />');
	document.write('<embed src="'+url+'"quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />');
	document.write('</embed> ');
	document.write('</object>');

}

//���ó : 
function flashImg(url,width,height,mg,pg) { 

	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" />');
	document.write('<param name=movie value="'+url+'" />');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<param name="allowScriptAccess" value="always" />');
	document.write('<param name="flashVars" value="Mgubun='+mg+'&Pgubun=' + pg + '" />');
	document.write('<embed src="'+url+'"  quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />');
	document.write('</embed> ');
	document.write('</object>');

}
//<param name="allowScriptAccess" value="sameDomain" />
//���ó : 
function blog(url,width,height) { 

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+width+'" height="'+height+'" />');
	document.write('<param name=movie value="'+url+'" />');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<embed src="'+url+'"  quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />');
	document.write('</embed> ');
	document.write('</object>');

}

//���ó : 
function flashBanner(url,width,height) { 

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+width+'" height="'+height+'" />');
	document.write('<param name=movie value="'+url+'" />');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<embed src="'+url+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />');
	document.write('</embed> ');
	document.write('</object>');

}




//���ó : ���ڸ��� ��ź �÷���/
function flashBomb(url,width,height, se) { 

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+width+'" height="'+height+'" />');
	document.write('<param name=movie value="'+url+'" />');
	document.write('<param name="wmode" value="transparent" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<param name="flashvars" value="nowdtime=' + se + '" />');
	document.write('<embed src="'+url+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />');
	document.write('</embed> ');
	document.write('</object>');

}

//���ó : 
function MovieEmbed(url, w,h){
	document.write("<embed src='" + url + "' enablecontextmenu='false' loop='true' showcontrols='false' width='" + w + "' height='" + h + "'>");
}


///��� ó : ID ���� �ҷ��� ������ ������ �Ķ���Ϳ� ���̵� �Է� �ϸ� �� ���̵� ��������
function flashID(url,width,height, objID) { 
	var idString = "";
	idString += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+width+'" height="'+height+'" />';
	idString +='<param name=movie value="'+url+'" />';
	idString +='<param name="wmode" value="transparent" />';
	idString +='<param name="bgcolor" value="#ffffff" />';
	idString +='<embed src="'+url+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent"  width="'+width+'" height="'+height+'" />';
	idString +='</embed> ';
	idString +='</object>';	
	document.getElementById(objID).innerHTML = idString;
}


function playFlash(filename,width,height,id,trans,lock) {
	var httpsURL = document.URL;
	httpsURL = httpsURL.substring(0,5);
	if(httpsURL.substring(0,5) != "https"){
		httpsURL = "http";
	}
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+httpsURL+'://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" id="'+id+'" align="middle">');
	document.write('<param name="allowScriptAccess" value="always" />');
	document.write('<param name="movie" value="'+filename+'" />');
	document.write('<param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />');
	document.write('<param name="wmode" value="transparent" />');;
	document.write('<param name="menu" value="'+lock+'" />');
	document.write('<embed src="'+filename+'" quality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+id+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="'+httpsURL+'://www.macromedia.com/go/getflashplayer" />');
	document.write('	</object>');
}
//�޾ƿ��� ���� : ���ϸ�,��,����,���̵���,wmode����,menu����
