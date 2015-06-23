-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 23 2015 г., 23:16
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `skatemade`
--

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `type` int(11) NOT NULL,
  `images` int(11) NOT NULL,
  `namerus` text NOT NULL,
  `nameus` text NOT NULL,
  `priceru` int(11) NOT NULL,
  `priceus` int(11) NOT NULL,
  `descriptionru` text NOT NULL,
  `descriptionus` text NOT NULL,
  `value` int(11) DEFAULT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`type`, `images`, `namerus`, `nameus`, `priceru`, `priceus`, `descriptionru`, `descriptionus`, `value`, `url`) VALUES
(1, 1, 'Скейт часы с синими полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'English description', 1, 'shop/watch/watch-blue'),
(1, 2, 'Скейт часы с фиолетовыми полосками', 'Skate watch with red stripes', 2500, 100, 'Описание на русском', 'English description', 1, ''),
(1, 3, 'Скейт часы с тонкими черными полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 4, 'Сережки с черными полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(1, 5, 'Скейт часы с фиолетовыми полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(1, 6, 'Скейт часы с синими полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(1, 7, 'Скейт часы с цветными полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(1, 8, 'Скейт часы с синими полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(1, 9, 'Скейт часы сдвоенные красно-фиолетовый', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 10, 'Сережки с зелеными полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 11, 'Сережки с синими полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 12, 'Сережки с синими полосками', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 13, 'Сережки конусы и Треугольный кулон', 'Skate watch with blue stripes', 2500, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 14, 'Сережки и Кулон-Сердце', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 15, 'Сережки, кольцо и Кулон-Сердце', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 16, 'Сережки ромбы и Кулон-Треугольник', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 17, 'Сережки треугольники и Кулон-Сердце', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 18, 'Сережки', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 19, 'Сережки и кулон', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, ''),
(2, 20, 'Сережки и кулон', 'Skate watch with blue stripes', 600, 100, 'Описание на русском', 'Описание на Английском', 1, '');

-- --------------------------------------------------------

--
-- Структура таблицы `goodssort`
--

CREATE TABLE IF NOT EXISTS `goodssort` (
  `nameru` text NOT NULL,
  `id` int(11) NOT NULL,
  `nameu` text NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goodssort`
--

INSERT INTO `goodssort` (`nameru`, `id`, `nameu`) VALUES
('часы', 1, 'watch'),
('Украшения', 2, 'juwelry');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
