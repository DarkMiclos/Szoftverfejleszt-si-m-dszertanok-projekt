# Szoftverfejlesztési módszertanok projekt

## League of Legends weboldal

A weboldal gyakorlatilag egy single page application lesz,
 ahol a különböző nézetek lesznek egymás között cserélgetve attól függően, hogy a felhasználó mit szeretne éppen megtekinteni.
A fejlesztéshez agilis módszertant használunk fel.
AZ AGILIS MÓDSZERTAN ALAPELVEI

* AZ ÜGYFÉLLEL LEGYEN MEGFELELŐ A KAPCSOLATTARTÁS:
* Az agilis fejlesztés sajátossága, hogy szoros kapcsolatot tételez fel a szoftver felhasználója és fejlesztői között.
*  Másképp fogalmazva, a fejlesztés csak akkor lehet eredményes, ha az érintettek közötti kommunikáció megfelelő mélységű.

EGY TERV LEGYEN HIHETŐ (REÁLIS):
* Az innovatív (kockázatosabb, bizonytalanabb) feladatokat (projekteket) csak olyan időtávra érdemes részletesen megtervezni,
*  amelyben a tervtől való eltérés mértéke várhatóan nem lesz elfogadhatatlanul nagy.
*   Ez a tervezési alapelv a klasszikus projektmenedzsment eszköztárából sem hiányzik.
*    Ami újszerűnek tekinthető az agilis világban, az a tervezés mindenhatóságába vetett hit megkérdőjelezése.

ÖNSZERVEZŐDÉSSEL JAVÍTSUK A CSAPAT TELJESÍTMÉNYÉT:
* Az agilis munkavégzés további sajátossága, hogy a munkatársak maguk vállalkoznak egyes feladatok elvégzésére.
*  Ez sem nevezhető új ötletnek, hiszen az önszerveződő csapatok előnyei már régóta ismeretesek.

* Az önszerveződő csapatok jellegzetessége, hogy a csapat tagjai maguk döntik el,
*  mely munkafázissal foglalkoznak, az egyes tagok képesek többféle munka ellátására, és maguk határozzák meg a jutalmazás és munkakövetés módját.

* Az önszerveződő csapatokban dolgozók csapatkohéziója erősebb,
*  és így termelékenysége gyakran meghaladja a szokványos munkaszervezéssel vezetett csapatokét.
*   Nem meglepő tehát, hogy az agilis fejlesztési módszerek eredményesebbnek és hatékonyabbnak bizonyulnak,
*    amennyiben az elvégzendő feladat természete lehetővé teszi annak önszerveződő csapat általi elvégzését.

* Nyilvánvalóan a csapat tagjainak száma és személyisége is befolyásolja azt,
*  hogy ez a fajta vezetési módszer alkalmazható-e.
*   10 főnél nagyobb létszámú csapatoknál gondokba ütközhet a kommunikáció. 
*   A csapat tagjainak képesnek kell lenniük arra, hogy elvégezzék a vállalt feladatot, és elég ambiciózusnak ahhoz, hogy kellően kezdeményezők legyenek.

* A FELADATOK NYOMON KÖVETÉSE ALAPULJON TÉNYEKEN, ÉS LEGYEN TRANSZPARENS:
* Mint korábban láttuk, a Scrum módszer előírja a napi Scrum alkalmazását,
*  ami tulajdonképpen az előrehaladás kontrollja.

* A csapat minden tagja láthatja, hogy a többiek mit végeztek el egy nap alatt.
*  Az átláthatóságot segíti az is, hogy a csapat tagjai egy helyiségben dolgoznak.
*   Az előrehaladást és a hátralevő feladatokat lehetőleg grafikusan, mindenki által jól látható helyen teszik közzé.
*    Nincs kizárólag a feladatok követésével foglalkozó munkatárs,
*     mindenkinek egyszerre kell dolgoznia és a nyomon követéssel foglalkoznia.

* A VIZUALIZÁCIÓ, A NYOMON KÖVETÉS ESZKÖZE:
* Az agilis fejlesztések további jellegzetessége a vizualizáció,
*  ami legtöbbször egy nyomon követést szolgáló tábla alkalmazását jelenti.
*   Ez a módszer – feltéve, hogy a táblán a valósággal megegyező adatok szerepelnek – egyfajta demokratikus hozzáállást tükröz:
*    mindenki számára egyértelmű, hogy ki mit végzett el, és mi lesz a következő lépés.

