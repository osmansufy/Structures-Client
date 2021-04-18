import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { OrderContext } from '../../App';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:"3%",
  },
});

const SingleService=({service})=> {
  const classes = useStyles();
  const history=useHistory();
    const [orderProducts,setOrderProducts]=useContext(OrderContext)
    const onOrder=()=>{
        setOrderProducts(service)
        history.push('/checkout')
    }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`data:image/png;base64,${service.image.img}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {service.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Service Available for One Year ,In this time we can't cancel your order
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex',justifyContent: 'center'}}>
        <span>{service.price}</span>
        <Button size="small" onClick={onOrder} variant="contained" color="primary">
     Order Now
        </Button>
      </CardActions>
    </Card>
  );
}
export default SingleService