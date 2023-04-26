import React from "react";
import {Search} from "@mui/icons-material";
import './Widget.css';

// https://github.com/saurabhnemade/react-twitter-embed
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widget() {
    return (
        <div className="widget">
            <div className='widget__input'>
                <Search className='widget__input--search__icon'/>
                <input type="text" placeholder='キーワード検索'/>
            </div>

            <div className='widget__container'>
                <h2>いまどうしてる？</h2>

                {/* ライブラリを追加・追記 */}
                <TwitterTweetEmbed tweetId={"933354946111705097"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    );
}

export default Widget;
