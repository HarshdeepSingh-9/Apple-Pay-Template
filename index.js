function switchToggle() {
    const toggleSwitch = document.getElementById("toggleSwitch");

    // Update the status display based on the toggle switch state
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.style.backgroundColor = "#333";
            document.querySelector(".slider").style.backgroundColor = "#0b406a";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.querySelector(".slider").style.backgroundColor = "#d77b1f";
        }
    });
}


let cardsVisible = false;


function shuffleCards() {
    const cards = document.querySelectorAll('.card-option');
    cards.forEach((card, index) => {
        card.style.left = `${index * 20}px`;
    });
}

function displayCards() {
    const cards = document.querySelectorAll('.card-option');
    const padding = 50; // Adjust the padding as needed
    const totalPadding = (cards.length - 1) * padding;
    const containerWidth = document.querySelector('.card-shuffle-container').offsetWidth;

    cards.forEach((card, index) => {
        const cardWidth = card.offsetWidth;
        const newPosition = (containerWidth - totalPadding - cardWidth) / 2 + index * (cardWidth + padding);

        card.style.left = `${newPosition}px`;
    });

    // document.querySelector('.card-shuffle-container').style.zIndex = '1'; // Bring the entire card stack to the top
}

function hideCards() {
    const cards = document.querySelectorAll('.card-option');
    cards.forEach((card, index) => {
        card.style.left = `${index * 20}px`;
    });

    // document.querySelector('.card-shuffle-container').style.zIndex = '1'; // Bring the entire card stack to the top
}


function show_card(x) {
    const card = document.getElementById(x);
    const cards = document.querySelectorAll('.card-option');

    // Scale the clicked card
    card.style.transform = card.style.transform === 'scale(1)' ? 'scale(5)' : 'scale(1)';
    card.style.zIndex = "100";

    // Set zIndex for other cards to bring them to the background
    cards.forEach((otherCard) => {
        if (otherCard !== card) {
            otherCard.style.zIndex = "0";
        }
    });
}


