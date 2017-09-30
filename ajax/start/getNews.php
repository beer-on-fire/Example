<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
    array('title'=>'111','date'=>'一号'),
    array('title'=>'222','date'=>'二号'),
    array('title'=>'333','date'=>'三号'),
    array('title'=>'444','date'=>'四号'),
    array('title'=>'555','date'=>'五号'),
    array('title'=>'666','date'=>'六号'),
    array('title'=>'777','date'=>'七号'),
    array('title'=>'888','date'=>'八号'),
    array('title'=>'888','date'=>'八号'),
    array('title'=>'888','date'=>'八号')
);

echo json_encode($news);
