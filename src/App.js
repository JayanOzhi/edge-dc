import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { ref, set } from "firebase/database";
import NavBar from './NavBar'; // Import the NavBar component
import './App.css';  // Import the CSS file

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const msgRef = ref(db, 'test/message');
    set(msgRef, message);

    setMessage('');
  };

  return (
    <div className="App">
      <NavBar /> {/* NavBar component rendered here */}
      <img src="/noze-nbck.png" alt="Your Logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <input 
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
          placeholder="Label, info message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
