import { MoreVert } from '@material-ui/icons';
import { SearchOffOutlined } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLarge from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOffOutlined/>
                        <input placeholder="Search or start a new search" type="text" />
                    </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
