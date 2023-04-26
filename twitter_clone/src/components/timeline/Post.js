import React from "react";
import {Avatar} from "@mui/material";
import {
    ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser,
} from "@mui/icons-material";
import './Post.css';

function Post() {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar/>
            </div>

            <div className='post__body'>
                <div className='post__body__header'>
                    <div className='post__body__header--text'>
                        <h3>test
                            <span className='post__body__header--special'>
                                <VerifiedUser className='post__body__header--special__badge'/>
                                @user_name
                            </span>
                        </h3>
                    </div>

                    <div className='post__body__header--description'>
                        <p>text</p>
                    </div>
                </div>

                <img src="https://source.unsplash.com/random"/>

                <div className='post__body__footer'>
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    <FavoriteBorder fontSize="small"/>
                    <PublishOutlined fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post;