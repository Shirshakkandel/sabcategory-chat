//rcfe
import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

import AccessTimeSharp from "@material-ui/icons/AccessTimeSharp";
import DehazeIcon from "@material-ui/icons/Dehaze";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";


function Header({ setToggle,toggle }) {
   const [{ user }] = useStateValue();
   //=====================================---------------------------------------===========//
   return (
      <div className="header">
         <div className="header__left">

            {/*Avatar for logged in user */}
            <Avatar
               className="header__avatar"
               alt={user?.displayName}
               src={user?.photoURL}
            />
            <DehazeIcon onClick={() => setToggle(!toggle)} />

            <AccessTimeSharp />
         </div>
         <div className="header__right">
            <HelpOutlineIcon />
         </div>
      </div>
   );
}

export default Header;
