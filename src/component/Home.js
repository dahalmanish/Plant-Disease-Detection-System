import React from 'react'
import Home_props from './Home_props';
import PicInputForm from './PicInputForm';
import Footer from './Footer';

const Home = () => {
  // const pro_contents = [
  //   { image: "iPhone", head: 'Aashik', content:'aashik' },
  //   { image: "iPhone", head: 'Jane', content: 'jane' },
  //   { image: "iPhone", head: 'Manish', content: 'manish'},
  // ];
  return (
    <div className=''>
    <div className='bg-backgreen w-full h-4/5 absolute top-0 -z-10'>
    </div>
    <div className='flex justify-end w- w-11/12 h-96 bg-no-repeat bg-top gap-0'>
      <div><h1 className='absolute font-serif text-white text-5xl left-28 top-28 '>Healthy Plants,<br/> Happy Gardens</h1></div>
        <div className='h-full w-2/6 flex justify-center items-end'>
        <div className='absolute left-20 top-80'><img src='Images/larrow.png' alt='arrow' className='w-32 mr-4'/></div>
          <div className='p-5 ml-10 bg-backDarkgreen h-40 w-56  text-white  flex flex-col place-content-center align-middle gap-2 shadow-custom-light'>
            <p className='flex items-center'><h1 className='text-3xl mr-5  w-7 flex place-content-center border-2'>1</h1> Upload Image</p>
            <p className='flex items-center'><h1 className='text-3xl mr-5  w-7 flex place-content-center border-2'>2</h1>Submit Image</p>
            <p className='flex items-center'><h1 className='text-3xl mr-5  w-7 flex place-content-center border-2'>3</h1>Identify Disease</p>
            
          </div>
        </div>
        <img src='Images/Artboard 1.png' alt='Tomato _image' className=''/>
      <div className='pt-10 w-1/3  flex flex-col items-end '>
      <div className='absolute right-72 top-36'> 
        <img src='Images/arrow.png' alt='arrow' className='w-32'/></div>
      <img src='Images/farmer.png' alt='ramu' className='w-40'/>
      <h3 className='text-2xl font-medium  text-white mt-5 flex self-start pl-16'>This is "ramu"</h3>
      <p className='text-sm font-normal  text-white mt-2 flex self-start pl-16 '>This a game-changer! It identifies issues in my crops quickly, saving me time and resources. Highly recommend it to any fellow growers looking to keep their plants healthy!"</p>
      </div>
    </div>
    <div className='flex justify-center w-full h-52 bg-transparent'>
      <div className='bg-white h-full w-4/6 my-5 p-4 rounded-full flex justify-center drop-shadow '>
        <div className=' flex flex-row justify-evenly gap-5'>
         <Home_props image="Images/Diseased.jpg" head="Disease Detection" content="Early Disease Prediction"/>
         <Home_props image="Images/healthy.jpg" head="Health Restoration" content="Keeps Plant Healthy"/>
         <Home_props image="Images/happ.jpg" head="Farmer Satisfaction" content="Support the Farmers"/>
        </div>
        </div>

    </div>
    <div className='w-full flex justify-center items-center  mt-14'>
      <PicInputForm/>
    </div>
    <div className='bg-backgreen mt-12'>
      <Footer image='Images/Artboard 2.svg' name='TOMEX' paragraph='This plant disease prediction system uses machine learning and image recognition to diagnose plant diseases early. By analyzing leaf images and comparing them to a disease database, it offers accurate predictions. This enables farmers to take timely action and safeguard their crops.' Email='Aaasd34@gmail.com' phone='+977 984755555' Address='Baglung-Municipality'/>
    </div>
    </div>
  )
}

export default Home