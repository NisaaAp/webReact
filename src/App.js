import Header from './component/header';
import Main from './main';
import React from 'react';
// import Home from './pages/home';
// import Section from './component/section';
// import Gallery from './component/gallery';
// import Icon from './component/icon';
// import Footer from './component/footer';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        {/* <Home /> */}
        <Main />
      </div>
    )
  }
}
