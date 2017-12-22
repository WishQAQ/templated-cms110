﻿/******************************************************************************
* filename: Common.js
* Include Modul Scripting
* (C) MasterLi(masterlijf#hotmail.com),Oran Day(likecode#qq.com)
* (C) NSW(http://www.nsw88.com)
*******************************************************************************/
/********************
* 帮助中心详细页加载脚本
********************/
function helpLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    getHelpStatic(OBJ_ID);
    helpSelectCurrentPosition(SID);
}
/********************
* 根据当前方案ID，使帮助中心左边选择对应的分类
********************/
function helpSelectCurrentPosition(SID) {
    var lis = $("ul.nr").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur");
            $(".leib div.tit").hide();
            $(".leib ul.nr").hide();

            $(lis[i]).parent().prev("div").show();
            $(lis[i]).parent("ul").show();
            $(lis[i]).parent().parent("div").prev().show();
            break;
        }
    }

}
function agentLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    getAgentHelpStatic(OBJ_ID);
    getAd(MARK, "cntrAd");
}
function agentSelectCurrentPosition(SID) {

    var h4s = $(".fenlei_con").find("h4");
    for (var i = 0; i < h4s.length; ++i) {
        if ($(h4s[i]).attr("sid") == SID) {
            $(h4s[i]).addClass("cur");
            $(".fenlei").hide();
            $(h4s[i]).parent().parent("div").show();
            break;
        }
    }

    var lis = $(".fenlei_con").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur"); $(".fenlei").hide();
            $(lis[i]).parent().parent().parent("div").show();
            break;
        }
    }
}
/********************
* 资讯详细页加载脚本
********************/
function newsLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    writeComment(OBJ_ID, MARK);
    getLastArticle();
    getHistory(MARK);
    addHistory(OBJ_ID, MARK);
}
/********************
* 根据当前请求的分类SID，使资讯中心左边选择对应的分类
********************/
function newsSelectCurrentPosition() {
    var lis = $("ul.nr").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur");
            break;
        }
    }
}
/********************
* 资讯详细页加载脚本
********************/
function productLoad() {
    productSelectCurrentPosition(SID);
    hits(ProductID, "product");
    writeComment(ProductID, MARK);
    addHistory(ProductID, MARK);
    initImages(ProductID);
    getVideo(VIDEO_KEY);
    getHistory("product");
    getRecommentProductByHistory(ProductID);
    getRelevantViewed(ProductID);
    for (var i = 0; i < ARR_AD_MARK.length; ++i) {
        getAd(ARR_AD_MARK[i], "cntrAd_" + i);
    }
    checkSize(); //颜色，尺寸选择
}
/********************
* 根据当前方案ID，使产品中心左边选择对应的分类
********************/
function productSelectCurrentPosition(sid) {

    var h3s = $(".pro_nav").find("h2");
    for (var i = 0; i < h3s.length; ++i) {
        if ($(h3s[i]).attr("sid") == sid) {
            $(h3s[i]).addClass("cur");
            $(h3s[i]).parent().prev().addClass("cur");
            break;
        }
    }

    var lis = $(".pro_nav ul").find("li");
    for (var i = 0; i < lis.length; ++i) {

        if ($(lis[i]).attr("sid") == sid) {
            $(lis[i]).addClass("cur");
            $(lis[i]).parent().prev().addClass("cur");
            break;
        }
    }
}

/********************
* 资讯详细页加载脚本
********************/
function downLoad() {
    hits(DownloadID, "download");
    writeComment(DownloadID, MARK);
    addHistory(DownloadID, MARK);
    getHistory("download");
    getRelevantViewedDownload(DownloadID);
}

/********************
* 方案服务详细页加载脚本
********************/
function projectLoad() {
    projectSelectCurrentPosition(SID);
    hits(ProjectID, "project");
    writeComment(ProjectID, MARK);
    addHistory(ProjectID, MARK);
    getVideo(VIDEO_KEY);
    getHistory("project");
    getRecommentProjectByHistory(ProjectID);
    getRelevantViewedProject(ProjectID);
    for (var i = 0; i < ARR_AD_MARK.length; ++i) {
        getAd(ARR_AD_MARK[i], "cntrAd_" + i);
    }
    checkSize(); //颜色，尺寸选择

}
/********************
* 根据当前方案ID，使方案中心左边选择对应的分类
********************/
function projectSelectCurrentPosition(obj_id) {
    var lis = $(".nr").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("obj_id") == obj_id) {
            $(lis[i]).addClass("cur");
            $(lis[i]).parent("ul").show();
            break;
        }
    }
}



/********************
* 产品详细页套餐的价格
********************/
function getTaoCanPrice(_IDList) {
    $.post("/ajax.ashx?action=getTaoCanPrice&t=" + Math.random(), {
        IDList: _IDList
    }, function(msg) {
        var OldPrice = gav(msg, "OldPrice");
        var NowPrice = gav(msg, "NowPrice");
        $j("OldPrice").html(OldPrice);
        $j("NowPrice").html(NowPrice);
    });
}

