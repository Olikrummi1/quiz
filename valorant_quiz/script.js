const quizData = [
    // --- Role Questions (1-13) ---
    {
        question: "The round starts on Attack. What's your immediate priority?",
        image: "images/q1.jpg",
        answers: [
            { text: "Finding the quickest way to the enemy and getting the first pick. Let's go!", value: "A" },
            { text: "Identifying key chokepoints and figuring out how to block enemy vision for my team's push.", value: "B" },
            { text: "Using my abilities to scout ahead, check common angles, or disable defenders before my team moves in.", value: "C" },
            { text: "Thinking about where the enemy might flank from and setting up to cover our backs or securing the spike planter.", value: "D" }
        ]
    },
    {
        question: "How would you describe your preferred playstyle in tactical shooters?",
        image: "images/q2.jpg",
        answers: [
            { text: "Aggressive and proactive. I like being the one to initiate fights.", value: "A" },
            { text: "Methodical and strategic. I prefer controlling the flow of the game and setting my team up.", value: "B" },
            { text: "Supportive and disruptive. I enjoy enabling my teammates and gathering crucial information.", value: "C" },
            { text: "Patient and defensive. I excel at holding down areas and reacting to enemy pushes.", value: "D" }
        ]
    },
     {
        question: "You're in a 1v3 clutch situation on Defense. The spike is planted on your site. What's your approach?",
        image: "images/q3.jpg",
        answers: [
            { text: "Try to isolate 1v1s quickly and rely on my aim to win them sequentially.", value: "A" },
            { text: "Use my utility (smokes, walls) to delay the defuse or force enemies into unfavorable positions.", value: "B" },
            { text: "Gather information on their locations using abilities, then try to use stuns/flashes for a retake.", value: "C" },
            { text: "Play for time, use traps or delaying abilities to prevent the defuse.", value: "D" }
        ]
    },
    {
        question: "Which type of ability sounds MOST appealing to you?",
        image: "images/q4.jpg",
        answers: [
            { text: "Movement abilities (dashes, teleports) or self-buffs after getting a kill.", value: "A" },
            { text: "Vision-blocking abilities (smokes, walls) that cover large areas.", value: "B" },
            { text: "Information-gathering tools (recon darts, drones, trackers) or crowd-control.", value: "C" },
            { text: "Placeable traps, turrets, slows, or healing abilities.", value: "D" }
        ]
    },
    {
        question: "When playing a team-based game, how do you typically communicate?",
        image: "images/q5.jpg",
        answers: [
            { text: "Making calls about enemy locations during fights or suggesting aggressive plays.", value: "A" },
            { text: "Calling out strategies, coordinating utility usage, and tracking map control.", value: "B" },
            { text: "Providing specific information gathered from my abilities ('One scanned here!').", value: "C" },
            { text: "Calling out flanks, confirming areas are clear, or notifying when my utility is triggered.", value: "D" }
        ]
    },
     {
        question: "What's your tolerance for risk in-game?",
        image: "images/q6.jpg",
        answers: [
            { text: "High. Taking risks is necessary to make big plays.", value: "A" },
            { text: "Moderate. Calculated risks where the reward outweighs the danger.", value: "B" },
            { text: "Calculated. I'll take risks if I have info suggesting it's safe or enables a teammate.", value: "C" },
            { text: "Low to Moderate. I prefer consistency and minimizing mistakes.", value: "D" }
        ]
    },
    {
        question: "When watching the minimap, what are you primarily focused on?",
        image: "images/q7.jpg",
        answers: [
            { text: "Where enemies were last seen, looking for an opportunity to engage.", value: "A" },
            { text: "Which areas are controlled by smokes/walls (ours and theirs).", value: "B" },
            { text: "Tracking teammate positions relative to potential enemy locations revealed by info.", value: "C" },
            { text: "Watching for gaps in our defense, potential flank routes.", value: "D" }
        ]
    },
     {
        question: "If you had to choose one way to contribute MOST significantly, what would it be?",
        image: "images/q8.jpg",
        answers: [
            { text: "Getting opening kills to give my team a numbers advantage.", value: "A" },
            { text: "Enabling safe passage for my team onto sites with vision denial.", value: "B" },
            { text: "Setting up teammates for easy kills by revealing or disabling enemies.", value: "C" },
            { text: "Preventing the enemy team from entering a site easily or catching rotators.", value: "D" }
        ]
    },
     {
        question: "It's mid-round, and the initial plan didn't quite work. How do you adapt?",
        image: "images/q9.jpg",
        answers: [
            { text: "Look for a new angle of attack or try to find an isolated enemy. Keep pressure on.", value: "A" },
            { text: "Analyze map control, redeploy smokes/walls, and suggest a new plan.", value: "B" },
            { text: "Use remaining info/disruption utility to see if we can exploit a different area.", value: "C" },
            { text: "Fall back to a safer position, reset my defensive setup, and prepare to react.", value: "D" }
        ]
    },
     {
        question: "On Attack, after the spike is planted, what's your preferred role?",
        image: "images/q10.jpg",
        answers: [
            { text: "Pushing out aggressively to hunt down remaining defenders.", value: "A" },
            { text: "Playing from a safe distance using post-plant lineups (molotovs, etc.).", value: "B" },
            { text: "Using leftover utility (stuns, info) to disrupt the retake attempt.", value: "C" },
            { text: "Holding a common flank route or a tricky angle near the spike.", value: "D" }
        ]
    },
    {
        question: "Which sounds like a more frustrating experience?",
        image: "images/q11.jpg",
        answers: [
            { text: "Feeling like you can't push forward because your team is playing too slow.", value: "A" },
            { text: "Your team ignoring your strategic smokes/walls and pushing through unsafe areas.", value: "B" },
            { text: "Using your recon/flash perfectly, but no teammate capitalizes on it.", value: "C" },
            { text: "Setting up a perfect site defense, only for the enemy to attack the *other* site.", value: "D" }
        ]
    },
    {
        question: "Outside of gaming, how do you approach problem-solving?",
        image: "images/q12.jpg",
        answers: [
            { text: "Direct confrontation, quick decisions, trust my gut feeling.", value: "A" },
            { text: "Careful planning, considering all variables, developing a strategy.", value: "B" },
            { text: "Gathering information, consulting others, collaborating on a solution.", value: "C" },
            { text: "Setting up safeguards, anticipating problems, reacting methodically.", value: "D" }
        ]
    },
    {
        question: "If Valorant were a sport, what position would you want to play?",
        image: "images/q13.jpg",
        answers: [
            { text: "The Striker/Star Forward - focused on scoring and highlight plays.", value: "A" },
            { text: "The Midfielder/Playmaker - controlling tempo and setting up opportunities.", value: "B" },
            { text: "The Point Guard/Support - assisting teammates and directing flow.", value: "C" },
            { text: "The Goalkeeper/Defender - protecting the objective and stopping attacks.", value: "D" }
        ]
    },

    // --- NEW: Complexity Questions (14-16) ---
    {
        question: "When learning a new character, you prefer one that...", // Placeholder: images/q14.jpg
        image: "images/q14.jpg",
        answers: [
            { text: "...you can pick up and be effective with almost immediately.", value: "S" }, // Simple
            { text: "...has a few specific tricks or combos to learn for moderate depth.", value: "M" }, // Medium
            { text: "...takes significant time and practice to truly master, but is very rewarding.", value: "X" }  // Complex
        ]
    },
    {
        question: "How do you feel about abilities requiring precise lineups or complex timing?", // Placeholder: images/q15.jpg
        image: "images/q15.jpg",
        answers: [
            { text: "I prefer abilities that are straightforward and work without pixel-perfect placement.", value: "S" },
            { text: "I'm willing to learn some key lineups or timings if they give a clear advantage.", value: "M" },
            { text: "I enjoy the challenge of mastering intricate lineups and complex ability interactions.", value: "X" }
        ]
    },
    {
        question: "During a match, you'd rather...", // Placeholder: images/q16.jpg
        image: "images/q16.jpg",
        answers: [
            { text: "...focus primarily on crosshair placement and direct ability use.", value: "S" },
            { text: "...actively juggle ability usage with positioning and gunfights.", value: "M" },
            { text: "...constantly manage multiple timers, global abilities, or execute multi-step plays.", value: "X" }
        ]
    }
];

