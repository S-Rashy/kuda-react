// import styled from "styled-components";
// import Home from "./pages/Home";
import Footer from "./static/Footer";
import Header from "./static/Header";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Company from "./pages/Company";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Routes is wrapped around pages we're moving between, header and footer are static so we dont need to wrap them un routes
//browserrouter is to wrap all the componets, incharge of all the routing, overseeing
//Route path is the page it starts with, element = where you want to take it to
const App = () => {
  return (<div>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element ={<Personal/>} />
        <Route path = "/business" element ={<Business/>} />
        <Route path = "/company" element ={<Company/>} />
        {/* <Personal/>
        <Business/>
        <Company/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
   );
}
 
export default App;

// const Container = styled.div`
  /* background-color: #b590d8;
  font-size: 40px;
  color: red; */
//`