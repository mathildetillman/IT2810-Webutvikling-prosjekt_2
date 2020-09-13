Prosjekt 2 - IT2810
=======
## Innhold og funksjonalitet

Dette er en side hvor du kan sette sammen bilder, tekst og lyd til forskjellige kunstverk. Vi har 3 forskjellige katogorier for bilder, lyd og tekst som velges i menyen. For å bytte mellom kunstverkene du har laget kan du trykke på de forskjellige tabsene. Du kan velge et favoritt kunstverk ved å trykke på “Make favorite” hvis du blir fornøyd   med kunsten du har satt sammen. Når du trykker på “Show favorite” kommer dette kunstverket tilbake igjen.   

<br>

## Teknologi

### **React(JSX, ES6)**

Posjektet er satt opp med create-react-app og baseres på Node og NPM. Løsningen vår er implementert med React og ES6. Vi har valgt å ta i bruk React Hooks, det nyeste tilskuddet til React, ettersom dette skal forenkle syntaks og lover å løse mange av problemene man møter på med tradisjonell React(https://reactjs.org/docs/hooks-intro.html). Hovedforskjellen i syntaks er at man med Hooks oppretter funksjonskomponenter hvor man kan bruke Hooken _useState_ for å initialisere en lokal state og samtidig opprette en funksjon for å endre på denne verdien i staten.

```js
const [activeTab, setActiveTab] = useState("0");
```

En annen viktig Hook er _useEffect_ som erstatter såkalte lifecyclemethods som _componentDidMount_, _componentDidUpdate_, og _componentWillUnmount_. I eksempelet under bestemmer variabelen activeTab når funksjonen inni useEffect skal kjøres, noe som vil skje hver gang activeTab endrer seg.

```js
 useEffect(()=> {
    console.log(activeTab);
}, [activeTab]); 
```

Hovedkomponenten vår er App.js, og her ligger resten av komponentene:

* RadioButtons.js
* Tabs.js 
* ArtContainer.js

<br>

### **AJAX**

Vi har brukt Ajax (Asynchronous JavaScript And XML) sin fetch()-metode for å asynkront laste inn data. Responsen må så konverteres til riktig format ved å bruke .json() (for tekst) og .text() (for bilder). Audioen håndteres direkte med HTML5-audio tag. Filene hentes først når de benyttes og caches så i browseren.

<br>

### **HTML Web Storage**

Applikasjonen tar i bruk HTML Web Storage for å lagre informasjon i brukerens browser. SessionStorage lagrer informasjon i én økt som går tapt når brukeren lukker browseren. Dette har vi utnyttet til å cache filene (bildene, lyden og teksten) som lastes inn, slik at applikasjonen blir raskere. LocalStorage skiller seg fra sessionStorage ved at det lagrer informasjon uten utløpsdato. Dette muliggjør at brukeren kan lagre sin favorittkunstutstilling, for så å hente den opp ved senere anledning. 

<br>

### **Responsive Webdesign**

Applikasjonen er implementert med responsiv webdesign, som forbedrer brukeropplevelsen ved at siden automatisk tilpasser seg ulike skjermstørrelser og enheter. Vi har tatt i bruk følgende teknikker:

<br>

##### **ViewPort**

Ved å legge til et viewport-element i index.html, gir man instruksjoner til browseren om hvordan kontrollere sidens dimensjoner og skalering. Dette gjøres i en meta-tag, på denne måten:

```html
<meta name="viewport" content="width=device-width, intial-scale=1" />
```

<br>

##### **Media queries**

Vi har tatt i bruk media-queries for å endre layouten på siden i samsvar med skjermstørrelse og fasong. Dette defineres i index.css:

```css
@media only screen and (max-width: 768px) {
    ...
}
```

Dersom bredden på skjermen er mindre enn 768px, vil stylingen inni krøllparentesen gjelde. Layouten på nettsiden skifter da fra å ha organisert kunsten, samt favorittknappene horisontalt, til et vertikalt design tilpasset mobil. Bredden 768px er valgt da dette regnes som good practice (https://www.solodev.com/blog/web-design/media-queries-and-mobile-css-best-practices.stml ), og gjør at elementene ikke overlapper på noe tidspunkt.

<br>

##### **Bilder som skalerer**

Bredden på bildene ble satt til å være 70% og dermed skalerer opp og ned i takt med størrelsen på browservinduet. 

<br>

##### **Flytende/fleksibel layout**

For å oppnå et flytende design, har vi tatt i bruk både CSS Grid og Flexbox. CSS Grid er eksempelvis brukt for å organisere selve kunsten inni taben, hvor bildet er plassert i kolonne 1 og tar opp to rader, mens teksten og lyden er plassert i kolonne 2 og tar opp én rad hver. Her fant vi det hensiktsmessig å bruke Grid overfor Flexbox, da vi ønsket å organisere elementene i to dimensjoner. Vi har og anvendt Flexbox, både i taben og for å organisere gruppene med radioknapper. Her skulle elementene bare ordnes i én dimensjon, og da er det fordelaktig å bruke Flexbox.

<br>

### **Bruk av Git**

Vi har brukt Git og Gitlab til versjonshåndtering. Vi delte opp prosjektet i deloppgaver som ble lagt inn som issues på gitlab, og merket de med arbeidsstørrelse og type (feature/enhancement/bugfix). Etter hvert ble det klart at det hadde vært fordelaktig å merke commitsene med hvilket issue det løste, for å få bedre oversikt.

<br>

### **Testing**

Vi har utført en snapshottest med Jest, resultatet ligger i mappen _snapshot_ under _test_.  For å teste det responsive web designet, åpnet vi siden på tre forskjellige enheter; Huawei Matebook 14 tommer, Huawei P20 Pro og Iphone SE. På mobilene ble både horisontalt og vertikalt orientering testet, og applikasjonen skalerer og endrer layout som ønsket.