// DOM Elements (Keep these as they were)
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultRoleIcon = document.getElementById('result-role-icon');
const resultRole = document.getElementById('result-role');
const resultRoleDesc = document.getElementById('result-role-desc');
const resultAgentImg = document.getElementById('result-agent-img');
const resultAgentName = document.getElementById('result-agent-name');
const shareBtn = document.getElementById('share-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBarInner = document.getElementById('progress-bar-inner');
const progressText = document.getElementById('progress-text');
const resultCanvas = document.getElementById('result-canvas');
const ctx = resultCanvas.getContext('2d');


// Quiz State
let currentQuestionIndex = 0;
// --- UPDATED: Add S, M, X to scores ---
let scores = { A: 0, B: 0, C: 0, D: 0, S: 0, M: 0, X: 0 };
let finalResult = {}; // To store the calculated result for sharing

// --- Functions ---

function startGame() {
    currentQuestionIndex = 0;
    // --- UPDATED: Reset all scores ---
    scores = { A: 0, B: 0, C: 0, D: 0, S: 0, M: 0, X: 0 };
    finalResult = {};
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    // --- UPDATED: Make sure image placeholders exist for new questions ---
    // Ensure you have images named q14.jpg, q15.jpg, q16.jpg in your images folder
    showQuestion();
}

// Function to shuffle an array (Keep this as it was)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    // Update Progress Bar (Uses quizData.length which is now 16)
    const progressPercentage = (questionNumber / quizData.length) * 100;
    progressBarInner.style.width = `${progressPercentage}%`;
    progressText.innerText = `Question ${questionNumber} / ${quizData.length}`; // Reflects total questions

    // Update Question Content
    questionText.innerText = currentQuestion.question;
    // --- UPDATED: Ensure image path is correct for new questions ---
    questionImage.src = currentQuestion.image; // e.g., images/q14.jpg
    questionImage.onerror = function() {
        console.warn(`Image not found or failed to load: ${this.src}`);
        this.style.display = 'none';
    };
     questionImage.onload = function() {
        this.style.display = 'block';
    };

    // Shuffle answers
    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);

    // Create Answer Buttons
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.value = answer.value; // Stores A/B/C/D or S/M/X
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const value = selectedButton.dataset.value;

    // --- UPDATED: Increment the correct score (A/B/C/D or S/M/X) ---
    if (scores.hasOwnProperty(value)) { // Check if the key exists
        scores[value]++;
    } else {
        console.warn(`Invalid score value detected: ${value}`);
    }


    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        calculateResult();
        showResults();
    }
}

