# Szoftverfejlesztési módszertanok projekt

## League of Legends weboldal

A weboldal gyakorlatilag egy single page application lesz, ahol a különböző nézetek lesznek egymás között cserélgetve attól függően, hogy a felhasználó mit szeretne éppen megtekinteni.
A fejlesztéshez agilis módszertant használunk fel.
A program kis modulokból fog felépülni és ezek lesznek cserélgetve.
Ketté lesz választva a frontend a backendtől így azok nem fognak egymással keveredni.

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
* mysql workbench

### Felhasznált node package-ek
* nodemon - a szerver automatikus újra indítása ha elmentünk egy fájlt
* express.js - routing, localhost
* sqlite3 - adatbázis kezelése javascriptből
* crypto-js - jelszó hasheléshez
* jest - egységtesztekhez
* ejs - html templatekhez

### Tesztelés
* Egység tesztek - Egység teszteléshez a jest tesztelő rendszert fogjuk használni
* Integrációs tesztek - Integrációs teszteléshez a Selenide rendszert fogjuk használni

### Adatbázis séma
* A champions tábla lesz a fő tábla amire épül maga az adatbázis
* 3-ik normálforma
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
* User tábla lekérdezések elkészítése - sqlite
* ChampionRating tábla létrehozása - sqlite
* ChampionRating tábla lekérdezések elkészítése - sqlite
* Champions tábla létrehozása - sqlite
* Champions tábla lekérdezések elkészítése - sqlite
* ChampionRole tábla létrehozása - sqlite
* ChampionRole tábla lekérdezések elkészítése - sqlite
* Roles tábla létrehozása - sqlite
* Roles tábla lekérdezések elkészítése - sqlite
* Items tábla létrehozása - sqlite
* Items tábla lekérdezések elkészítése - sqlite
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
* Login felület click eventek kezelése
* Login lekezelése az adatbázisban - sqlite3 node package
* Login validálása - javascript
* Jelszó hashelése - javascript, sha-256
* Homepage elkészítése - ejs, css
* Homepage rövid bemutatkozó leírás elkészítése
* Homepage contact információ megadása
* Homepage a játékról rövid promótáló videó elhelyezése
* Homepage click eventek lekezelése
* A champion ikonok letöltése
* A chamion ikonok kihelyezése localhostra
* A champions page elkészítése - ejs, css, javascript
* Champion ejs template elkészítése
* Champion hover effekt elkészítése
* Champions oldal click eventek lekezelése
* Team comp builder page elkészítése - ejs, css, javascript
* Team comp builder click eventek lekezelése
* Minimap kép letöltése
* A minimapon a négyzetek elhelyezése a különböző ösvények helyein
* Champion választás lekezelése egy adott ösvényre
* Champion ikonok megjelenítése a négyzetek helyett választás után
* Összehasonlítás gomb megnyomása után statisztikák megjelenítése.
* Dropdown list elkészítése a champion builds oldalhoz.
* Champion builds oldal click eventek lekezelése
* Buildek elkészítése
* A dropdown listből való választás után jelenjenek meg az előre elkészített buildek.
* Champiönök tier-be sorolása
* Champion tierlist táblázat elkészítése.
* Felhaszálói rating-re való lehetőség
* Champion tierlist oldal click eventek lekezelése
* Navbar egység tesztelése
* Navbar integrációs tesztelése
* Login felület egység tesztelése
* Login felület integrációs tesztelése
* Homepage egység tesztelése
* Homepage integrációs tesztelése
* Champions oldal egység tesztelése
* Champions oldal integrációs tesztelése
* Team comp builder oldal egység tesztelése
* Team comp builder oldal integrációs tesztelése
* Champion builds oldal egység tesztelése
* Champion builds oldal integrációs tesztelése
* Champion tierlist oldal egység tesztelése
* Champion tierlist oldal integrációs tesztelése
* Adatbázis műveletek tesztelése
* Különböző integrációs teszt esetek és lépések megírása

Az objektum orientált paradigma helyett inkább a funkcionális paradigmát használjuk. Függvényeket írunk és hívjuk meg ezeket később.

### A weblap futtatásának előfeltételei:
* nodejs

### A weblap futtatási menete új gépről:
* npm install(letölti a szükséges package-eket)
* npm run startServer(Elindítja a localhost-ot)
* A localhost:3000 portot megnyitva a böngészőben megjelenik a weblap

### Adatbázis műveletekre példa:
![database_example](https://user-images.githubusercontent.com/71171019/193461308-769a2fca-95f6-46b6-95b6-2ac95ffda247.png)

### Coding conventions:
* Változók és függvények neveihez camelCase használata
* Függvények írásakor a nyitó kapcsos zárójel a függvény nevével egysorban
* Css-ben a vw és vh mértékegységek használata a reszponzivitás elérése érdekében
* Amennyiben nem fér ki egy sorban a kód akkor sortörés használata
* Html osztályokhoz és id-hoz camelCase használata
* SQL táblák és oszlopok neveihez camelCase használata
* " használata külső idézőjelnél és ' használata ha idézőjelen belül is kell idézőjelet használni

### Mappa struktúra:
![mappa_struktúra](https://user-images.githubusercontent.com/71171019/193461957-2e048d33-76eb-4af5-a03e-13c114b98289.jpg)

### Projekt konfigurációja
* A projekt konfigurációja beállítható és megtekinthető a package.json file-ban

### Git használata
* Új funkció fejlesztéséhez új branch létrehozása
* Ha egy funkció elkészült akkor pull request készítése a masterre.
* Git push előtt mindig git fetch és git pull futtatása és az esetleges merge conflictok feloldása
