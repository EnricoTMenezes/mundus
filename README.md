# Mundus Publishing Website

A minimalistic, responsive website for Mundus Publishing House, featuring multilingual support and an elegant design.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
  - [Changing Colors](#changing-colors)
  - [Updating the Contact Form Link](#updating-the-contact-form-link)
  - [Adding Books to the Catalog](#adding-books-to-the-catalog)
  - [Adding New Languages](#adding-new-languages)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [File Structure](#file-structure)

## Features

- Responsive design for all devices (mobile, tablet, desktop)
- Multilingual support (English, Portuguese, Spanish)
- Easy language switching
- Book catalog with cover images, titles, authors, and descriptions
- Clean, minimalistic design with sand, misty blue, and misty green color scheme
- Easily customizable CSS variables
- Vanilla JavaScript with no dependencies

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/mundus-publishing.git
   ```

2. Open the project folder in your code editor.

3. To view the website locally, simply open the `index.html` file in a web browser.

## Customization Guide

### Changing Colors

The color scheme is defined using CSS variables in the `css/variables.css` file. To change any of the three main colors:

1. Open `css/variables.css`
2. Locate the color variables at the top of the file:
   ```css
   :root {
     /* Color Variables */
     --sand: #E6DED2;
     --sand-light: #F2EDE5;
     --sand-dark: #D0C7B8;

     --misty-blue: #A5BBCC;
     --misty-blue-light: #C5D5E3;
     --misty-blue-dark: #7A94A9;

     --misty-green: #A9C0AA;
     --misty-green-light: #C5D8C6;
     --misty-green-dark: #85A086;
     
     /* Other variables... */
   }
   ```
3. Replace the hex color codes with your desired colors.
4. Save the file and refresh the browser to see the changes.

### Updating the Contact Form Link

To update the Google Form link in the Contact section:

1. Open `js/main.js`
2. Find the line:
   ```javascript
   document.getElementById('contact-form-link').setAttribute('href', '#');
   ```
3. Replace `'#'` with your Google Form URL:
   ```javascript
   document.getElementById('contact-form-link').setAttribute('href', 'https://forms.gle/your-google-form-link');
   ```
4. Save the file and refresh the browser to see the changes.

### Adding Books to the Catalog

To add new books to the catalog:

1. Open `js/books.js`
2. Add a new book object to the `books` array:
   ```javascript
   {
     id: 7, // Increment from the last ID
     title: "Your Book Title",
     author: "Author Name",
     description: "Book description goes here...",
     cover: "https://link-to-cover-image.jpg", // URL to the cover image
     languages: ["English", "Portuguese", "Spanish"] // Available languages
   }
   ```
3. Save the file and refresh the browser to see the new book in the catalog.

### Adding New Languages

To add a new language to the website:

1. Open `js/translations.js`
2. Add a new language object following the same structure as the existing ones:
   ```javascript
   fr: {
     nav: {
       home: "Accueil",
       about: "À propos",
       catalog: "Catalogue",
       contact: "Contact"
     },
     home: {
       title: "Éditions Mundus",
       subtitle: "Où les histoires transcendent les langues",
       cta: "Explorer Nos Livres"
     },
     // Add translations for all other sections...
   }
   ```
3. Open `index.html`
4. Add a new button to the language switcher:
   ```html
   <div class="language-switcher">
     <button class="lang-btn active" data-lang="en">EN</button>
     <button class="lang-btn" data-lang="pt">PT</button>
     <button class="lang-btn" data-lang="es">ES</button>
     <button class="lang-btn" data-lang="fr">FR</button> <!-- New language button -->
   </div>
   ```
5. Save both files and refresh the browser to see the new language option.

## Deployment to GitHub Pages

To deploy the website to GitHub Pages:

1. Create a GitHub repository and push your code to it:
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to your repository on GitHub.

3. Click on "Settings" > "Pages"

4. Under "Source", select "main" branch and "/ (root)" folder.

5. Click "Save"

6. Wait a few minutes for GitHub to build and deploy your site.

7. Your site will be available at `https://yourusername.github.io/repository-name/`

## File Structure

```
mundus-publishing/
│
├── css/
│   ├── style.css          # Main stylesheet
│   └── variables.css      # CSS variables (colors, fonts, etc.)
│
├── img/
│   ├── logo-placeholder.png  # Placeholder for logo
│   └── favicon.png           # Placeholder for favicon
│
├── js/
│   ├── books.js           # Book catalog data
│   ├── main.js            # Main JavaScript functionality
│   └── translations.js    # Language translations
│
├── index.html             # Main HTML file
└── README.md              # Documentation
```