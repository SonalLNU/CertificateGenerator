import React from 'react';
import './IntroComponent.css';

export default function App() {
  return (
    <>
      <div className="header">
        <div>Certificate Generator</div>
        <nav>
          <a href="#">Product</a>
          <a href="#">Templates</a>
          <a href="#">About</a>
          <button className="signin-btn">Sign In</button>
        </nav>
      </div>

      <div className="main-content">
        <h1>Online Certificate Maker</h1>
        <p>
          Generate beautiful certificates for your students or colleagues and download in PDF format
        </p>
        <button className="create-btn">Create a Certificate Now</button>
        <div className="note">✅ 100% Free — Download in PDF or JPG</div>
      </div>
    </>
  );
}