// --- HELPER: Determine dominant complexity preference ---
function getComplexityPreference(scores) {
    if (scores.X >= scores.M && scores.X >= scores.S) {
        return 'X'; // Complex preferred or tied highest
    } else if (scores.M > scores.X && scores.M >= scores.S) {
        return 'M'; // Medium preferred (and higher than X)
    } else {
        return 'S'; // Simple preferred (or default if S/M tied and X lower)
    }
}


function calculateResult() {
    // 1. Find the primary role (A, B, C, D)
    let maxRoleScore = -1;
    let primaryRoleLetter = '';
    ['A', 'B', 'C', 'D'].forEach(letter => {
        if (scores[letter] > maxRoleScore) {
            maxRoleScore = scores[letter];
            primaryRoleLetter = letter;
        }
         // Basic tie-breaking for role
        else if (scores[letter] === maxRoleScore && primaryRoleLetter === '') {
             primaryRoleLetter = letter;
        }
    });

    // 2. Determine complexity preference (S, M, X)
    const complexityPref = getComplexityPreference(scores);

    // 3. Determine Role and Agent based on BOTH role score and complexity preference
    switch (primaryRoleLetter) {
        case 'A': // Duelist
            finalResult = {
                role: "Duelist",
                roleIcon: "images/duelist.png",
                description: "You're the tip of the spear, seeking engagements and creating space with aggressive plays.",
                agent: getDuelistAgent(complexityPref), // Pass complexity preference
                agentImage: `images/${getDuelistAgent(complexityPref).toLowerCase()}.png`
            };
            break;
        case 'B': // Controller
            finalResult = {
                role: "Controller",
                roleIcon: "images/controller.png",
                description: "You shape the battlefield, using vision denial to enable pushes and control engagements.",
                agent: getControllerAgent(complexityPref),
                agentImage: `images/${getControllerAgent(complexityPref).toLowerCase()}.png`
            };
            break;
        case 'C': // Initiator
            finalResult = {
                role: "Initiator",
                roleIcon: "images/initiator.png",
                description: "You gather intel and disrupt enemies, setting up your team for successful site takes.",
                agent: getInitiatorAgent(complexityPref),
                agentImage: `images/${getInitiatorAgent(complexityPref).toLowerCase()}.png`
            };
            break;
        case 'D': // Sentinel
            finalResult = {
                role: "Sentinel",
                 roleIcon: "images/sentinel.png",
                description: "You are the anchor, locking down sites, watching flanks, and slowing enemy advances.",
                agent: getSentinelAgent(complexityPref),
                agentImage: `images/${getSentinelAgent(complexityPref).toLowerCase()}.png`
            };
            break;
        default: // Fallback
             finalResult = { role: "Undetermined", roleIcon: "", description: "Hmm, your answers were quite balanced!", agent: "Mystery Agent", agentImage:"" };
    }
}

// --- UPDATED Agent Recommendation Helpers (Using Complexity Preference) ---

function getDuelistAgent(complexity) {
    switch (complexity) {
        case 'X': return (Math.random() > 0.5) ? "Jett" : "Yoru";       // High skill ceiling/tricks
        case 'M': return (Math.random() > 0.5) ? "Raze" : "Neon";       // Movement tech/combos
        case 'S':
        default:  return (Math.random() > 0.5) ? "Phoenix" : "Reyna";   // More straightforward kits
    }
    // Could add Iso to S or M based on interpretation
}

