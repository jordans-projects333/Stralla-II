const optimizeImage = async (imageFile: any, quality: number) => {
    return new Promise((resolve, reject) => {
        //   let img = new Image()
        //   img.onload = () => resolve(img.height)
        const sizes = [1200, 1080, 828, 750, 640, 320, 150, 50]
        let reader = new FileReader
        reader.readAsDataURL(imageFile)
        reader.onload = (event) => {
            let imageURL = event.target!.result
            let image:any = new Image()
            image.src = imageURL
            image.onload = (e: any) => {
                let WIDTH = findRelevantWidth(e.target.width, sizes)
                let canvas = document.createElement("canvas")
                let ratio = WIDTH! / e.target.width
                canvas.width = WIDTH!
                canvas.height = e.target.height * ratio
                const context = canvas.getContext("2d")
                context?.drawImage(image, 0, 0, canvas.width, canvas.height)
                let newImageURL = context?.canvas.toDataURL("image/webp", quality)
                let arr = newImageURL?.split(",")
                let mime = arr![0].match(/:(.*?);/)![1]
                let data = arr![1]
                let dataStr:any = Buffer.from(data, 'base64')
                let file = new File([dataStr], 'FIlde.wepb', {type: mime})
                resolve(file)
            }
        }
    })
}

const findRelevantWidth = (width: number, sizes: number[]) => {
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i] < width)return sizes[i]
    }
}

export default optimizeImage