/********************
* 产品详细页套餐的产品选择
********************/
function ShowTaoCanProduct() {
    $(document).ready(function() {
        $(".cbox").find("input").click(function() {
            var arr = new Array();
            arr = $("#txtIDList").attr("value").split(',');
            var newIDList = arr[0];
            if (!this.checked) {
                $(".tao_rt").find("a[id=" + this.value + "]").hide();
                $(".tao_rt").find("a[id=" + this.value + "]").prev().hide();
                for (var i = 0; i < arr.length; i++) {
                    if (this.value != arr[i] && arr[i] != arr[0] && this.value != arr[i]) {
                        newIDList = newIDList + "," + arr[i];
                    }
                }
            }
            else {
                $(".tao_rt").find("a[id=" + this.value + "]").show();
                $(".tao_rt").find("a[id=" + this.value + "]").prev().show();
                newIDList = $("#txtIDList").attr("value") + "," + this.value;
            }
            $("#txtIDList").val(newIDList);
            $("#TCount").html($("#txtIDList").attr("value").split(',').length);
            getTaoCanPrice(newIDList);
        });
    });
}


function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function(rsp) {
        var username = gav(rsp, "username");
        var usermenu = gav(rsp, "usermenu");
        var myphoto = gav(rsp, "myphoto");
        if (username.length > 0) {
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(username);
            $j("commonHeaderUsermenu").html(usermenu);
            $j("commonHeaderUserPhoto").attr("src", myphoto);
            $j("commonHeaderUser").fadeIn(80);
        }
    });
}

/********************
* 产品详细页选择产品的颜色，尺寸等
********************/
function checkSize() {
    $(document).ready(function() {
        $(".pro_kuang").find("li").click(function() {
            $(this).parent().find("a").removeClass();
            $(this).find("a").addClass("img");

        });
    });
}


/********************
* 产品详细页选择产品的颜色，尺寸等(愿望夹)
********************/
function checkWishSize(src) {
    $(src).parent().find("a").removeClass();
    $(src).addClass("clicked");
    if ($("#txtAttr").html() == "") {
        $("#txtAttr").append($(src).attr("title"));
    }
    else {
        var arr = new Array();
        arr = $("#txtAttr").html().split(',');
        for (var i = 0; i < arr.length; i++) {
            var oldkey = arr[i].split(":")[0];
            var newkey = $(src).attr("title").split(':')[0];
            var newvalue = $(src).attr("title").split(':')[1];
            var newarr = oldkey + ":" + newvalue;
            if (oldkey == newkey) {
                $("#txtAttr").html($("#txtAttr").html().replace(arr[i], newarr));
                return;
            }
        }
        $("#txtAttr").append("," + $(src).attr("title"));
    }
}

/********************
* 产品详细页选择产品的属性时，显示相关的图片
********************/
function getAttrValesPhotos(_oid) {
    //  alert(_oid);
    $.post("/ajax.ashx?action=attrValuesPhotos&t=" + Math.random(), {
        oid: _oid
    }, function(msg) {
        //alert(msg);
        // var sta = gav(msg, "state");
        // var s = gav(msg, "msg");
        $j("img_list").html(msg);
    });
}



/********************
* 产品详细页切换‘相关产品’，‘相关购买产品’，‘相关浏览器’选项卡
* src : 触发事件的源
********************/
function switchProdTab(src) {
    var jSrc = $(src);
    var targetId = jSrc.attr("target_id");
    var selectedElm = jSrc.parent().find("a[class=cr]");
    if (selectedElm.attr("target_id") == targetId) {
        return;
    }

    selectedElm.removeClass("cr");
    jSrc.addClass("cr");
    $j("cntrRelevantProd>div").hide();
    $j(targetId).show();
}
/********************************************* 代理加盟:start *********************************/
/********************
* 代理加盟详细页加载脚本
********************/

