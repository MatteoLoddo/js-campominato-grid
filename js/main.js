// Generare una griglia quadrata
// const numberUserColumn = parseInt(prompt("Inserisci il numero di colonne della tua griglia"))
const containerGriglia = document.querySelector(".cont-griglia");
const difficolta = document.querySelector('[name="difficolta"]')
console.log(containerGriglia);
// funzione che crea tante celle quanto il valore richiamato  al posto degli argomenti
function calcolaGriglia (colonne,righe){
// calcolo degli argomenti per calcolare il  numero di  celle 
    const numeroCelle = colonne * righe;

    return numeroCelle
}

// salvo il risultato della mia funzione in una variabile
const numeroCelle = calcolaGriglia(10,10)





// 

// creo una funzione per creare tanti div quante le celle calcolate in precedenza
function creaGriglia (quantitaCelle){
    
    for(let i=1; i <=quantitaCelle; i++){
        // salvo il numero incrementale per stamparlo
        let text = i
        console.log(text);
        
        // creo la mia variabile per creare l elemento div
        let cella = document.createElement("div")

        // appendo il testo nel mio div cella
        cella.append(`${text}`)

        // aggiungo gli stili del css al mio div cella tramite js
        cella.classList.add("cella")

        cella.addEventListener ("click" , function (){
            // aggiunta una condizione in cui se l elemento cliccato e gia la classe che voglia aggiungere la va a togliere
            if(cella.classList.contains("bg-onclick")){
                cella.classList.remove("bg-onclick")
            }else{
                cella.classList.add("bg-onclick")
            console.log(`hai cliccato ${text}`);
            }

        })

        // do una dimensione con stili inline al mio container per avere sempre la griglia delle dimensioni desiderate  calcolando la larghezza di ogni cella(richiamando la variabile css a cui ho  dato  la mia dimensione statica) per il numero delle colonne da ottenere
        containerGriglia.style.width = `calc(var(--cella-size) * 10`
        // a fine di ogni ciclo appendo la mia cella nel mio container
        containerGriglia.append(cella)
    }
}



creaGriglia(numeroCelle)
