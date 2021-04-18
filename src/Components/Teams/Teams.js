import { Container, Grid } from '@material-ui/core';
import React from 'react';
import profilePic from '../../Images/profilePicture.png';
import SingleMember from './SingleMember';
const Teams = () => {
    
    const teamMembers=[
        {
img: profilePic,
name:"Osman Goni",
designation:"CEO",

        },
        {
img: profilePic,
name:"Abdullah Al Mamun",
designation:"HR",

        },
        {
img: profilePic,
name:"Sahabuddin Ahmed",
designation:"Software Engineer",

        }
    ]
    return (
      <Container>
          <h2>All Team Members Of Our Company</h2>
            <Grid container style={{justifyContent:"center"}}>
                
                {
                teamMembers.map((member,index) =>(
                    <Grid item key={index} sm="4">
                    <SingleMember member={member} />
                    </Grid>
                ))
            }
                
            </Grid>
         
        </Container>
    );
};

export default Teams;