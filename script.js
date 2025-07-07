
// DOM Elements
const themeSelect = document.getElementById('theme');
const animationSelect = document.getElementById('animation');
const savePrefsBtn = document.getElementById('savePrefs');
const animateBtns = document.querySelectorAll('.animate-btn');
const techCards = document.querySelectorAll('.tech-card');

// Load user preferences from localStorage
function loadPreferences() {
    const savedTheme = localStorage.getItem('themePreference') || 'light';
    const savedAnimation = localStorage.getItem('animationPreference') || 'pulse';
    
    // Apply saved preferences
    themeSelect.value = savedTheme;
    animationSelect.value = savedAnimation;
    applyTheme(savedTheme);
}

// Save preferences to localStorage
function savePreferences() {
    const selectedTheme = themeSelect.value;
    const selectedAnimation = animationSelect.value;
    
    localStorage.setItem('themePreference', selectedTheme);
    localStorage.setItem('animationPreference', selectedAnimation);
    
    applyTheme(selectedTheme);
    alert('Preferences saved!');
}

// Apply selected theme
function applyTheme(theme) {
    document.body.className = theme;
    
    // Special styling for neon theme
    if (theme === 'neon') {
        document.querySelector('h1').style.textShadow = '0 0 10px #0ff';
    } else {
        document.querySelector('h1').style.textShadow = 'none';
    }
}

// Trigger animation on cards
function triggerAnimation(card) {
    // Remove any existing animation classes
    card.classList.remove('pulse-animation', 'float-animation', 'rotate-animation');
    
    // Get the selected animation type
    const animationType = animationSelect.value;
    
    // Add the appropriate animation class
    switch(animationType) {
        case 'pulse':
            card.classList.add('pulse-animation');
            break;
        case 'float':
            card.classList.add('float-animation');
            break;
        case 'rotate':
            card.classList.add('rotate-animation');
            break;
    }
    
    // Remove animation after it completes (for rotation)
    if (animationType === 'rotate') {
        setTimeout(() => {
            card.classList.remove('rotate-animation');
        }, 4000);
    }
}

// Event Listeners
savePrefsBtn.addEventListener('click', savePreferences);
animateBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        triggerAnimation(techCards[index]);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    
    // Demo: Auto-animate the AI card on load
    setTimeout(() => {
        triggerAnimation(document.getElementById('ai-card'));
    }, 1000);
});

// Future Tech: Add WebSocket connection simulation for real-time updates
function simulateWebSocket() {
    console.log("Simulating WebSocket connection for real-time AIoT data...");
    setInterval(() => {
        const randomData = Math.random().toFixed(2);
        console.log(`AIoT Data Update: ${randomData}`);
    }, 5000);
}

// Start the simulation
simulateWebSocket();
