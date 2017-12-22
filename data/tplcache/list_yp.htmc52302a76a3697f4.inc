<?php
$z[0]=Array("field","",265,284);
$z[0][4]['name']="title";
$z[1]=Array("global","",285,311);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",352,381);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",421,480);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1105,1140);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1586,1615);
$z[5][4]['name']="position";
$z[6]=Array("list","\r\n                [field:global name=autoindex runphp=\"yes\"]\r\nif(@me%3==0)@me=\"<dl  class='hot_pro nomg'>\";\r\nelse @me=\" <dl  class='hot_pro '>\";\r\n[/field:global]\r\n                       \r\n                             <dt><a href=\"[field:arcurl/]\" target=\"_blank\"\r\n                                    title=\"“[field:fulltitle/]\">\r\n                                    <img src=\"[field:litpic/]\" alt=\"“[field:fulltitle/]\" title=\"“[field:fulltitle/]\" /></a></dt>\r\n                                <dd>\r\n                                    <a href=\"[field:arcurl/]\" target=\"_blank\"\r\n                                        title=\"“[field:fulltitle/]\">[field:title/]</a></dd>\r\n                            </dl>\r\n                        ",1754,2528);
$z[6][4]['pagesize']="12";
$z[7]=Array("pagelist","",2779,2850);
$z[7][4]['listitem']="info,index,end,pre,next,pageno";
$z[7][4]['listsize']="5";
$z[8]=Array("arclist","\r\n                                <li><span class=\"fr\">\r\n                                    [field:pubdate function=MyDate('Y-m-d',@me)/]</span><a target=\"_blank\"\r\n                                        href=\"[field:arcurl/]\" title=\"[field:fulltitle/]\">\r\n                                        [field:title/]</a></li>\r\n                            ",3114,3536);
$z[8][4]['typeid']="5";
$z[8][4]['row']="20";
$z[8][4]['titlelen']="20";
$z[8][4]['orderby']="click";
$z[9]=Array("channelartlist","\r\n            <h2><a href=\"{dede:field name='typeurl'/}\" title=\"{dede:field name='typename'/}\">{dede:field name='typename'/}</a></h2>\r\n			<ul class='pro_nav_list clearfix'>\r\n{dede:sql sql='Select * from dede_arctype where reid=~id~  ORDER BY id limit 0,10'}\r\n			<li><a href=\"[field:typedir function='str_replace(\"{cmspath}\",\"\",@me)'/]\" title=\"[field:typename/]\">[field:typename/]</a><p style='display:none;'></p></li>\r\n		{/dede:sql}	\r\n			</ul>\r\n		",4048,4554);
$z[9][4]['typeid']="2";
$z[9][4]['row']="10";
$z[10]=Array("include","",5020,5061);
$z[10][4]['filename']="lr_contact.htm";
$z[11]=Array("include","",5248,5285);
$z[11][4]['filename']="footer.htm";

?>