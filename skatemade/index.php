<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/inc/magicquotes.inc.php';


//footer html connect
session_start();


include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';


//--------------------------------------------------------------------------

if (!isset($_GET['juwelry']) and !isset($_GET['watch']) and !isset ($_GET['shop']) and !isset($_GET['id'])) {
    try {
        $sql = 'SELECT nameru, namerus, nameu, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id';
        $result = $pdo->query($sql);
    } catch (PDOException $e) {
        $error = 'Error fetching jokes: ' . $e->getMessage();
        include $_SERVER ['DOCUMENT_ROOT'] . '/inc/error.html.php';
        exit();
    }

    foreach ($result as $row) {
        $goods[] = array(
            'id' => $row['nameru'],
            'img' => $row['images'],
            'name' => $row['namerus'],
            'type' => $row['nameu'],
            'value' => $row['value'],
            'pricerub' => $row['priceru'],
            'textrus' => $row['descriptionru']
        );
    }
}

if (isset ($_GET['shop']) and isset ($_GET['juwelry']) and !isset($_GET['watch']) and !isset($_GET['id'])) {
    include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

    try {
        $sql = 'SELECT nameru, namerus,  nameu, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where goodssort.id = 2';
        $result = $pdo->query($sql);
    } catch (PDOException $e) {
        $error = 'Error fetching jokes: ' . $e->getMessage();
        include $_SERVER ['DOCUMENT_ROOT'] . '/inc/error.html.php';
        exit();
    }

    foreach ($result as $row) {
        $goods[] = array(
            'id' => $row['nameru'],
            'img' => $row['images'],
            'name' => $row['namerus'],
            'value' => $row['value'],
            'type' => $row['nameu'],
            'pricerub' => $row['priceru'],
            'textrus' => $row['descriptionru']
        );
    }
}
//попытка вывести все часы
if (isset($_GET['shop']) and isset($_GET['watch']) and !isset ($_GET['juwelry']) and !isset($_GET['id'])) //
{
    include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';

    try {
        $sql = 'SELECT nameru, namerus,  nameu, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where goodssort.id = 1';
        $result = $pdo->query($sql);
    } catch (PDOException $e) {
        $error = 'Error fetching jokes: ' . $e->getMessage();
        include $_SERVER ['DOCUMENT_ROOT'] . '/inc/error.html.php';
        exit();
    }

    foreach ($result as $row) {
        $goods[] = array(
            'id' => $row['nameru'],
            'img' => $row['images'],
            'name' => $row['namerus'],
            'type' => $row['nameu'],
            'value' => $row['value'],
            'pricerub' => $row['priceru'],
            'textrus' => $row['descriptionru']
        );
    }
}

//вывод единственного товара
if (isset($_GET['shop']) && (isset($_GET['watch']) || isset($_GET['juwelry'])) && isset($_GET['id'])) {
    include $_SERVER ['DOCUMENT_ROOT'] . '/inc/db.inc.php';
    $i = ($_GET['id']);
    try {
        $sql = 'SELECT nameru, namerus,  nameu, images, priceru, descriptionru, value
	FROM goods INNER JOIN goodssort
	ON goods.type = goodssort.id
	where goods.images = (' . $i . ')';
        $result = $pdo->query($sql);
    } catch (PDOException $e) {
        $error = 'Error fetching jokes: ' . $e->getMessage();
        include $_SERVER ['DOCUMENT_ROOT'] . '/inc/error.html.php';
        exit();
    }

    foreach ($result as $row) {
        $goods[] = array(
            'id' => $row['nameru'],
            'img' => $row['images'],
            'name' => $row['namerus'],
            'type' => $row['nameu'],
            'value' => $row['value'],
            'pricerub' => $row['priceru'],
            'textrus' => $row['descriptionru']
        );
    }
}
//-----------------------------------------------------корзина---------------------------------------------------


session_start();
if (!isset($_SESSION['goods'])) {
    $_SESSION['goods'] = array();
}

if (isset($_POST['action']) and $_POST['action'] == 'Купить') {
    // Добавляем элемент в конец массива $_SESSION['goods'].
    $_SESSION['goods'][] = $_POST['bay'];
    header('Location: .');
    exit();
}

if (isset($_POST['action']) and $_POST['action'] == 'Очистить корзину') {
    // Добавляем элемент в конец массива $_SESSION['goods'].
    unset($_SESSION['goods']);
    header('Location: ?cart');
    exit();
}
if (isset($_GET['cart'])) {
    $cart = array();
    $total = 0;
    foreach ($_SESSION['goods'] as $id) {
        foreach ($goods as $product) {
            if ($product['img'] == $id) {
                $cart[] = $product;
                $total += $product['pricerub'];
                break;
            }
        }
    }
    include 'cart.html.php';
    exit();
}

//--------------------------------------------------------------------------
$nav1 = "";
$nav2 = "";
$nav3 = "";
$nav4 = "";
$nav5 = "";

if (isset($_GET['shop'])) {
    $nav2 = "active";
} elseif (isset($_GET['about'])) {
    $nav3 = "active";
} elseif (isset($_GET['contacts'])) {
    $nav4 = "active";
} elseif (isset($_GET['gallery'])) {
    $nav5 = "active";
} else {
    $nav1 = "active";
}


//--------------------------------------------------------------------------
include 'index.html.php';


if (isset($_GET['about'])) {
    include 'about.html.php';
} elseif (isset($_GET['contacts'])) {
    include 'contacts.html.php';
} elseif (isset($_GET['gallery'])) {
    include 'gallery.html.php';
} elseif (isset($_GET['shop'])) {
    include 'shop.html.php';
} else {
    include 'content.html.php';
}
include $_SERVER ['DOCUMENT_ROOT'] . '/inc/footer.inc.html.php';
