// Get elements
import { quizData } from '../../data/subjects.js';
const percentageScoreElement = document.getElementById('percentage-score');
const scoreFractionElement = document.getElementById('score-fraction');
const feedbackMessage = document.getElementById('feedback-message');
const evaluationContainer = document.getElementById('evaluation-container');
const celebrationEmoji = document.getElementById('celebration-emoji');

// Get data from localStorage
const score = parseInt(localStorage.getItem('mostRecentScore')) || 0;
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
const questions = JSON.parse(localStorage.getItem('quizQuestions')) || [];
const subjectKey = localStorage.getItem('quizSubject');
const totalQuestions = questions.length;

// Find chapter index
const chapterIndex = quizData[subjectKey] ? 
    quizData[subjectKey].chapters.findIndex(c => JSON.stringify(c.questions) === JSON.stringify(questions)) : -1;

// Set up navigation links
const changeChapterBtn = document.getElementById('change-chapter-btn');
if (subjectKey) {
    changeChapterBtn.href = `chapters.html?subject=${subjectKey}`;
}

const retryBtn = document.getElementById('retry-btn');
retryBtn.href = `quiz.html?subject=${subjectKey}&chapter=${chapterIndex}`;

// Calculate and display score
const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

// Animate score counting
let currentScore = 0;
const scoreInterval = setInterval(() => {
    if (currentScore <= scorePercentage) {
        percentageScoreElement.innerText = `${currentScore}%`;
        currentScore += 2;
    } else {
        clearInterval(scoreInterval);
        percentageScoreElement.innerText = `${scorePercentage}%`;
    }
}, 50);

scoreFractionElement.innerText = `(${score} dari ${totalQuestions})`;

// Set feedback message and emoji based on score
let feedbackClass = 'feedback-okay';
let emoji = '🎉';

if (scorePercentage >= 85) {
    feedbackMessage.innerText = "🌟 Luar biasa! Kamu adalah Master! Pengetahuanmu hebat sekali! 🏆";
    feedbackClass = 'feedback-excellent';
    emoji = '🏆';
    createConfetti();
} else if (scorePercentage >= 60) {
    feedbackMessage.innerText = "👏 Bagus sekali! Kamu sudah paham banyak. Terus belajar ya! 📚";
    feedbackClass = 'feedback-good';
    emoji = '👏';
} else {
    feedbackMessage.innerText = "💪 Jangan sedih! Ini adalah awal yang baik. Yuk, kita pelajari lagi bersama agar makin jago! 🌟";
    feedbackClass = 'feedback-okay';
    emoji = '💪';
}

celebrationEmoji.innerText = emoji;
feedbackMessage.className = `feedback-message ${feedbackClass}`;

// Save learning report
function saveLearningReport() {
    const username = localStorage.getItem('quizUsername') || 'Anonymous';
    const reports = JSON.parse(localStorage.getItem('learningReportData')) || [];
    
    if (quizData[subjectKey]) {
        const subjectName = quizData[subjectKey].subjectName;
        const chapterTitle = quizData[subjectKey].chapters[chapterIndex]?.title || 'Unknown Chapter';
        
        // Count attempts for this chapter
        const attempt = reports.filter(r => r.subject === subjectName && r.chapter === chapterTitle).length + 1;
        
        const now = new Date();
        const newReport = {
            name: username,
            subject: subjectName,
            chapter: chapterTitle,
            score: score,
            totalQuestions: totalQuestions,
            percentage: scorePercentage,
            attempt: attempt,
            date: now.toLocaleDateString('id-ID'),
            time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };
        
        reports.push(newReport);
        localStorage.setItem('learningReportData', JSON.stringify(reports));
    }
}

// Call save function
saveLearningReport();

// Display question evaluation
questions.forEach((question, index) => {
    const userAnswerIndex = userAnswers[index];
    const isCorrect = userAnswerIndex === question.answer;
    const userAnswerText = userAnswerIndex !== undefined ? question.options[userAnswerIndex] : 'Tidak dijawab';
    const correctAnswerText = question.options[question.answer];
    
    const evaluationHTML = `
        <div class="evaluation-item ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="question-number">Pertanyaan ${index + 1}</div>
            <p class="question-text">${question.question}</p>
            
            <div class="answer-section">
                <div class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} status-icon"></i>
                    <span><strong>Jawabanmu:</strong> ${userAnswerText}</span>
                </div>
                
                ${!isCorrect ? `
                    <div class="correct-answer">
                        <i class="fas fa-lightbulb status-icon"></i>
                        <span><strong>Jawaban Benar:</strong> ${correctAnswerText}</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="explanation">
                <p class="explanation-text">💡 ${question.explanation}</p>
            </div>
        </div>
    `;
    evaluationContainer.innerHTML += evaluationHTML;
});

// Confetti animation for excellent scores
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add entrance animations with delays
setTimeout(() => {
    document.querySelector('.score-display').style.animation = 'slideInUp 0.8s ease-out';
}, 300);

setTimeout(() => {
    document.querySelector('.feedback-message').style.animation = 'slideInUp 0.8s ease-out';
}, 600);

setTimeout(() => {
    document.querySelector('.action-buttons').style.animation = 'slideInUp 0.8s ease-out';
}, 900);
