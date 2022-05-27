// Get the modal
var modal = document.getElementsByClassName("modal")

// Get the button that opens the modal
var modalBtn = document.querySelectorAll(".modal-btn")

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close")

for(let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click',() => {
    console.log(modal)
    modal[i].style.display = "block"
  } )
}

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click',() => {
    console.log(modal[i])
    modal[i].style.display = "none"
  } )
}


function openNav() {
  document.getElementById("wrnkrb-sidebar").style.width = "500px";                                    /* Width und Margin des Warenkorbs einstellen wenn der Button angeglickt wird */
  document.getElementById("main").style.marginLeft = "500px";
}


function closeNav() {
  document.getElementById("wrnkrb-sidebar").style.width = "0";                                        /* Wenn der Warenkorb geschlossen wird alles wieder auf 0 setzen */
  document.getElementById("main").style.marginLeft = "0";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"
  setTimeout(showSlides, 3000);                                                                    /* Bilder alle 10s wechseln */
}


function ready() {

var wrnkrbEntfButton = document.getElementsByClassName('button-entf')                               /*Holt alle Elemente mit 'button-entf' in die variable */
console.log(wrnkrbEntfButton)
for (var i = 0; i < wrnkrbEntfButton.length; i++) {
  var button = wrnkrbEntfButton[i]                                                                  /* Geht alle Instanzen [i] von button-entf durch*/
  button.addEventListener('click', wrnkrbEntf)                                                      /* Eventlistener sobald der Button angeglickt wird */
}

var mengeInput = document.getElementsByClassName('wrnkrb-input')                                    /*Holt alle Elemente mit 'wrnkrb-input' in die variable */
for (var i = 0; i < mengeInput.length; i++) {
  var input = mengeInput[i]                                                                         /* Gejht alle Instanzen [i] von wrnkrb-input durch*/
  input.addEventListener('change', mengeChange)                                                     /* Eventlistener sobald Menge geändert wird */
  }

// var zuWrnkrbButton = document.getElementsByClassName("button-wrnkrb")                               /* Holt alle Elemente mit 'button-entf' in die variable */
// for (var i = 0; i < zuWrnkrbButton.length; i++) {
//   var button = zuWrnkrbButton[i]                                                                    /* Gejht alle Instanzen [i] vom add to cart button durch*/
//   button.addEventListener('click', zuWrnkrb)
//  }



}

function wrnkrbEntf(event) {
  var buttonClick = event.target                                                                    /* Event das als Parameter für die Funktion genutzt wird (aus wrnkrbEntfButton) */
  buttonClick.parentElement.parentElement.remove()                                                  /* Der Button hat 2 DIVS im HTML Code drüber und durch die beiden Parentelements werden die rausgesucht und dann mit .remove entfernt */
  Summe()                                                                                           /* Um die Summe nach removen zu aktualisieren */
}

function mengeChange(event) {
  var input = event.target                                                                          /* Event das als Parameter für die Funktion genutzt wird (aus mengeInput) */
  if (isNaN(input.value) || input.value <= 0 || input.value >=100 ) {                               /* if-statement das checkt ob die Zahl 1. Eine nummer ist 2. größer als 0 und 3. kleiner als 100 */
    input.value = 1
                                                                                  /* wenn eins davon zutrifft einfach die Zahl wieder auf eins setzen */
  }
  Summe()                                                                                           /* Summe() funktion aufrufen um die gesamt summe im Warenkorb zu ändern */
}

// function zuWrnkrb(event) {
//   var button = event.target                                                                         /* Event das als Parameter für die Funktion genutzt wird (aus zuWrnkrbButton) */
//   var strArtikel = button.parentElement.parentElement                                               /* doppel parentElement um auf das DIV zuzugreifen wo die ganzen Infos des Artikels sind*/
//   var titel = strArtikel.getElementsByClassName('str-titel')[0].innerText                           /* Man setzt die Variable auf den Titel des Objektes. InnerText da wir Text brauchen und kein HTML Objeckt (InnerHTML) */
//   var preis = strArtikel.getElementsByClassName('preis')[0].innerText                               /* Man setzt die Variable auf den Preis des Objektes. wieder InnerText ^ */
//   var bild = strArtikel.getElementsByClassName('str-bild')[0].src                                   /* Man setzt die Variable auf die Source des Bildes. */
//   console.log(titel,preis, bild)

//   artikelZuWrnkrb(titel,preis,bild)                                                                 /* Übergeben der Variablen and die Funktion die es zum Warenkorb hinzufügt */

//   Summe()                                                                                           /* Funktion Summe() aufrufen um den Gesamtpreis zu ändern */
// }



