async function callGemini(userInput) {
    const response = await fetch('/api/generate-ai-content', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include your CSRF token if necessary (Laravel Sanctum/Web middleware)
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content 
        },
        body: JSON.stringify({
            prompt: userInput
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Laravel API Error:", errorData.error);
        return "Sorry, there was an error generating content.";
    }

    const data = await response.json();
    return data.ai_response;
}


const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2'); // Likely null
const video3 = document.getElementById('projectVideo3'); // Likely null
const hoverSign = document.querySelector('.hover-sign');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');


const videoList = [video1, video2, video3].filter(video => video !== null); // Filter out any null elements

if (videoList.length > 0 && hoverSign) {
    videoList.forEach(function(video) {
        video.addEventListener("mouseover", function() {
            video.play();
            hoverSign.classList.add("active");
        });
        video.addEventListener("mouseout", function() {
            video.pause();
            hoverSign.classList.remove("active");
        });
    });
}


if (sideBar && menu && closeIcon) {
    menu.addEventListener("click", function() {
        sideBar.classList.remove("close-sidebar");
        sideBar.classList.add("open-sidebar");
    });

    closeIcon.addEventListener("click", function() {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
}

// ===================================
// JAVASCRIPT INTERACTIVITY: FORM VALIDATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const messageArea = document.getElementById('form-message');
    const submitButton = document.getElementById('submitButton');

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the default form submission

        // 1. Basic required field validation
        const fullname = document.getElementById('fullname').value.trim();
        const email = emailInput.value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fullname || !email || !message) {
            messageArea.textContent = 'Please fill out all required fields.';
            messageArea.style.color = 'red';
            return;
        }

        // 2. Email format validation
        if (!emailRegex.test(email)) {
            messageArea.textContent = 'Please enter a valid email address.';
            messageArea.style.color = 'red';
            return;
        }

        // If validation passes (successful simulation)
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate network delay for success message
        setTimeout(() => {
            messageArea.textContent = '✅ Message sent successfully! I will get back to you soon.';
            messageArea.style.color = '#72a1dea2';
            form.reset(); // Clear the form fields

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = "Send Message <i class='bx bx-mail-send'></i>";
                messageArea.textContent = ''; // Clear the success message
            }, 3000);

        }, 1500); // 1.5 second delay
    });

    // ===================================
    // EXISTING JAVASCRIPT FOR MOBILE MENU
    // (Ensure this is also in your app.js)
    // ===================================
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.close-icon');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeIcon.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Close sidebar when a link is clicked
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    });
});

const colors = [
    { name: "Coral", hex: "#FF7F50" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Crimson", hex: "#DC143C" },
    { name: "Teal", hex: "#008080" },
    { name: "Olive", hex: "#808000" },
    { name: "DodgerBlue", hex: "#1E90FF" },
    { name: "Tomato", hex: "#FF6347" },
    { name: "MediumSeaGreen", hex: "#3CB371" },
    { name: "SlateGray", hex: "#708090" },
    { name: "Lavender", hex: "#E6E6FA" },
    { name: "DarkOrange", hex: "#FF8C00" }, 
    { name: "ForestGreen", hex: "#228B22" }, 
    { name: "MidnightBlue", hex: "#191970" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "SkyBlue", hex: "#87CEEB" },
    { name: "Navy", hex: "#000080" },
    { name: "Indigo", hex: "#4B0082" },
    { name: "Violet", hex: "#EE82EE" },
    { name: "RoyalBlue", hex: "#4169E1" },
    { name: "LimeGreen", hex: "#32CD32" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Chartreuse", hex: "#7FFF00" },
    { name: "DarkGreen", hex: "#006400" },
    { name: "SpringGreen", hex: "#00FF7F" }
];

const colorBlock = document.getElementById('color-block');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score');
const timerBar = document.getElementById('timer-bar');
const gameOverScreen = document.getElementById('game-over');
const startButton = document.getElementById('start-button');
const finalScoreDisplay = document.getElementById('final-score');
const optionButtons = document.querySelectorAll('.color-option');

let currentCorrectColor = null;
let score = 0;
let timeRemaining = 3000; // 3 seconds per round
let timerInterval = null;

// --- Helper function to get a unique set of colors ---
function getUniqueRandomColors(count) {
    const shuffled = colors.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// --- Main Game Functions ---

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameOverScreen.classList.add('hidden');
    document.getElementById('game-display').classList.remove('hidden'); // Ensure game is visible
    loadNewRound();
}

function loadNewRound() {
    const roundColors = getUniqueRandomColors(4);
    
    const correctIndex = Math.floor(Math.random() * 4);
    currentCorrectColor = roundColors[correctIndex];
    colorBlock.style.backgroundColor = currentCorrectColor.hex;

    optionButtons.forEach((button, index) => {
        button.textContent = roundColors[index].name;
        button.classList.remove('correct-answer', 'wrong-answer');
        button.onclick = () => checkAnswer(button, roundColors[index].hex);
    });

    resetTimer();
}

function checkAnswer(clickedButton, selectedHex) {
    if (!timerInterval) return; 

    if (selectedHex === currentCorrectColor.hex) {
        score++;
        scoreDisplay.textContent = score;
        clickedButton.classList.add('correct-answer');

        clearInterval(timerInterval);
        setTimeout(() => loadNewRound(), 200);

    } else {
        clickedButton.classList.add('wrong-answer');
        optionButtons.forEach(btn => {
            if (btn.textContent === currentCorrectColor.name) {
                btn.classList.add('correct-answer');
            }
        });

        endGame();
    }
}

function resetTimer() {
    const TIME_PER_ROUND = 10000; 
    timeRemaining = TIME_PER_ROUND; 

    clearInterval(timerInterval);
    
    timerBar.style.width = '100%';
    timerBar.style.transition = 'none';
    
    clearInterval(timerInterval);
    setTimeout(() => {
        timerBar.style.transition = `width ${TIME_PER_ROUND / 1000}s linear`; 
        timerBar.style.width = '0%';
    }, 50); 

    timerInterval = setTimeout(() => {
        endGame();
    }, TIME_PER_ROUND); 
}

function endGame() {
    clearInterval(timerInterval);
    timerInterval = null; // Mark game as ended
    finalScoreDisplay.textContent = score;
    gameOverScreen.classList.remove('hidden');
    // Hide the main game elements
    document.getElementById('game-display').classList.add('hidden'); 
}

// --- Event Listeners ---
startButton.addEventListener('click', startGame);

// Initialize the game screen (only show the start button initially)
document.getElementById('game-display').classList.add('hidden');
gameOverScreen.classList.remove('hidden');
finalScoreDisplay.textContent = 0; // Show 0 before first play
startButton.textContent = "Start Game";