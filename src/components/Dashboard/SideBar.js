import React from 'react';
import './Dashboard.scss'

const SideBar = () => {
    return (
        <div className="SideBar">
            <aside className="aside">
                <div className="titleBlock">
                    <h1 className="sideHead">SATIRE</h1>
                </div>
                <div className="userBlock">
                    <div className="userContents">
                        <img className="userPic" 
                            src="https://i.imgur.com/BgZ4S6q.png" 
                            alt=""/>
                        <h5 id="dashEmail">Cicero.Rome@pigeoncarrier.com</h5>
                        <h3 id="role">Administrator</h3>
                    </div>
                </div>
                <div className="dashNav">
                    <h4>Dashboard</h4>
                    <ul className="dashList">
                        <li className="listItem">List Members</li>
                        <li className="listItem">View Member</li>
                        <li className="listItem">Edit Member</li>
                    </ul>
                </div>
                <div className="options">
                    <h5 className="option">Pages</h5>
                    <h5 className="option">Themes</h5>
                    <h5 className="option">Plugins</h5>
                    <h5 className="option">Configuration</h5>
                </div>
            </aside>
        </div>
    );
}

export default SideBar;