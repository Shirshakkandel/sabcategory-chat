import React,{ useEffect,useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
   const [{ user },dispatch] = useStateValue();
   const [width,setWidth] = useState(window.innerWidth)
   let toggle1
   if (width > 786) {
      toggle1 = true
   } else {
      toggle1 = false
   }

   const [toggle,setToggle] = useState(toggle1)

   const logoutHandler = () => {
      auth.signOut().then(() => {
         dispatch({
            type: "SET_USER",
            user: null,
         });
      })
   }

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            dispatch({
               type: "SET_USER",
               user: authUser,
            });
         } else {
            dispatch({
               type: "SET_USER",
               user: null,
            });
         }
      });

      return () => {
         //any cleanup operaion goes here
         unsubscribe();
      };
   },[]);

   return (
      <div className="app ">
         <Router>
            {!user ? (
               <Login />
            ) : (
                  <>
                     <Header setToggle={setToggle} toggle={toggle} logoutHandler={logoutHandler} />

                     <div className="app__body">
                        <Sidebar toggle={toggle} />
                        <Switch>
                           <Route path="/room/:roomId">
                              <Chat toggle={toggle} />
                           </Route>

                           <Route path="/">
                              <h1 className={`${toggle && "library-active"}`}>Welcome to Csit sabCategory Chat group</h1>
                           </Route>
                        </Switch>


                     </div>
                  </>
               )}
         </Router>
      </div>
   );
}

export default App;
