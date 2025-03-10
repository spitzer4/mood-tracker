import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaSmile, FaMeh, FaFrown, FaAngry } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './MoodTracker.css'; // Custom styles

const moods = {
  happy: { label: 'Happy', color: '#93C572', icon: <FaSmile size={20} color="#93C572" /> },
  neutral: { label: 'Neutral', color: '#FBEC5D', icon: <FaMeh size={20} color="#FBEC5D" /> },
  sad: { label: 'Sad', color: '#89CFF0', icon: <FaFrown size={20} color="#89CFF0" /> },
  angry: { label: 'Angry', color: '#FF7F7F', icon: <FaAngry size={20} color="#FF7F7F" /> }
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
			next2Label={null} // Remove default "Next" button
			prev2Label={null} // Remove default "Previous" button
		/>
		</div>

		<div className="mood-selection">
		{Object.keys(moods).map((moodKey) => (
			<button
			key={moodKey}
			onClick={() => handleMoodChange(moodKey)}
			style={{ backgroundColor: moods[moodKey].color }}
			className="mood-btn"
			>
			{moods[moodKey].icon} {moods[moodKey].label}
			</button>
		))}
		</div>

		<div className="selected-mood">
		<p><strong>Selected Date:</strong> {selectedDate.toLocaleDateString()}</p>
		<p><strong>Selected Mood:</strong> {moodHistory[selectedDate.toLocaleDateString()] ? moods[moodHistory[selectedDate.toLocaleDateString()]].label : 'No mood selected yet'}</p>
		</div>
	</div>
	);
};

export default MoodTracker;
