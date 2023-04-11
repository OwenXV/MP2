import { useEffect, useState } from "react";
import axios from "axios"
import fetchData from "../lib/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";



function Movies () {
  const [movies,setMovies]= useState([])
  const  getData = async() =>{
    try{
      const response =  await fetchData.get('/MostPopularMovies/k_p3j718rr');
      setMovies(response.data.items)
      // console.log(response)
    }catch (error){
      console.log(error.response)
    }
  };
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div>
      <h1 className="text-white pt-5 pb-3">Top Movies</h1>
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
    </div>
  )
      }
  export default Movies