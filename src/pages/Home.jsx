import { Row, Col,Container,Card} from "react-bootstrap"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import intro from '../assets/intro.mp4'
import MOV from '../assets/MOV.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import fetchData from "../lib/axios";

function Home() {
  const [movies,setMovies]= useState([])
  const  getData = async() =>{
    try{
      const res =  await fetchData.get('/BoxOffice/k_p3j718rr');
      setMovies(res.data.items)
    }catch (error){
      console.log(error.response)
    }
  };
  useEffect(()=>{
    getData();
  },[]);

  const [movies2,setMovies2]= useState([])
  const  getData2 = async() =>{
    try{
      const res =  await fetchData.get('/Comingsoon/k_p3j718rr');
      setMovies2(res.data.items)
    }catch (error){
      console.log(error.response)
    }
  };
  useEffect(()=>{
    getData2();
  },[]);

  const [movies3,setMovies3]= useState([])
  const  getData3 = async() =>{
    try{
      const res =  await fetchData.get('/InTheaters/k_p3j718rr');
      setMovies3(res.data.items)
    }catch (error){
      console.log(error.response)
    }
  };
  useEffect(()=>{
    getData3();
  },[]);



  return (
    <div className="homepage">
      <section className="hero">
       <video src={intro} type="video/mp4" id="heroVid" controls muted autoPlay className="mx-0"></video>
      </section>
      <section className="trending-sec pt-5">
          <h2 className="text-white pb-4"> Trending Videos Today</h2>
          <Swiper
            slidesPerView={6}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >

          {movies.map((movies)=>{
          return  <SwiperSlide key={movies.id}>
             <img src={movies.image}/> </SwiperSlide>
            

          })}
          </Swiper>
      </section>
      <section className="comming-sec text-white pt-4">
      <h1>Comming Soon</h1> 
      <Swiper
            slidesPerView={6}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >

          {movies2.map((movies2)=>{
          return  <SwiperSlide key={movies2.id}>
             <img src={movies2.image}/> </SwiperSlide>

          })}
          </Swiper>
      
      </section>
      <section className="boxoffice-sec text-white pt-4">
      <h1>Box Office</h1> 
      <Swiper
            slidesPerView={6}
            spaceBetween={1}
            freeMode={true}
            modules={FreeMode}
            className="mySwiper"
          >

          {movies3.map((movies3)=>{
          return  <SwiperSlide key={movies3.id}>
             <img src={movies3.image}/> </SwiperSlide>

          })}
          </Swiper>
      
      </section>
    </div>

  )
}
export default Home