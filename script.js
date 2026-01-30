const noMessages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad..."
];

let noClickCount = 0;
let yesFontSize = 1.2; // Initial font size in rem

function handleNoClick() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const bugcatSad = document.getElementById('bugcat-sad-section');

    // Cycle through messages
    noButton.innerText = noMessages[noClickCount % noMessages.length];
    noClickCount++;

    // Show sad Bugcat on first No click
    if (noClickCount === 1) {
        bugcatSad.classList.remove('hidden');
        document.getElementById('bugcat-top').classList.add('hidden');
    }

    // Increase "Yes" button size exponentially by 1.5x
    yesFontSize *= 1.5;
    yesButton.style.fontSize = `${yesFontSize}rem`;
    
    // Ensure padding grows too to keep it balanced
    const currentPaddingY = parseFloat(window.getComputedStyle(yesButton).paddingTop);
    const currentPaddingX = parseFloat(window.getComputedStyle(yesButton).paddingLeft);
    yesButton.style.padding = `${currentPaddingY * 1.2}px ${currentPaddingX * 1.2}px`;
}

function handleYesClick() {
    sendNotification(); // This sends the email to you instantly!
    const heading = document.getElementById('heading');
    const buttonContainer = document.getElementById('button-container');
    const bugcatTop = document.getElementById('bugcat-top');
    const bugcatSad = document.getElementById('bugcat-sad-section');
    const successScreen = document.getElementById('success-screen');
    
    // Hide initial elements
    heading.classList.add('hidden');
    buttonContainer.classList.add('hidden');
    bugcatTop.classList.add('hidden');
    bugcatSad.classList.add('hidden');
    
    // Show success screen
    successScreen.classList.remove('hidden');
}

function sendNotification() {
    fetch("https://formspree.io/f/xqebwewo", {
        method: "POST",
        body: JSON.stringify({
            message: "MOHAMMAD AAYAN! SHE SAID YES! ❤️",
            time: new Date().toLocaleString()
        }),
        headers: {
            'Accept': 'application/json'
        }
    });
}
