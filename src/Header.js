//rcfe
import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import AccessTimeSharp from "@material-ui/icons/AccessTimeSharp"
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    
    //=====================================---------------------------------------===========//

    return (
        <div className="header">
            <div className="header__left">
                {/*Avatar for logged in user */}
            <Avatar  className= "header__avatar" alt="Shirshak" src= '' />
            <AccessTimeSharp/>
                {/*Time account */}
            </div>

            <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search Item"/>
                {/* help icon */}       
            </div>

            <div className="header__right"> 
            <HelpOutlineIcon/>
             </div>

        </div>
    )
}

export default Header
