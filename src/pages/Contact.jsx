import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-row justify-center gap-10 mb-28'>
        <img className='max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Dabbi Bazaar<br/>Samrala,Punjab,141114</p>
          <p className='text-gray-500'>Tel: +919877902293 <br/>Email: manan@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Fancy Garments</p>
          <p className='text-gray-500'>Learn more about our teams and job opening.</p>
          <button className='border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact