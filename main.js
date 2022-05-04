const companyName = 'GG Floors & Construct';

const clearNode = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
}

const getTextContentIn = (items, data, lang) => {
  for (let i in items) {
    items[i].textContent = (lang) ? data[lang][i] : data[i];
  }
}

const getTextContentOf = (items, data, lang) => {
  for (let item of items) {
    item.textContent = (lang) ? data[lang] : data;
  }
}

const getTitleAttr = (items, data, lang) => {
  for (let i in items) {
    items[i].title = (lang) ? data[lang][i] : data[i];
  }
}

let getAll = (selector, parent) => parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector);
let get = (selector) => document.querySelector(selector);

const createLink = (item, format) => `${item
.toLowerCase()
.replace(/ /g, '-')
.replace(/ï/g, 'i')
.replace('...', '')}
${format}`;

const getTopNav = (lang) => {
  const topNavLink = getAll('.topnav__link');
  const activitiesLink = getAll('.activities .subnav__link');
  const contactLink = getAll('.contact .subnav__link');
  const partnersTitle = get('.partners .dropdown__title');
  const topbarLink = get('.topbar__link');
  const logo = get('.logo');
  logo.title = `${companyName.toUpperCase()} | ${homePage[lang]}`;
  partnersTitle.textContent = partnersTitleContent[lang];
  topbarLink.textContent = contactLinkContent[lang];
  getTextContentIn(topNavLink, navigation, lang);
  getTextContentIn(activitiesLink, activities, lang);
  getTextContentIn(contactLink, contact, lang);
}

const getFootNav = (lang) => {
  const footNavList = getAll('.footnav ul');
  const legalLink = getAll('.legal__link');
  const footNavLink = getAll('a', footNavList[0],);
  const footNavActivitiesLink = getAll('a', footNavList[1]);
  getTextContentIn(footNavLink, [...navigation[lang].slice(0, -1), ...contact[lang]]);
  getTextContentIn(footNavActivitiesLink, activities, lang);
  getTextContentIn(legalLink, legals, lang);

  for (let i = 0; i < footNavList.length; i++) {
    footNavList[footNavList.length - 1].lastElementChild.querySelector('a').textContent = more[lang];
    footNavList[i].setAttribute('aria-label', footnavTitles[lang][i]);
  }
  const chatTitle = get('.chat-to');
  chatTitle.textContent = widgetTitle[lang];
}

const getMobileMenu = (lang) => {
  const mobileMenu = get('#mobileMenu ul');
  clearNode(mobileMenu);
  for (let i in navigation.nl) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = navigation[lang][i];
    a.href = createLink(navigation.nl[i], '.html');
    li.appendChild(a);
    mobileMenu.appendChild(li);
  }
}

// Search
const getSearchList = (lang) => {
  const searchList = get('.search ul');
  clearNode(searchList);
  let searchItems = [...floorTitle[lang], ...activities[lang]];
  searchItems.pop();
  let searchLinks = [...floorTitle.nl, ...activities.nl];
  searchLinks.pop();
  let searchInput = get('#search');
  let searchTitle = get('.search label');
  searchTitle.textContent = searchTitleContent[lang];
  searchInput.setAttribute('placeholder', activities[lang][1]);
  for (let i in searchItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = searchItems[i];
    a.href = createLink(searchLinks[i], '.html');
    li.appendChild(a);
    searchList.appendChild(li);
  }
}

const getSearchFilter = () => {
  let inputSearch, filterSearch, ulSearch, liSearch, aSearch, i;
  inputSearch = get('#search');
  filterSearch = inputSearch.value.toUpperCase();
  ulSearch = get('.search ul');
  liSearch = ulSearch.getElementsByTagName('li');
  
  for (i = 0; i < liSearch.length; i++) {
    aSearch = liSearch[i].getElementsByTagName('a')[0];
    if (aSearch.innerHTML.toUpperCase().indexOf(filterSearch) > -1) {
      liSearch[i].style.display = 'block';
    } else {
      liSearch[i].style.display = 'none';
    }
  }
}

