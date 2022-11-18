async function getChampionKeys() {
  let championsKeys = await fetch("http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json")
  .then(response => response.json())
  .then(champions => {
    return Object.keys(champions.data);
  })
  return championsKeys;
}

async function getChampionValues() {
  let championValues = new Array();
  await fetch("http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json")
  .then(response => response.json())
  .then(champions => {
    for(const [key, value] of Object.entries(champions.data)) {
        championValues.push(value);
    }
  })
  return championValues;
}

async function getChampionIconByName(championName) {
  return await fetch("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championName + "_0.jpg")
  .then(response => response.blob());
}

async function showChampionIcon(championName) {
  icon = await getChampionIconByName(championName);
  var urlCreator = window.URL || window.webkitURL;
  const img = document.createElement("img");
  const championContainer = document.createElement("div");
  const championNameContainer = document.createElement("div");
  const p = document.createElement("p");

  p.innerText = championName;
  p.classList.add("champion-name");
  championContainer.classList.add("champion");
  img.src = urlCreator.createObjectURL(icon);
  championNameContainer.classList.add("champion-name-container");
  championContainer.appendChild(img);
  championContainer.appendChild(championNameContainer);
  championNameContainer.appendChild(p)
  document.getElementById("champion-container").appendChild(championContainer);
}

async function showChampionIcons() {
  championNames = await getChampionKeys();
  for(let i = 0; i < championNames.length; i++) {
    showChampionIcon(championNames[i]);
  }
}

(async () => await showChampionIcons())()

