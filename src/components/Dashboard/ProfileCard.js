import React from 'react';
import './Dashboard.scss'

const ProfileCard = (props) => {
    return (
        <div className="ProfileCard">
            <div>
                <h2 id="dashTitle"> Dashboard </h2>
                <h3 id="dashLine"></h3>
            </div>
            <div className="profile">
                <p> <span id="memberProfile">Member Profile</span> The information can be edited from your admin profile page.</p>
                <h3>Casey </h3>
                <h3>Jenkins</h3>
                <h3>casey@test.com</h3>
            </div>    
        </div>
    );
}

{/*
        <h2 classname="dashTitle" id="dashLine">
            {" "}
            Dashboard{" "}
        </h2>
        {props.users.map((user) => {
            return (
            <div>
                <p id="name">{user.name}:</p>
                <p id="email">{user.email}</p>
            </div>
            );
        })}
      </div> */}

export default ProfileCard;