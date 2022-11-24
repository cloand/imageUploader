import React, { useEffect } from "react"
import { ImageContext } from "../App"
import {FileUploader} from 'react-drag-drop-files'


const Upload = () => {
    const provider = React.useContext(ImageContext)

    return (
        <>
            <div className='shadow-normal rounded-xl h-469 text-center flex flex-col justify-evenly py-10 items-center'>
                <h1 className="text-18 font-medium ">Upload your image</h1>
                <h2 className="text-sm pt-3">File should be jpeg,Png...</h2>
                <FileUploader handleChange={provider.changeImage} name="file">
                <div className="h-218.9 w-338 m-auto bg-light-grey border border-1 border-dashed border-dashed-border rounded-xl flex flex-col pb-9">
                    <img src='/images/upload.svg' alt='upload' className="m-auto"/>
                    <h3 className="text-gray text-12">Drag and Drop your Image here</h3>
                </div>
                </FileUploader>
                <h3 className="text-gray pb-3">Or</h3>
                <button className="bg-blue w-101 h-32 rounded-lg font-medium text-12 text-white"><label className="cursor-pointer">Choose a file<input type='file' onChange={e => provider.changeImage(e)} className="hidden"/></label></button>
            </div>
        </>
    )
}

export default Upload