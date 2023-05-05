const sites = [
    ["GetJesus", "pvigaming.github.io/", true], 
    ["GetAshley", "crabhelper.github.io/get-ashley/", true], 
    ["GetMIT", "mitchgu.github.io/GetMIT/", true], 
    ["GetPVI", "getpvi.github.io/GetPVI/", true], 
    ["Wordle", "www.nytimes.com/games/wordle/index.html", true], 
    ["Worldle", "worldle.teuteuf.fr/", true], 
    ["WordleU", "www.wordleunlimited.com/", true], 
    ["Semantle", "semantle.novalis.org/", false],
    ["Quordle", "www.quordle.com/#/", false], 
    ["Jsemu2", "jsemu2.github.io/gba/", false], 
    ["TotallyS", "crabhelper.github.io/CMT/iframe/help.html", false],
    ["Funblock", "sites.google.com/site/funblocked77/retro-bowl-unblocked", false], 
    ["BrownCha", "browncha023.github.io/GBA/", false], 
    ["DriftHunt", "v6p9d9t4.ssl.hwcdn.net/html/1792221/ItchIO/index.html", false],
    ["TheGameComp", "sites.google.com/site/thegamecompilation/home", false],
    ["WatchDoc","crabhelper.github.io/CMT/classhelp/science.html", false]
  ];
window.addEventListener("load", () => {
    for (let site of sites) {
        let red = (site[2]) ? " " : "style=\"background-color: red\"";
        document.getElementById('buttonbox').innerHTML += `<button class="Button" ${red} onclick="location.href='https://${site[1]}'">${site[0]}</button>`;
      }
});
