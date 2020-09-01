import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
   const [state, dispatch] = useStateValue();
   const signIn = (e) => {
      auth
         .signInWithPopup(provider)
         .then((result) => {
            console.log(result);
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
            });
         })
         .catch((error) => {
            alert(error.message);
         });
   };

   return (
      <div className="login">
         <div className="login__container">
            <img
               src="https://th.bing.com/th/id/OIP.erShl7FNhCVidjPS-BTysQHaHa?pid=Api&rs=1"
               alt=""
            />

            <h2>Sign in to Csit 073 Sabcategory chat group</h2>
            <p>
               Develop by:{" "}
               <strong>Ajay Shrestha,Ashish Ranabhat,Shirshak and Suraj</strong>
            </p>
            <Button onClick={signIn}>Sign in with Google</Button>
         </div>
      </div>
   );
}

export default Login;
