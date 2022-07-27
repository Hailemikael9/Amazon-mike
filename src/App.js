
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
 import { auth } from "./Firebase";
 import React, { useEffect } from "react";
 import { useStateValue } from "./StateProvider"
 import { loadStripe } from '@stripe/stripe-js';
 import { Elements } from '@stripe/react-stripe-js';
 import Payment from './Payment/Payment';
 import Orders from './Orders/Orders';

 const promise = loadStripe(
  'pk_test_TYooMQauvdEDq54NiTphI7jx')
 
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
   < Routes>
 
     < Route path="/"element={<>
      <Header/>
       <Home/>
     </>}
        />
       < Route path="/Checkout" element={<>
    <Header/>
       <Checkout/>
   </>}/>
    < Route path="/login" element={<Login/>}/> 
    < Route path="/Payment" element={<>
       <Elements stripe={promise}>
              <Payment />
            </Elements>
   </>}/>
   < Route path="/orders"element={<>
      <Header/>
       <Orders />
     </>}
        />
      
       </Routes>
    </div>
    </Router>
  );
}
export default App;
























//https://www.linkedin.com/in/nitsuh-demeke-1535b4234/
//    <Route path="/" element={<>
          







