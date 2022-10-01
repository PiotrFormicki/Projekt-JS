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

// Pisz tutaj
const number=1;
const string="1";
// const array=[1];
const object=`1`;
console.log(typeof number)
console.log(typeof string)
// console.log(typeof array)
console.log(typeof object)
const addNumbers= 2+2;
const substractionNumbers=2-2;
const multiplyNumbers= 2*2;
const divideNumbers= 4/1;
const task= `4/'4'`;
const lastTask= `4/'potato'`;
console.log( addNumbers);
console.log(substractionNumbers);
console.log(multiplyNumbers);
console.log(divideNumbers);
console.log(task);
console.log(lastTask);
const array=[1,'blue','yellow', '4', '5'];
console.log(array);
array.push('brown');
array.pop ( 'black');
array.splice(0,3);
console.log(array.push)
console.log(body.srodek.fotele[prawyfotel]);