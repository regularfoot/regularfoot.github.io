		<div class="one__goods clearfix">
        	<div class="one__goods--col">
			<?php
						
			if (isset($_GET['id']))
			{
			$id = $_GET['id'];
			
			
			}?>
			
<?php foreach ($goods as $shop): ?>			
			
                    <img class="active" src="img/<?php echo $id;?>/1.jpg" alt="">
                    <img class="diactive" src="img/<?php echo $id;?>/2.jpg" alt="">
                    <img class="diactive" src="img/<?php echo $id;?>/3.jpg" alt="">
                    <img class="diactive" src="img/<?php echo $id;?>/4.jpg" alt="">
                
                <h4 class="one__goods--text">
                    <?php echo $shop['name'];?>
                </h4>
                <h4  class="one__goods--price"><?php echo $shop['pricerub'];?>р.</h4>
            </div>
			<div class="one__goods--col-2">
			<?php echo $shop['name'];?>
			Информация об изменениях к настоящему своду правил публикуется в ежегодно издаваемом информационном указателе "Национальные стандарты", а текст изменений и поправок - в ежемесячно издаваемых информационных указателях "Национальные стандарты". В случае пересмотра (замены) или отмены настоящего свода правил соответствующее уведомление будет опубликовано в ежемесячно издаваемом информационном указателе "Национальные стандарты". Соответствующая информация, уведомление и тексты размещаются также в информационной системе общего пользования - на официальном сайте разработчика (Минрегион России) в сети Интернет
			<!--Форма покупки!-->
			<form action="" method="post">
				<select>
					<option value="" autofocus disabled >Количество
					</option>
					<option value="itogo"><?php echo $shop['value'];?>
					</option>
				</select>
				<input type="hidden" name="bay" value="<?php echo $_POST['id'];?>">
				<input type="hidden" name="price" value="<?php echo $_POST['price'];?>">
				<input type="submit" name="action" value="Купить">
			</form>
			<!--Форма покупки!-->
			
			</div>
		</div>
<?php endforeach; ?>