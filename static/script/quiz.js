// Mengambil elemen dari HTML
import { quizData } from '../../data/subjects.js';

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const progressBarFull = document.getElementById('progress-bar-full');

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let userAnswers = [];
let questions = [];

// Mengambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const subjectKey = urlParams.get('subject');
const chapterIndex = urlParams.get('chapter');

function loadQuestions() {
    const subjectData = quizData[subjectKey];
    if (subjectData && subjectData.chapters[chapterIndex]) {
        questions = subjectData.chapters[chapterIndex].questions;
        startQuiz();
    } else {
        questionElement.innerText = "Kuis tidak ditemukan. Silakan kembali ke halaman utama.";
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    nextBtn.innerText = "Lanjut";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("option");
        button.dataset.index = index;
        button.addEventListener("click", selectAnswer);
        optionsContainer.appendChild(button);
    });

    progressText.innerText = `Pertanyaan ${questionNo} dari ${questions.length}`;
    progressBarFull.style.width = `${(questionNo / questions.length) * 100}%`;
}

function resetState() {
    nextBtn.disabled = true;
    selectedOption = null;
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(e) {
    Array.from(optionsContainer.children).forEach(button => {
        button.classList.remove('selected');
    });

    const selectedBtn = e.target;
    selectedOption = parseInt(selectedBtn.dataset.index);
    selectedBtn.classList.add('selected');
    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    if (selectedOption !== null) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            score++;
        }
        userAnswers.push(selectedOption);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            if (currentQuestionIndex === questions.length - 1) {
                nextBtn.innerText = "Selesai!";
            }
            showQuestion();
        } else {
            localStorage.setItem('mostRecentScore', score);
            localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
            localStorage.setItem('quizQuestions', JSON.stringify(questions));
            // Simpan info subjek untuk tombol kembali
            localStorage.setItem('quizSubject', subjectKey); 
            window.location.href = "hasil.html";
        }
    }
});

// Enhanced user experience features
document.addEventListener('DOMContentLoaded', function() {
    // Show user greeting
    const savedName = localStorage.getItem('quizUsername');
    const userGreeting = document.getElementById('user-greeting');
    if (savedName) {
        userGreeting.innerHTML = `👋 Halo ${savedName}!`;
    }

    // Simulate loading
    setTimeout(() => {
        document.getElementById('loading-state').style.display = 'none';
        document.getElementById('quiz-content').style.display = 'block';
    }, 2000);

    // Add option selection enhancement
    document.addEventListener('click', function(e) {
        if (e.target.closest('.option')) {
            // Remove previous selections
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selection to clicked option
            e.target.closest('.option').classList.add('selected');
            
            // Enable next button
            const nextBtn = document.getElementById('next-btn');
            nextBtn.disabled = false;
            nextBtn.querySelector('#btn-text').textContent = 'Lanjut ke Soal Berikutnya';
        }
    });

    // Add celebration effect for correct answers
    window.celebrateCorrectAnswer = function() {
        createConfetti();
        showPositiveFeedback();
    };

    window.showIncorrectFeedback = function() {
        showNegativeFeedback();
    };

    function createConfetti() {
        const celebration = document.getElementById('celebration');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            celebration.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    function showPositiveFeedback() {
        const feedbackContainer = document.getElementById('feedback-container');
        const messages = [
            '🎉 Hebat! Jawaban kamu benar!',
            '✨ Luar biasa! Kamu pintar sekali!',
            '🌟 Bagus banget! Terus semangat!',
            '👏 Keren! Kamu memang juara!',
            '🚀 Wow! Jawaban yang tepat!'
        ];
        
        const feedback = document.createElement('div');
        feedback.className = 'feedback correct';
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedbackContainer.innerHTML = '';
        feedbackContainer.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }

    function showNegativeFeedback() {
        const feedbackContainer = document.getElementById('feedback-container');
        const messages = [
            '💪 Tidak apa-apa! Coba lagi ya!',
            '🌈 Belajar itu proses, tetap semangat!',
            '⭐ Bagus sudah mencoba! Mari belajar lagi!',
            '🎯 Hampir benar! Kamu pasti bisa!',
            '🌻 Tidak masalah, yang penting sudah berusaha!'
        ];
        
        const feedback = document.createElement('div');
        feedback.className = 'feedback incorrect';
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedbackContainer.innerHTML = '';
        feedbackContainer.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }

    // Show motivational quotes periodically
    let questionCount = 0;
    window.showMotivationalQuote = function() {
        questionCount++;
        if (questionCount % 5 === 0) { // Show every 5 questions
            const quote = document.getElementById('motivational-quote');
            const quotes = [
                '🌟 Kamu sedang melakukan hal yang luar biasa!',
                '💪 Setiap pertanyaan membuatmu lebih pintar!',
                '🚀 Terus semangat, kamu hampir sampai tujuan!',
                '⭐ Belajar itu petualangan yang seru!',
                '🎯 Kamu adalah bintang yang cemerlang!'
            ];
            quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
            quote.style.display = 'block';
            
            setTimeout(() => {
                quote.style.display = 'none';
            }, 4000);
        }
    };

    // Update score display
    window.updateScore = function(score) {
        document.getElementById('score-display').innerHTML = `🏆 Skor: ${score}`;
    };

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '4') {
            const options = document.querySelectorAll('.option');
            const optionIndex = parseInt(e.key) - 1;
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
        } else if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            if (!nextBtn.disabled) {
                nextBtn.click();
            }
        }
    });
});


// Mulai kuis dengan memuat soal yang benar
loadQuestions();