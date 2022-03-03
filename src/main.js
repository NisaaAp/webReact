import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";
// import Contact from "./pages/contact";


//hanya boleh ada 1 exact dimana disitu adalah halaman utama
export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={Product} />
                {/* <Route path="/gallery" ?component={Gallery} /> */}
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        )
    }
}

