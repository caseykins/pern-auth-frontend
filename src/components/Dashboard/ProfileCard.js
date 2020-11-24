import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import "./Dashboard.scss";

const ProfileCard = (props) => {
  return (
    <div className="ProfileCard">
      <div>
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
      </div>
    </div>
  );
};

export default ProfileCard;
