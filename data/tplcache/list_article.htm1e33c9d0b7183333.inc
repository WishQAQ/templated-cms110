<?php
$z[0]=Array("field","",178,197);
$z[0][4]['name']="title";
$z[1]=Array("global","",198,224);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",265,294);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",334,392);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("php","\r\npasterTempletDiy(\"wap/head.htm\");\r\n",561,619);
$z[5]=Array("field","",681,703);
$z[5][4]['name']="position";
$z[6]=Array("channel","\r\n<li><a href='/waplist.php?tid=[field:id/]'>[field:typename/]</a></li>\r\n",733,928);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<li><a class='a1' href='/waplist.php?tid=~id~'>~typename~</a></li>";
$z[7]=Array("list","\r\n<li><a href=\"/wapview.php?aid=[field:id/]\">[field:title/]</a><em>[field:pubdate function=MyDate('m-d',@me)/]</em></li>\r\n",968,1141);
$z[7][4]['pagesize']="15";
$z[7][4]['titlelen']="45";
$z[8]=Array("pagelist","",1207,1273);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[8][4]['listsize']="5";
$z[9]=Array("php","\r\npasterTempletDiy(\"wap/footer.htm\");\r\n",1298,1358);

?>