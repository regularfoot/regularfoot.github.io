<!-- Контент. Таблица товаров -->
<div class="content__gallery clearfix">
    <?php foreach ($goods as $shop): ?>
        <div class="content-gallery">
            <!--<form action="" method="post">  -->
            <a class="clearfix" href="?shop=&<?php echo $shop['type'] . "=&id=" . $shop['img']; ?>">
                <img src="img/<?php echo($shop['img']) ?>/1.jpg" alt=""></a>
        </div>
    <?php endforeach; ?>
</div>
