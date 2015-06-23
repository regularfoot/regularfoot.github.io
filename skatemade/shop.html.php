<!-- Главный заголовок -->

<!-- Контент. Таблица товаров -->
        <?php
        if (isset($_GET['shop']) && (isset($_GET['watch']) || isset($_GET['juwelry'])) && isset($_GET['id'])) {
            include $_SERVER ['DOCUMENT_ROOT'] . '/inc/oneGoods.html.php';//включает отображение одгого товара
        } else
            include $_SERVER ['DOCUMENT_ROOT'] . '/inc/moreGoods.html.php';//включает отображение всех товаров
        ?>
        </div>
    </div>
</div>

