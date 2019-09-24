-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2019 at 10:16 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolshark3`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` text COLLATE utf8mb4_unicode_ci,
  `info` text COLLATE utf8mb4_unicode_ci,
  `avatar` text COLLATE utf8mb4_unicode_ci,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `phone`, `gender`, `zip`, `info`, `avatar`, `password`, `email_verified_at`, `token`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Priyanka Das', 'priyanka1', 'priyankadas@virtualemployee.com', '85749663522', 'Female', NULL, NULL, '66816.png', '$2y$10$hsSRgmi23GpCvNTFDTUxtu5kaxC4XqUNODn68EvJnP9WYYQTefiG6', '2019-06-26 05:00:13', NULL, 'IvkXCqQoJ2dnrTME0qybnebmLS0TMgNdLR6MtLQTLuhYSfNBiJwl8zN6pMiT', '2019-06-26 05:00:13', '2019-07-02 01:11:09'),
(4, 'Ajeet Kumar', NULL, 'jeet@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$fw2oax1oqWmtgEdk2Xn4JO7gAvNWvYhcxI8wvtcj0fOc2C7enDea.', '2019-06-25 18:30:00', NULL, NULL, '2019-06-26 08:35:46', '2019-06-26 08:35:46'),
(5, 'Sunil Kumar', NULL, 'sunil@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$1eI1SVATeIVzXYqCobab.Oi2ZYYx4cSBQfLZUA1WrHQcx7d.FrfV.', '2019-06-26 18:30:00', NULL, NULL, '2019-06-26 08:54:30', '2019-06-26 08:54:30'),
(6, 'Test1', NULL, 'test1@gmail.com', '8596742133', 'Male', NULL, NULL, '82853.jpg', '$2y$10$UXwXg4llG6KWRABFGBncHuYCGzdwLFiVAW6N0lSakTspdJ8hnplwa', '2019-07-02 01:14:22', NULL, NULL, '2019-07-02 01:12:30', '2019-07-02 01:14:22'),
(7, 'Test', NULL, 'testtest@gmail.com', '8574526396', 'Male', NULL, NULL, '68689.jpg', '$2y$10$dHcUi04Kqkgh7kniyErgsOFaBy.gW2.uXNpfJD2Y.AqA/T51Je1XK', '2019-07-01 18:30:00', NULL, NULL, '2019-07-02 01:15:27', '2019-07-02 01:16:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
