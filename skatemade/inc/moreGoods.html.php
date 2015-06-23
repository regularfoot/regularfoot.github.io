<div class="content clearfix">
				<?php foreach ($goods as $shop): ?>
					<div class="content-col">
					 <!--<form action="" method="post">  -->
					 <a class="clearfix" href="?shop=&<?php echo $shop['type']."=&id=". $shop['img'];?>">
							<img src="img/<?php echo ($shop['img'])?>/1.jpg" alt=""></a>					
											
						<h4 class="text">
							<?php echo htmlspecialchars($shop['name']);?>
						</h4>
						<h4  class="text--price"><?php echo htmlspecialchars($shop['pricerub']);?>р.</h4>
					</div>
				<?php endforeach; ?>
			</div>
