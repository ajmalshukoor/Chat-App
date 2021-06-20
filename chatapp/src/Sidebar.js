import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SidebarChat from './SidebarChat';

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://i.cdn.newsbytesapp.com/images/l110_11991580378536.jpg"/>
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutLined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
        </div>
    )
}

export default Sidebar;