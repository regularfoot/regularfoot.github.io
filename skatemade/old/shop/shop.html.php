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

        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/main.css">
		<!-- Bootstrap Core CSS -->
    <link href="../bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="../bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
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
			<a href="#"><img src="../img/logo.png" alt="" /></a>
			</div>
			<!-- Логотип фирмы -->
			
			
			<!-- Форма корзины -->
			<div class="col-md-4">
				<p>Ваша корзина содержит <?php
					echo count($_SESSION['goods']); ?> элементов.</p>
				<p><a href="?cart">Посмотреть карзину</a></p>
			</div>
			<!-- Форма корзины -->
			
			
			<?php 
			// //include $_SERVER ['DOCUMENT_ROOT'] . '/inc/logo.inc.html.php';
			?>
            <!-- Логотип фирмы -->
						
			<!-- Слайдер -->
			<div><img class="img-responsive border" src="../img/slider.jpg" alt="" /></div>
			<?php 
			//include $_SERVER ['DOCUMENT_ROOT'] . '/inc/slider.inc.html.php';
			?>
            <!-- Слайдер -->
			
			<!-- навигация -->
			<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
				<div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class=""><a href="../">Главная</a></li>
						
							<li class="dropdown">
								<a href="../shop/" class="dropdown-toggle active" data-toggle="dropdown">Магазин <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a href="../shop/?watch">Часы</a></li>
									<li><a href="../shop/?jewelry">Украшения</a></li>							
								</ul>
							</li>
						<li class=""><a href="../about/">О нас</a></li> 
						<li class=""><a href="../contacts/">Контакты</a></li> 
						<li class=""><a href="../gallery/">Галерея</a></li> 
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
		<?php 
		if (isset($_POST['id']))
		{
		include $_SERVER ['DOCUMENT_ROOT'] . '/inc/oneGoods.html.php';
		}
		else
		include $_SERVER ['DOCUMENT_ROOT'] . '/inc/moreGoods.html.php';
	
		?>
        

        <hr>

      
		</div>
    </div>
</div>	

	  <!-- Футер -->
    <?php include $_SERVER ['DOCUMENT_ROOT'] . '/inc/footer.inc.html.php'; ?>
    <!-- Футер -->

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    <!-- jQuery -->
    <script src="../bootstrap/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bootstrap/js/bootstrap.js"></script>
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
