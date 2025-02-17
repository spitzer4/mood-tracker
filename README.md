# Mood Tracker App

A simple web app built with React to track your mood on a daily basis using a calendar. Each day is color-coded based on the mood you select, and you can track your emotional journey over time. The app allows you to navigate through months, select a mood for each day, and visualize your mood patterns.

## Features
- **Monthly Calendar**: View a calendar where each day represents a mood.
- **Moods Selection**: Choose from a set of moods, each associated with a specific color.
- **Color-coded Calendar**: Each day is colored according to the mood selected for that day.
- **Mood History**: View your mood for the selected day.

## Technologies Used
- **React**: For building the user interface and handling state management.
- **react-calendar**: For displaying a customizable calendar.
- **react-icons**: For displaying mood icons.
- **CSS**: For styling the app.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Steps to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mood-tracker.git
   cd mood-tracker
   ```

2. Install dependencies:
	```bash
	npm install
	```

3. Start the development server:
	```bash
	npm start
	```
	
	This will open the app in your default browser at http://localhost:3000.

### Usage
Once the app is running, you will see a calendar that allows you to select a day. Below the calendar, you'll find buttons to select moods. When you click a mood button, the selected day will change color to reflect the mood chosen.

#### Mood Options
- **Happy:** Represented by a green color and the smiley face icon.
- **Neutral:** Represented by a gray color and the neutral face icon.
- **Sad:** Represented by a blue color and the frown face icon.
- **Angry:** Represented by a red color and the angry face icon.

#### How to Log a Mood
1. Click on a date in the calendar to select it.
2. Choose a mood from the buttons below the calendar.
3. The day will change color to reflect the selected mood, and your mood history will be updated.

#### Viewing Mood History
The app stores the mood for each day. Once a mood is selected, the day on the calendar will be color-coded, and the selected mood will appear in the "Selected Mood" section below the calendar.
