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
    if(payload && typeof payload == "object") setImage(payload ?? null) 
    if(payload && payload?.target?.files && payload?.target?.files.length > 0)  setImage(payload.target.files[0] ?? null) 
  }
  
  React.useEffect(()=>{
    console.log(image,'image')
    console.log(isLoading,url)
  },[image])

  React.useEffect(()=>{
    const postImage = async(image) => {
      setIsLoading(true)
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData,'dataa')
      await axios.post(process.env.REACT_APP_UPLOAD_IMAGE,formData).then((res => setUrl(res.data))).catch(err => console.log(err))
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

export default App