/********************************************* 代理加盟:end *********************************/
/********************
* 保存用户名
********************/
function keepUsername(keep, emailElmId) {
    var sName = $j(emailElmId).attr("value");
    if (keep != null && sName != undefined) {
        if (keep) { $cookie("__oran__k_username", sName, 99999999999) }
        else { $cookie("__oran__k_username", false) };
        return;
    }
    if (!$j("chkKeep").attr("checked")) { return };
    if (sName != undefined) { $cookie("__oran__k_username", sName, 99999999999) };
}
/********************
* 根据ID获取文本框内容并去除两边空格
* src : 触发事件的源对象
********************/
function toggleJobDetail(src, _skinPath) {
    var detail = $(src).parent().next();
    var jH = $(src).parent();
    if (detail.is(":visible")) {
        detail.slideUp(80);
        jH.css({ "background": "url(" + _skinPath + "img/ico14.gif) no-repeat 0 5px" });
    } else {
        detail.slideDown(80);
        jH.css({ "background": "url(" + _skinPath + "img/ico13.gif) no-repeat 0 5px" });
    }
}
/********************
* 显示所有产品分类
* showBg : (可选)是否显示灰度背景，默认显示
********************/
function showAllColumns(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        showFullBg();
    }
    setCM("prod_all_columns");
    relocation("prod_all_columns");
}
/********************
* 隐藏所有产品分类
* showBg : (可选)是否隐藏灰度背景，默认隐藏
********************/
function hideAllColumns(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        hideFullBg();
    }
    $j("prod_all_columns").fadeOut(80);
}
/********************
* 显示正在处理中动画，点全屏
* show : (可选)显示或隐藏，默认显示
********************/
function showBgProc(show, msg) {
    if (msg == null) {
        msg = "正在处理...";
    }
    var sElmId = "oran_div_processing";
    var oImg = $j(sElmId);
    if (oImg.length == 0) {
        $(document.body).append("<div id='" + sElmId + "'><p><img src='" + SKIN_PATH + "img/processing_2.gif' id='imgProc' alt='" + msg + "' /></p>"
        + "<p class='mt10'>" + msg + "</p></div>");
    }
    oImg = $j(sElmId);
    if (show == null) {
        show = true;
    }
    if (show) {
        showFullBg("oran_full_bg_2");
        setCM(sElmId);
        relocation(sElmId);
        oImg.fadeIn(80);
    } else {
        oImg.fadeOut(80);
        hideFullBg("oran_full_bg_2");
    }
}
/********************
* 根据key获取 ajax对象节点值getAjaxVal
* xMsg : xml对象
* key : 节点的属性key
********************/
function gav(xMsg, key) {
    var jMsg = $(xMsg);
    var s = $(jMsg.find("node[key=" + key + "]")).text();
    return s;
}
/********************
* 设置对象的样式名SetClass
* jObj : jQuery对象
* className : 样式类名
********************/
function sc(jObj, className) {
    jObj.attr("class", className);
}
function ddlSecQus_Changed(src, elmId) {
    if (elmId == null) {
        elmId = "txtSecQus";
    }
    var jTxt = $j(elmId);
    if (src.value == "") {
        jTxt.show();
        jTxt.attr("value", "").focus();
    } else {
        jTxt.hide();
    }
    jTxt.attr("value", src.value);
}
/********************
* 弹出我的收货地址层
* showBg : (可选)是否显示灰度背景，默认显示
********************/
function showMyAddress(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        showFullBg("oran_full_bg", false);
    }
    var jFrm = $("#divCartMyAddr > iframe");
    jFrm.attr("src", "layer/MyAddress.aspx");
    setCM("divCartMyAddr");
    //relocation("divCartMyAddr");
}
/********************
* 隐藏我的收货地址层
********************/
function hideMyAddress() {
    top.window.hideFullBg("oran_full_bg");
    $(top.window.document).find("#divCartMyAddr").fadeOut(80);
}
/********************
* 设置我的收货地址层
* src : 触发事件的源对象
********************/
function setMyAddr(src) {
    var jCntr = $(src).parent().parent().parent();
    var chnName = jCntr.find("span[name=chnName]").html();
    var province = jCntr.find("span[name=province]").html();
    var city = jCntr.find("span[name=city]").html();
    var address = jCntr.find("span[name=address]").html();
    var zipCode = jCntr.find("span[name=zipCode]").html();
    var tel = jCntr.find("span[name=tel]").html();
    var mobile = jCntr.find("span[name=mobile]").html();
    var email = jCntr.find("span[name=email]").html();
    var jTopDoc = $(top.window.document);
    jTopDoc.find("#txtAddrName").val(chnName);
    jTopDoc.find("#txtInvoiceTitle").val(chnName);
    jTopDoc.find("#txtEmail").val(email);
    jTopDoc.find("#txtAddrAddr").val(address);
    jTopDoc.find("#txtAddrZip").val(zipCode);
    jTopDoc.find("#txtAddrTel").val(tel);
    jTopDoc.find("#txtAddrMobile").val(mobile);

    $(top.window.document).find("#regionAddr_hdnPrtRegion").val(province);
    $(top.window.document).find("#regionAddr_hdnChdRegion").val(city);
    top.window.regionAddr_initSelectedItems();

    hideMyAddress();
}
function checkPinForm() {
    var newPin = $j("txtNewPin").val();
    var newSecAsr = $j("txtSecAsr").val();
    var newEmail = $j("txtNewEmail").val();
    if (newPin.length == 0 && newSecAsr == 0 && newEmail.length == 0) {
        $a("未有任何修改项", 2);
        return false;
    } else {
        return true;
    }
}
/********************
* 切换订单选项卡
********************/
function switchOrderTab(src) {
    var jUl = $j("ulOrderTypeTabs");
    jUl.find("a").removeClass("cur b cblack f14");
    $(src).addClass("cur b cblack f14").blur();

}
/********************
* 搜索订单
********************/
function searchOrder() {
    var orderNo = $tv("txOrderNo");
    var startDate = $tv("txtStartDate");
    var endDate = $tv("txtEndDate");
    var orderState = $tv("ddlOrderStates");
    var orderType = $("#ulOrderTypeTabs").find(".cur").attr("ordertype");
    if (orderNo.length == 0 && startDate.length == 0 && endDate.length == 0 && orderState.length == 0) {
        $a("至少需要一个查询条件。");
        return;
    }
    var flag = false;
    var url = "orderlist.aspx?";
    if (orderNo.length > 0) {
        url += "no=" + orderNo;
        flag = true;
    }
    if (startDate.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "start=" + startDate;
        flag = true;
    }
    if (endDate.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "end=" + endDate;
        flag = true;
    }
    if (orderState.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "state=" + orderState;
        flag = true;
    }
    if (orderType != undefined && orderType.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "type=" + orderType;
        flag = true;
    }
    location.href = url;
}
function searchFav() {
    var kwd = $tv("txtFavKwd");
    var clnId = $tv("ddlFavClns");
    var flag = false;
    var url = "MyFavorites.aspx?";
    if (kwd.length > 0) {
        url += "kwd=" + encodeURI(kwd);
        flag = true;
    }
    if (clnId.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "oid=" + clnId;
        flag = true;
    }
    location.href = url;
}
function customizePriceRange(src) {
    var jLower = $(src).parent().find("input:eq(0)");
    var jUpper = $(src).parent().find("input:eq(1)");
    var lower = parseInt(jLower.val());
    var upper = parseInt(jUpper.val());
    var url = "/product/list.aspx?";
    if (!lower) {
        lower = 0;
    }
    if (!upper) {
        upper = 0;
    }
    if (lower == 0 && upper == 0) {
        $a("至少需要一个价格范围。");
        jLower.focus();
        return;
    }
    if (lower > 0 && upper > 0) {
        url += "PriceLower=" + lower + "&PriceUpper=" + upper;
    } else if (lower > 0) {
        url += "PriceUpper=" + lower;
    } else if (upper > 0) {
        url += "PriceLower=" + upper;
    }
    location.href = url;
}
function copyUrl(_mark) {
    var jLayer = $j("div_nsw_copy_url");
    var s = location.href;

    if (jLayer.length == 0) {
        var sHtml = "<div id='div_nsw_copy_url'>"
                + "<h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_copy_url_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>拷贝链接地址</h1>"
                + "<div class='cont'>"
                + "<div>拷贝本URL从您的博客或者网站链接到本" + (_mark == "product" ? "产品" : "文章") + "</div>"
                + "<textarea>" + s + "</textarea>"
                + "<div><input type='button' value='拷贝地址' onclick='copyArticleUrl()' class='b13' /></div>"
                + "</div>"
                + "</div>";
        $(document.body).append(sHtml);
    }
    setCM("div_nsw_copy_url");
    relocation("div_nsw_copy_url");
    showFullBg("div_nsw_copy_url_bg");
}
function copyArticleUrl() {
    var s = $("#div_nsw_copy_url .cont textarea").val();
    window.clipboardData.setData("Text", s);
    $a("本网页地址已复制到粘帖板。", 1);
}



