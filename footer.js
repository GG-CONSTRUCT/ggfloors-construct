Vue.component('footnav', {
  template: `
    <div class="footnav">
      <ul aria-label="Hoofd">
        <li class="footnav__item">
          <a class="footnav__link" href="home.html">Home</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="over-ons.html">Over ons</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="activiteiten.html">Activiteiten</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="referenties.html">Referenties</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="nieuws.html">Nieuws</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="vacatures.html">Vacatures</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="contactformulier.html">Contactformulier</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="bel-ons.html">Bel ons</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="bedrijfsgegevens.html">Bedrijfsgegevens</a>
        </li>
      </ul>
      <ul aria-label="Activiteiten">
        <li class="footnav__item">
          <a class="footnav__link" href="vloerder.html">Vloerder</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="schilderwerken.html">Schilderwerken</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="gyprocwerken.html">Gyprocwerken</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="pleisterwerken.html">Pleisterwerken</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="terrassen-en-opritten.html">Terrassen en opritten</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="dakwerken.html">Dakwerken</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="crepi.html">Crepi</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="renovatie.html">Renovatie</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="nieuwbouw.html">Nieuwbouw</a>
        </li>
        <li class="footnav__item">
          <a class="footnav__link" href="alle-dossiers.html">Alle dossiers</a>
        </li>
      </ul>
      <div class="flex-wrapper">
        <ul aria-label="Soziale Netzwerke">
          <li class="footnav__item">
            <a class="footnav__link" href="https://www.facebook.com/GGFloorsConstructGG/">Facebook</a>
          </li>
          <li class="footnav__item">
            <a class="footnav__link" href="https://www.instagram.com/gg_floors_construction/">Instagram</a>
          </li>
          <li class="footnav__item">
            <a class="footnav__link" href="https://www.linkedin.com/company/ggfloors-construct/">Linkedin</a>
          </li>
        </ul>
        <ul aria-label="Gegevens">
          <li class="footnav__item icon-briefcase">
            <a class="footnav__link" href="bedrijfsgegevens.html">GG FLOORS & CONSTRUCT bv <br>BTW: BE 0704678967</a>
          </li>
          <li class="footnav__item icon-location-arrow">
            <a class="footnav__link" href="https://g.page/GGVloerbekleding?share" target="_self">Kloosterpark 3, B 3650 <br>Dilsen-Stokkem</a>
          </li>
          <li class="footnav__item icon-mobile">
            <a class="footnav__link" href="tel:+32472815575">+32472815575</a>
          </li>
          <li class="footnav__item icon-email">
            <a class="footnav__link" href="mailto:ggfloorsconstruct@gmail.com" target="_self">ggfloorsconstruct@gmail.com</a>
          </li>
          <li class="footnav__item icon-wallet">
            <a class="footnav__link">BNP PARIBAS/Fortis <br> BE71 0019 0088 6869</a>
          </li>
          <li class="footnav__item icon-angle-double-right">
            <a class="footnav__link" href="bedrijfsgegevens.html">Meer</a>
          </li>
        </ul>
      </div>
    </div>
  `
});

Vue.component('basement', {
  template: `
    <div class="basement" id="bottom">
      <div class="legal">
        <p class="copyright">GG Floors & Construct 2022 ©</p>
        <ul class="legal__list">
          <li class="legal__item">
            <a class="legal__link" target="blink" href="files/maatschappelijke-zetel.pdf">
            Maatschappelijke Zetel
            </a>
          </li>
          <li class="legal__item">
            <a class="legal__link" target="blink" href="files/rubriek-oprichting.pdf">
            Rubriek Oprichting
            </a>
          </li>
          <li class="legal__item">
            <a class="legal__link" target="blink" href="files/financiele-gegevens.pdf">
            Financiële Gegevens
            </a>
          </li>
          <li class="legal__item" onclick="document.querySelector('.terms-conditions').style.display = 'block'">
            <a class="legal__link terms" href="#top">Algemene Voorwaarden</a>
          </li>
          <li class="legal__item">
            <a class="legal__link" id="themeToggle" href="#bottom" onclick="document.body.classList.toggle('dark'); 
            isDark = (!isDark) ? true : false;">
            Thema veranderen
            </a>
          </li>
          <li class="legal__item">
            <a class="legal__link" target="blink" href="https://github.com/boriskrasko">
            Ontworpen door GitHub.com
            </a>
          </li>
          <li class="legal__item">
            <a class="legal__link" href="#bottom" onclick="document.body.classList.toggle('test')">
            Test
            </a>
          </li>
          <li class="legal__item">
            <a href="https://www.vanderstraeten.be/home">vanderstraeten.be</a>
          </li>
        </ul>
      </div>
      <div class="social social_size_s">
        <ul class="social__list"></ul>
      </div>
    </div>
  `
});

Vue.component('widget', {
  template: `
    <div class="widget">
      <input type="checkbox" class="widget__input">
      <button class="widget__button icon-comment" title="contactwidget"></button>
      <div class="widget__body">
        <ul class="widget__items">
          <li class="widget__item">
            <a class="widget__link icon-mobile" href="contact.html" title="contact"></a>
          </li>
          <li class="widget__item">
            <a class="widget__link icon-email" href="mailto:ggfloorsconstruct@gmail.com" title="e-mail"></a>
          </li>
          <li class="widget__item">
            <a class="widget__link icon-clipboard" href="contactformulier.html" title="contactformulier"></a>
          </li>
        </ul>
      </div>
      <p class="chat-to">Contacteer ons
      <p>
    </div>
  `
});

var app = new Vue({
  el: '#footer'
})
