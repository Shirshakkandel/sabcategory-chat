import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
   const [{ user }, dispatch] = useStateValue();
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
    }, []);
  
    console.log("User is ====> ", user);

   //--=====================================================================================//

   return (
      <div className="app">
         <Router>
            {/* Header */}

            {!user ? (
               <Login />
            ) : (
               <>
                  <Header />
                  <div className="app__body">
                     <Sidebar />
                     <Switch>
                        <Route path="/room/:roomId">
                           <Chat />
                        </Route>

                        <Route path="/">
                           <h1>Welcome to Csit sabCategory Chat group</h1>
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