* Ez tulajdonképpen a projekt követésének olyan eszköze,
*  ami éppen a nyilvánossága miatt egyfajta kényszert is jelent a projekttagok számára,
*   ugyanis nemcsak a vezető látja az elvégzett munkát,
*   hanem a csapat összes tagja azonos képet kap.
* A program kis modulokból fog felépülni és ezek lesznek cserélgetve.
* Ketté lesz választva a frontend a backendtől így azok nem fognak egymással keveredni.

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
* Megjeleníti a monológját a karakternek.

### Team comp builder

* Ezen az oldalon megtalálható lesz a játék minimapje felnagyítva, minden role "helyén" egy négyzet lesz, amire ha rákattintasz egy dropdown menüből kiválaszthatod a championt.
* ![linken](https://www.technewstoday.com/wp-content/uploads/2021/08/How-to-Improve-Map-Awareness-in-League-of-Legends.jpg)
* TOP LANE: Top lane-re ajánlott karakterek megjelenítése és értékelése.
* MID LANE: Mid lane-re ajánlott karakterek megjelenítése és értékelése.
* JUNGLE: Az éppen aktuális jungle meta hőseit fogja megjeleníteni és értékelni.
* BOT/ADC: Bot Lane-re ajánlott ADC-ket fog megjeleníteni és értékelni.
* BOT/SUPPORT: Bot Lane-re ajánlott Support karaktereket fog megjeleníteni és értékelni.
* FONTOS!!! BOT Lane-t egyben fog értékelni az oldal, mert nekik együtt kell dolgozni a meccs nagy részében.
* Az összehasonlítás gombra való kattintással megjelenik a 2 csapatról egy statisztika.
*![linken](https://casadoapostador.com.br/wp-content/uploads/2020/05/13-Draft-o-que-e.jpg)

### Champion builds

* Dropdown listből kiválaszthatsz egy championt amire megjelennek különböző buildek.
* TOP LANE: Top lane-re ajánlott karakterek megjelenítése és itemezése.
* MID LANE: Mid lane-re ajánlott karakterek megjelenítése és itemezése.
* JUNGLE: Az éppen aktuális jungle meta hőseit fogja megjeleníteni és itemezni.
* BOT/ADC: Bot Lane-re ajánlott ADC-ket fog megjeleníteni és itemezni.
* BOT/SUPPORT: Bot Lane-re ajánlott Support karaktereket fog megjeleníteni és itemezni.

### Champion tierlist

* Egy táblázatszerű tierlist a championökről.

ABC rend szerint
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
* A Node.js (vagy másnéven Node) egy rendszer,
* melyben JavaScriptben írhatunk szerver oldali alkalmazásokat.
* Maga a rendszer C/C++-ban íródott,
* és egy esemény alapú I/O rendszert takar a Google V8 JavaScript motorja felett.
* A Node célja,
* hogy egy egyszerű felületet adjon,
* arra, hogy skálázható hálózati alkalmazások írására.
* Azt tudjuk, hogy a JavaScript a világon a jelenleg legnépszerűbb programozási nyelv,
* többek között ezért esett erre a nyelvre a választás.
* A JavaScript nyelvnek vannak más sajátosságai, amelyek szintén előtérbe kerülnek a rendszer használata során.
* Ahogy a böngészőben, úgy Node alatt is egyetlen esemény hurokban (event loop) fut a program, és ez adja az egyik legfontosabb előnyt.
* A Node.js-t úgy írták meg,
* hogy (szinte) minden esemény aszonkron legyen,
* ezért az program sosem blokkolódik, azaz nem kell várni,
* hogy egy művelet befejeződjön, vele párhuzamosan futtathatunk további műveleteket.
* Ez pontosan ugyan úgy működik, mint a böngészőben levő XHR kérések,
* vagy más események, mint például a click, mouseover. Ez az alkalmazás folyamatosabb futását,
* több alkalmazás párhuzamosítását,
* valamint az egész rendszer optimálisabb működését teszi lehetővé.

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

## A felület

### A 
