import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
   const [{ user }, dispatch] = useStateValue();

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
                           <h1>Welcome</h1>
                        </Route>
                     </Switch>

                     {/* React-Router ->Chat screen  */}
                  </div>
               </>
            )}
         </Router>
      </div>
   );
}

export default App;
