# Portfolio — Nicolas Blin

![GitHub Pages](https://img.shields.io/website?url=https%3A%2F%2Fnblinpro.github.io%2Fportfolio-projets%2F&label=site&up_message=en%20ligne&down_message=hors%20ligne)
![License](https://img.shields.io/badge/licence-MIT-2dd4a7)

Portfolio personnel en HTML/CSS/JS pur, hébergé gratuitement sur GitHub Pages.

🔗 **En ligne :** https://nblinpro.github.io/portfolio-projets/

## Structure du projet

Le contenu est organisé par formation, chaque programme ayant son propre dossier de projets :

```
.
├── index.html            # Accueil
├── parcours.html         # Timeline formations + certifications + expériences
├── projets.html          # Vue d'ensemble, renvoie vers mastere/ et but/
├── contact.html          # Formulaire (Formspree) + coordonnées
├── 404.html              # Page d'erreur personnalisée
├── mastere/              # Mastère Expert Cloud, Infrastructure & Sécurité (Ynov Campus)
│   ├── index.html        # Vue d'ensemble du programme + stack technique
│   └── *.html            # Une page par projet (monitoring, laravel, samba, openstack, gridbook, virtualisation, rapidsoft-cicd)
├── but/                  # BUT Réseaux & Télécommunications (IUT de Blois)
│   ├── index.html        # Vue d'ensemble + accordéon par année
│   └── but1/2/3.html     # Détail de chaque année
├── css/style.css         # Design system unique, partagé par toutes les pages
├── js/main.js            # Menu mobile, accordéon BUT, année du footer
├── assets/                # Favicon, avatar, image de partage (SVG)
├── robots.txt / sitemap.xml
```

Toutes les pages partagent le même `<header>`/`<footer>` et n'utilisent que les classes
définies dans `css/style.css` — aucun style inline.

## Ajouter un nouveau projet

1. Copiez une page de détail existante proche du sujet (ex. `mastere/monitoring.html` pour un projet Mastère, `but/but1.html` pour BUT) comme gabarit — le `<header>`/`<footer>` et les liens relatifs sont déjà corrects pour ce dossier.
2. Remplacez le contenu entre `.page-hero` et `.site-footer` en réutilisant les classes existantes : `.section`, `.card`, `.project-card`, `.tags`/`.tag`, `.tech-chip`, `.check-list`, `.cta-block`... (voir la liste complète en tête de `css/style.css`).
3. Ajoutez un lien vers la nouvelle page dans `mastere/index.html` ou `but/index.html` (grille de projets) et dans le pied de page de la section concernée.
4. Ajoutez l'URL dans `sitemap.xml`.
5. N'utilisez jamais d'attribut `style="…"` ni de balise `<style>` — si un composant visuel manque, ajoutez une classe réutilisable dans `css/style.css` plutôt que du style ponctuel.

## Développement local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrez http://localhost:8000

## Personnalisation

- **Contenu** : chaque page HTML est indépendante et éditable directement.
- **Style** : variables de couleurs/typo en tête de `css/style.css` (`:root`) — accent émeraude pour le Mastère, ambre pour le BUT.
- **Comportement** : menu mobile, accordéon et année du footer dans `js/main.js`.
- **Identité visuelle** : `assets/avatar.svg` (avatar du hero), `assets/favicon.svg`, `assets/og-image.svg` (aperçu de partage sur LinkedIn/réseaux) — remplacez-les par une vraie photo/logo quand disponible.

## Déploiement

Le site se déploie automatiquement sur GitHub Pages à chaque push sur la branche `main`
(voir Settings → Pages du dépôt).