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
function getChampionIconSource(championName) {
  return "http://ddragon.leagueoflegends.com/cdn/img/champion/" + championName + ".png";
}

function getChampionPassiveSource(passiveName) {
  return "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/" + passiveName;
}

function getChampionSpellSource(spellId) {
  return "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/" + spellId + ".png"
}

function showChampionLoadingScreenIcon(championName) {
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

async function getChampionPassive(championName) {
  let data = await getChampionDataByName(championName);
  return data.passive;
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

async function showSpells(championName) {
  const spells = await getChampionSpellData(championName);
  const passiveData = await getChampionPassiveData(championName);
  console.log(passiveData);
  const spellContainer = document.createElement("div");
  const passive = document.createElement("div");
  const passiveIcon = document.createElement("img");
  const passiveSource = getChampionPassiveSource(passiveData.image.full);
  const passiveDescription = document.createElement("div");
  const passiveName = document.createElement("div");
  const passiveTooltip = document.createElement("div");

  spellContainer.classList.add("spell-container");
  passive.classList.add("passive");
  passiveIcon.src = passiveSource;
  passiveDescription.innerText = passiveData.description;;
  passiveName.innerText = passiveData.name;
  passiveTooltip.classList.add("tooltip");

  passive.appendChild(passiveIcon);
  passive.appendChild(passiveTooltip);
  passiveTooltip.appendChild(passiveName);
  passiveTooltip.appendChild(passiveDescription);
  spellContainer.appendChild(passive);

  for(let i = 0; i < spells.length; i++) {
    let imgSource = getChampionSpellSource(spells[i].id);
    const spell = document.createElement("div");
    const spellIcon = document.createElement("img");
    const spellToolTipPopUp = document.createElement("div");
    const spellName = document.createElement("div");
    const spellCooldown = document.createElement("div");
    const spellDescription = document.createElement("div");

    spellName.innerText = spells[i].name;
    spellCooldown.innerText = "Cooldown: " + spells[i].cooldownBurn;
    spellDescription.innerText = spells[i].description;
    spellIcon.src = imgSource;
    spell.classList.add("spell");
    spellToolTipPopUp.classList.add("tooltip");

    spellToolTipPopUp.appendChild(spellName);
    spellToolTipPopUp.appendChild(spellCooldown);
    spellToolTipPopUp.appendChild(spellDescription);
    spell.appendChild(spellIcon);
    spell.appendChild(spellToolTipPopUp);
    spellContainer.appendChild(spell);
  }
  document.getElementById("spells-container").appendChild(spellContainer);
}