
const urlParams = new URLSearchParams(window.location.search);
const subjectKey = urlParams.get('subject');

const subjectData = quizData[subjectKey];

const subjectTitleElement = document.getElementById('subject-title');
const chapterListElement = document.getElementById('chapter-list');
const emptyStateElement = document.getElementById('empty-state');
const userGreetingElement = document.getElementById('user-greeting');
const progressFillElement = document.getElementById('progress-fill');

// Tampilkan greeting user
const savedName = localStorage.getItem('quizUsername');
if (savedName) {
    userGreetingElement.innerHTML = `👋 Halo ${savedName}!`;
    userGreetingElement.style.display = 'inline-block';
} else {
    userGreetingElement.style.display = 'none';
}

if (subjectData) {
    // Update title dengan emoji yang sesuai
    const subjectEmoji = subjectKey === 'ipas' ? '🌳' : '🌍';
    subjectTitleElement.innerHTML = `${subjectEmoji} ${subjectData.subjectName}`;
    
    // Set progress bar
    const progressWidth = Math.min((subjectData.chapters.length / 10) * 100, 100);
    progressFillElement.style.setProperty('--progress-width', `${progressWidth}%`);
    
    // Generate chapter descriptions
    const chapterDescriptions = {
        'ipas': [
            'Mari belajar tentang makhluk hidup dan lingkungan sekitar kita! 🦋',
            'Jelajahi keajaiban sistem tubuh manusia dan cara merawatnya 💪',
            'Temukan rahasia tumbuhan dan bagaimana mereka tumbuh 🌱',
            'Pelajari tentang hewan-hewan menarik di dunia 🐯',
            'Pahami cuaca, iklim, dan fenomena alam 🌦️'
        ],
        'bahasa_inggris': [
            'Belajar kata-kata bahasa Inggris yang seru dan mudah! 📝',
            'Mari berkenalan dan menyapa dalam bahasa Inggris 👋',
            'Pelajari nama-nama hewan dalam bahasa Inggris 🐱',
            'Temukan warna-warna indah dalam bahasa Inggris 🌈',
            'Belajar angka dan berhitung dengan bahasa Inggris 🔢'
        ]
    };

    subjectData.chapters.forEach((chapter, index) => {
        // Buat card untuk setiap bab
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';

        // Nomor bab
        const chapterNumber = document.createElement('div');
        chapterNumber.className = 'chapter-number';
        chapterNumber.innerText = `Bab ${index + 1}`;

        // Judul bab
        const chapterTitle = document.createElement('h3');
        chapterTitle.className = 'chapter-title';
        chapterTitle.innerText = chapter.title;

        // Deskripsi bab
        const chapterDescription = document.createElement('p');
        chapterDescription.className = 'chapter-description';
        const descriptions = chapterDescriptions[subjectKey] || [];
        chapterDescription.innerText = descriptions[index] || 'Mari mulai belajar dengan semangat! 🚀';

        // Grup tombol
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        // Tombol "Lihat Materi" (jika tersedia)
        if (chapter.summary && chapter.summary.length > 0) {
            const materialLink = document.createElement('a');
            materialLink.href = `material.html?subject=${subjectKey}&chapter=${index}`;
            materialLink.className = 'btn material-btn';
            materialLink.innerHTML = '<span class="btn-icon">🧠</span>Baca Materi';
            
            // Tambahkan efek klik
            materialLink.addEventListener('click', function(e) {
                this.innerHTML = '<span class="btn-icon">⏳</span>Memuat...';
            });
            
            buttonGroup.appendChild(materialLink);
        }

        // Tombol "Kerjakan Kuis"
        const quizLink = document.createElement('a');
        quizLink.href = `quiz.html?subject=${subjectKey}&chapter=${index}`;
        quizLink.className = 'btn quiz-btn';
        quizLink.innerHTML = '<span class="btn-icon">📝</span>Mulai Kuis';
        
        // Tambahkan efek klik
        quizLink.addEventListener('click', function(e) {
            this.innerHTML = '<span class="btn-icon">⏳</span>Memuat...';
        });
        
        buttonGroup.appendChild(quizLink);
        
        // Susun elemen
        chapterCard.appendChild(chapterNumber);
        chapterCard.appendChild(chapterTitle);
        chapterCard.appendChild(chapterDescription);
        chapterCard.appendChild(buttonGroup);
        
        chapterListElement.appendChild(chapterCard);
    });

    // Tambahkan motivational message
    setTimeout(() => {
        const motivationCard = document.createElement('div');
        motivationCard.style.cssText = `
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            margin-top: 20px;
            color: white;
            font-weight: 700;
            animation: slideUp 0.8s ease-out;
        `;
        motivationCard.innerHTML = `
            <span style="font-size: 2rem; margin-bottom: 10px; display: block;">🎉</span>
            <p style="font-family: 'Fredoka One', cursive; font-size: 1.3rem; margin-bottom: 5px;">Semangat Belajar!</p>
            <p style="font-size: 1rem;">Kamu pasti bisa menyelesaikan semua bab dengan baik! 💪</p>
        `;
        chapterListElement.appendChild(motivationCard);
    }, 1000);
    
} else {
    subjectTitleElement.innerText = '😅 Mata Pelajaran Tidak Ditemukan';
    chapterListElement.style.display = 'none';
    emptyStateElement.style.display = 'block';
    progressFillElement.style.setProperty('--progress-width', '0%');
}

// Tambahkan sound effect (optional - dapat diaktifkan jika diinginkan)
function playClickSound() {
    // Bisa ditambahkan audio click sound di sini
    // const audio = new Audio('click-sound.mp3');
    // audio.play().catch(e => {}); // Handle autoplay policy
}

// Tambahkan event listener untuk semua tombol
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // Efek hover tambahan bisa ditambahkan di sini
    });
    
    btn.addEventListener('click', playClickSound);
});
