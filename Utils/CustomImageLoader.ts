import type { ImageLoader } from "next/image";

const customLoader: ImageLoader = ({src, width, quality}) => {
    if(width === 640)return 'beans'
    if(width === 768)return 'hoop'
    if(width === 1024)return 'pep'
    return src
}

export default customLoader