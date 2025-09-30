
let book1 = {
    title: "Les Fleurs du Mal",
    author: "Baudelaire",
    publicationYear:"1857",
    borrowed: false
}

let book2 = {
    title: "Gachiakuta",
    author: "Kei Urana",
    publicationYear:"2022",
    borrowed: false
}

let book3 = {
    title: "L'étranger",
    author: "Albert Camus",
    publicationYear:"1942",
    borrowed: true
}

let books = [] // Création du tableau de livres
console.log(books)

function addBook(book1){
    books.push(book1) // Ajout du livre 1
}

console.log(books) // Affichage du tableau de livres

function addBook(book2){
    books.push(book2) // Ajout du livre 2
}

function addBook(book3){
    books.push(book3) // Ajout du livre 3
}

console.log(books) // Affichage du tableau de livres remplie


// Lister les livres disponibles

function displayBooks(){
    for(i=0, i < books.length; i++){ // Parcours le tableau de livres
        if(books[i].borrowed == false){ // Condition "si le livre n'est pas emprunté"
            console.log(books[i]) // Affiche le livre
        }
    }
}

console.log(displayBooks)