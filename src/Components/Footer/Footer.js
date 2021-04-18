import { Container,Grid,Box, Avatar, List,ListItem,ListItemAvatar,ListItemText } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';
import logoImg from "../../Images/logo.png" 
const useStyles = makeStyles((theme) => ({
 footer: {
     backgroundColor: theme.palette.primary.main,
 }
  }));
  

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
 <Container>
     <Grid container>
         <Grid item sm="4">
             <div style={{display:"flex",justifyContent: "center",alignItems: "center",margin:"25px"}}>
             <img style={{width:"100px",borderRadius:"20px"}} src={logoImg} alt="" srcset=""/>
             </div>
       
         </Grid>
     
         <Grid item sm="4">
         <div >
             
            <List >
            <h3 style={{textAlign:"left",paddingLeft:"25px",color:"#FFFF"}}>Quick Link</h3>
                <ListItem>
                    
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Home"
                    secondary= 'Home page'
                  />
                </ListItem>
                <ListItem>
                    
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="About"
                    secondary= 'Company details'
                  />
                </ListItem>

            </List>
          </div>
         </Grid>
         <Grid sm={4} item>
             <div>
                 <h4 style={{color: 'white'}}>Join with us</h4>
                 <p style={{color: 'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eveniet similique provident officiis aut. Vitae!</p>
             </div>
             <FacebookIcon color="secondary"/>
             <YouTubeIcon color="secondary"/>
             <TwitterIcon color="secondary"/>
             <InstagramIcon color="secondary"/>
         </Grid>
     </Grid>
         
            
            </Container>
        </div>
           
    );
};

export default Footer;