for (const dropdown of document.querySelectorAll('.dropdown')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.select').classList.toggle('open');
  })
}
for (const option of document.querySelectorAll('.option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
    }
  })
}
window.addEventListener('click', function (e) {
  for (const select of document.querySelectorAll('.select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});

const partnerLists = document.querySelectorAll('.partners .options')

const partners = {
  'knauf': 'knauf.com',
  'uzin': 'uzin.com',
  'forbo': 'forbo.com',
}

class Partner {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
  getPartner(parent) {
    let partnerLink = document.createElement('a');
    partnerLink.classList.add('partner__link');
    let partnerLogo = document.createElement('img');
    partnerLogo.classList.add('partner__logo');
    partnerLink.href = `https://${this.url}`;
    partnerLink.target = `_blink`;
    partnerLogo.alt = this.name;
    partnerLogo.title = this.name.toUpperCase();
    partnerLogo.draggable = false;
    partnerLogo.src = `partners/${this.name}.png`;
    partnerLink.append(partnerLogo);
    parent.append(partnerLink);
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
