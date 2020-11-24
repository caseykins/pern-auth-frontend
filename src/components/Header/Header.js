import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header className="header">
      <div className="links">
        <div className="nav">
          <Link to={'/'}>About Us</Link>
        </div>
        <div className="nav">
          <Link to={'/'}>Resources</Link>
        </div>
        <div className="nav">
          <Link to={'/'}>Get Involved</Link>
        </div>
        <div className="nav">
          <Link to={'/'}>Stories</Link>
        </div>
        <div className="nav">
          <Link to={'/'}>Donate</Link>
        </div>
        <div className="nav">
          <Link to={'/'}>Subscribe</Link>
        </div>
      </div>
      <div className="login">
        <button 
          id="signupBtn"> Sign Up 
          <img 
            id="loginIcon" 
            alt="" 
            src="https://i.imgur.com/tSaACkn.png" />
        </button>
      </div>
        {/* <div className="links">
          <ul>
            { props.currentUser ? 
              <>
                <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
              </>
            :
              <>

                <li><Link to={'/login'}>Login</Link></li>
              </>
            }
          </ul>
        </div> */}
          <p>
            
            <h4 id="title"><span id="satire"> SATIRE </span>Sandcastles: A Threat of Interplanetary Resource Expropriation</h4>
          </p>
    </header>
  );
}

export default Header;
