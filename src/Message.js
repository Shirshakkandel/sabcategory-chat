import React from "react";
import "./Message.css";
import DeleteIcon from '@material-ui/icons/Delete';
import db from "./Firebase";

function Message({ message,timestamp,user,userImage,displayName,id,roomId }) {
   const deleteMessage = (id,roomId) => {
      db.collection("rooms/roomId/message/id").delete()

   }
   return (
      <div className="message">
         <img src={userImage} alt="" />
         <div className="message__info">
            <h4>
               {user}
               <span className="message__timestamp">
                  {new Date(timestamp?.toDate()).toLocaleString().split(",")[0]

                  }
                  {displayName === user && <DeleteIcon onClick={e => db.collection("rooms").doc(roomId).collection("messages").doc(id).delete()} />}

               </span>
            </h4>
            <p>{message}</p>
         </div>
      </div>
   );
}

export default Message;
