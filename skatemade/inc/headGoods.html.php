        	<div class="row">
				<?php foreach ($goods as $shop): ?>
					<div class="col-md-4">
					 <form action="" method="post">  
							<img class="img-responsive" src="img/<?php echo ($shop['img'])?>/1.jpg" alt="">					
							<input type="hidden" name="id" value="<?php
					($shop['img']);?>">
					
					<!--Передаваемые переменные для одного товара!-->
					<input type="hidden" name="id" value="<?php echo ($shop['img']);?>">
					<input type="hidden" name="name" value="<?php echo ($shop['name']);?>">
					<input type="hidden" name="price" value="<?php echo ($shop['pricerub']);?>">
					<input type="hidden" name="text" value="<?php echo ($shop['textrus']);?>">
					<input type="hidden" name="value" value="<?php echo ($shop['value']);?>">
					<input type="submit" value="Купить">
					</form>
						
						<h4 class="text-center">
							<?php echo htmlspecialchars($shop['name']);?>
						</h4>
						<h4  class="text-center"><?php echo htmlspecialchars($shop['pricerub']);?>р.</h4>
					</div>
				<?php endforeach; ?>
			</div>