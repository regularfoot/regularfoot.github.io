<!DOCTYPE HTML>
<html class="no-js" lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css"/>
    <!-- Custom CSS -->

</head>
<body>

<!-- Контент -->
<div id="wrap">
    <header>
        <div class="container center">
            <div class="bord">
                <div class="header__bar center">
                    <!-- Логотип фирмы -->
                    <div class="header__bar--logo">
                        <a href="/denwer/skatemade"><img src="img/logo.png" alt=""/></a>


                    </div>

                    <!-- навигация -->
                    <nav class="navbar__wrap clearfix">
                        <ul class="navbar__nav">
                            <li class="<?= $nav1; ?>"><a href="/denwer/skatemade/">Главная</a></li>
                            <li class="dropdown <?= $nav2; ?>">
                                <a href="?shop" class="dropdown-toggle" data-toggle="dropdown">Магазин</a>
                                <ul class="dropdown-menu close">
                                    <li><a href="?shop=&watch=">Часы</a></li>
                                    <li><a href="?shop=&juwelry=">Украшения</a></li>
                                </ul>
                            </li>
                            <li class="<?= $nav3; ?>"><a href="#<!-- ?about -->">О нас</a></li>
                            <li class="<?= $nav4; ?>"><a href="#<!-- ?contacts -->">Контакты</a></li>
                            <li class="<?= $nav5; ?>"><a href="?gallery">Галерея</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header__bottom  center">
                    <div class="header__bottom--slogan">
                        Recycled skateboard art!
                    </div>
                </div>

                <!-- Форма корзины
		<div class="col-md-4">
			<p>Ваша корзина содержит <?php
                //echo count($_SESSION['goods']); ?> элементов.</p>
			<p><a href="cart.html.php">Посмотреть карзину</a></p>
		</div>
		Форма корзины -->
    </header>

    <div class="main__content">
        <!-- Слайдер -->
        <div class="slider center">
            <img src="img/slider.jpg" alt="" width="960" height="340"/>
            <img src="img/slider1.jpg" alt="" width="960" height="340"/>
            <img src="img/slider2.jpg" alt="" width="960" height="340"/>
        </div>
        <?php
        //include $_SERVER ['DOCUMENT_ROOT'] . '/inc/slider.inc.html.php';
        ?>
        <!-- Слайдер -->
