const companyName = 'GG Floors & Construct';

const clearNode = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
}

const getTextContent = (items, data, lang) => {
  for (let i in items) {
    items[i].textContent = (lang) ? data[lang][i] : data[i];
  }
}

let getAll = (selector, parent) => parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector);
let get = (selector) => document.querySelector(selector);

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
  getTextContent(topNavLink, navigation, lang);
  getTextContent(activitiesLink, activities, lang);
  getTextContent(contactLink, contact, lang);
}

const getFootNav = (lang) => {
  const footNavList = getAll('.footnav ul');
  const legalLink = getAll('.legal__link');
  const footNavLink = getAll('a', footNavList[0],);
  const footNavActivitiesLink = getAll('a', footNavList[1]);
  getTextContent(footNavLink, [...navigation[lang].slice(0, -1), ...contact[lang]]);
  getTextContent(footNavActivitiesLink, activities, lang);
  getTextContent(legalLink, legals, lang);

  for (let i = 0; i < footNavList.length; i++) {
    footNavList[footNavList.length - 1].lastElementChild.querySelector('a').textContent = more[lang];
    footNavList[i].setAttribute('aria-label', footnavTitles[lang][i]);
  }
  const chatTitle = get('.chat-to');
  chatTitle.textContent = widgetTitle[lang];
}

const createLink = (item) => `${item
.toLowerCase()
.replace(/ /g, '-')
.replace(/ï/g, 'i')
.replace('...', '')}
.html`;

const getMobileMenu = (lang) => {
  const mobileMenu = get('#mobileMenu ul');
  clearNode(mobileMenu);
  for (let i in navigation.nl) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = navigation[lang][i];
    a.href = createLink(navigation.nl[i]);
    li.appendChild(a);
    mobileMenu.appendChild(li);
  }
}

const getSearchList = (lang) => {
  const searchList = get('.search ul');
  clearNode(searchList);
  let searchItems = [...floor[lang], ...activities[lang]];
  searchItems.pop();
  let searchLinks = [...floor.nl, ...activities.nl];
  searchLinks.pop();
  let searchInput = get('#search');
  let searchTitle = get('.search label');
  searchTitle.textContent = searchTitleContent[lang];
  searchInput.setAttribute('placeholder', activities[lang][1]);
  for (let i in searchItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = searchItems[i];
    a.href = createLink(searchLinks[i]);
    li.appendChild(a);
    searchList.appendChild(li);
  }
}

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
    partnerLogo.loading = `lazy`;
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

getPartners()

const html = get('html');
html.setAttribute('lang', localStorage
.getItem('current lang') ? localStorage
.getItem('current lang')
.toLowerCase() : 'nl');


for (const option of getAll('.option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.option.selected').classList.remove('selected');
      localStorage.setItem('current lang', this.textContent);
      get('html').setAttribute('lang', this.textContent.toLowerCase());
      this.classList.add('selected');
      getNav(this.textContent.toLowerCase());
      this.closest('.dropdown').querySelector('.dropdown__title').textContent = this.textContent;
    }
  })
}

const lang = get('.lang .dropdown__title').textContent = localStorage.getItem('current lang') || 'NL';
for (const option of getAll('.option')) {
  if (option.textContent === localStorage.getItem('current lang')) {
    get('.option.selected').classList.remove('selected');
    option.classList.add('selected');
  }
}

if (lang !== 'NL') getTopNav(lang.toLowerCase());
if (lang !== 'NL') getFootNav(lang.toLowerCase());
getMobileMenu(lang.toLowerCase());
getSearchList(lang.toLowerCase());

const getNav = (lang) => {
  getTopNav(lang.toLowerCase());
  getFootNav(lang.toLowerCase());
  getMobileMenu(lang.toLowerCase());
  getSearchList(lang.toLowerCase());
}

// Sticky
const navbar = get('.navbar');
const sticky = navbar.offsetTop;
const mobileMenu = get('#mobileMenu');
const search = get('.search');

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

window.onscroll = () => getSticky();

const socialLists = getAll('.social__list');
const mail = get('.e-mail');
const toPrint = get('.to-print');

const socials = {
  facebook: 'GGFloorsConstructGG',
  linkedin: 'company/ggfloors-construct',
  instagram: 'gg_floors_construction',
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
      const socialLink = document.createElement('a');
      socialLink.classList.add('social__link');
      socialLink.classList.add(`icon-${this.name}`);
      socialLink.href = this.url;
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

getSocials(socials);

class Link {
  constructor(name, address) {
    this.name = name;
    this.href = address;
    this.icon = `icons/${name}.svg`;
  }
  createLink(parent) {
    if (parent) {
      const link = document.createElement('a');
      link.classList.add(`${this.name}__link`);
      const icon = document.createElement('img');
      icon.classList.add(`${this.name}__icon`);
      icon.src = this.icon;
      icon.alt = this.name;
      link.href = this.href;
      link.append(icon);
      parent.append(link);
    }
  }
}

const email = new Link('email', 'mailto:gg.gmail.com');
email.createLink(mail);

const print = new Link('print', 'javascript:window.print()');
print.createLink(toPrint);

let isDark = false;
