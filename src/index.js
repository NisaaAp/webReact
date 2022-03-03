import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import { BrowserRouter, Switch,Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Women from './pages/women';
// // import Men from './components/Men';
// // import About from './components/About';
// // import Login from './components/Login';
// // import Signup from './components/Signup';

// ReactDOM.render(
// <BrowserRouter>
//     <Switch>
      
//         <Route path='/' element={<App/>}/>
//         <Route path='/women' element={<Women/>}/>
//         {/* <Route path='/men' element={<Men/>}/> */}
//         {/* <Route path='/about' element={<About/>}/> */}
//         {/* <Route path='/login' element={<Login/>}/> */}
//         {/* <Route path='/sign-up' element={<Signup/>}/> */}
//       </Switch>
//       </BrowserRouter>,
//   document.getElementById('root')
// );