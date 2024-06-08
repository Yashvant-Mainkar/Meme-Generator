const generateButton = document.querySelector(".generate-button")
const memeTitle = document.querySelector(".meme-title")
const memeImage = document.querySelector(".meme-image")
const authorr = document.querySelector(".author")

async function Data(){
    const response = await fetch(`https://meme-api.com/gimme/wholesomememes`)
    const data = await response.json()
    const {title,url,author} = data
    memeImage.src = url
    authorr.innerText = author
    memeTitle.innerText = title
}

generateButton.addEventListener("click",()=>{
    Data()
})

