<?php
$z[0]=Array("field","",388,407);
$z[0][4]['name']="title";
$z[1]=Array("global","",408,434);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",475,504);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",544,603);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1610,1645);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",2047,2066);
$z[5][4]['name']="title";
$z[6]=Array("field","\"[field:imgsrctrue/]\", ",2188,2273);
$z[6][4]['name']="imgurls";
$z[6][4]['alt']="图片输出区";
$z[7]=Array("field","",2351,2380);
$z[7][4]['name']="typename";
$z[8]=Array("field","",2503,2519);
$z[8][4]['name']="id";
$z[9]=Array("field","",2937,2966);
$z[9][4]['name']="position";
$z[10]=Array("field","",3408,3459);
$z[10][4]['name']="id";
$z[10][4]['function']="GetFirstImg(@me)";
$z[11]=Array("field","",4149,4165);
$z[11][4]['name']="id";
$z[12]=Array("field","",4706,4725);
$z[12][4]['name']="title";
$z[13]=Array("field","",4837,4866);
$z[13][4]['name']="typename";
$z[14]=Array("field","",5193,5214);
$z[14][4]['name']="jianjie";
$z[15]=Array("global","",5340,5362);
$z[15][4]['name']="cfg_tel";
$z[16]=Array("field","",6132,6150);
$z[16][4]['name']="body";
$z[17]=Array("likeart"," \r\n                            <dl><dt><a target='_blank' href=\"[field:arcurl/]\" title=\"[field:fulltitle/]\"><img src=\"[field:litpic/]\" alt=\"[field:fulltitle/]\" title=\"[field:fulltitle/]\" /></a></dt><dd class=\"t1\"><a target='_blank' href=\"[field:arcurl/]\" title=\"[field:fulltitle/]\">[field:title/]</a></dd></dl>\r\n							",6861,7231);
$z[17][4]['titlelen']="45";
$z[17][4]['row']="4";
$z[18]=Array("field","",16957,16976);
$z[18][4]['name']="title";
$z[19]=Array("channelartlist","\r\n            <h2><a href=\"{dede:field name='typeurl'/}\" title=\"{dede:field name='typename'/}\">{dede:field name='typename'/}</a></h2>\r\n			<ul class='pro_nav_list clearfix'>\r\n{dede:sql sql='Select * from dede_arctype where reid=~id~  ORDER BY id limit 0,10'}\r\n			<li><a href=\"[field:typedir function='str_replace(\"{cmspath}\",\"\",@me)'/]\" title=\"[field:typename/]\">[field:typename/]</a><p style='display:none;'></p></li>\r\n		{/dede:sql}	\r\n			</ul>\r\n		",21959,22465);
$z[19][4]['typeid']="2";
$z[19][4]['row']="10";
$z[20]=Array("include","",22621,22662);
$z[20][4]['filename']="lr_contact.htm";
$z[21]=Array("include","",23323,23360);
$z[21][4]['filename']="footer.htm";

?>