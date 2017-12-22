<h2><a href="{dede:field name='typeurl'/}" title="{dede:field name='typename'/}">{dede:field name='typename'/}</a></h2>
<ul class='pro_nav_list clearfix'>
{dede:sql sql='Select * from dede_arctype where reid=~id~  ORDER BY id limit 0,10'}
<li><a href="[field:typedir function='str_replace("{cmspath}","",@me)'/]" title="[field:typename/]">[field:typename/]</a><p style='display:none;'></p></li>
{/dede:sql}	
</ul>