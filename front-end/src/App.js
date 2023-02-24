import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        Testing React App
        <div id=''>
          <Router>

            <div id=''>
                <div id=''> 
                    <Link to=""><button id='' onClick={ () => { test() }  }>press me</button></Link>
                </div>
                <div id=''> 
                    <Link to=""><button id=''>Item 1</button></Link>
                </div>
                <div id=''> 
                    <Link to=""><button id=''>Item 2</button></Link>
                </div>
                <div id=''> 
                    <Link to=""><button id='link'>Item 3</button></Link>
                </div>
            </div>


            <div id=''>
                {/* this gets the page contents */}
                <Routes>
                    <Route path="">
                        {/* <Item 1 /> */}
                    </Route>
                    <Route path="">
                        {/* <Item 2 /> */}
                    </Route>
                    <Route path="">
                        {/* <Item 3 /> */}
                    </Route>

                    {/* The '/' will set default Route to Home Page */}
                    <Route path="">
                        {/* <Item 4 /> */}
                    </Route>
                </Routes>
            </div>
          </Router>   
        </div>

      </header>
    </div>
  );
}

// const test = () => {
//   const settings = {
//     method: 'post'
//   }
//   fetch('/test', settings)
//     .then(res => res.json())
//     .then(data => {

//     })
//     .catch(e => console.log(e));
// };

const test = () => {
  const res = axios.post("http://localhost:8080/test");
  console.log(res);
};

export default App;
