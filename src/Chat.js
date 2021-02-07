import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import Message from "./Message";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./Firebase";
import ChatInput from "./ChatInput";
import { useStateValue } from "./StateProvider";


function Chat({ toggle }) {
   const { roomId } = useParams();
   const [roomDetails,setRoomDetails] = useState(null);
   const [roomMessages,setRoomMessages] = useState([]);
   const [{ user },dispatch] = useStateValue();
   const displayName = user.displayName;


   useEffect(() => {
      if (roomId) {
         db.collection("rooms")
            .doc(roomId)
            .onSnapshot(snapshot => {
               setRoomDetails(snapshot.data());
            });
      }
      db.collection("rooms")
         .doc(roomId)
         .collection("messages")
         .orderBy("timestamp","desc")
         .onSnapshot((snapshot) =>
            setRoomMessages(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data(),
               displayName: displayName,
               roomId: roomId
            })
               
            )));
   },[roomId]);

   return (

      < div className={`chat  ${toggle && "library-active"}`} >
         {console.log("User displayname",displayName)}

         <div className="chat__header">
            <div className="chat__headerLeft">
               <h4 className="chat__channelName">
                  <strong>#{roomDetails?.name}</strong>                  <StarBorderOutlinedIcon />
               </h4>

            </div>

            <div className="chat__headerRight">
               <p>
                  <InfoOutlinedIcon /> Details
               </p>
            </div>
         </div>

         <div className="chat__message">
            
            {roomMessages.map(({ data: { message,timestamp,user,userImage,image },id,displayName,roomId }) => (
               <Message
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                  displayName={displayName}
                  id={id}
                  roomId={roomId}
                  image={image}
               />
            ))}
         </div>

         <ChatInput
            channelName={roomDetails?.name}
            channelId={roomId}
            toogle={toggle}
         />
      </div >
   );
}

export default Chat;
