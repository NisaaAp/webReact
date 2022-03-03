import React from "react";
// import Header from "../component/header";
import Section from "../component/section";
import Gallery from "../component/gallery";
import Icon from "../component/icon";
import Carousel from "../component/carousel";
import { Data } from "../component/data";
import Footer from "../component/footer";
// import Header from "../component/header";
// import Section from './component/section';
// import Gallery from './component/gallery';
// import Icon from './component/icon';
// import Footer from './component/footer';

export default class Home extends React.Component{
    render(){
        return(
            <div>
        {/* <Header /> */}
        
        <Section />
        <br />
        <Gallery /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Icon />
        <Carousel slides={Data}/>
        <Footer />
            </div>
        )
    }
}