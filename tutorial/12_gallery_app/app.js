// https://api.pexels.com/v1/curated?per_page=1
// https://api.pexels.com/v1/search?query=nature&per_page=1
// FgbEsL5e0rDmyclc6TfJmXX4HLoRpNvYQHUkKTwYyrBZzRKPn0Fbq8Ay

const API_KEY = 'FgbEsL5e0rDmyclc6TfJmXX4HLoRpNvYQHUkKTwYyrBZzRKPn0Fbq8Ay'
const galleryDiv = document.querySelector('.gallery')
const form = document.querySelector('form')
const loadMore = document.querySelector('.load_more')

let pageIndex = 1

function paintImg(photos) {
    console.log(photos);
}

async function fetchImg(baseURL) {
    const res = await fetch(baseURL, {
        headers : {
            Authorization : API_KEY
        }
    })    
    const data = await res.json()  
    return data  
}

async function getImg(pageIndex) {
    const baseURL = `https://api.pexels.com/v1/curated?page=${pageIndex}&per_page=12`
    const data = await fetchImg(baseURL)      
    paintImg(data.photos)  
}

function init() {
    getImg(pageIndex)
}

init()