// dropdown open/close
for (const dropdown of getAll('.dropdown')) {
  dropdown.addEventListener('click', function () {
    this.classList.toggle('opened');
  })
}

window.addEventListener('click', function (e) {
  for (const dropdown of getAll('.dropdown')) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('opened');
    }
  }
  const header = get('header');
    if (!header.contains(e.target)) {
      get('.input').checked = false;
  }
});

// Partners
const partnerLists = getAll('.partners .dropdown__list')

const partners = {
  'knauf': 'knauf.com',
  'uzin': 'uzin.com',
  'forbo': 'forbo.com',
  'bouwpuntdeckers': 'bouwpuntdeckers.be',
  'general-floor': 'generalfloor.com',
  'perfecty': 'perfecty.be',
}

class Partner {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
  getPartner(parent) {
    const partnerItem = document.createElement('li');
    partnerItem.classList.add('partner__item');
    const partnerLink = document.createElement('a');
    partnerLink.classList.add('partner__link');
    const partnerLogo = document.createElement('img');
    partnerLogo.classList.add('partner__logo');
    partnerLink.href = `https://${this.url}`;
    partnerLink.target = `_blink`;
    partnerLogo.alt = this.name;
    partnerLogo.title = this.name.toUpperCase();
    partnerLogo.draggable = false;
    partnerLogo.src = `images/partners/${this.name}.png`;
    partnerLogo.width = 96;
    partnerLogo.height = 48;
    partnerLink.append(partnerLogo);
    partnerItem.append(partnerLink);
    parent.append(partnerItem);
  }
}

const getPartners = () => {
  let keys = Object.keys(partners);
  for (const key of keys) {
    const partner = new Partner(key, partners[key]);
    for (const partnerList of partnerLists)
      partner.getPartner(partnerList);
  }
}

const getControlBarLinks = (lang) => {
  let items = getAll('.controlbar > a span');
  getTextContentIn(items, headingLink, lang);
}

const getForm = (lang) => {
  const getLabels = () => {
    let labels = getAll('.contact-formular > label span');
    getTextContentIn(labels, formLabels, lang);
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent += ':'
      if (i % 2 === 0) labels[i].textContent += ' *';
    }
  }
  const getTextareaPlaceholder = () => {
    const textarea = get('.contact-formular textarea');
    textarea.placeholder = formTextareaPlaceholder[lang];
  }
  const getFormNote = () => {
    const footnote = get('.footnote');
   footnote.textContent = `* = ${formNote[lang]}`;
  }
  const getFormButton = () => {
    const formBtn = get('.contact-formular button');
   formBtn.textContent = formSubmit[lang].toUpperCase();
  }
  if (get('.contact-formular')) {
    getLabels();
    getTextareaPlaceholder();
    getFormNote();
    getFormButton();
  }
}

const getGalleryTitle = (lang) => {
  get('#gallery .title').textContent = galleryTitle[lang];
}

const getAlsoSeeTitle = (lang) => {
  get('.sidenav .title').textContent = alsoSeeTitle[lang];
}

const getContactSidenavTitle = (lang) => {
  let title = get('.sidenav_contact .title');
  title.textContent = contactSidenavTitle[lang];
  let icon = document.createElement('i');
  icon.classList.add('icon-link');
  title.appendChild(icon);
}

const shuffleSidenavItems = (lang) => {
  let unshuffled = activities[lang].slice(0, activities[lang].length - 1);
  let link = getAll('.sidenav a')
  let shuffled = unshuffled
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
  getTextContentIn(link, shuffled);
  for (let i = 0; i < link.length - 1; i++) {
    link[i].href = createLink(activities.nl[activities[lang].indexOf(link[i].textContent)], '.html');
  }
  link[link.length - 1].textContent = '...';
  link[link.length - 1].href = 'activiteiten.html';
}