function getControllerAgent(complexity) {
     switch (complexity) {
        case 'X': return (Math.random() > 0.5) ? "Viper" : "Astra";     // Requires setups/map awareness
        case 'M': return (Math.random() > 0.5) ? "Omen" : "Harbor";     // Versatile, some timing/placement skill
        case 'S':
        default:  return "Brimstone";                                   // Most straightforward smokes
     }
}

function getInitiatorAgent(complexity) {
     switch (complexity) {
        case 'X': return (Math.random() > 0.5) ? "Sova" : "KAY/O";      // Heavy lineup/timing focus
        case 'M': return (Math.random() > 0.5) ? "Breach" : "Fade";     // Combos/info gathering + execution
        case 'S':
        default:  return (Math.random() > 0.5) ? "Skye" : "Gekko";      // More direct impact/versatile
     }
}

function getSentinelAgent(complexity) {
     switch (complexity) {
        case 'X': return (Math.random() > 0.5) ? "Cypher" : "Chamber";  // Intricate setups or high mech/econ skill
        case 'M': return (Math.random() > 0.5) ? "Killjoy" : "Deadlock";// Setup/reactive, less intensive than X
        case 'S':
        default:  return "Sage";                                        // Straightforward heal/slow/wall
     }
}


// --- showResults and generateShareImage remain largely the same ---
// Make sure image paths in generateShareImage still work correctly

function showResults() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Ensure finalResult properties exist before trying to access them
    resultRoleIcon.src = finalResult.roleIcon || '';
    resultRole.innerText = finalResult.role || 'Undetermined';
    resultRoleDesc.innerText = finalResult.description || '';
    resultAgentImg.src = finalResult.agentImage || '';
    resultAgentName.innerText = finalResult.agent || 'Mystery Agent';

     // Handle image loading errors for results
    resultRoleIcon.onerror = function() { this.style.display = 'none'; };
    resultAgentImg.onerror = function() { this.style.display = 'none'; };
    resultRoleIcon.onload = function() { this.style.display = 'inline-block'; };
    resultAgentImg.onload = function() { this.style.display = 'inline-block'; };
}


function generateShareImage() {
    const canvasWidth = 600;
    const canvasHeight = 400;
    resultCanvas.width = canvasWidth;
    resultCanvas.height = canvasHeight;

    // Background
    ctx.fillStyle = '#111'; // Dark background
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Text Styling
    ctx.fillStyle = '#ECE8E1'; // Off-white text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Title
    ctx.font = 'bold 36px Montserrat';
    ctx.fillText("My Valorant Role", canvasWidth / 2, 60);

    // Role Icon (if loaded)
    const roleIconImg = document.getElementById('result-role-icon');
    if (roleIconImg && roleIconImg.complete && roleIconImg.naturalHeight !== 0) {
       try { ctx.drawImage(roleIconImg, canvasWidth / 2 - 40, 100, 80, 80); } catch (e) { console.error("Error drawing role icon:", e); }
    } else {
        console.warn("Role icon image not loaded or invalid for canvas drawing.");
    }


    // Role Name
    ctx.font = 'bold 48px Montserrat';
    ctx.fillStyle = '#FF4655'; // Valorant Red for Role
    ctx.fillText(finalResult.role || 'Undetermined', canvasWidth / 2, 200);

    // Agent Section Title
    ctx.font = 'bold 24px Montserrat';
    ctx.fillStyle = '#ECE8E1';
    ctx.fillText("Recommended Agent:", canvasWidth / 2, 260);

     // Agent Image (if loaded)
    const agentImg = document.getElementById('result-agent-img');
    let agentImageDrawn = false;
     if (agentImg && agentImg.complete && agentImg.naturalHeight !== 0) {
        try {
            ctx.drawImage(agentImg, canvasWidth / 2 - 30, 290, 60, 60);
            agentImageDrawn = true;
        } catch (e) {
            console.error("Error drawing agent image:", e);
        }
    } else {
        console.warn("Agent image not loaded or invalid for canvas drawing.");
    }

    // Agent Name
    ctx.font = 'bold 32px Montserrat';
    const agentNameY = agentImageDrawn ? 320 + 30 : 300 + 10; // Adjust Y based on whether image was drawn
    ctx.fillText(finalResult.agent || 'Mystery Agent', canvasWidth / 2, agentNameY);


    // Create download link
    try {
        const dataURL = resultCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        // Ensure finalResult.role and finalResult.agent are defined for filename
        const roleName = finalResult.role || 'Role';
        const agentName = finalResult.agent || 'Agent';
        link.download = `My_Valorant_${roleName}_${agentName}.png`;
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
    } catch (e) {
         console.error("Error generating or downloading canvas image:", e);
         alert("Could not generate share image. Your browser might not support this feature or might be blocking it (e.g., security restrictions on canvas data).");
    }
}


// Event Listeners (Keep as they were)
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
shareBtn.addEventListener('click', generateShareImage);