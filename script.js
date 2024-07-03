// Get the current date and time
const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });


// Update the current time and day in the HTML document
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
if (currentTimeUTC) {
    currentTimeUTC.textContent = `Current Time (UTC): ${currentTime}`;
}

const currentDayElement = document.querySelector('[data-testid="currentDay"]');
if (currentDayElement) {
    currentDayElement.textContent = `Current Day: ${currentDay}`;
}
