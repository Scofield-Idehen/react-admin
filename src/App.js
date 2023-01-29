import './App.css';
import contact from './image/contact.png';
import contactmail from './image/contactmail.png';
import call from './image/call.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="main">
        {isLoggedIn ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <div className="sub-main">
            <div>
              <div className="img">
                <div className="container-image">
                  <img src={contact} alt="profile image" className="contact" />
                </div>
              </div>
              <div>
                <h1>Login</h1>
                <img src={contactmail} alt="email" className="contactmail" />
                <input type="text" placeholder="Username" className="name" />
              </div>
              <div className="second-input">
                <img src={call} alt="password" className="contactmail" />
                <input type="Password" placeholder="password" className="name" />
              </div>
              <div className="buttonkey">
                <button onClick={handleLogin}>Login</button>
              </div>
              <p className="link">
                <a href="#">Forget password?</a> or <a href="#">SignUp</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
