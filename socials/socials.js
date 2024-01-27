const socialLists = document.querySelectorAll('.social__list');
const mail = document.querySelector('.e-mail');
const toPrint = document.querySelector('.to-print');

const socials = {
  'facebook': 'GGFloorsConstruct',
  'linkedin': 'company/ggfloors-construct',
  'instagram': 'gg_floors_construction',
}

class Social {
  constructor(name, account) {
    this.name = name;
    this.url = `https://${name}.com/${account}`;
  }
  createSocial(parent) {
    const socialItem = document.createElement('li');
    socialItem.classList.add('social__item');
    const socialLink = document.createElement('a');
    socialLink.classList.add('social__link');
    const socialIcon = document.createElement('i');
    socialIcon.classList.add(`icon-${this.name}`);
    socialLink.href = this.url;
    socialLink.append(socialIcon);
    socialItem.append(socialLink);
    parent.append(socialItem);
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

const email = new Link('email', 'mailto:gg.gmail.com');
email.createLink(mail);

const print = new Link('print', 'javascript:window.print()');
print.createLink(toPrint);
