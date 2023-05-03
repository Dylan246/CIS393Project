-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2023 at 05:49 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kaboom_pizza`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(6) NOT NULL,
  `name` varchar(28) NOT NULL,
  `phone_number` varchar(16) NOT NULL,
  `email` varchar(26) NOT NULL,
  `toppings` varchar(256) NOT NULL,
  `items` varchar(2048) NOT NULL,
  `method` varchar(12) NOT NULL,
  `address` varchar(52) DEFAULT NULL,
  `date` date NOT NULL,
  `time` varchar(12) NOT NULL,
  `status` varchar(12) NOT NULL DEFAULT 'Received'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `name`, `phone_number`, `email`, `toppings`, `items`, `method`, `address`, `date`, `time`, `status`) VALUES
(26, 'Bryan', '123-090-0909', 'bryan@gmail.com', '', 'Water, French Fries, Mostaccioli, ', 'Pickup', 'None', '2023-05-01', '10:00', 'Picked Up'),
(27, 'Mary', '909-090-0909', 'mary@gmail.com', 'Bacon ', 'Pepperoni Pizza, ', 'Delivery', '1234 West Street, Peoria', '2023-05-01', '11:00', 'Picked Up'),
(28, 'Hank', '808-909-9080', 'hank@gmail.com', 'Parmesan ', 'Pepperoni Pizza, Garlic Bread, ', 'Pickup', 'None', '2023-05-01', '12:05', 'Picked Up'),
(29, 'Valorie', '404-234-2323', 'valorie@gmail.com', '', 'Sausage Pizza, Cheese Pizza, Mostaccioli, ', 'Pickup', 'None', '2023-05-01', '12:10', 'Ready'),
(30, 'Gary', '506-506-5060', 'gary@gmail.com', '', 'Cheese Pizza, Cheese Pizza, ', 'Delivery', '4321 Main Street, Peoria', '2023-05-01', '12:20', 'Canceled'),
(31, 'Anna', '708-708-7080', 'anna@gmail.com', '', 'Cola, Cheese Sticks, Cheesy Alredo, ', 'Pickup', 'None', '2023-05-01', '12:32', 'Ready'),
(32, 'Pablo', '405-405-4050', 'pablo@gmail.com', 'Parmesan Bacon ', 'Cheese Pizza, Spaghetti, Water, Cola, ', 'Pickup', 'None', '2023-05-01', '12:34', 'Ready'),
(33, 'Alex', '908-908-9080', 'alex@gmail.com', '', 'Pepperoni Pizza, ', 'Delivery', '1234 University Street, Peoria', '2023-05-01', '12:40', 'In Progress'),
(34, 'Jack', '304-304-3040', 'jack@gmail.com', 'Mushroom', 'Cheese Pizza, French Fries, ', 'Pickup', 'None', '2023-05-01', '12:54', 'In Progress'),
(35, 'Kevin', '203-203-2030', 'kevin@gmail.com', 'Parmesan ', 'Cheese Pizza, Cheese Sticks, Cola, ', 'Delivery', '1234 East Street, Peoria', '2023-05-01', '13:00', 'In Progress'),
(36, 'Ella', '305-305-3050', 'ella@gmail.com', '', 'Cheese Pizza, Spaghetti, Garlic Bread, ', 'Delivery', '1234 West Street, Peoria', '2023-05-01', '13:15', 'In Progress'),
(37, 'Ian', '608-608-6060', 'ian@gmail.com', '', 'Mostaccioli, Cheese Sticks, ', 'Pickup', 'None', '2023-05-01', '13:17', 'Received'),
(38, 'Kyle', '507-507-5070', 'kyle@gmail.com', '', 'Sausage Pizza, ', 'Pickup', 'None', '2023-05-01', '13:25', 'Received'),
(39, 'Frank', '302-302-3023', 'frank@gmail.com', 'Mushroom', 'French Fries, Cheese Sticks, Lemonade, ', 'Pickup', 'None', '2023-05-01', '13:28', 'Received');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
