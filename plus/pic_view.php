<?php

require_once(dirname(__FILE__)."/../include/common.inc.php");
require_once(DEDEINC."/dedetag.class.php");
require_once(DEDEINC."/channelunit.func.php");
	$arcID = $id = (isset($id) && is_numeric($id)) ? $id : 0;
	$row = $dsql->GetOne("Select id,title,imgurls  From `#@__addonimages` f,`#@__archives` arc where arc.`id` = f.`aid` and f.`aid` = '$id'");	
	$imgurls = $row['imgurls'];
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $row['title'];?></title>
<link rel="shortcut icon" href="favicon.ico" />
<style>
body {
	margin:0;
}
</style>
<script type="text/javascript">
var close_window = '您是否关闭当前窗口';
</script>
</head>
<body>
<div id="Div1">
  <embed src="/plus/pic-view.swf" quality="high" id="picview" flashvars="copyright=shopex&xml=
<products name='<?php echo $row['title'];?>' shopname='mokuge' water_mark_img_path='' water_mark_position='3' water_mark_alpha='0.5'>
<?php	
    $ChannelUnit = new ChannelUnit(2,$id);    
    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetSmallImg($imgurls,$id);		
	echo $lit_imglist;
?>

<photo_desc><?php echo $row['title'];?></photo_desc>

<?php	
    $ChannelUnit = new ChannelUnit(2,$id);    
    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetBigImg($imgurls,$id);		
	echo $lit_imglist;
?>

</products>
" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>
  <script>
function windowClose()
{
    if(window.confirm(close_window))
    {
        window.close();
    }
}
</script> 
</div>
</body>
</html>
