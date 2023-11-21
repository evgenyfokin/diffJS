const initialData = getReviews()

const root = document.getElementById('root')

initialData.map((product, index) => {
    const productContainer = document.createElement('div')
    let areReviewsOpened = false
    const toggleButton = createBtnHTML(toggleReviews, 'Show')
    const productReviewList = document.createElement('ul')

    createProductTitleHTML(product.name, productContainer)
    createReviewListHTML(product.reviews, productReviewList, index)

    function toggleReviews() {
        areReviewsOpened = !areReviewsOpened
        toggleButton.textContent = areReviewsOpened ? 'Hide' : 'Show'
        productReviewList.style.display = areReviewsOpened ? 'block' : 'none'
    }

    productContainer.appendChild(toggleButton)
    productContainer.appendChild(productReviewList)

    root.appendChild(productContainer)
})


function createBtnHTML(func, text) {
    const btn = document.createElement('button')
    btn.textContent = text
    btn.onclick = func
    return btn
}


function createReviewListHTML(data, productReviewList, index) {
    for (const reviewKey in data) {
        const reviewItem = document.createElement('li')
        reviewItem.style.marginTop = '40px'
        reviewItem.innerHTML = data[reviewKey]

        reviewItem.setAttribute('data-review-id', reviewKey);

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'X'
        removeBtn.onclick = function () {
            removeReview(reviewKey, index)
        }


        reviewItem.appendChild(removeBtn)
        productReviewList.appendChild(reviewItem)
    }
    productReviewList.style.display = 'none'
}


function createProductTitleHTML(title, container) {
    return container.innerHTML += `<h2>${title}</h2>`

}