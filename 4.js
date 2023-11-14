"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: 1,
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: 2,
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: 3,
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: 4,
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


function createReviewHTML(review) {
    return `<li>${review.text}</li>`;
}

function createReviewFormHTML(productId) {
    return `
      <form id="reviewForm_${productId}">
        <label for="reviewText_${productId}">Добавить отзыв:</label>
        <input type="text" id="reviewText_${productId}" required>
        <button type="button" onclick="addReview(${productId})">Добавить</button>
      </form>
    `;
}

function addReview(productId) {
    const reviewText = document.getElementById(`reviewText_${productId}`).value;
    const productContainer = document.getElementById(`root${productId}`);
    const reviewsList = productContainer.querySelector("ul");
    const errMessage = document.createElement('p');



    if (reviewText.length < 50 || reviewText.length > 500 || reviewText.trim() === "") {
        errMessage.textContent = 'The review must contain from 50 to 500 characters';
        productContainer.appendChild(errMessage);

    } else {
        const newReview = { id: Date.now(), text: reviewText };
        const reviewElement = document.createElement('li');
        reviewElement.textContent = reviewText;
        reviewsList.appendChild(reviewElement);
        document.getElementById(`reviewText_${productId}`).value = "";
        productContainer.removeChild(errMessage)

    }
}

initialData.forEach(productData => {
    const productContainer = document.createElement("div");
    productContainer.id = `root${initialData.indexOf(productData)}`;
    productContainer.innerHTML = `<h2>${productData.product}</h2>`;

    const reviewsList = document.createElement("ul");
    productData.reviews.forEach(review => {
        reviewsList.innerHTML += createReviewHTML(review);
    });

    const reviewForm = createReviewFormHTML(initialData.indexOf(productData));

    productContainer.appendChild(reviewsList);
    productContainer.innerHTML += reviewForm;

    document.getElementById("root").appendChild(productContainer);
});

