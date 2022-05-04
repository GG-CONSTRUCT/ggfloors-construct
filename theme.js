// color theme mode
let isDark = localStorage.getItem('isDark')
console.log(isDark);
let now = new Date().getHours();
if (localStorage.getItem('isDark') == 'true') {
  document.querySelector('html').classList.add('dark');
}

if (localStorage.getItem('isDark') == null) {
  if (now >= 21 || now < 7) {
    document.querySelector('html').classList.add('dark');
  }
}

const saveColorTheme = () => {
  isDark = (document.querySelector('.dark')) ? true : false;
  localStorage.setItem('isDark', isDark)
}
