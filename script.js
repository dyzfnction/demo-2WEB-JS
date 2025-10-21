let book1 = {
    title: "Les Fleurs du Mal",
    author: "Baudelaire",
    publicationYear: "1857",
    borrowed: false
}

let book2 = {
    title: "Gachiakuta",
    author: "Kei Urana",
    publicationYear: "2022",
    borrowed: false
}

let book3 = {
    title: "L'étranger",
    author: "Albert Camus",
    publicationYear: "1942",
    borrowed: true
}

let books = [] // Création du tableau de livres
console.log(books)

function addBook(book) {
    books.push(book) // Ajout du livre 1
}

addBook(book1)
addBook(book2)
addBook(book3)

console.log(books) // Affichage du tableau de livres


// Lister les livres disponibles
function displayBooks() {
    for (i = 0; i < books.length; i++) { // Parcours le tableau de livres
        if (books[i].borrowed == false) { // Condition "si le livre n'est pas emprunté"
            console.log(books[i]) // Affiche le livre
        }
    }
}

displayBooks()

// Chercher un livre à partir de son titre
function searchByTitle(title){
    for(i=0; i < books.length; i++){
        if(books[i].title == title){
            console.log(books[i])
        }
        else(
            console.log("Ce livre n'est pas dans la liste.")
        )
    }
}

searchByTitle('Le petit Prince')
searchByTitle('Les Fleurs du Mal')


function borrowedBook(title){
    let book = searchByTitle(title);
    if(books[book].borrowed == false){
        console.log("Ce livre n'a pas été emprunté")
        book.borrowed = true
    }
    else {
        console.log("Ce livre a déjà été emprunté")
    }
}

borrowedBook('Gachiakuta')
displayBooks()