<?php
$z[0]=Array("field","",13,41);
$z[0][4]['name']="typeurl";
$z[1]=Array("field","",50,79);
$z[1][4]['name']="typename";
$z[2]=Array("field","",81,110);
$z[2][4]['name']="typename";
$z[3]=Array("sql","\r\n<li><a href=\"[field:typedir function='str_replace(\"{cmspath}\",\"\",@me)'/]\" title=\"[field:typename/]\">[field:typename/]</a><p style='display:none;'></p></li>\r\n",157,410);
$z[3][4]['sql']="Select * from dede_arctype where reid=~id~ ORDER BY id limit 0,10";

?>