import React from 'react';
import './App.scss'

const Newsletter = () => {
    return (
        <div className="Newsletter">
            <div className="newsTop">
                {/* <img id="aliens" src="https://i.imgur.com/R4umhnn.png" alt="" /> */}
                {/* <h1 id="newsHead">Prevention Connection Newsletter</h1> */}
            </div>
            <div className="newsForm">
                <img id="aliens" src="https://i.imgur.com/R4umhnn.png" alt="" />
                <div className="rightSide">
                    <h1 id="newsHead">Prevention Connection Newsletter</h1>
                    <form className="forms">
                        <input className="newsInput" placeholder="Full Name"></input>
                        <input className="newsInput" placeholder="Zip Code"></input>
                        <input className="newsInput" placeholder="Phone Number"></input>
                        <input className="newsInput" placeholder="Email"></input>
                        <button className="subscribe"> Subscribe </button>
                        <p id="disclaimer">SATIRE may provide periodic automated text message and calls to your provided phone number. SMS, Msg & Data rates may apply. Text STOP to cancel or HELP for help anytime.</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;