const finaleScene = document.getElementById('finaleScene');
const finaleIntro = document.getElementById('finaleIntro');
const finalMessage = document.getElementById('finalMessage');
const letterContent = document.getElementById('letterContent');
const finishButton = document.getElementById('finishButton');
const finalCredit = document.getElementById('finalCredit');

const birthdayLetter = [
    "If you've made it all the way here...\n\nthank you. 🤍",
    "I know this isn't the fanciest birthday gift...\n\nbut I really wanted to make something\nthat was just for you.",
    'While putting all these pictures together...\n\nI found myself smiling the whole time.',
    "From the little girl in those childhood photos...\n\nto the person you've become today...\n\nit's honestly been such a beautiful journey.",
    'I loved looking at your family pictures...\n\nyour sister...\n\nyour little royal companion...\n\nand every smile in between.',
    "It reminded me that life is made up of these little moments...\n\nand they're the ones we'll always remember.",
    "There's just one thing I want to ask of you...\n\nPlease don't stress too much.\n\nAnd don't spend so much time overthinking every little thing.",
    "Some things take time...\n\nand that's okay.\n\nLife has its own way of making everything fall into place.",
    'So trust yourself.\n\nTrust the journey.',
    "And whenever you feel like talking...\n\nwhether it's about something exciting...\n\nsomething random...\n\nor something that's bothering you...\n\ndon't keep it all to yourself.",
    "Just remember...\n\nyou'll always have someone who's ready to listen 🩷",
    'Keep smiling.\n\nKeep chasing your dreams.\n\nKeep making the people around you proud.\n\nMost importantly...\n\nkeep being the amazing person you already are.',
    'I really hope this little surprise\nmade your birthday\njust a tiny bit more special.',
    'Happy Birthday, Afrin. 🎂🤍\n\nTake care of yourself...\n\nand don\'t ever lose that beautiful smile.'
];

const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration));

async function typeParagraph(paragraph, isLastParagraph) {
    const line = document.createElement('p');
    line.classList.add('typing-cursor');
    letterContent.appendChild(line);

    for (const character of paragraph) {
        line.textContent += character;
        letterContent.scrollTop = letterContent.scrollHeight;
        await wait(character === '\n' ? 110 : 22);
    }

    if (!isLastParagraph) {
        line.classList.remove('typing-cursor');
        await wait(850);
    }
}

async function typeFinalMessage() {
    letterContent.replaceChildren();
    finalMessage.classList.add('show');

    for (let index = 0; index < birthdayLetter.length; index += 1) {
        await typeParagraph(birthdayLetter[index], index === birthdayLetter.length - 1);
    }

    letterContent.lastElementChild.classList.remove('typing-cursor');
    await wait(1000);
    finishButton.classList.add('show');
}

async function finishFinale() {
    if (finishButton.disabled) return;
    finishButton.disabled = true;
    finalMessage.classList.add('leaving');
    await wait(1350);
    finalCredit.classList.add('show');
    await wait(5200);
    finalCredit.classList.add('hide');
    finaleScene.classList.add('ending');
}

function startFinalLetterScene() {
    document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
    finaleScene.classList.add('active');
    finaleIntro.classList.add('show');

    setTimeout(() => {
        finaleIntro.classList.add('hide');
        setTimeout(typeFinalMessage, 1250);
    }, 5200);
}

finishButton.addEventListener('click', finishFinale);
