const gallery = document.getElementById("gallery")

const displayGallery = (json) => {
    json.forEach(piece => {
        const image = document.createElement("img")
        image.src=piece.localurl
        image.alt= "" + piece.name + " " + piece.blurb

        const imageBox = document.createElement("div")
        const imageName = document.createElement("h5")
        const imageBlurb = document.createElement("p")
        const year = document.createElement("p")
        const shopLink = document.createElement("a")
        const sizes = document.createElement("div")
        const sizeTop = document.createElement("p")
        sizeTop.innerHTML = "Available as:"
        sizes.appendChild(sizeTop)
        piece.sizes.forEach(size => {
            const sizeText = document.createElement("p")
            sizeText.innerHTML = size
            sizes.appendChild(sizeText)
        })
        imageName.innerHTML = piece.name
        imageBlurb.innerHTML = piece.blurb
        year.innerHTML = "" + piece.year
        shopLink.innerHTML = "View on eBay"
        shopLink.href = piece.eBayurl
        shopLink.target = "_blank"

        const textPortion = document.createElement("div")
        textPortion.className = "img_description"
        textPortion.appendChild(imageName)
        textPortion.appendChild(imageBlurb)
        textPortion.appendChild(sizes)
        textPortion.appendChild(shopLink)

        imageBox.className = "img_wrap"
        imageBox.appendChild(image)
        imageBox.appendChild(textPortion)
        gallery.appendChild(imageBox)
    })
}

fetch('./shop.json')
    .then(response => response.json())
    .then(json => displayGallery(json))

