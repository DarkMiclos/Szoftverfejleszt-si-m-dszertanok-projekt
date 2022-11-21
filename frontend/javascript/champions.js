async function getChampionKeys() {
  let championsKeys = await fetch("http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json")
  .then(response => response.json())
  .then(champions => {
    return Object.keys(champions.data);
  })
  return championsKeys;
}

async function getChampionDataByName(championName) {
  let championValues = await fetch("http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/" + championName + ".json")
  .then(response => response.json())
  .then(champion => {
    return champion.data[championName];
  })
  return championValues;
}

//Medium loading screen
function getChampionLoadingScreenIconSource(championName) {
  return "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championName + "_0.jpg";
}

//Big splash art, id = 0 equals the base skin
function getChampionSplashArtSource(championName, id) {
  return "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championName + "_" + id + ".jpg";
}

//Small icon
async function getChampionIconByName(championName) {
  return await fetch("http://ddragon.leagueoflegends.com/cdn/img/champion/" + championName + ".png")
  .then(response => response.blob());
}

async function showChampionLoadingScreenIcon(championName) {
  iconSource = getChampionLoadingScreenIconSource(championName);
  const img = document.createElement("img");
  const championContainer = document.createElement("a");
  const championNameContainer = document.createElement("div");
  const p = document.createElement("p");

  p.innerText = championName;
  p.classList.add("champion-name");
  championContainer.classList.add("champion");
  championContainer.href = "/champions/" + championName;
  img.src = iconSource;
  championNameContainer.classList.add("champion-name-container");
  championContainer.appendChild(img);
  championContainer.appendChild(championNameContainer);
  championNameContainer.appendChild(p)
  document.getElementById("champion-container").appendChild(championContainer);
}

async function showChampionIcons() {
  championNames = await getChampionKeys();
  for(let i = 0; i < championNames.length; i++) {
    showChampionLoadingScreenIcon(championNames[i]);
  }
}

async function getChampionTitleByName(championName) {
  let data = await getChampionDataByName(championName);
  return data.title;
}

async function getChampionSkinData(championName) {
  let data = await getChampionDataByName(championName);
  return data.skins;
}

async function getChampionSpellData(championName) {
  let data = await getChampionDataByName(championName);
  return data.spells;
}

async function getChampionPassiveData(championName) {
  let data = await getChampionDataByName(championName);
  return data.passive;
}

async function getChampionLore(championName) {
  let data = await getChampionDataByName(championName);
  return data.lore;
}

async function getChampionTags(championName) {
  let data = await getChampionDataByName(championName);
  return data.tags;
}

async function getChampionStats(championName) {
  let data = await getChampionDataByName(championName);
  return data.stats;
}

async function generateSkinSplashes(championName) {
  let skins = await getChampionSkinData(championName);
  for(let i = 0; i < skins.length; i++) {
    let id = skins[i].num;
    let iconSource = getChampionSplashArtSource(championName, id);
    const splashArtContainer = document.createElement("div");
    const championNameContainer = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const dot = document.createElement("span");

    splashArtContainer.classList.add("splash-art-container");
    championNameContainer.classList.add("skin-name-container");
    img.src = iconSource;
    p.innerText = skins[i].name;
    p.classList.add("skin-name");
    dot.classList.add("dot");
    splashArtContainer.style.display = "none";
    
    championNameContainer.appendChild(p);
    splashArtContainer.appendChild(championNameContainer);
    splashArtContainer.appendChild(img);
    document.getElementById("skin-container").appendChild(splashArtContainer);
  }
  Promise.resolve();
}

function hideAllSplash() {
  const skins = document.getElementsByClassName("splash-art-container");
  for(skin of skins) {
    skin.style.display = "none";
  }
}

function showCurrentSplash(index) {
  const skins = document.getElementsByClassName("splash-art-container");
  hideAllSplash();
  skins.item(index).style.display = "block";
  if(index < skins.length - 1) {
    index++;
  }
  else {
    index = 0;
  }
  setTimeout("showCurrentSplash(" + index + ")", 5000);
}

async function showLore(championName) {
  const lore = await getChampionLore(championName);
  const loreText = document.createElement("p");
  loreText.classList.add("lore-text");
  loreText.innerText = lore;
  document.getElementById("lore-container").appendChild(loreText);
}

async function showStats(championName) {
  const stats = await getChampionStats(championName);
  for([key, value] of Object.entries(stats)) {
    const stat = document.createElement("div");
    const statText = document.createElement("p");
    statText.innerText = key + " - " + value;
    stat.classList.add("stat");
    statText.classList.add("stat-name");
    stat.appendChild(statText);
    document.getElementById("stat-container").appendChild(stat);
  }
}