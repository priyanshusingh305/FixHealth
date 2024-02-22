import { Button } from '@mui/material'
import React from 'react'

const DoctorCard = ({data}) => {
  console.log(data)
  return (
    <div className='bg-white h-[22rem] w-[15rem] rounded-md text-black'>
      <div className='bg-[#71B48D] h-[50%] w-full'>
      <img className=' object-scale-down h-[100%] ' src={data.imgurl}></img>
      </div>
      <p className='mb-5 font-semibold'>{data.name}</p>
      <p className='mb-3'>{data.education}</p>
      <p className='mb-3'>{data.experince} years</p>
      <Button className="bg-blue-500"  >Book Now</Button>
    </div>
  )
}

export default DoctorCard