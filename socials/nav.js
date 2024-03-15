const getNavContent = (lang) => {
  const topnavLink = document.querySelectorAll('.topnav__link');
  const topnavLinkChild = document.querySelectorAll('.topnav__link_child');
  for (let i in topnavLink) {
    topnavLink[i].textContent = navigation[lang][i];
  }
  for (let i in topnavLinkChild) {
    topnavLinkChild[i].textContent = activities[lang][i];
    topnavLinkChild[topnavLinkChild.length - 1].style.color = 'var(--theme)';
  }
}

const getTopbarContent = (lang) => {
  const contactLink = document.querySelector('.topbar__link');
  const partnersTitle = document.querySelectorAll('.select__trigger span');
  contactLink.textContent = topbar[lang][1];
  partnersTitle[2].textContent = topbar[lang][0];
}

const langs = document.querySelectorAll('.option');
for (let lang of langs) {
  lang.addEventListener('click', () => {
    let currentLang = lang.dataset.value;
    getTopbarContent(currentLang);
    getNavContent(currentLang);
  });
}
