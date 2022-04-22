const translate404Page = (lang) => {
  get('.follow .title').textContent = followTitle[lang];
}

if (lang !== 'NL') translate404Page(lang.toLowerCase());

const getPageContent = (lang) => {
  translate404Page(lang);
}
