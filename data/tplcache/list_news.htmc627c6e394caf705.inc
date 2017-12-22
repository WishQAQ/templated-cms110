<?php
$z[0]=Array("field","",267,286);
$z[0][4]['name']="title";
$z[1]=Array("global","",287,313);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",354,383);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",423,482);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1195,1230);
$z[4][4]['filename']="head.htm";
$z[5]=Array("channel","\r\n		<li><a href='[field:typelink/]' >[field:typename/]</a></li>\r\n	    ",1756,1944);
$z[5][4]['type']="sun";
$z[5][4]['currentstyle']="<li class='cur'><a href='~typelink~' ~rel~>~typename~</a></li>";
$z[6]=Array("include","",1970,2011);
$z[6][4]['filename']="lr_contact.htm";
$z[7]=Array("field","",2095,2124);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n                    \r\n                            <dl class=\"news_dl\">\r\n                                <dt><a href=\"[field:arcurl/]\" target=\"_blank\"\r\n                                    title=\"[field:fulltitle/]\" class=\"dt_1\">\r\n                                   [field:fulltitle/] </a><span class=\"dt_2\">[\r\n                                        [field:pubdate function=MyDate('Y-m-d',@me)/]\r\n                                        ]</span></dt>\r\n                                <dd>\r\n                                 [field:description function=\"cn_substr(@me,450)\"/]...</dd>\r\n                            </dl>\r\n                          ",2248,2930);
$z[8][4]['pagesize']="9";
$z[9]=Array("pagelist","",3128,3199);
$z[9][4]['listitem']="info,index,end,pre,next,pageno";
$z[9][4]['listsize']="5";
$z[10]=Array("include","",3398,3435);
$z[10][4]['filename']="footer.htm";

?>