function artikelZuWrnkrb(titel,preis,bild) {                                                        /* Funktion zum erstellen der DIV's im Warenkorb */
  var wrnkrbReihe = document.createElement('div')                                                   /* Variable erstellen die durch createElement ein DIV erstellt */
  wrnkrbReihe.classList.add('wrnkrb-reihe')                                                         /* Hier wird der Variable durch classList die CSS/Style Eigenschaften übergeben */
  var wrnkrbArtikels = document.getElementsByClassName('wrnkrb-artikels')[0]                        /* Der Variable durch getElement das Erste Objeckt ( [0] ) von wrnkrb-artikels übergeben */
  var wrnkrbArtikelNamen = wrnkrbArtikels.getElementsByClassName('wrnkrb-artikel-name')             /* Der Variable durch getElement Objekte von wrnkrbArtikels mit der Klasse wrnkrb-artikel-name übergeben */

  alert('Der Artikel wurde zum Warenkorb hinzugefügt!')                                             /* Popup Message das der Artikel in den Warenkorb hinzugefügt wurde */

  for (var i = 0; i < wrnkrbArtikelNamen.length; i++) {
    if(wrnkrbArtikelNamen[i].innerText == titel) {                                                  /* Checkt in einer Schleife ob der Titel des zu hinzufügenden Objektes schon im Warenkorb vorhanden ist  */
    alert('Fehler! Der Artikel ist schon im Warenkorb vorhanden')                                   /* Falls ja alert ausführen und mit return den restlichen Code nicht ausführen */
    return
    }
  }

  // var wrnkrbReiheInhalt =                                                                           /* Die Variable kriegt den HTML code der DIV's übergeben welcher dann in den beim aufrufen in den Warenkorb getan wird */
  //  ` <div class = "wrnkrb-artikel wrnkrb-spalte">
  //     <img class = "wrnkrb-bild" src= "${bild}" width="100" height = "100">
  //     <span class = "wrnkrb-artikel-name">${titel}</span>
  //   </div>
  //   <span class = "wrnkrb-preis wrnkrb-spalte">${preis}</span>
  //   <div class = "wrnkrb-menge wrnkrb-spalte">
  //     <input class="wrnkrb-input" type="number" value="1">
  //     <button class = "button button-style button-entf" type = "button"> ENTFERNEN</button>
  //   </div>`
  // wrnkrbReihe.innerHTML = wrnkrbReiheInhalt                                                        /* Hier wird durch innerHTML der oben erstellten Variable der Inhalt von wrnkrbReiheInhalt übergeben */
  wrnkrbArtikels.append(wrnkrbReihe)                                                               /* Hier wird an wrnkrbArtikels wrnkrbReihe angehängt */

  wrnkrbReihe.getElementsByClassName('button-entf')[0].addEventListener('click', wrnkrbEntf)       /* Eventlistener fürs Entfernen und Wechseln der Menge */
  wrnkrbReihe.getElementsByClassName('wrnkrb-input')[0].addEventListener('change', mengeChange)

}

function Summe() {
  var wrnkrbArtikelContainer = document.getElementsByClassName('wrnkrb-artikels')[0]               /* Variable für alle Sachen im Artikel im Warenkorb. Gibt ein Array zurück und wir wollen nur das Erste deswegen [0] */
  var wrnkrbReihen = wrnkrbArtikelContainer.getElementsByClassName('wrnkrb-reihe')
  var summe  = 0;
  for (var i = 0; i < wrnkrbReihen.length; i++) {
    var wrnkrbArtikel = wrnkrbReihen[i]                                                            /* Schleife geht alle Instanzen von wrnkrbReihen durch */
    var wrnkrbPreis = wrnkrbArtikel.getElementsByClassName("wrnkrb-preis")[0]                      /* Holt sich das erste Objekt von dem Preis */
    var wrnkrbMenge = wrnkrbArtikel.getElementsByClassName("wrnkrb-input")[0]                      /* Holt sich das erste Objekt von der Menge */
    var preis = parseFloat(wrnkrbPreis.innerText.replace('€',''))                                  /* Variable für den Preis. Replaced das Euro Zeichen durch nichts. ParseFloat damit es von String zu eine Kommazahl umgewandelt wird, damit es zum Rechnen benutzt werden kann */
    var menge = wrnkrbMenge.value                                                                  /* variable für die Menge */
    summe +=  (preis * menge)
  }
  summe = Math.round(summe * 100) / 100                                                            /* Hier wird aufgerundet, ohne das aufrunden kommen endlos lange nachkommastellen und der Preis wäre somit nicht richtig */
  document.getElementsByClassName("wrnkrb-summe-preis")[0].innerText = summe + '€'                 /* Hier wird das Euro Zeichen wieder dran gehängt um in der Summe angezeigt zu werden. */
}
