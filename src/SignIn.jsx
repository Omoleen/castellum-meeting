import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

const BACKEND_BASE_URL = "https://castellum-mvp.azurewebsites.net/api";

function SignIn() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const meetingId = id;
      let url = `${BACKEND_BASE_URL}/phishing/campaigns/${meetingId}/clicked/`;
      fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
    }
  }, [id]);

  function handleClick(e) {
    const meetingId = id;
    let url = `${BACKEND_BASE_URL}/phishing/campaigns/${meetingId}/compromised/`;
    fetch(url, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    navigate(`/${id}/phished`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="ethnos.svg" alt="Logo" className="logo" />
        <nav className="nav-links">
          <a href="#host" className="nav-link">Host a meeting</a>
          <a href="#help" className="nav-link">Help</a>
          <a href="#requirements" className="nav-link">System Requirements</a>
        </nav>
      </header>
      <main>
        <div className="join-container">
          <h1>Join an online meeting</h1>
          <p>Name</p>
          <input
            type="text"
            placeholder=""
            className="input-field"
          />
          <p>Meeting ID or Meeting Link</p>
          <input
            type="text"
            placeholder=""
            className="input-field"
          />
          <button className="join-button" onClick={handleClick}>Join meeting</button>
        </div>
        <p>
          If you are the meeting host,{' '}
          <a href="#signin" className="signin-link">sign in</a> to start the meeting.
        </p>
      </main>
    </div>
  );
}

export default SignIn;
