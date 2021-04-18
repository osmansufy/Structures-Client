import { Container, Grid } from '@material-ui/core';
import axios from '../../axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleService from './SingleServices';
import Anime from 'react-anime';
const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        axios.get("services")
        .then(response=>{
            setServices(response.data)
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    const animeProps={
        opacity:[0,1],
        translateY:[-64,0],
        delay:(el,i)=>i*200
    }
    return (
      <Container>
          <h2>Get Services from us</h2>
          <div style={{display: "flex", justifyContent: "space-between",flexWrap:"wrap"}}>
          <Anime {...animeProps}>
          {
                  services?.map(service=>(
                
                    <SingleService key={service._id} service={service}/>
              
                  ))
              }
    </Anime>
             
    </div>
        
       
      </Container>
    );
};

export default Services;