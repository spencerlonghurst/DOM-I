/* eslint-disable no-unused-vars */
const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


// Header Section

const nav = document.querySelectorAll('nav a');
const navTexts = Object.values(siteContent.nav);
nav.forEach((link, i) => {
  link.textContent = navTexts[i];
  link.classList.add('italic')
});

// nav.querySelector('a:nth-of-type(1)').textContent = siteContent['nav']['nav-item-1'];
// contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];



const logo = document.querySelector('header img');
logo.src = siteContent['images']['logo-img'];






// CTA Section

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent['images']['cta-img'];

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];







// Main Content 

const topContent = document.querySelector('.top-content');
const h4Top = topContent.querySelectorAll('h4');
h4Top[0].textContent = siteContent['main-content']['features-h4'];
h4Top[1].textContent = siteContent['main-content']['about-h4'];
const pTop = topContent.querySelectorAll('p');
pTop[0].textContent = siteContent['main-content']['features-content'];
pTop[1].textContent = siteContent['main-content']['about-content'];

const mainImg = document.querySelector('.main-content img');
mainImg.src = siteContent['images']['accent-img'];

const bottomContent = document.querySelector('.bottom-content')
const h4Bottom = bottomContent.querySelectorAll('h4');
h4Bottom[0].textContent = siteContent['main-content']['services-h4'];
h4Bottom[1].textContent = siteContent['main-content']['product-h4'];
h4Bottom[2].textContent = siteContent['main-content']['vision-h4'];
const pBottom = bottomContent.querySelectorAll('p');
pBottom[0].textContent = siteContent['main-content']['services-content'];
pBottom[1].textContent = siteContent['main-content']['product-content'];
pBottom[2].textContent = siteContent['main-content']['vision-content'];


// Contact Section

const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
contact.querySelector('p:nth-of-type(3)').textContent = siteContent['contact']['email'];

// Footer Section

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.classList.add('bold');