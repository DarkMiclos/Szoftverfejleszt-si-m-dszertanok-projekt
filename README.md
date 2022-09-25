# Szoftverfejlesztési módszertanok projekt

## League of Legends weboldal

### Oldalak:
* Homepage
* Champions
* Team comp builder
* Champion builds
* Champion Tierlist

### Common
* navbar - sticky, reszponzív, telefonon hamburger menü
![navbar látvány terv](https://user-images.githubusercontent.com/71171019/190986471-dca69f5a-bc7f-440a-90a0-0193f31d308e.png)
* background image - Ez mozogni fog az oldallal és a következő [linken](https://www.guidingtech.com/wp-content/uploads/Best-League-of-Legends-Wallpapers-3_4d470f76dc99e18ad75087b1b8410ea9.jpg) elérhető
* login felület - popup, bejelntkezési információk bekérése, password hashing.
![login látvány terv](https://user-images.githubusercontent.com/71171019/190987130-5890d56b-e495-498c-b860-ef43e6d2be35.png)

### Homepage
* Rövid leírás az oldalról, hogy milyen funkciói vannak, illetve a készítők megemlítése.
* A legfrissebben ratelt champiönök(utolsó 5db) megjelennek egy slideshowban.
* Egy promótáló [videó](https://www.youtube.com/watch?v=mDYqT0_9VR4) a játékról aki nem ismerné.
* Contact information

### Champions

* A champions oldalon alapesetben a hősök ikonjai lesznek láthatóak, ha rámutatunk az egérrel akkor hover effektel rá zoomolunk a képre és felfed egy rövid leírást a karakterről egy dobozban, illetve át tudunk navigálni a chmapion builds oldalra.

### Team comp builder

* Ezen az oldalon megtalálható lesz a játék minimapje felnagyítva, minden role "helyén" egy négyzet lesz, amire ha rákattintasz egy dropdown menüből kiválaszthatod a championt.
* Jobb oldalt (vagy valahol) az összehasonlítás gombra való kattintással megjelenik a 2 csapatról egy statisztika.

### Champion builds

* Dropdown listből kiválaszthatsz egy championt amire megjelennek különböző buildek.

### Champion tierlist

* Egy táblázatszerű tierlist a championökről.

Az első 4hétben a Homepage oldalt készítjük el a common dolgokkal együtt.

### Fejlesztéshez felhasznált eszközök
* Vscode
* npm
* sqlite
* github
* trello
* selenide
* jest

### Tesztelés
* Egység tesztek - Egység teszteléshez a jest tesztelő rendszert fogjuk használni
* Integrációs tesztek - Integrációs teszteléshez a Selenide rendszert fogjuk használni

### Adatbázis séma
![adatbázis séma](https://user-images.githubusercontent.com/71171019/190922330-62ff32fa-103f-4ad8-9702-e016733cd679.png)

### Követelmények
* Dokumentáció elkészítése - github markdown
* Adatbázis séma elkészítése - mysql workbench-el
* Adatbázis létrehozása és feltöltése adatokkal - sqlite
* Localhost setup - nodejs express.js
* Navbar elkészítése - html, css
* Routing - express.js
* Login felület elkészítése - html, css, javascript
* Homepage elkészítése - html, css