const getContactSidenavLink = (lang) => {
  let contactSidenavLink = getAll('.sidenav_contact a');
  getTextContentIn(contactSidenavLink, contact, lang);
}

const html = get('html');
html.setAttribute('lang', localStorage
.getItem('current lang') ? localStorage
.getItem('current lang')
.toLowerCase() : 'nl');

const lang = get('.lang .dropdown__title').textContent = localStorage.getItem('current lang') || 'NL';
for (const option of getAll('.option')) {
  if (option.textContent === localStorage.getItem('current lang')) {
    get('.option.selected').classList.remove('selected');
    option.classList.add('selected');
  }
}

if (lang !== 'NL') getTopNav(lang.toLowerCase());
if (lang !== 'NL') getFootNav(lang.toLowerCase());
if (get('.controlbar')) {
  if (lang !== 'NL') getControlBarLinks(lang.toLowerCase());
  if (lang !== 'NL') getForm(lang.toLowerCase());
}
if (get('#gallery .title')) {
  getGalleryTitle(lang.toLowerCase())
}
if (get('.sidenav .title')) {
  getAlsoSeeTitle(lang.toLowerCase());
  shuffleSidenavItems(lang.toLowerCase());
}
if (get('.sidenav_contact .title')) {
  getContactSidenavTitle(lang.toLowerCase());
  getContactSidenavLink(lang.toLowerCase());
}

const getNav = (lang) => {
  getTopNav(lang.toLowerCase());
  getFootNav(lang.toLowerCase());
}

// Sticky
const navbar = get('.navbar');
const sticky = navbar.offsetTop;
const mobileMenu = get('#mobileMenu');
const search = get('.search');
const heroSubtitle = get('.hero__subtitle');

const getSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = '65px';
    search.style.position = 'fixed';
    search.style.top = '65px';
  } else {
    navbar.classList.remove('sticky');
    mobileMenu.style.position = 'relative';
    mobileMenu.style.top = '0';
    search.style.position = 'relative';
    search.style.top = '0';
  }
  if (window.pageYOffset >= 400) {
    for (const dropdown of document.querySelectorAll('.dropdown')) {
      dropdown.classList.remove('opened');
    }
  }
  if (heroSubtitle) {
    if (window.pageYOffset > 300) {
      heroSubtitle.style.transform = 'translateY(8px) scale(1.1)';
    } else {
      heroSubtitle.style.transform = 'translateY(0) scale(1)';
    }
  }
}

window.onscroll = () => getSticky();

// Socials
const socialLists = getAll('.social__list');
const mail = get('.e-mail');
const toPrint = get('.to-print');

const socials = {
  facebook: 'GGFloorsConstructGG',
  linkedin: 'company/ggfloors-construct',
  instagram: 'gg_floors_constructions',
}

class Social {
  constructor(name, account) {
    this.name = name;
    this.url = `https://${name}.com/${account}`;
  }
  createSocial(parent) {
    if (parent) {
      const socialItem = document.createElement('li');
      socialItem.classList.add('social__item');
      socialItem.setAttribute('aria-label', this.name);
      const socialLink = document.createElement('a');
      socialLink.classList.add('social__link');
      socialLink.classList.add(`icon-${this.name}`);
      socialLink.href = this.url;
      socialLink.title = this.name;
      socialItem.append(socialLink);
      parent.append(socialItem);
    }
  }
}

function getSocials() {
  let keys = Object.keys(arguments[0]);
  for (let key of keys) {
    const social = new Social(key, socials[key]);
    for (const socialList of socialLists)
    social.createSocial(socialList);
  }
}

class Link {
  constructor(name, address) {
    this.name = name;
    this.href = address;
  }
  createLink(parent) {
    if (parent) {
      const link = document.createElement('a');
      link.classList.add(`${this.name}__link`);
      link.classList.add(`icon-${this.name}`);
      link.href = this.href;
      parent.append(link);
    }
  }
}

const email = new Link('email', 'mailto:gg.gmail.com');
email.createLink(mail);

