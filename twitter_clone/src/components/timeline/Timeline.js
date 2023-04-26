import React, {useEffect, useState} from "react";
import './Timeline.css';
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from '../../firebase';
import {collection, getDocs} from "firebase/firestore";

/**
 * Timeline に関する component
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Timeline() {
    /**
     * 初期の設定
     * posts 格納する変数
     * setPosts 関数の設定
     */
    const [posts, setPosts] = useState([]);

    /**
     * useEffect hooks の機能
     * マウント時（ページ読み込み時）のみに取得
     */
    useEffect(() => {
        /**
         * firestore 接続
         *
          * @type {CollectionReference<DocumentData>}
         */
        const postData = collection(db, "posts");

        /**
         * 変数の格納
         * getDocs メソッドで非同期取得
         * querySnapshot での取得
         * setPosts 上記で設定した関数を用いて、posts に値の格納
         * doc.data() を doc に格納して、posts に格納
         */
        getDocs(postData).then((querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="timeline">
            {/* Header */}
            <div className='timeline__header'>
                <h2>ホーム</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Post */}
            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.display_name}
                    username={post.user_name}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}

        </div>
    );
}

// component の返却
export default Timeline;