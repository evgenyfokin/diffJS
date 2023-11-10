"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const discography = {
  albums: [
    {
      title: "Reckless",
      artist: "Bryan Adams",
      year: "1984",
    },
    {
      title: "Diapason",
      artist: "Roberto Cacciapaglia",
      year: "2018",
    },
    {
      title: "Afternoons In Utopia",
      artist: "Alphaville",
      year: "1986",
    },
  ],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return index < this.albums.length
          ? { value: this.albums[index++], done: false }
          : { done: true };
      },
    };
  },
  // *[Symbol.iterator]() {
  //   for (const album of this.albums) {
  //     yield album;
  //   }
  // },
};

for (const album of discography) {
  console.log(album);
}
