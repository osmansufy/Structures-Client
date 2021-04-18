import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddOrder from "../../Components/AddOrder/AddOrder";
import OrDerList from "../../Components/OrderList/OrderList";
import Review from "../../Components/Review/Review";
import AddService from "../../Components/AddService/AddService";
import AddAdmin from "../../Components/AddAdmin/AddAdmin";
import ManageServices from '../ManagServices/ManageServices';
const DashBoardRoutes = () => {
    let { path, url } = useRouteMatch();
    return (
        <Switch>
        <Route exact path={path}>
          <OrDerList />
        </Route>
        <Route exact path={`${path}/addOrder`}>
          <AddOrder />
        </Route>
        <Route exact path={`${path}/review`}>
          <Review />
        </Route>
        <Route exact path={`${path}/addService`}>
          <AddService />
        </Route>
        <Route exact path={`${path}/addAdmin`}>
          <AddAdmin/>
        </Route>
        <Route exact path={`${path}/manageServices`}>
          <ManageServices/>
        </Route>
      </Switch>
    );
};

export default DashBoardRoutes;