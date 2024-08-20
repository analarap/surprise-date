function revealMessage() {
    const heart = document.getElementById("heart");
    const message = document.getElementById("message");

    heart.style.display = "none";
    message.style.display = "block";
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);
}

document.getElementById('acceptButton').addEventListener('click', function() {
    console.log("Evento adicionado ao calendário.");
});

setTimeout(revealMessage, 3000);

function accept() {
    showConfetti();
    showPopup();
}

function makeButtonRunAway() {
    const noButton = document.getElementById("noButton");

    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

document.getElementById("noButton").addEventListener("mouseover", makeButtonRunAway);

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <h2>Que ótimo meu bebê! Nosso encontro está marcado então!</h2>
        <button onclick="closePopup(this)">Fechar</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'block';
}

function closePopup(button) {
    const popup = button.parentElement;
    popup.style.display = 'none';
}

const style = document.createElement('style');
style.innerHTML = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: hsl(${Math.random() * 360}, 100%, 50%);
        opacity: 0.8;
        transform: translateY(-100vh);
        animation: fall ${Math.random() * 3 + 2}s linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);