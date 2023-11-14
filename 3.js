"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
const privateMethodSymbol = Symbol('CheckDuplicateMethod')

class Library {
    #books;

    constructor(userBooks) {
        this.#books = isUniqueShelve(userBooks)
    }

    get allBooks() {
        return this.#books.length > 0 ? this.#books : "There's only dust on the shelves"
    }

    set addBook(title) {
        this.#books = isUniqueShelve([title, ...this.#books])
    }

    set removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error('There is no such book');
        }
        this.#books = this.#books.filter(book => book !== title)
    }

    hasBook(title) {
        try {
            isUniqueShelve([title, ...this.#books])
            return false
        } catch (e) {
            return true
        }
    }
}

const isUniqueShelve = (content) => {
    if (content.length !== new Set(content).size) {
        throw new Error('Only unique books required')
    }
    return content
}
// 1
const myLib = new Library([
    "To Kill a Mockingbird by Harper Lee",
    "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
    "The Great Gatsby by F. Scott Fitzgerald",
    "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
    "The Alchemist by Paulo Coelho"
])
// const myLib2 = new Library([
//     "To Kill a Mockingbird by Harper Lee",
//     "To Kill a Mockingbird by Harper Lee",
// ])

// 2
console.log(myLib.allBooks)
// 3
myLib.addBook = "Caroline by Neil Gaiman"
console.log(myLib.allBooks)
// myLib.addBook = "The Alchemist by Paulo Coelho"
// console.log(myLib.allBooks)
// 4
myLib.removeBook = "Caroline by Neil Gaiman"
console.log(myLib.allBooks)
// myLib.removeBook = "Not existing book"
// console.log(myLib.allBooks)
// 5
console.log(myLib.hasBook("Caroline by Neil Gaiman"))
console.log(myLib.hasBook("The Hitchhiker's Guide to the Galaxy by Douglas Adams"))




