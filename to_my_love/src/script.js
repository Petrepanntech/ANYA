// Floating Hearts Generator
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 15;
    const colors = ['#f43f5e', '#fb7185', '#fda4af']; // Different shades of pink/red

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        
        // Randomize properties
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(heart);
    }
}

// Love Note Generator
const notes = [
    "You look beautiful today.",
    "I'm so lucky to know you.",
    "Thank you for being you.",
    "Thinking of you makes me smile.",
    "You make my heart skip a beat.",
    "I love your laugh.",
    "Let's get tacos later.",
    "You are my happy place.",
    "My life is better with you in it.",
    "I love you more than pizza (maybe)."
];

function generateNote() {
    const display = document.getElementById('note-text');
    const btn = document.querySelector('button');
    
    // Simple fade out/in effect
    display.style.opacity = '0';
    display.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        display.innerText = randomNote;
        display.style.opacity = '1';
        display.style.transform = 'translateY(0)';
    }, 300);
    
    // Button reaction
    btn.classList.remove('pulse-btn');
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('pulse-btn');
}

// Initialize
window.onload = createHearts;
