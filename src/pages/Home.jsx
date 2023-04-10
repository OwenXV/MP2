import { Row, Col,Container,Card} from "react-bootstrap"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import intro from '../assets/intro.mp4'
import MOV from '../assets/MOV.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

function Home() {

  return (
    <div className="homepage">
      <section className="hero">
       <video src={intro} type="video/mp4" id="heroVid" controls muted autoplay mx-0></video>
      </section>
      <section className="trending-sec pt-5">
          <h2 className="text-white pb-4"> Trending Videos Today</h2>
         
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >
            <SwiperSlide className="mov-img">
              <Card>
                <Card.Img src={MOV}/>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
          </Swiper>
      </section>
      <section className="trending-sec pt-5">
          <h2 className="text-white pb-4"> Anime</h2>
         
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
          </Swiper>
      </section>
      <section className="trending-sec pt-5">
          <h2 className="text-white pb-4"> Korean TV</h2>
         
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
            <SwiperSlide className="mov-img"><img src={MOV}/></SwiperSlide>
          </Swiper>
      </section>
    </div>

  )
}
export default Home