import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import ProductData from '../components/ProductData'

const Products = () => {
  return (
    <>
 
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, Autoplay]} // Include Autoplay module here
    className="mySwiper"
  >
  <SwiperSlide><img src='https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/sale.7677217b3eda052525e0.png' className='img'/></SwiperSlide>
  <SwiperSlide><img src='https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/mencollection.ccc7d6f3c9f520d801b9.png'/></SwiperSlide>
  <SwiperSlide><img src='https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/Shoes.3a6a6516378e4e207ae6.png'/></SwiperSlide>
  <SwiperSlide><img src='https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/Bags.7d0d79066717ff3e01d8.png'/></SwiperSlide>
  <SwiperSlide><img src='https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/Fragrences.c086a62899f3a6d06b00.png'/></SwiperSlide>

  </Swiper>
  <ProductData/>
      
 
  </>

  )
}

export default Products