const print = new Link('print', 'javascript:window.print()');
print.createLink(toPrint);

const getPageName = () => window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1).replace('.html', '');
const pageTitle = (lang) => {
  if (getPageName() !== 'index' && getPageName() !== 'home') {
    let arrNL = [...navigation.nl, ...activities.nl, ...floorTitle.nl, ...contact.nl];
    let arr = [...navigation[lang], ...activities[lang], ...floorTitle[lang], ...contact[lang]];
    let title = getPageName().replace(/-/g, ' ');
    title = (title === 'mozaiek') ? title.replace('i', 'ï') : title;
    console.log(title);
    let titleTransform = title[0].toUpperCase() + title.slice(1);
    let titleForCurrentLang = arr[arrNL.indexOf(titleTransform)];
    get('h1').textContent = titleForCurrentLang;
    if (getPageName() !== 'contactformulier' && getPageName() !== 'activiteiten') {
      (title == 'over ons') ? get('h2').textContent = aboutTitle[lang] : (get('h2 b')) ? get('h2 b').textContent = titleForCurrentLang : '';
      for (let img of getAll('#gallery .grid img')) {
        img.alt = titleForCurrentLang;
      }
      for (let achor of getAll('#gallery .grid a')) {
        achor.dataset.caption = titleForCurrentLang;
      }
      let pageName = getPageName().replace(/-/g, '');
      get('.paragraph').innerHTML = eval(pageName)[lang];
      get('.submit-app').textContent = submitApp[lang].toUpperCase();
      if (title == 'over ons') {
        getAll('.paragraph')[1].textContent = socialMediaInvite[lang];
        getTextContentIn(getAll('.about-gg__activities .list__link'), activities, lang);
        get('.about-gg__activities .list__link').textContent += ` (${floorTitle[lang].slice(0, 7).join(', ').toLowerCase()}, ... )`;
        getTitleAttr(getAll('.flooring-activities__link'), floorTitle[lang].slice(0, 7));
      }
      if (title == 'vloerder') {
        getTextContentIn(getAll('.about-gg__activities .list__link'), floorTitle, lang);
        get('.about-gg__activities')
        .lastElementChild.querySelector('a')
        .textContent = `${more[lang]} ...`;
      }
    }
  }
}
pageTitle(lang.toLowerCase());

// switch language
for (const option of getAll('.option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.option.selected').classList.remove('selected');
      localStorage.setItem('current lang', this.textContent);
      get('html').setAttribute('lang', this.textContent.toLowerCase());
      this.classList.add('selected');
      getNav(this.textContent.toLowerCase());
      getMobileMenu(this.textContent.toLowerCase());
      getSearchList(this.textContent.toLowerCase());
      (typeof getPageContent === 'undefined') ? getControlBarLinks(this.textContent.toLowerCase()) : '';
      (typeof getPageContent === 'undefined') ? getForm(this.textContent.toLowerCase()) : '';
      (get('#gallery .title')) ? getGalleryTitle(this.textContent.toLowerCase()) : '';
      if (get('.sidenav .title')) { 
        getAlsoSeeTitle(this.textContent.toLowerCase()); 
        shuffleSidenavItems(this.textContent.toLowerCase());
      }
      (get('.sidenav_contact .title')) ? getContactSidenavTitle(this.textContent.toLowerCase()) : '';
      (getAll('.sidenav_contact a')) ? getContactSidenavLink(this.textContent.toLowerCase()) : '';
      (typeof getPageContent !== 'undefined') ? getPageContent(this.textContent.toLowerCase()) : '';
      pageTitle(this.textContent.toLowerCase());
      this.closest('.dropdown').querySelector('.dropdown__title').textContent = this.textContent;
    }
  })
}

window.addEventListener('load', () => {
  getMobileMenu(lang.toLowerCase());
  getSearchList(lang.toLowerCase());
  getSocials(socials);
  getPartners();
  setTimeout(() => document.querySelector('.chat-to').style.display = 'none', 5000);
});
