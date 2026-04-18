# Hamza Food

Landing page statique pour `Hamza Food`, avec interface bilingue arabe/francais, menu dynamique et contact rapide via WhatsApp.

## Stack

- `index.html` : structure de la page
- `css/style.css` : styles utilitaires et interactions custom
- `js/app.js` : menu, traduction, recherche, galerie et micro-interactions
- `img/` : logo et photos locales

## Ce qui a ete renforce

- meilleure presentation business
- experience menu plus claire avec recherche
- liens de contact plus propres
- metadata SEO de base
- traduction plus robuste
- galerie avec lightbox

## Points de personnalisation rapide

- numero WhatsApp : `js/app.js` via `WHATSAPP_NUMBER`
- horaires : `index.html` et `js/app.js`
- categories et prix : objet `MENU` dans `js/app.js`
- photos locales : dossier `img/`

## Ouvrir le projet

Comme il s'agit d'un site statique, il suffit d'ouvrir `index.html` dans un navigateur.

## Note

Si vous ajoutez de nouveaux textes bilingues, utilisez `data-ar` et `data-fr` dans le HTML pour qu'ils soient pris en charge automatiquement par le script.
