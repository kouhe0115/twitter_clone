import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Button} from "@mui/material";
import './Sidebar.css';

/**
 * Sidebar に関する component
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitter--icon"/>

            {/* Sidebar Option */}
            {/*text,Icon : props 引数みたいなもん*/}
            <SidebarOption text="ホーム" Icon={HomeIcon}/>
            <SidebarOption text="話題を検索" Icon={SearchIcon}/>
            <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
            <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="リスト" Icon={ListAltIcon}/>
            <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
            <SidebarOption text="もっとみる" Icon={MoreHorizIcon}/>

            {/* Tweet btn */}
            <Button variant="outlined" className='sidebar__tweet--btn' fullWidth>ツイートする</Button>
        </div>
    );
}

// component の返却
export default Sidebar;