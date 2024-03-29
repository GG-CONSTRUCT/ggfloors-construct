Vue.component('topbar', {
  template: `
  <div class="topbar">
    <div class="dropdown partners">
      <span class="dropdown__title">Onze partners</span>
      <span class="arrow"></span>
      <ul class="dropdown__list">
      </ul>
    </div>
    <span class="uk-visible@s">&nbsp;&nbsp;<b>&#10072;</b>&nbsp;&nbsp;</span>
    <a class="topbar__link topbar__link_theme uk-visible@s" href="contactformulier.html">Contact</a>
    <span>&nbsp;&nbsp;<b>&#10072;</b>&nbsp;&nbsp;</span>
    <a class="topbar__link" href="#" onclick="document.querySelector('html').classList.toggle('dark'); 
      saveColorTheme()">
    Thema veranderen
    </a>
    <div class="social social_size_s">
      <ul class="social__list"></ul>
    </div>
    <div class="dropdown lang">
      <span data-value="nl" class="dropdown__title">NL</span>
      <span class="arrow"></span>
      <ul class="dropdown__list options">
        <li data-value="nl" class="option selected">NL</li>
        <li data-value="en" class="option">EN</li>
        <li data-value="de" class="option">DE</li>
        <li data-value="fr" class="option">FR</li>
      </ul>
    </div>
  </div>
  `
});

Vue.component('navbar', {
  template: `
  <div class="navbar">
    <a href="index.html" class="logo" title="GG FLOORS & CONSTRUCT | Startpagina">
    <img class="logo__image" src="assets/images/logo.svg" alt="logo" width="42" height="42">
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
          <a class="topnav__link" href="bel-ons.html">Contact</a>
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
    <img src="assets/icons/phone-call.svg" alt="phone" width="32" height="32">
    <img src="assets/icons/dial-pad.svg" alt="dial pad" width="32" height="32">
    </a>
    <button class="btn-search">
    <img src="assets/icons/search.svg" alt="search icon" width="32" height="32">
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
          <img src="assets/icons/loupe.svg" alt="loupe">
          </button>
        </p>
        <ul></ul>
      </form>
    </div>
  </div>
  `
});

