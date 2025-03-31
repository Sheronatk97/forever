import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
          <p>Forever is your go-to destination for trendy, high-quality fashion at unbeatable prices. We offer a wide range of stylish clothing, accessories, and essentials to keep you looking your best every season. With a commitment to affordability and customer satisfaction, Forever brings the latest trends right to your doorstep. Shop with confidence and style—because fashion is forever!</p>
          <p>At Forever, we believe fashion should be stylish, affordable, and accessible to everyone. Our carefully curated collection features the latest trends, timeless classics, and must-have accessories to help you express your unique style. With a focus on quality, affordability, and exceptional customer service, we strive to make every shopping experience enjoyable and hassle-free. Whether you're looking for everyday essentials or statement pieces, Forever is your go-to destination for all things fashion.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission at Forever is to empower with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurace:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way,ensuring your satisfaction is our tup priority.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
