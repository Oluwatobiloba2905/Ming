let isMining = false;
let countdownTime = 10800; // 3 hours in seconds
let coinsEarned = 0;
const totalCoins = 30000; // LGBTQ Coins to mine

const actionButton = document.getElementById('actionButton');
const countdownDisplay = document.getElementById('countdown');
const progressBar = document.getElementById('progress');
const totalCoinsDisplay = document.getElementById('totalCoins');

function updateCountdown() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    countdownDisplay.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Update progress bar
    progressBar.style.width = `${((10800 - countdownTime) / 10800) * 100}%`;

    if (countdownTime === 0) {
        clearInterval(timer);
        actionButton.textContent = 'CLAIM';
        isMining = false;
    }

    countdownTime--;
}

let timer;

actionButton.addEventListener('click', () => {
    if (!isMining) {
        isMining = true;
        actionButton.textContent = 'Mining...';
        timer = setInterval(updateCountdown, 1000);
    } else if (countdownTime === 0) {
        coinsEarned += totalCoins;
        totalCoinsDisplay.textContent = coinsEarned;
        countdownTime = 10800; // Reset for next mining session
        actionButton.textContent = 'Start';
    }
});

// Menu functionality
const menuIcon = document.getElementById('menuIcon');
const fullpageMenu = document.getElementById('fullpageMenu');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    fullpageMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    fullpageMenu.classList.remove('active');
});