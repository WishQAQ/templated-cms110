<?php
/**
 * @version        $Id: index.php 1 9:23 2010-11-11 tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
if(!file_exists(dirname(__FILE__).'/data/common.inc.php'))
{
    header('Location:install/index.php');
    exit();
}
//自动生成HTML版

    require_once (dirname(__FILE__) . "/include/common.inc.php");
    require_once DEDEINC."/arc.partview.class.php";
    $GLOBALS['_arclistEnv'] = 'index';
    //$row = $dsql->GetOne("Select * From `#@__homepageset`");
    //$row['templet'] = MfTemplet($row['templet']);
    $pv = new PartView();
    //$pv->SetTemplet($cfg_basedir . $cfg_templets_dir . "/" . $row['templet']);
	$pv->SetTemplet($cfg_basedir . $cfg_templets_dir . "/" . "wap/index.htm");
    
        $pv->Display();
        exit();

?>