function initImages(oid) {
    var fmt = "<li {$co$}><a   href={$path$} target=\"_blank\"><img longdesc={$path$} src={$path$}  width=\"60\" height=\"60\"></a></li>";
    var oHtml = "";
    for (var i = 0; i < ARR_IMG_PATH.length; ++i) {
        if (i == 0) {
            oHtml = fmt.replace(/\{\$co\$\}/ig, "class=now").replace(/\{\$path\$\}/ig, ARR_IMG_PATH[i]);

        }
        else {
            oHtml += fmt.replace(/\{\$path\$\}/ig, ARR_IMG_PATH[i]);
        }
    }
    $("#img_list").html(oHtml);
}



//function initImages(oid) {
//    var fmt = "<a href=\"{$path$}\" rel=\"zoom1\" rev=\"{$path$}\" title=\"\">"
//        + "<img src=\"/tools/photo.aspx?p={$path$}&t=0&w=60&h=60\"  class=\"blackborder\" rel=\"zoom1\"  rel=\"thumb-change: mouseover\" rev=\"/tools/photo.aspx?p={$path$}&t=0&w=60&h=60\" /></a>";
//    var oHtml = "";
//    for (var i = 0; i < ARR_IMG_PATH.length; ++i) {
//        oHtml += fmt.replace(/\{\$path\$\}/ig, ARR_IMG_PATH[i]);
//    }
//    $("#img_list").html(oHtml);
//}
function setSelectedImg(src) {
    $(src).parent().find("a").removeClass("cur");
    $(src).addClass("cur");
}
function viewBigImage(oid) {
    var curPath = window.location.host;
    var url = "/product/gallery.aspx?oid=" + oid;
    if (curPath != "undefined") {
        url += "&selectedpath=http://" + curPath;
    }
    window.open(url);
}
function switchImage(src) {
    var jImgA = $(".MagicZoom");
    var jMainImg = jImgA.find("img:eq(0)");
    var jMainImg2 = $(".MagicZoomBigImageCont img");
    var targetPath = $(src).find("img").attr("srcimg");
    jImgA.attr("href", targetPath);
    jMainImg.attr("src", targetPath);

    jMainImg2.attr("src", targetPath);
    // alert(targetPath);


    //    $("#ulImgs>li>a").removeClass("cur");
    //    $(src).addClass("cur").blur();
    $j("btnShowOrgiImg").click(function() {
        window.open(targetPath, "orgiImg");
    });
}
function initViewPhoto() {
    $j("imgBig").attr("src", $("#ulPhotos>li>a>img").attr("src"));
    $("#ulPhotos>li>a:eq(0)").addClass("cur");
    resetNextPrevious($("#ulPhotos>li>a:eq(0)").get());
}
function viewPhoto(src) {
    $j("imgBig").attr("src", $(src).find("img").attr("src"));
    $("#ulPhotos>li>a").removeClass("cur");
    $(src).addClass("cur").blur();
    resetNextPrevious(src);
}
function resetNextPrevious(curObj) {
    var jPre = $(curObj).parent().prev();
    if (jPre.length == 0) {
        jPre = $("#ulPhotos>li:last");
    }
    var jNext = $(curObj).parent().next();
    if (jNext.length == 0) {
        jNext = $("#ulPhotos>li:first");
    }

    $j("btnPrev").removeAttr("onclick").click(function() {
        viewPhoto(jPre.find("a").get());
    });
    $j("btnNext").removeAttr("onclick").click(function() {
        viewPhoto(jNext.find("a").get());
    });
}
function mailArticle(objType, oid) {
    var jCntr = $j("mailArticle");
    if (jCntr.length == 0) {
        var sHtml = "<div id='mailArticle'><iframe src='/private/SendNewsToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe></div>";
        $(document.body).append(sHtml);
    }
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function() { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}
function mailProduct(objType, oid) {
    $j("mailArticle").html("<iframe src='/private/SendProductToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe>");
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function() { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}

function mailDownload(objType, oid) {
    $j("mailArticle").html("<iframe src='/private/SendDownloadToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe>");
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function() { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}

function hideMailAtricle() {
    $(top.document.getElementById("mailArticle")).fadeOut(80);
    $(top.document.getElementById("mailArticle_bg")).fadeOut(80);
    top.showDdl();
}
function contractExtend(src, skinPath) {
    var jSrc = $(src);
    var jDiv = jSrc.parent().next();
    var alt;
    var icon;
    if (jSrc.attr("alt") == "收缩") {
        alt = "展开";
        icon = "img/ico15_.gif";
        jDiv.slideUp(80);
    } else {
        alt = "收缩";
        icon = "img/ico15.gif";
        jDiv.slideDown(80);
    }
    jSrc.attr({ src: skinPath + icon, alt: alt });
}
function showLayer(elmId, bgElmId, behavior) {
    setCM(elmId);
    relocation(elmId);
    showFullBg(bgElmId, null, null, null, null, null, behavior);
}
function hideLayer(elmId, bgElmId) {
    $j(elmId).fadeOut(80);
    hideFullBg(bgElmId);
}
//function showAdvanNewsSearch() {
//    $j("div_nsw_news_advan_cntr").find("iframe").attr("src", "/news/AdvanSearch.aspx");
//    showLayer('div_nsw_news_advan_cntr', 'div_nsw_news_advan_bg', function() { $j("div_nsw_news_advan_cntr").find("iframe").css("visibility", "visible"); });
//}
function hideAdvanNewsSearch() {
    $(top.document).find("#div_nsw_news_advan_cntr").fadeOut(80);
    $(top.document).find("#div_nsw_news_advan_bg").fadeOut(80);
    top.showDdl();
}
function advanNewsSearch() {
    var url = "/search/news.aspx?type=";
    url += $g("rdoFuzzy").checked ? "1" : "2";
    top.location.href = SearchObjectByGet("ddlFields,tg|ddlNewsColumns2,sid|txtKwd,kwd|txtStartDate,start|txtEndDate,end", url, true);
}
function contractExtendProdColumn(src, _skin) {
    var jSrc = $(src);
    var jDiv = jSrc.parent().parent().next();
    var alt;
    var icon;
    if (jSrc.attr("alt") == "收缩") {
        alt = "展开";
        icon = "img/ico14.gif";
        jDiv.slideUp(80);
    } else {
        alt = "收缩";
        icon = "img/ico13.gif";
        jDiv.slideDown(80);
    }
    jSrc.attr({ src: _skin + icon, alt: alt });
}
function resetOrderList(urlPara) {
    var pos = urlPara.lastIndexOf('/');
    urlPara = urlPara.substring(pos + 1);
    var opts = $j("ddlOrderBy").find("option");
    opts.each(function(i) {
        if ($(opts[i]).attr("value") == urlPara) {
            $(opts[i]).attr("selected", "selected");
        }
    });
}
function initNextPre() {
    var jA = $j("pagerMain").find("a[class=oran_pg_pp]");
    if (jA.length == 0) {
        $j("btnPrePage").click(function() { $a("这已是第一页。"); });

    } else {
        var sHref = jA.attr("href");
        $j("btnPrePage").click(function() {
            location.href = sHref;
        });
    }
    var jA_2 = $j("pagerMain").find("a[class=oran_pg_np]");
    if (jA_2.length == 0) {
        $j("btnNextPage").click(function() { $a("这已是最后一页。"); });

    } else {
        var sHref_2 = jA_2.attr("href");
        $j("btnNextPage").click(function() {
            location.href = sHref_2;
        });
    }
}
function increaseScroll(elmId) {
    var i = 1;
    var intVal1 = setInterval(function() { if (i > 320) window.clearInterval(intVal1); $g("img_list").scrollLeft += 14; i += 14; }, 1);
}
function decreaseScroll(elmId) {
    var i = 1;
    var intVal1 = setInterval(function() { if (i > 320) window.clearInterval(intVal1); $g("img_list").scrollLeft -= 14; i += 14; }, 1);
}
function payadScroll(hiddenId, shownId, maxId) {
    var jShown = $j("payad_" + shownId);
    var jHdden = $j("payad_" + hiddenId);
    if (jShown.length == 0) {
        jShown = $j("payad_" + maxId);
    }
    jHdden.fadeOut("80", function() {
        jShown.show();
    });
}
//显示报告对话框
function showReport(src) {
    var jCnrt = $j("RPT_cntr");
    if (jCnrt.length == 0) {
        var sHtml = "<div class=\"reports\" id=\"RPT_cntr\">"
                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('RPT_cntr','RPT____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>报告/纠错/举报</h1>"
                + "<table id=\"RPT_tab\">"
                + "<tr>"
                + "<th>被报告网站标题：</th>"
                + "<td><input type=\"text\" size=\"40\" disabled=\"disabled\" value=\"" + document.title + "\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>被报告网址：</th>"
                + "<td><input type=\"text\" size=\"40\" disabled=\"disabled\" value=\"" + document.URL + "\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 报告类型：</th>"
                + "<td id=\"RPT_tdCats\"></td>"
                + "</tr>"
                + "<tr>"
                + "<th>联系人：</th>"
                + "<td><input type=\"text\" size=\"10\" id=\"RPT_txtContact\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>电子邮箱地址：</th>"
                + "<td><input type=\"text\" size=\"30\" id=\"RPT_txtEmail\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>报告内容简要描述：</th>"
                + "<td><textarea style=\"width:230px;height:80px;\" id=\"RPT_txtShortDesc\"></textarea></td>"
                + "</tr>"
                + "<tr>"
                + "<th>&nbsp;</th>"
                + "<td>"
                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#RPT_cntr>h1>a').click()\" /> "
                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"sendReprots(this)\" /> "
                + "</td>"
                + "</tr>"
                + "</table>"
                + "</div>";
        $(document.body).append(sHtml);
        fillReportCategories();
    } //end if
    jCnrt.show();
    showFullBg("RPT____BG", null, null, null, null, null, function() { $j("RPT_cats").css("visibility", "visible"); });
    setCM("RPT_cntr");
    relocation("RPT_cntr");
}
//显示留言对话框
function showLeaveword(src) {
    var jCnrt = $j("LEAVEWORD_cntr");
    if (jCnrt.length == 0) {
        var sHtml = "<div class=\"reports\" id=\"LEAVEWORD_cntr\">"
                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('LEAVEWORD_cntr','LEAVEWORD____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>留言</h1>"
                + "<table id=\"LEAVEWORD_tab\">"
                + "<tr>"
                + "<th>* 标题：</th>"
                + "<td><input type=\"text\" size=\"40\" id=\"LEAVEWORD_txtTitle\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 联系人：</th>"
                + "<td><input type=\"text\" size=\"10\" id=\"LEAVEWORD_txtContact\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>联系电话：</th>"
                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtTel\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>手机号码：</th>"
                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtMobile\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 电子邮箱地址：</th>"
                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtEmail\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 留言分类：</th>"
                + "<td id=\"LEAVEWORD_tdCats\"></td>"
                + "</tr>"
                + "<tr>"
                + "<th>留言内容：</th>"
                + "<td><textarea style=\"width:230px;height:80px;\" id=\"LEAVEWORD_txtShortDesc\"></textarea></td>"
                + "</tr>"
                + "<tr>"
                + "<th>&nbsp;</th>"
                + "<td>"
                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#LEAVEWORD_cntr>h1>a').click()\" /> "
                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"sendLeaveword(this)\" /> "

                + "</td>"
                + "</tr>"
                + "</table>"
                + "</div>";
        $(document.body).append(sHtml);
        fillLeavewordCategories();
    } //end if
    jCnrt.show();
    showFullBg("LEAVEWORD____BG", null, null, null, null, null, function() { $j("LEAVEWORD_cats").css("visibility", "visible"); });
    setCM("LEAVEWORD_cntr");
    relocation("LEAVEWORD_cntr");
}
//显示直接付款对话框
function showDirectPay(src) {
    var jCnrt = $j("DIR_PAY_cntr");
    if (jCnrt.length == 0) {
        var sHtml = "<div class=\"reports\" id=\"DIR_PAY_cntr\">"
                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('DIR_PAY_cntr','DIR_PAY____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>付款</h1>"
                + "<table id=\"DIR_PAY_tab\" style=\"background:url(" + SKIN_PATH + "img/Pay_ico.gif) no-repeat right top;width:400px;\">"
                + "<tr>"
                + "<tr>"
                + "<th>* 付款方式：</th>"
                + "<td><select id=\"DIR_PAY_ddlPayment\"><option value=\"\">请选择</option>"
                + "<option value=\"alipay\">支付宝</option>"
                + "<option value=\"99bill\">快钱</option>"
                + "</select>"
                + "</td>"
                + "</tr>"
                + "<th>* 付款人：</th>"
                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtPayer\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 电子邮箱地址：</th>"
                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtEmail\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>联系电话：</th>"
                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtTel\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>手机号码：</th>"
                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtMobile\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>我公司业务员姓名：</th>"
                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtSalesManName\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 付款金额：</th>"
                + "<td><input type=\"text\" size=\"10\" id=\"DIR_PAY_txtMoney\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>* 款项用途：</th>"
                + "<td><input type=\"text\" size=\"40\" id=\"DIR_PAY_txtUse\" /></td>"
                + "</tr>"
                + "<tr>"
                + "<th>&nbsp;</th>"
                + "<td>"
                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#DIR_PAY_cntr>h1>a').click()\" /> "
                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"directPay(this)\" /> "
                + "</td>"
                + "</tr>"
                + "</table>"
                + "</div>";
        $(document.body).append(sHtml);
    } //end if
    jCnrt.show();
    showFullBg("DIR_PAY____BG", null, null, null, null, null, function() { $j("DIR_PAY_ddlPayment").css("visibility", "visible"); });
    setCM("DIR_PAY_cntr");
    relocation("DIR_PAY_cntr");
}
//弹出收藏对话框
function showFav(src, title, url) {
    /*此部分为王军修改后的部分*/
    if (url == null) {
        url = location.pathname;
    }
    var cntrId = "div_fav_cntr";
    var newFrameSrc = "/private/favorite.aspx?url=" + url + "&title=" + title;
    newFrameSrc = newFrameSrc.toLowerCase();
    var jCntr = $j(cntrId);
    if (jCntr.length != 0) {
        jCntr.remove();
    }
    var sHtml = "<div style=\"z-index:99;position:absolute;\" id=\"" + cntrId + "\"><iframe src=\"" + newFrameSrc + "\" frameborder='0'></iframe></div>";
    $(document.body).append(sHtml);
    jCntr = $j(cntrId);
    var offset = getObjectOffset(src);
    jCntr.css({ top: offset.bottom - 130, left: offset.right - 200 });
    /*此部分为小戴版本*/
    //    $.post("/ajax.ashx?action=fav&t=" + Math.random(), {
    //    }, function(msg) {
    //        var sta = gav(msg, "state");
    //        var sMsg = gav(msg, "msg");
    //        if (sta == "1") {
    //            var cntrId = "div_fav_cntr";
    //            var newFrameSrc = "/private/favorite.aspx?url=" + url + "&title=" + title;
    //            newFrameSrc = newFrameSrc.toLowerCase();
    //            var jCntr = $j(cntrId);
    //            if (jCntr.length != 0) {
    //                jCntr.remove();
    //            }
    //            var sHtml = "<div style=\"z-index:99;position:absolute;\" id=\"" + cntrId + "\"><iframe src=\"" + newFrameSrc + "\" frameborder='0'></iframe></div>";
    //            $(document.body).append(sHtml);
    //            jCntr = $j(cntrId);
    //            var offset = getObjectOffset(src);
    //            jCntr.css({ top: offset.bottom - 122, left: offset.right - 252 });
    //        } else {
    //            top.$a(sMsg, "2");
    //        }
    //    });

}
//在top对象里关闭层
function closeTopLayer(layerId) {
    var j = $(top.document).find("#" + layerId);
    j.fadeOut();
    top.hideFullBg();
}
function getObjectOffset(src) {
    var jSrc = $(src);
    var offset = jSrc.offset();
    var obj = { top: offset.top, left: offset.left, bottom: offset.top + jSrc.height(), right: offset.left + jSrc.width() };
    return obj;
}


//显示帮助信息
function ShowHelp(_test) {
    var jLayer = $j("div_nsw_show_help");
    if (jLayer.length == 0) {
        var sHtml = "<div id='div_nsw_show_help'>"
                + "<h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_show_help_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>帮助说明</h1>"
                + "<div class='cont'>"
                + "<textarea>" + _test + "</textarea>"
                + "</div>"
                + "</div>";
        $(document.body).append(sHtml);
    }
    setCM("div_nsw_show_help");
    relocation("div_nsw_show_help");
    showFullBg("div_nsw_show_help_bg");
}

//产品推荐属性选定事件
function onclPrReAtts(attid, value, atttitle) {
    //var objatt = document.getElementById(attid);
    var kos = false;
    //objatt.innerHTML = value;
    $("#" + attid).html(value);
    if (atts == null || atts == "") {
        atts = atttitle + "," + value;
    }
    else {
        var stra = new Array();
        stra = atts.split("$");
        if (stra.length <= 0) {
            atts = atts + "$" + atttitle + "," + value;
        } else {
            atts = "";
            for (var i = 0; i < stra.length; i++) {
                var val = "";
                var strb = stra[i].split(",");
                if (strb.length == 2) {
                    val = strb[1];
                    if (strb[0] == atttitle) {
                        val = value; kos = true;
                    }
                    if (atts == null || atts == "") {
                        atts = strb[0] + "," + val;
                    } else { atts = atts + "$" + strb[0] + "," + val; }
                }
            }
            if (kos == false) {
                if (atts == null || atts == "") {
                    atts = atttitle + "," + value;
                } else {
                    atts = atts + "$" + atttitle + "," + value;
                }
            }
        }
    }
}
//切换产品详细页选项卡
function switchAttrTab(src) {
    var jSrc = $(src);
    if (jSrc.attr("class") == "cur") {
        return;
    }
    var targetItem = jSrc.attr("item_name");
    $j("div__detail").hide();
    $j("div__attr").hide();
    $j("div__" + targetItem).show();
    $(".prod_tab").find("a").removeClass("cur");
    jSrc.addClass("cur");
}

//切换产品详细页扩展标签选项卡
function switchExtendAttrTab(src, n) {
    var jSrc = src;
    var temp = src.substring(src.length - 1, src.length);
    for (var i = 0; i < n; i++) {
        var tab = "detailvalue" + i;
        var ttab = "detail" + i;
        if (temp == i) {
            $j(tab).show();
            $j(ttab).addClass("cur");
        }
        else {
            $j(tab).hide();
            $j(ttab).removeClass();
        }

    }
}

//切换产品标签内容分页
function switchExtendContentTab(src, n, m) {
    var jSrc = src;
    var temp = src.substring(src.length - 1, src.length);
    for (var i = 0; i < n; i++) {
        var tab = "contentvalue" + m + i;
        var ttab = "content" + m + i;
        if (temp == i) {
            $j(tab).show();
            $j(ttab).addClass("cur");
        }
        else {
            $j(tab).hide();
            $j(ttab).removeClass();
        }

    }
}


/****************
*网站整体主导航选中样式 MARK必须定义出来
*要注意的几点:
*1.此方法只默认选择一级导航,多级下拉导航无法选中
*3.内页面包屑导航要全部迭代出来,[即:首页>>一级分类>>二级分类>>三级分类>>四级分类>>[...]>>当前页面] 注:当前页面一定要有超链接
*4.页面级别的MARK变量必须要定义
*5.面包屑导航的三个样式发尽量不要换,
*6.主导航的父级DIV的Class样式为默认为menu,可自行修改
*7.主导航的选中样式默认为cur,可自行修改
*******************************
*ps:程序运行完还没有选择栏目[如产品栏目,加盟栏目,解决方案栏目,帮助栏目,新闻栏目,等...]的主导航样式的话,可以给定一个
*默认的栏目选择链接地址,必须为主导航上面的一个链接地址,大小写无所谓
********************/
$(function() {
    /*如果没有各栏目的中心页面(如产品的中心页面index.aspx),
    *就指定一个默认的替代导航选中 写上要选中主导航的索引
    *一般用的最多的是资讯
    */
    var newsDefaultURL = 0;
    var productDefaultURL = 3;
    var agentDefaultURL = 0;
    var helpDefaultURL = 9;
    var projectDefaultURL = 0;
    var downloadDefaultURL = 0;
    var jobDefaultURL = 0;
    //定义链接地址
    var current = "";
    //面包屑导航的获取
    var $plc = $("div.plc");
    var $plc2 = $("div.plc2");
    var $pro = $("div.pro_curmbs");
    /*面包屑导航的判断*/
    var $tmp = $plc.size() ? $plc : $plc2;
    var $location = $tmp.size() ? $tmp : $pro;
    //主导航的父级DIV
    var $menu = $("div.menu");
    //主导航的li,仅能选中一级,不带下拉列表样式
    var $menuli = $menu.children("ul").children("li");
    //面包屑导航的超链接
    var $info = $location.find("a");
    //面包屑导航超链接的数量
    var count = $info.size();
    //定义选中样式
    var _cur = "cur";
    //取消所有选中
    $menu.find("li").removeClass(_cur);
    //定义一个对象
    var Obj = new Object();
    //给对象添加一个方法,用来获取默认的链接地址
    Obj.getCurrentURL = function() {
        //判断MARK
        //并查看是取默认MARK 还是取之前定义好的替代栏目导航
        switch (MARK) {
            case "product":
                current = productDefaultURL ? productDefaultURL : MARK;
                break;
            case "news":
                current = newsDefaultURL ? newsDefaultURL : MARK;
                break;
            case "project":
                current = projectDefaultURL ? projectDefaultURL : MARK;
                break;
            case "agent":
                current = agentDefaultURL ? agentDefaultURL : MARK;
                break;
            case "help":
                current = helpDefaultURL ? helpDefaultURL : MARK;
                break;
            case "download":
                current = downloadDefaultURL ? downloadDefaultURL : MARK;
                break;
            case "job":
                current = jobDefaultURL ? jobDefaultURL : MARK;
                break;
            default:
                current = MARK;
                break;
        }
        //返回判断值
        return current;
    }
    //首页选中
    Obj.firstLiCur = function() {
        $menu.find("li:first").addClass(_cur);
    }
    //不区分大小写的选中
    Obj.selectedCur = function() {
        $menuli.children("a").each(function() {
            var _href = $(this).attr("href").toLowerCase();
            _href = _href.substring(_href.lastIndexOf("/") + 1);
            //判断地址是否一样 一样的话添加选中
            if (_href == current) {
                $(this).parent("li").addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            } else if (typeof (current) == "number") {
                $menuli.eq(current).addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            }
        });
    }
    //文字形式导航的选择.jQuery的contains默认会把所有的匹配到文字的链接加上样式  所以还得循环判断
    Obj.selectedTxtCur = function() {
        $menuli.children("a").each(function() {
            var _txt = $.trim($(this).text());
            //一般面包屑导航的最后一个都是首页[或者说"项目名称"加首页],然后在选择的时候如果主导航只有个首页的话,就会先把主导航选中,所以这里判断一下
            if (_txt == txt && txt.indexOf("首页") == -1) {
                $(this).parent("li").addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            }
        });
        //返回jQuery对象
        return $menu.children("ul").children("li." + _cur);
    }
    //判断是否有主导航选中
    Obj.hasCur = function() {
        var _hascur = $menu.children("ul").children("li." + _cur).size();
        return _hascur;
    }

    //判断MARK,如果不存在 直接首页选中并返回程序
    if (typeof (MARK) == 'undefined') {
        Obj.firstLiCur();
        return false;
    } else {
        //如果存在,转为小写
        MARK = MARK.toLowerCase();
    }

    //判断面包屑导航是否存在
    if (!count) {
        //如果不存在直接判断MARK 和栏目 的默认选中链接
        current = Obj.getCurrentURL();
        //获取添加
        Obj.selectedCur();
    }
    //循环面包屑导航 倒序
    for (var i = count - 1; i >= 0; i--) {
        //取链接地址
        current = $info.eq(i).attr("href");
        //取文本
        var txt = $.trim($info.eq(i).text());
        //截取"/"后面的链接
        current = current.substring(current.lastIndexOf("/") + 1).toLowerCase();
        //如果截取到是空的话,一般就是最后一次循环还没有匹配到主导航的样式
        if (current == "" || current == undefined) {
            //判断MARK
            current = Obj.getCurrentURL();
        }
        //主导航的匹配文字 [一般情况下是没有用的,有时候会碰到说是这个文字,但是链接确是另外一个,但是导航选中还是要加在文字上面]
        //比如 二级分类是成功案例,但是它下面还有一个三级分类是经典案例,主导航上的是二级分类确标着三级分类的链接,这个文字就有用了
        //况且这里还要先判断文字再判断链接
        var $t = Obj.selectedTxtCur();
        //var $t = $("div.menu a:contains('" + txt + "')");
        //最后一次循环txt是首页,往往主导航的第一个都是**首页,所以要判断一下
        //判断文字
        if ($t.size() && txt.indexOf("首页") == -1) {
            $t.parent("li").addClass(_cur);
            return false;
        } else {//判断链接
            Obj.selectedCur();
            //如果选中导航,则跳出循环
            if (Obj.hasCur()) { return false; }
        }
    }
    //如果都没有主导航选中,给MARK加链接 各栏目首页 主要是产品首页没有面包屑导航,没有办法判断
    if (!Obj.hasCur()) {
        current = MARK;
        Obj.selectedCur();
        //如果还没有主导航选中,给第一个加样式
        if (!Obj.hasCur()) {
            Obj.firstLiCur();
        }
    } else {
    }
});
function removeProductInfoTags() {
    if (!$.trim($("div.pd_attr").text())) {
        $("div.pd_attr").remove();
    }
    if (!$.trim($("div.pd_short").text())) {
        $("div.pd_short").remove();
    }
}
function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
            alert('抱歉，您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!');
        }
    }
}