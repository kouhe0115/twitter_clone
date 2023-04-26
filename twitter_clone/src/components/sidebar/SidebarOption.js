import React from "react";
import './SidebarOption.css';

/**
 * Sidebar.js で呼び出す際に定義した props を記載
 * 読み込んで使える
 *
 * @param text
 * @param Icon
 * @returns {JSX.Element}
 * @constructor
 */
function SidebarOption({text, Icon, active}) {
    return (
        <div className={`sidebar__option ${active && 'sidebar__option--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;