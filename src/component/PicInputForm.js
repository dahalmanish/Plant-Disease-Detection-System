import { useState } from "react"
import React from 'react'

const PicInputForm = () => {
const [image, setImage] = useState(null);

const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }
};

return (
  <div className="flex flex-col items-center gap-5">
    {/* {image} check is the image is null or not is yes nothisng is shhown && is not the img tag display the image that is {image} form set image */}
    {image && <img alt="preview image" src={image} className=" w-60 h-auto mt-20-" />}
    
    <span>printing output span</span>
    
    <input type="file" onChange={onImageChange} className="filetype" />
    <button type="submit" className="border h-10 w-20 bg-backDarkgreen text-white rounded-full active:h-12 active:w-20">Submit</button>
    
  </div>
);
}
export default PicInputForm;