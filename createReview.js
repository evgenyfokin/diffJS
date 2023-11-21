const form = document.querySelector('.review-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const productName = document.getElementById('product-name')
const productReview = document.getElementById('product-review')
const submitBtn = document.querySelector('.submit-review')
submitBtn.addEventListener('click', () => {
    addReview(new Post(productName.value, productReview.value))
    productName.value = '';
    productReview.value = ''
})

