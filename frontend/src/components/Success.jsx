import React from "react"
import { ImageContext } from "../App"
import Copied from "./Copied"


const Success = ({src}) => {
    const [perview,setPerview] = React.useState()
    const [copied , setCopied] = React.useState()
    const imageContext = React.useContext(ImageContext)

    React.useEffect(() =>{
        const image = imageContext.image
        const url = URL.createObjectURL(image.target.files[0])
        setPerview(url)
    },[])

    return (<>
    {copied && <Copied />}
        <div className='shadow-normal rounded-xl h-469 text-center flex flex-col justify-evenly py-6 text-center'>
            <img src='images/checked.png' className="h-35 w-35 m-auto" alt='success' />
            <h1 className="pb-2">Uploaded Successfully!</h1>
            <div className="h-218.9 w-338 m-auto">
                <img src={perview} className="h-218.9 w-338 rounded-xl" alt = 'uploaded image' />
            </div>
            <div className="p-1 pl-1.5 pr-0.5  flex align-center justify-between h-34 w-338 m-auto bg-light-grey overflow-hidden rounded-lg">
                <input type="text" id="image" name="imageLink" value={src} readonly className="text-8 bg-light-grey w-3/4 border-0 focus:outline-none" />
                <button className="text-8 text-white bg-blue px-3 rounded-lg" onClick={async() => {
                    await navigator.clipboard.writeText(src)
                    setCopied(true)
                    setTimeout(()=>{
                        setCopied(false)
                    },4000)
                }}>Copy Link</button>
            </div>
        </div>
    </>)
}

export default Success