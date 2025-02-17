// src/components/MoodTracker.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaSmile, FaMeh, FaFrown, FaAngry } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const moods = {
  happy: { label: 'Happy', color: 'green', icon: <FaSmile size={20} color="green" /> },
  neutral: { label: 'Neutral', color: 'gray', icon: <FaMeh size={20} color="gray" /> },
  sad: { label: 'Sad', color: 'blue', icon: <FaFrown size={20} color="blue" /> },
  angry: { label: 'Angry', color: 'red', icon: <FaAngry size={20} color="red" /> }
};

const MoodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodHistory, setMoodHistory] = useState({});

  const handleMoodChange = (mood) => {
    const dateKey = selectedDate.toLocaleDateString();
    setMoodHistory({
      ...moodHistory,
      [dateKey]: mood
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Custom styling for calendar days based on mood
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = date.toLocaleDateString();
      if (moodHistory[dateKey]) {
        return `mood-${moodHistory[dateKey]}`;
      }
    }
  };

  return (
    <div className="mood-tracker">
      <h2>Track Your Mood</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={tileClassName}
        />
      </div>

      <div className="mood-selection">
        {Object.keys(moods).map((moodKey) => (
          <button
            key={moodKey}
            onClick={() => handleMoodChange(moodKey)}
            style={{ backgroundColor: moods[moodKey].color }}
          >
            {moods[moodKey].icon} {moods[moodKey].label}
          </button>
        ))}
      </div>

      <div className="selected-mood">
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
        <p>Selected Mood: {moodHistory[selectedDate.toLocaleDateString()] ? moods[moodHistory[selectedDate.toLocaleDateString()]].label : 'No mood selected yet'}</p>
      </div>
    </div>
  );
};

export default MoodTracker;
