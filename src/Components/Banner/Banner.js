import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from "../../Images/projects.jpg"
import bannerImg2 from "../../Images/projects2.jpg"
import { Container } from '@material-ui/core';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Container>
       <div style={{ marginTop:"20px",marginBottom:"50px"}}>
          <Slider {...settings}>
          <div>
            <img style={{ maxHeight:"450px", width:"100%"}} src={bannerImg1} alt="" srcset=""/>
          </div>
          <div>
            <img src={bannerImg2} style={{ maxHeight:"450px", width:"100%"}}alt="" sizes="" srcset=""/>
          </div>
     
        </Slider>  
        </div>
        </Container>
 
    );
};

export default Banner;