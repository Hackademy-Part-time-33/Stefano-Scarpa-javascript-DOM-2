// Traccia 1:
// Partendo da una pagina HTML con un titolo principale ed un pulsante, scrivere un programma che al click del pulsante, permetta di cambiare il colore del testo del titolo utilizzando l'array dei colori
// Array di colori:


let colors = ['red', 'black', 'green', 'blue', 'yellow'];

let h1 = document.querySelector('#title');
let btnColor= document.querySelector('#btnColor');

let randomColor = () => {
    let color = Math.floor(Math.random() * colors.length);
    return colors[color];
};

btnColor.addEventListener('click', () => {
    h1.style.color = `${randomColor(colors)}`;
});



// Traccia 2:
// Terminare gli esercizi precedenti su Javascript



// Traccia 3:
// Avremo due elementi HTML:
// un pulsante che ci consentira' di ordinare i contatti
// un contenitore, in cui verranno visualizzati i contatti
// <button id="btnAsc">Ordina in modo crescente</button>
// <div class="wrapper"></div>

// Ordinare in ordine alfabetico un elenco di contatti:
// al primo click del pulsante, verranno ordinati dalla A alla Z
// al secondo click del pulsante, verranno ordinati dalla Z alla A
// dato un'array di partenza:
// contacts = [
//     { 'id': 1, 'name': 'Nicola'},
//     { 'id': 2, 'name': 'Fabio'},
//     { 'id': 3, 'name': 'Luca'},
//     { 'id': 4, 'name': 'Giulia'}
// ] 

// EXTRA:
// Inserire un secondo pulsante che permetta di ordinarli in base all'id del contatto
// Inserire un terzo pulsante che permetta di nascondere o visualizzare tutta la lista dei contatti

let btnView = document.querySelector('#btnView');
let btnID = document.querySelector('#btnID');
let btnAsc = document.querySelector('#btnAsc');
let ischecked = false;
let isCheckID = false;

let wrapper = document.querySelector('.wrapper');

let contacts = [
        { 'id': 1, 'name': 'Nicola'},
        { 'id': 2, 'name': 'Fabio'},
        { 'id': 3, 'name': 'Luca'},
        { 'id': 4, 'name': 'Giulia'}
    ];


function compareByName(a, b) {
    return a.name.localeCompare(b.name);
}

contacts.forEach(contact => {
    let p = document.createElement('p');
    p.innerHTML = `<p>${contact.name}</p>`;
    wrapper.appendChild(p);
});


btnAsc.addEventListener('click', () => {
    if (!ischecked) {
        contacts.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        });
        ischecked = true;
        btnAsc.innerHTML = 'ordina in modo descrescente';
    } else {
        contacts.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
        });
        ischecked = false;
        btnAsc.innerHTML = 'ordina in modo crescente';
    }
    wrapper.innerHTML = '';
    
    contacts.forEach(contact => {
        let p = document.createElement('p');
        p.innerHTML = `<p>${contact.name}</p>`;
        wrapper.appendChild(p);
    });
});

btnID.addEventListener('click', () => {
    if (!isCheckID) {
        contacts.sort((a, b) => a.id - b.id);
        isCheckID = true;
    } else {
        contacts.sort((a, b) => b.id - a.id);
        isCheckID = false;
    }
    wrapper.innerHTML = '';
    
    contacts.forEach(contact => {
        let p = document.createElement('p');
        p.innerHTML = `<p>${contact.name}</p>`;
        wrapper.appendChild(p);
    });
});

// button show/hide
btnView.addEventListener('click', () => {
    wrapper.classList.toggle('none');
})