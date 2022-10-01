//  Nie usuwaj tego
const children = ['czerwony', 'zielony', 'niebieski', 'zolty']

// Pisz tutaj
const parent= document.createElement (`div`);

parent.classList.add('parent');
for (let i = 0; i < children.length; i++) { 
const className=children[i];
const div=document.createElement('div');
div.classList.add('child');
div.classList.add(className);
parent.appendChild(div);
}


document.querySelector('body').appendChild(parent);