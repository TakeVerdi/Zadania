var plansza = document.getElementById("test"); //do tej zmiennej znajdujemy za pomocą metody getElementById nasz element canvas pliku html.
console.log(test);

var obszar = plansza.getContext("2d"); //tworzymy kontekst na którym będziemy pracować.

obszar.strokeStyle = "rgb(255,0,0)"; // definiuje styl obramowania 

obszar.fillStyle = "rgb(66,14,23)";

//obszar.strokeRect(100,80,10,10); //rysuje prostokąt, 4 parametry
// pierwszy parametr współrzędna pozioma
//drugi parametr współrzędna pionowa
//trzeci parametr szerokość prostokąta
//czawarty parametr długość/wysokość prostokąta

obszar.fillRect(20,20,20,20); //drugi prostokąt
//obszar.strokeRect(55,55,55,55); //trzeci prostokąt
//obszar.fillRect(200,100,100,1000); //czwarty prostokąt
//obszar.clearRect(60,60,15,23); //ta funkcja czyści wszystkie prostokąty
//obszar.clearRect(0,0,400,200); //ta funkcja (clearRect) czyści obszar pod sobą

obszar.clearRect(0,0,plansza.Width,plansza.height); //pod plansza.widt i plansza.height są wymiary płótna

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Siatka lub z angielskiego GRID */
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var RozmiarElementuWęża = 20; //rozmiar elementu siatki
var SiatkaSzerokość = plansza.Width / RozmiarElementuWęża; //ilość elementów siatki w poziomie
var SiatkaWysokość = plansza.Height / RozmiarElementuWęża; //ilość elementów siatki w pionie
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Informacje o wężu, kierunek, punkt startowy, rozmiar węża
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//początek ruchu węża
var kierunekX = 1; //aby nasz wąż szedł w poziomie w prawo, jeśli damy -1, to będzie szedł w lewo
var kierunekY = 0; //aby nasz wąż nie szedł w pionie

var x = 10;
var y = 10;

var snake =[ //startowa długość węża - zrobiona używając tablicy (ang: array) - Java lub javascript arrays w3c
    {x : 2, y : 0},
    {x : 1, y : 0},
    {x : 0, y : 0}
]



function JabłkoLokacja() //startowa lokalizacja elementu, który będzie jedzony przez węża
{ var JablkoX = Math.floor(Math.random() * SiatkaSzerokość); // funkcja Math.floor oraz Math.random - np na w3c schools 
  var JablkoY = Math.floor(Math.random() * SiatkaWysokość);




}





function logKlawisz(event) {
console.log(event);

if (event.key==="ArrowUp") {
    console.log("Strzałka w górę");
    kierunekX = 0;
    kierunekY = -1;
}   else if (event.key==="ArrowDown") {
    console.log("Strzałka w dół");
    kierunekX = 0;
    kierunekY = 1;
}   else if (event.key==="ArrowRight") {
    console.log("Strzałka w prawo");
    kierunekX = 1;
    kierunekY = 0;
}   else if (event.key==="ArrowLeft") {
    console.log("Strzałka w lewo");
    kierunekX = -1;
    kierunekY = 0;
}   else
    console.log("Wciśnięto coś innego niż strzałkę");
}

   document.addEventListener("keydown",logKlawisz);


   //Funkcja rysująca i tworząca węża
   //Funkcja obsługi ruchu


/*
function konsola() 

{
    console.log("Jabłko");
}


setInterval(konsola,1000);
*/
