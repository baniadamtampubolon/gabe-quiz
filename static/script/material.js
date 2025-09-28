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
    flashcard: document.querySelector('.flashcard-container'),
    flashcardToggle: document.getElementById('flashcard-toggle'),
    summaryToggle: document.getElementById('summary-toggle'),
    flashcardMode: document.getElementById('flashcard-mode'),
    summaryMode: document.getElementById('summary-mode'),
    summaryContent: document.getElementById('summary-content'),
    summaryStats: document.getElementById('summary-stats')
};

const chapterData = quizData[subjectKey].chapters[chapterIndex];
const flashcards = chapterData.summary;
let currentCardIndex = 0;
let currentMode = 'flashcard';

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

function generateSummary() {
    const summaryHTML = flashcards.map((card, index) => `
        <div class="summary-item">
            <div class="summary-term">
                <div class="term-icon"></div>
                ${card.term}
            </div>
            <div class="summary-definition">
                ${card.definition}
            </div>
        </div>
    `).join('');

    elements.summaryContent.innerHTML = summaryHTML;
    elements.summaryStats.innerText = `Total materi: ${flashcards.length} konsep`;
}

function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'flashcard') {
        elements.flashcardToggle.classList.add('active');
        elements.summaryToggle.classList.remove('active');
        elements.flashcardMode.style.display = 'block';
        elements.summaryMode.style.display = 'none';
        elements.progress.style.display = 'inline-block';
    } else {
        elements.summaryToggle.classList.add('active');
        elements.flashcardToggle.classList.remove('active');
        elements.flashcardMode.style.display = 'none';
        elements.summaryMode.style.display = 'block';
        elements.progress.style.display = 'none';
        elements.finishContainer.style.display = 'block';
        generateSummary();
    }
}

// Event Listeners
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

elements.flashcardToggle.onclick = () => switchMode('flashcard');
elements.summaryToggle.onclick = () => switchMode('summary');

// Initialize
elements.title.innerText = chapterData.title;
elements.startQuizBtn.href = `quiz.html?subject=${subjectKey}&chapter=${chapterIndex}`;
showCard(currentCardIndex);
generateSummary();
