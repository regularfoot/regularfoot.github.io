<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/inc/magicquotes.inc.php';


//footer html connect
include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';
if (!isset($_GET['jewelry']) and !isset($_GET['watch']))
{
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
}

if (isset($_GET['jewelry']))
{
	include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

	try
	{
	$sql = 'SELECT nameru, namerus, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where goodssort.id = 2';
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
}
//попытка вывести все часы
if (isset($_GET['watch'])) //
{
	include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

	try
	{
	$sql = 'SELECT nameru, namerus, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where goodssort.id = 1';
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
		'value' => $row['value'],
		'pricerub' => $row['priceru'],
		'textrus' => $row['descriptionru']
	  );
	}
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
