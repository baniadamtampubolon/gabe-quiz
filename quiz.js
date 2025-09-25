// Mengambil elemen dari HTML
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

// Mulai kuis dengan memuat soal yang benar
loadQuestions();