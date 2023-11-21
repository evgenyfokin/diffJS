'use strict'

const reviewsKey = 'reviews'
const idKey = 'idKey'


function addReview(post) {
    const name = post.name
    const text = post.content.text
    const id = post.content.id
    const data = getReviews()

    if (name.trim() === '' || text.trim() === '') {
        throw new Error('Silence is golden but not now')
    }

    const existingProductIndex = data.findIndex(datum => datum.name === name)

    if (existingProductIndex !== -1) {
        data[existingProductIndex].reviews[id] = text
        return saveReviews(data);
    }
    const newData = {}
    newData.name = name
    newData.reviews = {[id]: text}


    data.push(newData)
    saveReviews(data);
}

function getReviews() {
    const data = localStorage.getItem(reviewsKey)
    if (data === null) {
        return []
    }
    return JSON.parse(data)
}

function saveReviews(dataArr) {
    const dataJson = JSON.stringify(dataArr)
    localStorage.setItem(reviewsKey, dataJson)
}

function generateUniqueId() {
    let data = +localStorage.getItem(idKey)
    if (data === null) {
        data = 0
    } else {
        data = parseInt(data)
    }
    localStorage.setItem(idKey, ++data)
    return data
}

function removeReview(id, index) {
    let data = getReviews()
    delete data[index].reviews[id]
    const reviewToRemove = document.querySelector(`[data-review-id="${id}"]`);
    if (reviewToRemove) {
        reviewToRemove.parentNode.removeChild(reviewToRemove);
    }
    if (Object.keys(data[index].reviews).length === 0) {
        data.splice(index, 1)
        const productToRemove =  root.childNodes[index]
        if (productToRemove) {
            root.removeChild(productToRemove)
        }
    }
    saveReviews(data, index)
}


