// src/App.js
import React from 'react';
import './App.css';
import MoodTracker from './components/MoodTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mood Tracker App</h1>
      </header>
      <main>
        <MoodTracker />
      </main>
    </div>
  );
}

export default App;
