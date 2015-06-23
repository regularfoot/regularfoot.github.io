<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
		<!-- Bootstrap Core CSS -->
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
    <!-- Custom CSS -->
   
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
		
		
		
	


 <!-- Контент -->
<div id="wrap">
    <div class="container">
		<div class="bord">
		
   
            <!-- Логотип фирмы -->
			<div class="text-center col-md-4">
			</div>
			<div class="text-center col-md-4">
			<a href="#"><img src="img/logo.png" alt="" /></a>
			</div>
            
			
			<!-- Форма корзины -->
			<div class="col-md-4">
				<p>Ваша корзина содержит <?php
					echo count($_SESSION['goods']); ?> элементов.</p>
				<p><a href="/shop/cart.html.php">Посмотреть карзину</a></p>
			</div>
			<!-- Форма корзины -->
			
			
						
			<!-- Слайдер -->
			<div><img class="img-responsive border" src="img/slider.jpg" alt="" /></div>
			<?php 
			//include $_SERVER ['DOCUMENT_ROOT'] . '/inc/slider.inc.html.php';
			?>
            <!-- Слайдер -->
			
			<!-- навигация -->
			<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
			<div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="">Главная</a></li>
					
						<li class="dropdown">
							<a href="shop/" class="dropdown-toggle" data-toggle="dropdown">Магазин <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a href="shop/?watch">Часы</a></li>
								<li><a href="shop/?jewelry">Украшения</a></li>							
							</ul>
						</li>
					<li class=""><a href="about/">О нас</a></li> 
					<li class=""><a href="contacts/">Контакты</a></li> 
					<li class=""><a href="gallery/">Галерея</a></li> 
				</ul>
			</div>
</nav>
			<?php 
			//include $_SERVER ['DOCUMENT_ROOT'] . '/inc/nav.inc.html.php';
			?>
            <!-- навигация -->
		
		
        <!-- Главный заголовок -->
		
            <div class="text-center">
			
                <h1>
                 Вещи из старых скейтбордов!   
                </h1>
			<hr>
			</div>
			
        <!-- Контент. Таблица товаров -->

          	<div class="row">
				<?php foreach ($goods as $shop): ?>
					<div class="col-md-4">
					 <!--<form action="" method="post">  -->
					 <a href="<?php echo ($shop['url'])?>">
							<img class="img-responsive" src="img/<?php echo ($shop['img'])?>/1.jpg" alt=""></a>					
							<!--<input type="hidden" name="id" value="<?php
					//($shop['img']);?>">  -->
					
					<!--Передаваемые переменные для одного товара!
					<input type="hidden" name="id" value="<?php //echo ($shop['img']);?>">
					<input type="hidden" name="name" value="<?php //echo ($shop['name']);?>">
					<input type="hidden" name="price" value="<?php //echo ($shop['pricerub']);?>">
					<input type="hidden" name="text" value="<?php //echo ($shop['textrus']);?>">
					<input type="hidden" name="value" value="<?php //echo ($shop['value']);?>">
					<input type="submit" value="Купить">
					</form>-->
						
						<h4 class="text-center">
							<?php echo htmlspecialchars($shop['name']);?>
						</h4>
						<h4  class="text-center"><?php echo htmlspecialchars($shop['pricerub']);?>р.</h4>
					</div>
				<?php endforeach; ?>
			</div>
		
		<!-- Контент. Таблица товаров -->
		
<hr>
        <!-- Страницы -->
        <div class="row text-center">
            <div class="col-lg-12">
                <ul class="pagination">
                    <li>
                        <a href="#">&laquo;</a>
                    </li>
                    <li class="active">
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Страницы -->

        <hr>

      
		</div>
    </div>
</div>	

	  <!-- Футер -->
    <?php include $_SERVER ['DOCUMENT_ROOT'] . '/inc/footer.inc.html.php'; ?>
    <!-- Футер -->

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    <!-- jQuery -->
    <script src="bootstrap/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="bootstrap/js/bootstrap.js"></script>
	<!--                        -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>

	</html>
