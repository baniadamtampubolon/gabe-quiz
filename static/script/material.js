import { quizData } from '../../data/subjects.js';

const urlParams = new URLSearchParams(window.location.search);
const subjectKey = urlParams.get('subject');
const chapterIndex = urlParams.get('chapter');

const elements = {
    title: document.getElementById('material-title'),
    progress: document.getElementById('progress-text'),
    term: document.getElementById('card-term'),
    definition: document.getElementById('card-definition'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    finishContainer: document.getElementById('finish-container'),
    startQuizBtn: document.getElementById('start-quiz-btn'),
    flashcard: document.querySelector('.flashcard-container')
};

const chapterData = quizData[subjectKey].chapters[chapterIndex];
const flashcards = chapterData.summary;
let currentCardIndex = 0;

function showCard(index) {
    elements.flashcard.classList.remove('is-flipped');
    
    const card = flashcards[index];
    elements.term.innerText = card.term;
    elements.definition.innerText = card.definition;
    elements.progress.innerText = `Kartu ${index + 1} dari ${flashcards.length}`;

    elements.prevBtn.disabled = index === 0;
    elements.nextBtn.disabled = index === flashcards.length - 1;
    elements.finishContainer.style.display = index === flashcards.length - 1 ? 'block' : 'none';
}

elements.prevBtn.onclick = () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
};

elements.nextBtn.onclick = () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
};

// Initialize
elements.title.innerText = chapterData.title;
elements.startQuizBtn.href = `quiz.html?subject=${subjectKey}&chapter=${chapterIndex}`;
showCard(currentCardIndex);
