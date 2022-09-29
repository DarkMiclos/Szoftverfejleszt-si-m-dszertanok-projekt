# Szoftverfejlesztési módszertanok projekt

## League of Legends weboldal

A weboldal gyakorlatilag egy single page application lesz, ahol a különböző nézetek lesznek egymás között cserélgetve attól függően, hogy a felhasználó mit szeretne éppen megtekinteni.

### Oldalak:
* Homepage
* Champions
* Team comp builder
* Champion builds
* Champion Tierlist

### Common
* navbar - sticky, reszponzív, telefonon hamburger menü
* Bejelentkezés után a login gomb helyén a username jelenik meg
![navbar látvány terv](https://user-images.githubusercontent.com/71171019/190986471-dca69f5a-bc7f-440a-90a0-0193f31d308e.png)
* background image - Ez mozogni fog az oldallal és a következő féle képpen néz ki:![linken](https://www.guidingtech.com/wp-content/uploads/Best-League-of-Legends-Wallpapers-3_4d470f76dc99e18ad75087b1b8410ea9.jpg)
* login felület - popup, bejelntkezési információk bekérése, password hashing.
![login látvány terv](https://user-images.githubusercontent.com/71171019/190987130-5890d56b-e495-498c-b860-ef43e6d2be35.png)

### Homepage
* Rövid leírás az oldalról, hogy milyen funkciói vannak, illetve a készítők megemlítése.
* A legfrissebben ratelt champiönök(utolsó 5db) megjelennek egy slideshowban.
* Egy promótáló [videó](https://www.youtube.com/watch?v=mDYqT0_9VR4) a játékról aki nem ismerné.
* Contact information

### Champions

* A champions oldalon alapesetben a hősök ikonjai lesznek láthatóak
* Ha rámutatunk az egérrel akkor hover effektel rá zoomolunk a képre és felfed egy rövid leírást a karakterről egy dobozban, illetve át tudunk navigálni a chmapion builds oldalra.

### Team comp builder

* Ezen az oldalon megtalálható lesz a játék minimapje felnagyítva, minden role "helyén" egy négyzet lesz, amire ha rákattintasz egy dropdown menüből kiválaszthatod a championt.
* Az összehasonlítás gombra való kattintással megjelenik a 2 csapatról egy statisztika.

### Champion builds

* Dropdown listből kiválaszthatsz egy championt amire megjelennek különböző buildek.

### Champion tierlist

* Egy táblázatszerű tierlist a championökről.
* A champiönök 1-től 5-ig lesznek kategorizálva, az 1 szimbolizálja a legerősebb kategóriát

Az első 4hétben a Homepage oldalt készítjük el a common dolgokkal együtt.

### Fejlesztéshez felhasznált eszközök
* vscode
* npm
* sqlite
* github
* trello
* selenide
* jest
* javascript
* ejs - hasonló a html-hez, de lehetővé teszi, hogy az oldalak modulárisak legyenek, illetve lehet vele hasonló html kódokat for ciklussal generálni
* css

### Felhasznált node package-ek
* nodemon - a szerver automatikus újra indítása ha elmentünk egy fájlt
* express.js - routing, localhost
* sqlite3 - adatbázis kezelése javascriptből

### Tesztelés
* Egység tesztek - Egység teszteléshez a jest tesztelő rendszert fogjuk használni
* Integrációs tesztek - Integrációs teszteléshez a Selenide rendszert fogjuk használni

### Adatbázis séma
![adatbázis séma](https://user-images.githubusercontent.com/71171019/190922330-62ff32fa-103f-4ad8-9702-e016733cd679.png)

### Követelmények
* Dokumentáció elkészítése - github markdown
* Navbar látvány terv - paint
* Login felület látvány terv - paint
* Champions page látvány terv
* Champion tierlist látvány terv
* Adatbázis séma elkészítése - mysql workbench-el
* Adatbázis létrehozása - sqlite
* User tábla létrehozása - sqlite
* ChampionRating tábla létrehozása - sqlite
* Champions tábla létrehozása - sqlite
* ChampionRole tábla létrehozása - sqlite
* Roles tábla létrehozása - sqlite
* Items tábla létrehozása - sqlite
* Adatbázis lekérdezések elkészítése a különböző táblákhoz - sqlite
* Adatbázis feltöltse adatokkal - sqlite
* Javascriptben adatbázis kezelő függvények megírása - javascript, sqlite3 node package
* Localhost setup - node.js express.js
* Navbar elkészítése - ejs, css
* Navbar click eventek lekezelése
* Routing a home oldalnak - express.js
* Routing a champions oldalnak - express.js
* Routing a team comp builder oldalnak - express.js
* Routing a champion builds oldalnak - express.js
* Routing a champion tierlist oldalnak - express.js
* Login felület(ui) elkészítése - ejs, css, javascript
* Login felület elkészítése telefonra - ejs, css javascript
* Login lekezelése az adatbázisban - sqlite3 node package
* Login validálása - javascript
* Jelszó hashelése - javascript, sha-256
* Homepage elkészítése - ejs, css
* Homepage rövid bemutatkozó leírás elkészítése
* Homepage contact információ megadása
* Homepage a játékról rövid promótáló videó elhelyezése
* A champion ikonok letöltése
* A chamion ikonok kihelyezése localhostra
* A champions page elkészítése - ejs, css, javascript
* Champion ejs template elkészítése
* Champion hover effekt elkészítése
* Team comp builder page elkészítése - ejs, css, javascript
* Minimap kép letöltése
* A minimapon a négyzetek elhelyezése a különböző ösvények helyein
* Champion választás lekezelése egy adott ösvényre
* Champion ikonok megjelenítése a négyzetek helyett választás után
* 
