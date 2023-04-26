import React from "react";
import './Timeline.css';
import TweetBox from "./TweetBox";
import Post from "./Post";

/**
 * Timeline に関する component
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Timeline() {
    return (
        <div className="timeline">
            {/* Header */}
            <div className='timeline__header'>
                <h2>ホーム</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

// component の返却
export default Timeline;