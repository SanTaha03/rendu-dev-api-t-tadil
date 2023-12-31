# rendu-dev-api-t-tadil


# Documentation de l'API de Réservation de Terrains de Badminton

## Table des Matières

- [Lancer le Projet](#lancer-le-projet)
- [Conception](#conception)
  - [Dictionnaire des Données](#dictionnaire-des-données)
  - [Modèle Conceptuel des Données (MCD)](#modèle-conceptuel-des-données-mcd)
- [Arborescence des Fichiers](#arborescence-des-fichiers)
- [Guide d'Installation](#guide-dinstallation)
- [Exemples d'Utilisation](#exemples-dutilisation)
- [Dépendances](#dépendances)
- [Remarques](#remarques)
- [Références](#références)

## Lancer le Projet

### PRÉREQUIS

Avant de lancer le projet, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/): Plateforme JavaScript côté serveur.
  
  Pour installer Node.js, vous pouvez suivre les instructions sur leur [site officiel](https://nodejs.org/).

- [Express](https://expressjs.com/): Framework web pour Node.js.

  ```bash
  npm install express
    
- express-session: Middleware de gestion de sessions pour Express.

  ```bash
  npm install express-session
  ```
## Structure de la Base de Données

Le script SQL fourni crée la base de données `eval_api` avec trois tables : `reservations`, `Terrains`, et `Utilisateurs`.

### Table `reservations`

Cette table contient des informations sur les réservations, avec les champs suivants :

- `reservation_id` : Identifiant unique de la réservation.
- `status_reservation` : Statut de la réservation (ex. confirmé, à confirmer, annulé).
- `start_time` : Date et heure de début de la réservation.
- `duration` : Durée de la réservation en minutes.
- `terrain_id` : Identifiant du terrain associé à la réservation.
- `user_id` : Identifiant de l'utilisateur effectuant la réservation.

### Table `Terrains`

Cette table stocke des informations sur les terrains de badminton, avec les champs suivants :

- `terrain_id` : Identifiant unique du terrain.
- `terrain_name` : Nom du terrain de badminton.

### Table `Utilisateurs`

Cette table contient des informations sur les utilisateurs, avec les champs suivants :

- `user_id` : Identifiant unique de l'utilisateur.
- `pseudo` : Pseudo de l'utilisateur.
- `is_admin` : Statut administrateur (true/false).

Le script SQL configure également des clés primaires, des index et des contraintes de clé étrangère pour assurer l'intégrité des données.

Pour charger les données de démonstration dans ces tables, le script inclut des inserts d'exemple.


### Instructions pour installer les dépendances

```bash
npm install
```

### Lancer le Serveur

```bash
npm start
```

### URL d'Entrée de l'API

[http://localhost:3003](http://localhost:3003)

## Conception

### Dictionnaire des Données

| Libellé / Désignation | Code | Type | Obligatoire | Taille | Commentaire |
|-----------------------|------|------|-------------|--------|-------------|
| Nom du terrain | status | AN | Oui | - | Ne peut prendre que 3 valeurs : to_confirm, confirmed, canceled |
| Nom du terrain | terrain_name | AN | Oui | 255 | Nom du terrain de badminton |
| Date et Heure de départ | start_time | D | Oui | - | Date et Heure de début de la réservation |
| Durée de la réservation | duration | N | Oui | - | Durée de la réservation |
| Pseudo de l'utilisateur | pseudo | AN | Oui | 50 | Pseudo de l'utilisateur effectuant la réservation |
| Statut administrateur | is_admin | B | Non | - | Indique si l'utilisateur est administrateur (true/false) |

### Modèle Conceptuel des Données (MCD)
<img width="454" alt="image" src="https://github.com/SanTaha03/rendu-dev-api-t-tadil/assets/114475615/c8a6a5a6-24d9-48a9-a9cb-37cedee375b9">



## Arborescence des Fichiers

```
/controllers
  -> reservationController.js
  -> terrainController.js
  -> utilisateurController.js
/models
  -> reservationModel.js
  -> terrainModel.js
  -> utilisateurModel.js
/node_modules
/routes
  -> reservationRouter.js
  -> terrainRouter.js
  -> utilisateurRouter.js
README.md
dbConfig.js
index.html
index.js
package-lock.json
package.json
scriptSQL.sql
```

## Guide d'Installation

1. Installez les dépendances :

```bash
npm install
```

2. Configurez la base de données dans `dbConfig.js`.

3. Lancez le serveur :

```bash
npm start
```

## Dépendances

- Node.js
- Express


## Remarques
- Je n'ai pas pu finir toutes les demandes du cahier des charges nottament l'authetification et aussi le faite de rendre indisponible un terrain
- Je n'ai pas réussi également à cacher les fonctionnalités disponible que pour l'admin aux utilisateurs par manque de temps, vous pouvez voir dans mon code la ou je me suis arréter je sais que j'étais proche du résultat attendu.
- C’était un très bon entraînement pour le développement d’une API. Cependant, comme c’est la première fois que j’utilise du Javascript, cela a été un peu compliqué. Bien sûr, j’en ai vu pendant la formation de cette année en cours.

- C’était personnel, mais je préparais le mariage de mon cousin, ce qui a rendu le projet assez difficile à réaliser en même temps. Je tiens à exprimer ma reconnaissance pour le temps que vous nous avez accordé. Merci !


## Références
ChatGPT
Logiciel de diagrammes UML en ligne gratuit
 
Lucidchart
https://www.lucidchart.com › exemple › uml-online
![image](https://github.com/SanTaha03/rendu-dev-api-t-tadil/assets/114475615/9815bfdb-9e5f-4bed-84b6-a31607d92aa0)


```

N'hésitez pas à ajouter ou ajuster les sections en fonction de vos besoins spécifiques.
