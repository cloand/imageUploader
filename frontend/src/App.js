import axios from 'axios';
import React, { useEffect } from 'react';
import Loader from './components/Loader';
import Success from './components/Success';
import Upload from './components/Upload';

export const ImageContext = React.createContext()

function App() {
  const [image,setImage] = React.useState()
  const [isLoading,setIsLoading] = React.useState(false)
  const[url,setUrl] = React.useState('')

  const changeImage = (payload) => {
    setImage(payload ?? null)
  }

  React.useEffect(()=>{
    console.log(image,'image')
    console.log(isLoading,url)
  },[image])

  React.useEffect(()=>{
    const postImage = async(image) => {
      setIsLoading(true)
      const imageFile = image.target.files
      const formData = new FormData();
      formData.append("image", imageFile[0]);
      if(imageFile.length > 0) await axios.post(process.env.REACT_APP_UPLOAD_IMAGE,formData).then((res => setUrl(res.data))).catch(err => console.log(err))
      setIsLoading(false)
   }
   if(image) postImage(image)
  },[image])

  return (
    <ImageContext.Provider value={{"image":image,"changeImage":changeImage}}>
      <div className="relative w-402 h-screen m-auto flex flex-col justify-center">
        {(!isLoading && !url) ?  <Upload /> :(isLoading && !url) ? <Loader /> :  <Success src = {url}/>}
      </div>
    </ImageContext.Provider>
  );
}

export default App;
