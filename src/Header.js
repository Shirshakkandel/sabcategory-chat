//rcfe
import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import AccessTimeSharp from "@material-ui/icons/AccessTimeSharp";
import DehazeIcon from "@material-ui/icons/Dehaze";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";

function Header({ setToggle,toggle,logoutHandler }) {
   const [{ user }] = useStateValue();
   //=====================================---------------------------------------===========//
   return (
      <div className="header">

         <div className="header__left">
            <Avatar
               // style={toggle ? { padding: "30px" } : "{padding:0px}"}
               className="header__avatar"
               alt={user?.displayName}
               src={user?.photoURL}
            />
            <div className="sidebar__header">
               <div className="sidebar__info">
                  <h2>Sabchat Csit </h2>
                  <h3>
                     <FiberManualRecordIcon color="primary" />
                     {user?.displayName}
                  </h3>
               </div>
               {/* <CreateIcon /> */}
            </div>
            {/*Avatar for logged in user */}


            {/* <AccessTimeSharp /> */}
         </div>

         <div className="header__right">
            <Button onClick={logoutHandler}>LogOut</Button>
            <DehazeIcon onClick={() => setToggle(!toggle)} />
         </div>
      </div>
   );
}

export default Header;

const Button = styled.button`
background-color: red;
margin:0;
padding:3px;
cursor:pointer;
color: white;

`