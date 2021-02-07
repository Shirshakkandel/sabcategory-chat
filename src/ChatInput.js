import React,{ useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import db from "./Firebase";
import firebase from "firebase";

function ChatInput({ channelName,channelId,toggle }) {
   const [input,setInput] = useState("");
   const [{ user }] = useStateValue();

   //Send message function 
   const sendMessage = (e) => {
      e.preventDefault();
      
      if (channelId) {
         db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
         });
         setInput("");
      }
   }

   return (
      <div className="chatInput toggleInput">
         <form>
            <input
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder={`Message # ${channelName?.toLowerCase()}`}
            />
            <Button type="submit" onClick={sendMessage} disabled={!input}>
               Send
            </Button>
         </form>
      </div>
   );
}

export default ChatInput;
