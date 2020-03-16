-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2020 at 04:30 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fdn_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `item` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `firstname`, `lastname`, `email`, `item`, `quantity`, `total_price`) VALUES
(1, 'Tommy', 'Bejo', 'tommy@mail.com', 'Barang1', 2, '100000'),
(2, 'Joko', 'Widodo', 'joko@mail.com', 'Barang2', 1, '50000'),
(3, 'Jusuf', 'Kalla', 'jusuf@mail.com', 'Barang3', 3, '150000'),
(4, 'Tommy', 'Bejo', 'tommy@mail.com', 'Barang2', 2, '100000'),
(5, 'Robert', 'Garcia', 'robert@mail.com', 'Barang10', 3, '150000'),
(6, 'Yasmien', 'Kunti', 'yasmien@mail.com', 'Barang3', 4, '200000'),
(7, 'Joko', 'Widodo', 'joko@mail.com', 'Barang7', 5, '300000'),
(8, 'Robert', 'Garcia', 'robert@mail.com', 'Barang1', 2, '100000'),
(9, 'Jusuf', 'Kalla', 'jusuf@mail.com', 'Barang7', 1, '50000'),
(10, 'Vrenda', 'Poli', 'vrenda@mail.com', 'Barang9', 4, '200000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
