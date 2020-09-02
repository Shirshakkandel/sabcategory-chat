import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "./Firebase";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
// import InsertCommentIcon from "@material-ui/icons/InsertComment";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "./StateProvider";

function Sidebar() {
   const [channels, setChannels] = useState([]);
   const [{ user }] = useStateValue();

   useEffect(() => {
      //Run when sidebar component run
      db.collection("rooms").onSnapshot((snapshot) => {
         setChannels(
            snapshot.docs.map((doc) => ({
               id: doc.id,
               name: doc.data().name,
            }))
         );
      });
   }, []);
   return (
      <div className="sidebar">
         <div className="sidebar__header">
            <div className="sidebar__info">
               <h2>Sabchat Csit </h2>
               <h3>
                  <FiberManualRecordIcon color="primary" />
                  {user?.displayName}
               </h3>
            </div>
            <CreateIcon />
         </div>
         {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" />
         <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
         <SidebarOption Icon={DraftsIcon} title="Save Items" />
         <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" /> */}
         {/* <hr />
         <SidebarOption Icon={ExpandLessIcon} title="Show less" /> */}
         <hr />
         <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
         {/*Connect to db and list all Channel */}
         {/* {channels.map((channel)=>{
                <SidebarOption title={channel.name} id={channel.id}/>
            })} */}

         {channels.map((channel) => (
            <SidebarOption title={channel.name} id={channel.id} />
         ))}
      </div>
   );
}

export default Sidebar;
