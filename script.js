function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateCountdown() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let endHour = 17.5; // 17:30 in decimal
    if (day === 5) { // Friday
        endHour = 17;
    }
    const lunchBreak = 12;
    let timeRemaining;

    if (hours < lunchBreak) {
        timeRemaining = (lunchBreak - hours) * 60 - minutes;
        document.getElementById('countdown').textContent = `Temps restant avant la pause de midi: ${Math.floor(timeRemaining / 60)}h ${timeRemaining % 60}m`;
    } else if (hours < endHour) {
        timeRemaining = (endHour - hours) * 60 - minutes;
        document.getElementById('countdown').textContent = `Temps restant avant la fin des cours: ${Math.floor(timeRemaining / 60)}h ${timeRemaining % 60}m`;
    } else {
        document.getElementById('countdown').textContent = "Les cours sont terminés pour aujourd'hui!";
    }
}

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);
