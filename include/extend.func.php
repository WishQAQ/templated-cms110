<?php
function litimgurls($imgid=0)
{
    global $lit_imglist,$dsql;
    //��ȡ���ӱ�
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //��ȡͼƬ���ӱ�imgurls�ֶ����ݽ��д���
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //����inc_channel_unit.php��ChannelUnit��
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //����ChannelUnit����GetlitImgLinks������������ͼ
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls'],$imgid);
    
    //���ؽ��
    return $lit_imglist;
}

function GetFirstImg($imgid=0)
{
    global $lit_imglist,$dsql;
    //��ȡ���ӱ�
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //��ȡͼƬ���ӱ�imgurls�ֶ����ݽ��д���
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //����inc_channel_unit.php��ChannelUnit��
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //����ChannelUnit����GetlitImgLinks������������ͼ
    $lit_imglist = $ChannelUnit->GetFirstImg($row['imgurls'],$imgid);
    
    //���ؽ��
    return $lit_imglist;
}

function delDiv($bodytext){
	$bodytext = preg_replace("/<\/(d|D)(i|I)(v|V)>/","",$bodytext);
	$bodytext = preg_replace("/<(d|D)(i|I)(v|V).*?>/","",$bodytext);	
	return $bodytext;
}
function pasterTempletDiy($path)
{
  require_once(DEDEINC."/arc.partview.class.php");
  global $cfg_basedir,$cfg_templets_dir;
  $tmpfile = $cfg_basedir.$cfg_templets_dir."/".$path;//ģ���ļ���·��
  $dtp = new PartView();
  $dtp->SetTemplet($tmpfile);
  $dtp->Display();
} 

