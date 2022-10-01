//  Nie usuwaj tego
const samochod = {
    body: {
        przod: {
            komoraSilnika: {
                akumulator: false,
            },
        },
        srodek: {
            kierownica: 'kierownica',
            fotele: ['lewyFotel', 'prawyFotel', 'kanapa']
        },
        tyl: {
            bagaznik: [],
        }
    },
    kola: ['koło', 'koło', 'koło', 'koło'],
    zderzaki: ['tyl', 'przod']
}

// Pisz tutajconst A= 5;
    
function divide (A,B) {
    const wynik= A/B;

    return wynik;
}
console.log(divide(5,5));
function returnArray () {
     
return samochod.kola;
}
const testArray= ()=>samochod.kola;
console.log(returnArray);