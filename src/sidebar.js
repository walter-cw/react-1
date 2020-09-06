import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton, Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" />
        <div className="sidebar__headerRight"></div>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
