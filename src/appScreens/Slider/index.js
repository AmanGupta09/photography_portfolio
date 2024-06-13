import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

const Slider=()=>{
  return(
    <div style={{ height: '100vh', overflow: 'hidden' }}>
 <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
       effect="fade"
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="images/img1.png"  alt="" style={{width:'100%',height:'100vh'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/img3.jpg"  alt="" style={{width:'100%',height:'100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/img4.jpg"  alt="" style={{width:'100%',height:'100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/img5.jpg"  alt="" style={{width:'100%',height:'100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/img6.jpg"  alt="" style={{width:'100%',height:'100vh'}}/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}


export default Slider