import React from 'react'

const Home_props = (props) => {
  return (
    <div className='flex justify-evenly items-center h-40 w-1/3 pt-10 '>
        <div className=' flex'><img src={props.image} alt='propic' className=' w-32 h-auto rounded-full '/></div>
        <div className='mb-14 pl-3'>
            <p className='text-wrap w-max font-medium'>{props.head}</p>
            <p className='text-sm w-20'>{props.content}</p>
        </div>
    </div>
  )
}

export default Home_props