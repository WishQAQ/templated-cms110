[field:global name=autoindex runphp="yes"]
if(@me%2==0)@me="<dl class=' case_pic clearfix nobd fr'>";
else @me=" <dl class=' case_pic clearfix nobd fl'>";
[/field:global]
              
                    <dd>
                        <a href="[field:arcurl/]" target="_blank"
                            title="[field:fulltitle/]">
                            <img src="[field:litpic/]"
                                alt="[field:fulltitle/]" title="[field:fulltitle/]" /></a></dd>
                    <dt>
                        <h2>
                            <a href="[field:arcurl/]" target="_blank"
                                title="[field:fulltitle/]">[field:title/]</a></h2>
                        <p>[field:description function="cn_substr(@me,100)"/]...</p>
                        <span><a href="[field:arcurl/]" target="_blank"
                            title="[查看详情]">[查看详情]</a></span> </dt>
                </dl>