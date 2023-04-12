import { useEffect, useState } from "react";
import axios from "axios"
import fetchData from "../lib/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";
import { Row,Col, Container, Card } from "react-bootstrap";



function Movies () {
  const [movies,setMovies]= useState([])
  const  getData = async() =>{
    try{
      const response =  await fetchData.get('/Top250Movies/k_594n1k1x');
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
      <h1 className="text-white pt-5 pb-3 text-center">Top Movies</h1>
        <Container>
          <Row >
          {movies.map((movies)=>{
            return  <Col>
                    <Card style={{ width: '18rem', height:'30rem' }} key={movies.id} className="text-center mb-3" border="light">
                      <Card.Img variant="top" src={movies.image} />
                      <Card.Body>
                        <Card.Title className="text-center">{movies.title}</Card.Title>
                      </Card.Body>
                    </Card>
            </Col>
              })}
          </Row>
        </Container>    
    </div>
  )
      }
  export default Movies