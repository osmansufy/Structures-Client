import React from "react";
import {
  Drawer,
  Grid,
  makeStyles,
  Typography,
  ListItemText,
} from "@material-ui/core";
import DashBoardMenu from "../../Components/DashBoard/DashBoardMenu";


import DashBoardRoutes from "../../Components/DashBoard/DashBoardRoutes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  sideNav: {
    backgroundColor: theme.palette.grey.A200,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    height: "100vh",
  },
  demo: {
    backgroundColor: theme.palette.grey.A200,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
const Dashboard = () => {
  
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.sideNav} item xs={3}>
        <DashBoardMenu />
      </Grid>
      <Grid item xs={8}>
 <DashBoardRoutes/>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
