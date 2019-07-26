import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './home'
import About from './about'
import ContactUs from './contactUs'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/contact-us"} component={ContactUs}/>
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;
