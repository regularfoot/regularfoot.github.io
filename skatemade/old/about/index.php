<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/inc/magicquotes.inc.php';

session_start();

//footer html connect



include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

try
{
$sql = 'SELECT nameru, namerus, images, priceru, descriptionru, value
FROM goods INNER JOIN goodssort
ON goods.type = goodssort.id';
  $result = $pdo->query($sql);
}
catch (PDOException $e)
{
  $error = 'Error fetching jokes: ' . $e->getMessage();
  include $_SERVER ['DOCUMENT_ROOT'] . '/inc/error.html.php';
  exit();
}

foreach ($result as $row)
{
  $goods[] = array(
    'id' => $row['nameru'],
    'img' => $row['images'],
    'name' => $row['namerus'],
    'pricerub' => $row['priceru'],
    'textrus' => $row['descriptionru']
  );
}

include 'index.html.php';
