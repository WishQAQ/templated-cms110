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
$z[4]=Array("php","\r\npasterTempletDiy(\"wap/head.htm\");\r\n",563,621);
$z[5]=Array("field","",683,705);
$z[5][4]['name']="position";
$z[6]=Array("channel","\r\n<li><a href='/waplist.php?tid=[field:id/]'>[field:typename/]</a></li>\r\n",735,930);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<li><a class='a1' href='/waplist.php?tid=~id~'>~typename~</a></li>";
$z[7]=Array("list","\r\n<li><a href=\"/wapview.php?aid=[field:id/]\"><img src=\"[field:litpic/]\"/><span>[field:title/]</span></a></li>\r\n",969,1117);
$z[7][4]['pagesize']="10";
$z[8]=Array("pagelist","",1183,1249);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[8][4]['listsize']="5";
$z[9]=Array("php","\r\npasterTempletDiy(\"wap/footer.htm\");\r\n",1274,1334);

?>