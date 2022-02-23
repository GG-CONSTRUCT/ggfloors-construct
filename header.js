Vue.component('topbar', {
  template: `
  <div class="topbar">
    <div class="dropdown partners">
      <span class="dropdown__title">Onze partners</span>
      <span class="arrow"></span>
      <ul class="dropdown__list">
      </ul>
    </div>
    &nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
    <a class="topbar__link" href="contact.html">Contact</a>
    <a style="margin-left: 20px; color: #fff; display: flex; align-items: center;" id="themToggle" href="#top" onclick="document.body.classList.toggle('dark'); 
      isDark = (!isDark) ? true : false;">
      <img width="16" height="16" src="icons/black-and-white.svg">
    </a>
    <div class="social social_size_s">
      <ul class="social__list"></ul>
    </div>
    <div class="dropdown lang">
      <span class="dropdown__title">NL</span>
      <span class="arrow"></span>
      <ul class="dropdown__list options">
        <li class="option selected">NL</li>
        <li class="option">EN</li>
        <li class="option">DE</li>
        <li class="option">FR</li>
      </ul>
    </div>
  </div>
  `
});

Vue.component('navbar', {
  template: `
  <div class="navbar">
    <a href="index.html" class="logo" title="GG FLOORS & CONSTRUCT | Startpagina">
    <img class="logo__image" src="images/logo.svg" alt="logo" width="42" height="42">
    <span class="logo__title">GG FLOORS & CONSTRUCT</span>
    </a>
    <nav class="topnav">
      <ul class="topnav__list">
        <li class="topnav__item">
          <a class="topnav__link" href="home.html">Home</a>
        </li>
        <li class="topnav__item">
          <a class="topnav__link" href="over-ons.html">Over ons</a>
        </li>
        <li class="topnav__item hasChild">
          <a class="topnav__link" href="activiteiten.html">Activiteiten</a>
          <span class="arrow"></span>
          <ul class="subnav activities">
            <li class="subnav__item">
              <a class="subnav__link" href="vloerder.html">Vloerder</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="schilderwerken.html">Schilderwerken</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="gyprocwerken.html">Gyprocwerken</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="pleisterwerken.html">Pleisterwerken</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="terrassen-en-opritten.html">Terrassen en opritten</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="dakwerken.html">Dakwerken</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="crepi.html">Crepi</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="renovatie.html">Renovatie</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="nieuwbouw.html">Nieuwbouw</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link more" href="alle-dossiers.html">Alle dossiers</a>
            </li>
          </ul>
        </li>
        <li class="topnav__item">
          <a class="topnav__link" href="referenties.html">Referenties</a>
        </li>
        <li class="topnav__item">
          <a class="topnav__link" href="nieuws.html">Nieuws</a>
        </li>
        <li class="topnav__item">
          <a class="topnav__link" href="vacatures.html">Vacatures</a>
        </li>
        <li class="topnav__item hasChild">
          <a class="topnav__link" href="contact.html">Contact</a>
          <span class="arrow"></span>
          <ul class="subnav contact">
            <li class="subnav__item">
              <a class="subnav__link" href="contactformulier.html">Contactformulier</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="bel-ons.html">Bel ons</a>
            </li>
            <li class="subnav__item">
              <a class="subnav__link" href="bedrijfsgegevens.html">Bedrijfsgegevens</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <a class="btn-default btn_size_l btn-call" href="tel:+32472815575">
    <img src="icons/phone-call.svg" alt="phone" width="32" height="32">
    <img src="icons/dial-pad.svg" alt="dial pad" width="32" height="32">
    </a>
    <button class="btn-search">
    <img src="icons/search.svg" alt="search icon" width="32" height="32">
    </button>
  </div>
  `
});

Vue.component('mobile-menu', {
  template: `
  <div id="mobileMenu">
    <input type="checkbox">
    <span></span>
    <span></span>
    <span></span>
    <ul class="mobile-menu"></ul>
  </div>
  `
});

Vue.component('search', {
  template: `
  <div class="search">
    <input class="input" type="checkbox">
    <span class="underline"></span>
    <div class="search__modal">
      <form class="search__form">
        <label for="search">Wat zoek je?</label>
        <p>
          <input onkeyup="getSearchFilter()" id="search" placeholder="Dakwerken" type="search">
          <button class="btn-default btn_size_m">
          <img src="icons/loupe.svg" alt="loupe">
          </button>
        </p>
        <ul></ul>
      </form>
    </div>
  </div>
  `
});

var app = new Vue({
  el: '#header'
})
