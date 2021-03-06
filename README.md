# Exercice site Laure Dinateur en SPA

## Avant de démarrer l'exercice

1. Cloner ce dépôt
1. Télécharger les paquets `npm install`
1. Créer une nouvelle branche pour démarrer l'exercice

## Commandes utiles
### Télécharger les paquets
```
npm install
```

### Démarrer le serveur de développement
```
npm run serve
```

### Complier et minimiser pour la production
```
npm run build
```

### Linter son code
```
npm run lint
```

## Objectifs de l'exercice

Transformer le site de Laure Dinateur https://kode.ch/101/lauredi/ en SPA en utilisant :
* Vue.js V2 : https://fr.vuejs.org/v2/guide/
* Vue CLI : https://cli.vuejs.org/
* Vue router : https://router.vuejs.org/
* Composants monofichiers

**Vous trouverez une copie du site statique Laure Dinateur
dans le dossier `templates/` de ce projet.**

## Étapes

Étape 1 - Cloner le dépôt, télécharger les paquets et créer une nouvelle branche

Étape 2 - Création des pages et navigation (Vue router)

![Exemple de résultat pour étape 2](_supports/etape-2.png "Exemple de résultat pour étape 2")

* Créer les pages `PageAccueil.vue`, `PageContact.vue` et `PageInformations.vue`
  dans `src/views/` avec uniquement un `<h1>` contenant le titre de la page.
* Définir les routes dans `src/router/index.js`, et les tester.
* Création d'un menu de navigation `<router-link>` sommaire
  dans `src/App.vue` et ajout du `<router-view>`.

Étape 3 - Intégration des contenus HTML/CSS et images
* Copie des images : copier les images dans : `public/img/`
* Copie des CSS dans : `public/css/`
* Modification de `public/index.html`
  pour y lier les CSS et modifier les autres informations (titre, icone, ...)
* Création de composants pour l'entête le pied de page
* Ajout du HTML dans entête et pied de page
* Ajout du HTML dans les différentes pages
* Ajout de la classe "actif" au lien actif du menu.
* (optionnel) Ajouter le code CSS spécifique aux pages
  dans les composants de page `PageAccueil.vue`, `PageContact.vue` et `PageInformations.vue`

Étape 4 - Création d'un data store pour les réalisations
* Ajouter les datas au composant, représentant la page d'accueil.
* Parcourir les datas pour générer l'affichage des réalisations.


