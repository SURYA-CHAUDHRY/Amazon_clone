import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(()=>{
      //it runs only once when we reload the app
      auth.onAuthStateChanged(authUser=>{
        console.log('The use is >>>', authUser);

        if(authUser){
          // authentication
          dispatch({
            type:'SET_USER',
            user: authUser,
          })
        }
        else{
          //Logout
          dispatch({
            type: 'SET_USER',
            user: null,
          })
        }
      })
  },[])
  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
          <Route path="/" element={<Header />} />
      </Routes>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
      <Route path="/checkout" element={<Header /> } />
        </Routes>
      <Routes>
      <Route path="/checkout" element={<Checkout /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
