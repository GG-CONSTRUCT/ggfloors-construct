const translateStartPage = (lang) => {
  get('.hero__subtitle').textContent = tagline[lang];
  get('.about-gg .title').innerHTML = aboutTitle[lang];
  getAll('.paragraph')[0].innerHTML = aboutCompany[lang];
  getAll('.paragraph')[1].textContent = socialMediaInvite[lang];
  
  const listLinks = getAll('.about-gg .list__link');
  getTextContentIn(listLinks, activities, lang);
  listLinks[listLinks.length - 1].textContent += ` (${floorTitle[lang].slice(0, 7).join(', ').toLowerCase()}, ... )`;
  
  const flooringLinks = getAll('.flooring-activities__link');
  getTitleAttr(flooringLinks, floorTitle[lang].slice(0, 7));
  get('.about-gg .list').lastElementChild.querySelector('a').textContent = `${more[lang]} ...`;

  get('.services .title').textContent = servicesTitle[lang];
  get('.about-flooring .title').textContent = activities[lang][0];
  get('.about-flooring .paragraph').innerHTML = aboutFlooring[lang];
  get('.about-flooring .list').firstElementChild.querySelector('a').textContent = `${more[lang]}`;

  get('.parallax .title').textContent = flooringOfferTitle[lang].toUpperCase();
  get('.parallax p').textContent = flooringOfferText[lang];
  get('.button-reveal span').textContent = flooringOfferBtn[lang].toUpperCase();
  get('.follow .title').textContent = followTitle[lang];

  const boxTitles = getAll('.box-title');
  const boxFooters = getAll('.box-footer span');
  getTextContentIn(boxTitles, boxTitles, lang);
  getTextContentOf(boxFooters, boxBtn, lang);
};

const cards = get('.cards');

class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  createCard(parent) {
    if (parent) {
      const card = document.createElement('a');
      card.classList.add('card');
      card.setAttribute('title', this.name);
      card.href = createLink(this.link, '.html');
      const cardImage = document.createElement('img');
      cardImage.src = `assets/images/${createLink(this.link, '')}.jpg`;
      cardImage.alt = this.name;
      card.append(cardImage);
      parent.append(card);
    }
  }
}

function getCards() {
  const items = arguments[0];
  const links = arguments[1];
  clearNode(cards);
  for (let i in items) {
    if (i % 2 == 0 && i < 8) {
      const card = new Card(items[i], links[i]);
      card.createCard(cards);
    }
  }
}

getCards(activities[lang.toLowerCase()], activities.nl);
if (lang !== 'NL') translateStartPage(lang.toLowerCase());

const getPageContent = (lang) => {
  translateStartPage(lang);
  getCards(activities[lang], activities.nl);
}
