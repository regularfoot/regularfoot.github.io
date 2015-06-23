<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/inc/magicquotes.inc.php';


include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

	try
	{
	$sql = 'SELECT nameru, namerus, images, priceru, descriptionru, value, url
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where url =  "shop/watch/watch-blue"';
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
		
		'img' => $row['images'],
		'name' => $row['namerus'],
		'value' => $row['value'],
		'pricerub' => $row['priceru'],
		'textrus' => $row['descriptionru']
	  );
	}
	

	//-----------------------------------------------------корзина---------------------------------------------------
	



session_start();
if (!isset($_SESSION['goods']))
{
	$_SESSION['goods'] = array();
}	
	
if (isset($_POST['action']) and $_POST['action'] == 'Купить')
{
	// Добавляем элемент в конец массива $_SESSION['goods'].
	$_SESSION['goods'][] = $_POST['bay'];
	header('Location: .');
	exit();
}

if (isset($_POST['action']) and $_POST['action'] == 'Очистить корзину')
{
	// Добавляем элемент в конец массива $_SESSION['goods'].
	unset($_SESSION['goods']);
	header('Location: ?cart');
	exit();
}
if (isset($_GET['cart']))
{
	$cart= array();
	$total = 0;
	foreach ($_SESSION['goods'] as $id)
	{
		foreach ($goods as $product)
		{
			if ($product['img'] == $id)
			{
				$cart[] = $product;
				$total += $product['pricerub'];
				break;
			}
		}
	}
	include 'cart.html.php';
	exit();
}

	
	
	//-----------------------------------------------------
	
	
	
	
include 'index.html.php';
