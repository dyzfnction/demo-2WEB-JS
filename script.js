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
    let euh // Pour récupérer le livre
    for(i=0; i < books.length; i++){
        if(books[i].title == title){
            console.log(books[i])
            euh = books[i]
        }
        else(
            console.log("Ce livre n'est pas dans la liste.")
        )
    }
    return euh // Retourne le livre
}

searchByTitle('Le petit Prince')
searchByTitle('Les Fleurs du Mal')

//Emprunter le livre
function borrowedBook(title){
    let book = searchByTitle(title) // Création d'un objet livre
    if(book.borrowed == false){
        console.log("Ce livre n'a pas été emprunté") // Affiche dans la console 
        book.borrowed = true // Change borrowd à vrai
    }
    else {
        console.log("Ce livre a déjà été emprunté") // Too late
    }
}


borrowedBook("Gachiakuta")
borrowedBook("L'étranger")
displayBooks()

// Rendre le livre
function returnBook(title){
    let book = searchByTitle(title)
    if(book.borrowed == true){ // Si borrowed est a vrai (donc il a été emprunté) on peut le rendre
        book.borrowed = false // Borrowed est mis à false donc il est a nouveau disponible
        console.log("Livre rendu") // Affichage console
    }
    else{
        console.log("Ce livre n'a jamais été emprunté") // Affichage console
    }
}

returnBook("Gachiakuta")


// Recherche de livre par années
function searchByPublicationYear(year){
    let hum // Déclaration de "hum"
    for(i=0; i < books.length; i++){ // Parcours du tableau
        if(books[i].publicationYear == year){
            console.log(books[i])
            hum = books[i]
        }
        else(
            console.log("Ce livre n'est pas dans la liste.")
        )
    }
    return hum // Retourne le livre
}

searchByPublicationYear("1857")