# Kelvin_Project test Alexis

## Installation

1. Installer les dépendances composer ($composer install)+ npm ($npm insall) 
2. créer un .env dans /config sur le modèle préexistant (env.default) en renseignant notamment les paramètres liées à la connexion à MySQL.
3. recréer la base de donnée (et notamment la table activities) sur votre MySQL: en fin de README Les instructions sql nécessaires



4. lancer le serveur avec : "bin/cake server" 
puis visiter `http://localhost:8765` pour arriver sur la page d'accueil.
la base de donnée est accessible depuis `http://localhost:8765/activities`

## Environnement de développement

### Back: CakePhp
le projet utilise CakePhp et son mvc. Certaines fonctionnalités (test par exemple) sont présentes mais n'ont pas été mises à profit.

les fichiers significatifs pour la compréhension de l'appli sont:
1. controller : activitiesController
2. template: homepage.ctp 
3. template: Activities/*


### Front: React & scss
    1. le fichier home.ctp a pour seule vocation d'appeler le script react/index.js sur une de ses balises html.
    2. ce script est une compilation faite par webpack du dossier ReactComponents(au besoin voir /webpack.config.js). Ce dernier n'a donc pas vocation a être utilisé en production
    3. le css additionnel (en plus de celui créer par cakePHP) est géré dans webroot/css/scss.css. Il s'agit à nouveau d'une compilation du scss existant dans le repertoire scss. scss n'a donc pas non plus vocation être appelé en production.
     
#### les scripts de l'environnement de dev:
$bin/cake server : lance le serveur sur le port 8765
$npm run dev : lance webpack et permet le suivi des modifications react (suppose un rafraichissement avec vidage du cache Ctrl+F5 hors mac)
$npm run build: minifie le repertoire react.
$npm run sasswatch: suivi des modifications scss repercutées en temps réelle sur le fichier .css.



## Requêtes sql:
CREATE DATABASE  IF NOT EXISTS `KelvinDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `KelvinDB`;
DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `CO2_per_Unit` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

LOCK TABLES `activities` WRITE;
INSERT INTO `activities` VALUES (2,'Low-cost flight ticket',10000),(3,'Regular flight ticket',3600),(4,'Legal advice',160),(6,'Electricity',6000);
UNLOCK TABLES;
