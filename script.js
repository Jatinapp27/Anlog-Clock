function updateClock() {
    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("min");
    const secondHand = document.getElementById("sec");

    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles for each hand
    const hourAngle = (hours + minutes / 60) * 360 / 12;
    const minuteAngle = (minutes + seconds / 60) * 360 / 60;
    const secondAngle = (seconds / 60) * 360;

    // Apply rotation to clock hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update when the page loads
updateClock();
