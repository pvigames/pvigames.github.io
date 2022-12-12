/*load up the last style*/
let last = window.localStorage.getItem('laststyle');
window.addEventListener("load", function() {
  document.getElementById('pagestyle').setAttribute('href', last);
  let loadlastlang = window.localStorage.getItem('lastLanguage');
  swapLanguage(loadlastlang);
});
/*swap the style*/
function swapStyleSheet(style){
  window.localStorage.removeItem('laststyle');
  currentlanguage=window.localStorage.getItem('lastLanguage');
  document.getElementById('pagestyle').setAttribute('href', '');
  document.getElementById('page').setAttribute('href', '');
  if (style==='none'){
    if (currentlanguage==='french') {
      document.getElementById("title").style.fontSize = "13vw";
    }
    if (currentlanguage==='german') {
      document.getElementById("title").style.fontSize = "9vw";
    }
  }
  if (style==='coffee') {
    document.getElementById('page').setAttribute('href', 'stylesheets/coffeehouse.css');
    if (currentlanguage==='german') {
      document.getElementById('pagestyle').setAttribute('href', 'stylesheets/coffeehousegerman.css');
    }
    if (currentlanguage==='french') {
      document.getElementById('pagestyle').setAttribute('href', 'stylesheets/coffeehousefrench.css');
    }
  }
  if (style==='table') {
    document.getElementById('pagestyle').setAttribute('href', 'stylesheets/table.css');
  }
  window.localStorage.setItem('laststyle', style);
}
const items = ["title", "dropdown", "theme1", "theme2", "theme3", "dropdown2", "lang1", "lang2", "lang3"];
const english  = ["<span onclick=\"location.href=\'oconnel.html\'\">PVI</span> Games!", "Themes", "None", "Table", "Coffee", "Languages", "English", "German", "French"];
const french = ["Les  jeux  de  <span onclick=\"location.href=\'oconnel.html\'\">PVI</span>", "Thèmes", "Aucun", "Café", "Langues", "Anglais", "Allemand", "Français"];
const german = ["<span onclick=\"location.href=\'oconnel.html\'\">PVIs</span> Lieblingsspiele", "Themen", "Kleiner", "Tisch", "Kaffee", "Sprachen", "Englisch", "Deutsch", "Französisch"];
function swapLanguage(x) {
  let templist=null;
  if(x ==='english') templist = english;
  else if (x ==='french') templist = french;
  else templist = german;
  for (let i = 0; i<items.length;i++) {
    document.getElementById(items[i]).innerHTML=templist[i];
  }
  window.localStorage.setItem('lastLanguage', x);
  currentstyle = window.localStorage.getItem('laststyle');
  swapStyleSheet(currentstyle);
}