Vue.component('terms', {
  template: `
    <section class="terms-conditions">
    <a href="#top" class="close icon-close" onclick="this.parentNode.style.display = 'none'" title="close"></a>
    <h4 lang="nl"><b class="title title_left">Algemene draagwijdte der voorwaarden</b><br><br>
      1. Deze voorwaarden bevatten en beheersen de volledige overeenkomst tussen de klant en GG FLOORS & CONSTRUCT BV (hierna: de firma), met betrekking tot het geheel van de aan of door ons gevraagde en toevertrouwde werken. Deze voorwaarden worden geacht onherroepelijk aanvaard te zijn bij de ondertekening of bevestiging op welke wijze dan ook door de klant van de bestelbon, van de offerte of van de overeenkomst, ongeacht welkdanige eerdere correspondentie en ongeacht enige andere voorwaarden of enige documenten of formulieren van welke aard ook vanwege de klant. De klant bevestigt uitdrukkelijk voroafgaandelijk de ondertekening of aanvaarding in kennis te zijn gesteld van onderhavige voorwaarden. 
      Elke afwijking aan onderhavige voorwaarden dient verplichtend schriftelijk te gebeuren.
      <br>2. Bij bouw, vernieuwbouw en alle andere opdrachten waarbij administratieve vergunningen te pas komen, draagt de firma geen enkele verantwoordelijkheid wat de administratieve vergunningen betreft. Eventuele daaruit voortvloeiende schade en boetes vallen integraal ten laste van de klant.
      <br>3. Onze offertes zijn 30 dagen geldig.
      Plaatsing en aanvaarding van bestelling
      <br>4. Meerwerken worden pas uitgevoerd na bevestiging van de opdracht door de klant en aanvaarding van de de prijs. Meerwerken mogen met alle middelen van recht bewezen worden.
      Omvang van de bestelling0
      <br>5. Elke wijziging, toevoeging of weglating met betrekking tot de werkzaamheden zoals omschreven in de bestelbon/offerte/overeenkomst, moet het voorwerp uitmaken van een schriftelijke overeenkomst (aanhangsel bij de bestelbon/offerte/overeenkomst). Bij ontstentenis daarvan, zal er steeds en onherroepelijk van worden uitgegaan dat deze werken conform de verbale instructies van de klant werden uitgevoerd. Elke gebeurlijke schriftelijke bevestiging of melding van de firma inzake een wijziging, toevoeging of weglating van de werkzaamheden zoals omschreven in de bestelbon/offerte/overeenkomst, zal in hoofde van de klant onweerlegbaar, aanvaard en onherroepelijk zijn bij gebrek aan diens schriftelijke opmerkingen binnen de 24 uren vanaf de verzending van deze mededeling of bevestiging. Artikel 1793 BW van het Burgerlijk Wetboek is niet van toepassing indien de toepassing ervan onverenigbaar zou zijn met onderhavige clausule.
      Prijsbepaling en herziening
      <br>6. Onze prijzen, zoals opgegeven in onze offertes, hetzij als eenheidsprijzen of als forfaitaire prijzen, werden vastgelegd op basis van de tarieven, officiële koersen, weddes en sociale lasten geldig op de datum van de opstelling van de offerte. Zij zijn steeds herzienbaar door de firma en zelfs zonder het voorafgaandelijk akkoord van de klant, indien de marktprijzen of de parameters voor hun berekening op het ogenblik van de facturatie, met minstens 5 % gestegen zijn. De herziening gebeurt op basis van de formule p=P (a.s/S + b.i/I +c), waarvan de parameters worden bepaald in de Wet van 09.07.1971 (Wet Breyne).
      <br>7. Voorzieningen opgelegd door de veiligheidscoördinator zijn niet in onze offerte inbegrepen, tenzij anders vermeld..
      Leveringen en termijnen
      <br>8. Elke termijn van levering van arbeid en uitvoering van werken, indien deze vermeld wordt, wordt slechts op indicatieve wijze aangeduid, en laattijdigheid in de levering of uitvoering laat aan de klant niet toe de bestelling af te zeggen of schadevergoeding te vorderen, evenmin om zijn betalingsverplichtingen op te schorten. Hoe dan ook zal elke gebeurtenis die een onoverkomelijke hindernis vormt of de firma er toe dwingt de werken tijdelijk of definitief stil te leggen, als een geval van overmacht worden beschouwd, zo onder meer (maar niet-limitatief) ongevallen, oorlogen en hun gevolgen, slechte weersomstandigheden, stakingen, lock-out, tekort aan werkkrachten en materiaal, storingen en moeilijkheden inzake transport, enz... die zich bij de firma of bij enige  leveranciers voordoen.
      <br>9. De tijdelijke opschorting van de werken door overmacht, brengt van rechtswege en zonder schadevergoeding met zich mee dat de oorspronkelijk voorziene indicatieve uitvoeringstermijn verlengd wordt met een periode gelijk aan de opschortingstermijn, te vermeerderen met de tijd die nodig is om de werf weer op te starten. Een tenietgaan of beschadiging door toeval of overmacht van de geleverde zaak of het uitgevoerde werk, of nog ingevolge de eigen fout van de klant of van personen voor wie hij instaat of die hij bij hem toelaat of duldt, is nooit ten laste van de firma.
      <br>10. Indien de levering franco op de werf of het magazijn is overeengekomen, zijn de firma, diens onderaannemers of aangestelden slechts gehouden op deze plaats te leveren voor zover zij op normale wijze bereikbaar is. Kan dit niet, dan zal er ter plaatse worden gelost, naast het vervoermiddel, en blijven de goederen vanaf dat ogenblik op het risico en geheel ten laste van de klant achter.
      <br>11. De klant dient ervoor te zorgen dat de werken onmiddellijk kunnen worden aangevat. Bij gebreke daaraan, zullen de rechtstreekse en onrechtstreekse kosten welke voortvloeien uit het tijdsverlies ten laste van de klant worden gelegd, zonder voorafgaande ingebrekestelling. De werf dient door de klant (verwijderen: in het voordeel van de firma gratis) voorzien te worden van electriciteit en water. De klant zorgt voor een zorgvuldige stockering van de op de werf geleverde goederen en voor de beveiliging daarvan.
      Aansprakelijkheid voor schade
      <br>12. De klant is jegens de firma aansprakelijk voor elk schadeverwekkend feit dat zich voordoet op de werf aan onze goederen, aangestelden of onderaannemers en hun materialen, zowel ingevolge zijn eigen fout (zelfs de lichtste) als voor deze van personen voor wie hij instaat of voor deze van derden die hij op de plaats van de werken heeft toegelaten of duldt. De klant zal de firma ter zake in dezelfde zin integraal vrijwaren voor aanspraken van derden. De firma is niet aansprakelijk voor het verlies, de diefstal, het waardeverlies of de beschadiging van door de klant aan ons toevertrouwde materialen of werken van welke aard ook, met het oog op hun aanpassing, verbouwing, restauratie of welke andere manipulatie ook aan de firma gevraagd, en dit zowel op als buiten de werf, alsmede tijdens het transport of de afbraak/plaatsing ervan. De klant is jegens de firma en via integrale vrijwaring van de firma jegens derden, aansprakelijk voor elk schadeverwekkende handeling toegebracht door of via de aan de firma door de klant toevertrouwde materialen of werken van welke aard ook.
      <br>13. Partijen komen uitdrukkelijk overeen dat de verplichtingen van de firma een inspanningsverbintenis en geen resultaatsverbintenis uitmaken.
      <br>14. Conform artikel 1152 van het Burgerlijk Wetboek wordt uitdrukkelijk overeengekomen dat indien de aansprakelijkheid van de firma toch in het gedrang zou worden gebracht, deze aansprakelijkheid beperkt zal zijn tot een vermindering van de prijs of, in voorkomend geval en maximaal, tot een kwijtschelding van de uitstaande betaling, welke vergoeding partijen alsdan aanvaarden als finale schikking. Elke prijsvermindering zal worden vastgesteld op basis van de ernst van de naar recht genoegzaam bewezen fouten.
      <br>15. De klant dient ervoor te zorgen dat de werf voldoende verzekerd is voor aanvang van de werken.
      Beëindiging
      <br>16. Een beëindiging van de aan ons toevertrouwde opdracht, het weze voor of tijdens de uitvoering van de werken, is slechts mogelijk mits uitdrukkelijk akkoord van de firma, waarbij de klant steeds zal gehouden zijn de reeds uitgestane kosten en lasten, de reeds uitgevoerde werken, samen met de reeds geleverde materialen en benodigdheden integraal te voldoen, bovendien vermeerderd met een forfaitaire vergoeding gelijk aan 20 % van de totale aannemingssom zonder BTW voor verlies van de aanneming.
      <br>17. Indien wij de fima de overeenkomst verbreekt, de werken annuleert of indien de overeenkomst door toedoen van de firma wordt verbroken is de klant, voor zover deze een consument is, gerechtigd op een zelfde vergoeding lastens ons. Indien artikel 1794 van het Burgerlijk Wetboek door de klant zou worden ingeroepen, wordt de post van al wat de aannemer bij de aanneming had kunnen winnen bepaald op 10 % van de afgezegde werken.
      Aanvaarding der werken
      <br>18. Uit hoofde van onze leveringen, beperkt onze waarborg zich tot deze die wij kunnen bekomen bij onze leveranciers. De goederen mogen echter niet verwerkt of behandeld zijn. In iedere veronderstelling, beperkt de waarborg zich tot de vervanging van de defecte stukken. De vervoerskosten en werkuren zijn ten laste van de klant. Voor geen enkele reden kan van ons een terugbetaling, uitkering of schadevergoeding gevorderd worden.
      <br>19. In geen enkel geval is onze firma aansprakelijk voor gebreken, van welke aard ook, die de door onze firma, onze onderaannemers of aangestelden geleverde goederen en materialen zouden bekleven, waarbij de klant enkel verhaal zal kunnen uitoefenen naar onze leveranciers c.q. de producenten van de betrokken materialen en goederen.
      <br>20. De uitvoering van de werken dient te gebeuren volgens de regels van het goed vakmanschap. Deze worden gespecifieerd in de eigenlijke overeenkomst of in het lastenboek of bij gebreke hieraan in de technische voorschriften van het WTCB. De klant aanvaardt deze uitvoeringsregels.
      <br>21. In de gevallen waarin de wet van 1 september 2004 betreffende de bescherming van de consument bij verkoop van consumptiegoederen geen toepassing vindt, is de volgende regeling van toepassing: door de inontvangstname of het meenemen van de goederen erkent de koper uitdrukkelijk dat de koopwaar beantwoordt aan zijn bestelling en vrij is van enig zichtbaar gebrek. Andere gebreken moet de koper binnen de maand na het ontdekken ervan aan de verkoper schriftelijk melden per aangetekend schrijven.
      <br>22. Speelt de eerder aangehaald wet wel dan moet de klant ons per aangetekend schrijven op de hoogte stellen van het gebrek aan overeenstemming binnen de twee maanden vanaf de dag waarop de consument het gebrek heeft vastgesteld, dit op straffe van verval.
      <br>23. In geen geval is onze firma aansprakelijk voor gebreken, van welke aard ook, in goederen en materialen die door de klant, diens onderaannemers, gemandateerden of aangestelden werden geleverd. De regeling van artikelen 1643 en volgende van het Burgerlijk Wetboek inzake verborgen gebreken aan de verkochte zaak, is niet van toepassing, met uitzondering van artikel 1648.
      Oplevering
      <br>24. Ingeval de gesloten overeenkomst onder de toepassing valt dan de Woning – Bouwwet (Wet Breyne), zal de voorlopige oplevering der werken worden aanzien als de uitdrukkelijke aanvaarding der werken en zal vanaf de voorlopige oplevering tegelijk de tienjarige aansprakelijkheidstermijn een aanvang nemen. De voorlopige oplevering zal bovendien definitief en onherroepelijk alle zichtbare en verborgen gebreken dekken welke de stevigheid van het bouwwerk niet in het gedrang brengen, zonder verder of later verhaal vanwege de klant op onze firma.
      <br>25. Indien geen oplevering werd voorzien, zal de levering van de goederen of materialen of de uitvoering van het werk zelf, zonder protest bij aangetekend schrijven vanwege de klant binnen de 48 uren vanaf de levering of uitvoering, gelden als definitieve en onherroepelijke aanvaarding van de geleverde goederen of uitgevoerde werken, zowel wat de zichtbare als de verborgen gebreken betreft.
      <br>26. Bij gebreke aan voorlopige keuring vanwege de bouwheer, zal deze bij aangetekend schrijven verzocht worden binnen de 15 dagen de oplevering te laten doorgaan. Eenmaal deze termijn verstreken, zal de voorlopige aanvaarding beschouwd worden als verkregen sinds het einde van de bovenvermelde periode van 15 dagen.
      <br>27. In alle gevallen zal een onvoorwaardelijke betaling van de vorderingsstaten, voorschotten, facturen of andere kostenstaten zonder redelijk protest volgends de modaliteiten als omschreven in het hierna volgende artikel, worden aanzien als een definitieve en onherroepelijke aanvaarding van de werken daarin vermeld of virtueel begrepen.
      <br>28. In alle gevallen zal tegelijk de onvoorwaardelijke gehele of gedeeltelijke ingebruikname van het gebouw door de klant of diens gemachtigden worden aanzien als de definitieve en onherroepelijke aanvaarding der werken.
      Onderaanneming
      <br>29. De facturen van onderaannemers van onze firma zijn pas betaalbaar na voorlopige oplevering van de werken die hun betreffen.
      Klachten inzake voorschotten of facturatie
      <br>30. Ten einde geldig te zijn, moet elke klacht aangaande voorschotten, betalingen en facturen geschieden bij aangetekend schrijven aan de zetel van onze firma binnen de acht kalenderdagen vanaf de datum van verzending van de factuur, nota of kostenstaat. De factuurdatum wordt onweerlegbaar vermoed de datum van verzending van factuur te zijn. Betaling van de factuur zonder protest binnen de gestelde termijn levert steeds en zonder uitzondering een voldoende bewijs op van de geleverde prestaties. Bewijs van verzending van de factuur wordt geleverd door ons uitgaand facturenboek of opname in de BTW aangiftes.
      Eigendomsvoorbehoud
      <br>31. Alle goederen, materialen en benodigdheden, alsmede de uitgevoerde werken blijven eigendom van onze firma tot aan de integrale betaling van onze facturen in hoofdsom en aankleven. Dit geldt evenzeer indien de werken, leveringen, goederen of materialen van onze firma slechts een onderdeel uitmaken (bijzaak) van een groter geheel (hoofdzaak) waarvan de eigendom of gedeelten hiervan niet aan onze firma zou toebehoren.
      <br>32. Het risico gaat echter over op het moment dat de goederen onze magazijnen verlaten. De klant staat vanaf de levering op de werf in voor schade aan en vervreemding van deze goederen.
      Betalingsmodaliteiten
      <br>33. Al onze bestellingen en leveringen zijn contant betaalbaar binnen de 8 dagen na factuurdatum aan onze maatschappelijke zetel. Onze firma behoudt zich het recht voor een door haar te bepalen voorschot op de uit te voeren werken te eisen alvorens de bestelling te aanvaarden en/of een anderssoortige waarborg voor aanvang der werken.
      <br>34. De B.T.W. en alle andere belastingen, taksen, heffingen of kosten zijn steeds ten laste van de klant.
      <br>35. Indien de klant nalaat het volgens factuur in hoofdsom en aankleven bepaalde te betalen binnen de voormelde termijn, is het integrale bedrag ineens en zonder nadere ingebrekestelling opeisbaar.
      Laattijdige betaling, kosten en aankleven
      <br>36. Elke schuld van een klant die op de vervaldag onbetaald blijft, zal van rechtswege en zonder ingebrekestelling of welke andere formaliteit ook, een interest van 1% per maand of 12 % per jaar opbrengen, te rekenen vanaf de vervaldag tot de dag van volledige betaling, alsook een forfaitaire schadevergoeding van 15 % met een minimum van 125 Euro, op het verschuldigde bedrag in hoofdsom.
      <br>37. Elke vertraging in de betaling kan aanleiding geven om de nog uit te voeren leveringen en werken op te schorten of te vernietigen, en het aanvaarden van nieuwe bestellingen te weigeren. Deze clausule strekt enkel tot voordeel van onze firma en kan enkel door ons worden ingeroepen.
    </h4>
    <a href="#bottom" class="close icon-check" onclick="this.parentNode.style.display = 'none'" title="done"></a>
  </section>
  `
})

var app = new Vue({
  el: '#header'
})
