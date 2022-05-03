// color theme mode
let isDark = false;
let now = new Date().getHours();
if (now > 7 && now < 21) {
  document.querySelector('html').classList.remove('dark');
  document.querySelector('html').classList.add('light');
} 
