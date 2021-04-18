import { List, ListItem } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const UserBooking = () => {
    const [bookings,setBookings]=useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            console.log(data);
        });
    }, [])
    return (
        <div>
            <NavBar />
           <h1>All Bookings</h1> 
           <List>
               {bookings?.map(book=>(  <ListItem>
     <p>Date:{book.bookingDate}</p>
     <br/>
<p>PickUpfrom:{book.pickupFrom}</p>
<br/>   
<p>To:{book.pickupTo}</p> 
<br/>  
  </ListItem>)

               )}
    
      </List>
        </div>
    );
};

export default UserBooking;