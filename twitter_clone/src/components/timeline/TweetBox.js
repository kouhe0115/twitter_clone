import React from "react";
import {Avatar, Button} from "@mui/material"; // material ui からひな形の import
import './TweetBox.css';

function TweetBox() {
    return (
        <div className='tweet__box'>
            <form action="">
                <div className='tweet__box__input'>
                    <Avatar/>
                    <input type="text" className='tweet__box__input--text' placeholder='いまどうしてる？'/>
                </div>

                <input type="text" className='tweet__box__input--image' placeholder='画像のURLを入力してください'/>
                <Button type='submit' className='tweet__box__btn'>ツイートする</Button>
            </form>
        </div>
    );
}

export default TweetBox;