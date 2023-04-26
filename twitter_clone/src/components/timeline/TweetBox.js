import React, {useState} from "react";
import {Avatar, Button} from "@mui/material"; // material ui からひな形の import
import './TweetBox.css';
import db from '../../firebase';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    /**
     * fb にデータを追加
     *
     * @param e
     */
    const sendTweet = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'posts'), {
            display_name: '作成テスト',
            user_name: 'sakusei test',
            text: tweetMessage,
            avatar: 'https://avatars.githubusercontent.com/u/48540862?s=40&v=4',
            image: tweetImage,
            created_at: serverTimestamp(),
        });

        // 変数を空にする
        setTweetMessage('');
        setTweetImage('');
    };

    return (
        <div className='tweet__box'>
            <form action="">
                <div className='tweet__box__input'>
                    <Avatar/>
                    <input type="text"
                           value={tweetMessage}
                           className='tweet__box__input--text'
                           placeholder='いまどうしてる？'
                           onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </div>

                <input type="text"
                       value={tweetImage}
                       className='tweet__box__input--image'
                       placeholder='画像のURLを入力してください'
                       onChange={(e) => setTweetImage(e.target.value)}
                />
                <Button type='submit' className='tweet__box__btn'
                        onClick={sendTweet}
                >ツイートする</Button>
            </form>
        </div>
    );
}

export default TweetBox;