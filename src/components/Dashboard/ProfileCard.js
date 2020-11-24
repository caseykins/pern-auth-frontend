import React from 'react';
import './Dashboard.scss'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div>
                <h2 id="dashTitle"> Dashboard </h2>
                <h3 id="dashLine"></h3>
            </div>
            <div className="profile">
                <p> <span id="memberProfile">Member Profile</span> The information can be edited from your admin profile page.</p>
            </div>
        </div>
    );
}

export default ProfileCard;