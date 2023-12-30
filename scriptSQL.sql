-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 30 déc. 2023 à 23:20
-- Version du serveur : 5.7.39
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eval_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `reservation_id` int(11) NOT NULL,
  `status_reservation` varchar(255) DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `terrain_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`reservation_id`, `status_reservation`, `start_time`, `duration`, `terrain_id`, `user_id`) VALUES
(18, 'confirme', '2024-01-03 16:25:00', 60, 20, 2),
(19, 'confirme', '2023-12-30 10:40:00', 3, 19, 1),
(21, 'a_confirmer', '2023-12-30 18:46:00', 1, 18, 1),
(22, 'confirme', '2024-01-03 14:55:00', 45, 17, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Terrains`
--

CREATE TABLE `Terrains` (
  `terrain_id` int(11) NOT NULL,
  `terrain_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Terrains`
--

INSERT INTO `Terrains` (`terrain_id`, `terrain_name`) VALUES
(17, 'Terrain A'),
(18, 'Terrain B'),
(19, 'Terrain C'),
(20, 'Terrain D');

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateurs`
--

CREATE TABLE `Utilisateurs` (
  `user_id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Utilisateurs`
--

INSERT INTO `Utilisateurs` (`user_id`, `pseudo`, `is_admin`) VALUES
(1, 'admin', 1),
(2, 'utilisateur1', 0),
(3, 'utilisateur2', 0),
(17, 'taha', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `terrain_id` (`terrain_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `Terrains`
--
ALTER TABLE `Terrains`
  ADD PRIMARY KEY (`terrain_id`);

--
-- Index pour la table `Utilisateurs`
--
ALTER TABLE `Utilisateurs`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `Terrains`
--
ALTER TABLE `Terrains`
  MODIFY `terrain_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `Utilisateurs`
--
ALTER TABLE `Utilisateurs`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`terrain_id`) REFERENCES `Terrains` (`terrain_id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Utilisateurs` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
