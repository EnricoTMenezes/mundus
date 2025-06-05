document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize with default language (English)
  let currentLang = 'en';
  
  // Function to update all text content based on selected language
  function updateLanguage(lang) {
    currentLang = lang;
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
    
    // Update all text elements with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const keys = key.split('.');
      
      // Navigate through the translations object to find the right text
      let text = translations[lang];
      for (const k of keys) {
        if (text && text[k]) {
          text = text[k];
        } else {
          text = null;
          break;
        }
      }
      
      if (text) {
        element.textContent = text;
      }
    });
    
    // Re-render book cards to update language-specific content
    renderBooks();
  }
  
  // Render book cards in the catalog section
  function renderBooks() {
    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = '';
    
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      
      const bookCover = document.createElement('div');
      bookCover.className = 'book-cover';
      
      const img = document.createElement('img');
      img.src = book.cover;
      img.alt = book.title;
      bookCover.appendChild(img);
      
      const bookInfo = document.createElement('div');
      bookInfo.className = 'book-info';
      
      const title = document.createElement('h3');
      title.className = 'book-title';
      title.textContent = book.title;
      
      const author = document.createElement('p');
      author.className = 'book-author';
      author.textContent = book.author;
      
      const description = document.createElement('p');
      description.className = 'book-description';
      description.textContent = book.description;
      
      const readMoreBtn = document.createElement('a');
      readMoreBtn.href = '#';
      readMoreBtn.className = 'btn primary-btn';
      readMoreBtn.textContent = translations[currentLang].book.readMore;
      
      bookInfo.appendChild(title);
      bookInfo.appendChild(author);
      bookInfo.appendChild(description);
      bookInfo.appendChild(readMoreBtn);
      
      bookCard.appendChild(bookCover);
      bookCard.appendChild(bookInfo);
      
      bookGrid.appendChild(bookCard);
    });
  }
  
  // Add event listeners to language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const languageSwitcher = document.querySelector('.language-switcher');
  
  mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    languageSwitcher.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = this.querySelectorAll('span');
    this.classList.toggle('active');
    
    if (this.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        mobileMenuToggle.click();
      }
    });
  });
  
  // Set placeholder contact form link
  // This will be replaced with the actual Google Form link later
  document.getElementById('contact-form-link').setAttribute('href', '#');
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    
    if (window.scrollY > 50) {
      header.style.padding = '5px 0';
      header.style.boxShadow = 'var(--shadow-md)';
      logo.classList.add('small');
    } else {
      header.style.padding = '';
      header.style.boxShadow = '';
      logo.classList.remove('small');
    }
  });
  
  // Initialize the page
  updateLanguage(currentLang);
});