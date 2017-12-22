<?php
$z[0]=Array("field","",325,344);
$z[0][4]['name']="title";
$z[1]=Array("global","",345,371);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",412,441);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",481,540);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1547,1582);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",2281,2310);
$z[5][4]['name']="position";
$z[6]=Array("field","",2637,2655);
$z[6][4]['name']="body";
$z[7]=Array("channelartlist","\r\n            <h2><a href=\"{dede:field name='typeurl'/}\" title=\"{dede:field name='typename'/}\">{dede:field name='typename'/}</a></h2>\r\n			<ul class='pro_nav_list clearfix'>\r\n{dede:sql sql='Select * from dede_arctype where reid=~id~  ORDER BY id limit 0,10'}\r\n			<li><a href=\"[field:typedir function='str_replace(\"{cmspath}\",\"\",@me)'/]\" title=\"[field:typename/]\">[field:typename/]</a><p style='display:none;'></p></li>\r\n		{/dede:sql}	\r\n			</ul>\r\n		",3433,3939);
$z[7][4]['typeid']="2";
$z[7][4]['row']="10";
$z[8]=Array("include","",4096,4137);
$z[8][4]['filename']="lr_contact.htm";
$z[9]=Array("include","",4615,4652);
$z[9][4]['filename']="footer.htm";

?>