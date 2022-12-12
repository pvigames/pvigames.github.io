const sites = [
    ["GetJesus", "pvigaming.github.io/", true], 
    ["GetAshley", "crabhelper.github.io/get-ashley/", true], 
    ["GetMIT", "mitchgu.github.io/GetMIT/", true], 
    ["GetPVI", "getpvi.github.io/GetPVI/", true], 
    ["Wordle", "www.nytimes.com/games/wordle/index.html", true], 
    ["Worldle", "worldle.teuteuf.fr/", true], 
    ["WordleU", "www.wordleunlimited.com/", true], 
    ["Semantle", "semantle.novalis.org/", true],
    ["Quordle", "www.quordle.com/#/", true], 
    ["Jsemu2", "jsemu2.github.io/gba/", true], 
    ["TotallyS", "crabhelper.github.io/CMT/iframe/help.html", true],
    ["Funblock", "sites.google.com/site/funblocked77/retro-bowl-unblocked", true], 
    ["BrownCha", "browncha023.github.io/GBA/", true], 
    ["DriftHunt", "v6p9d9t4.ssl.hwcdn.net/html/1792221/ItchIO/index.html", true],
    ["TheGameComp", "sites.google.com/site/thegamecompilation/home", true]
  ];
window.addEventListener("load", () => {
    for (let site of sites) {
        let red = (site[2]) ? " " : "style=\"background-color: red\"";
        document.getElementById('buttonbox').innerHTML += `<button class="Button" ${red} onclick="location.href='https://${site[1]}'">${site[0]}</button>`;
      }
});