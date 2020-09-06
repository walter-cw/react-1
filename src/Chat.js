import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen yesterday...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Ahmet</span>
          This is a message
          <span className="chat__timestamp"> {new Date().toUTCString()}</span>
        </p>
        {/* We can make this p tags to another component also */}

        <p className="chat__message chat__reciever">
          <span className="chat__name">Mehmet</span>
          This is a message
          <span className="chat__timestamp"> {new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="Text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}
export default Chat;
