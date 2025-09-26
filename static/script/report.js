const elements = {
    username: document.getElementById('report-username'),
    container: document.getElementById('report-container'),
    noReport: document.getElementById('no-report'),
    statsSection: document.getElementById('stats-section'),
    totalQuizzes: document.getElementById('total-quizzes'),
    avgScore: document.getElementById('avg-score'),
    bestScore: document.getElementById('best-score')
};

const savedName = localStorage.getItem('quizUsername') || 'Siswa Hebat';
const reports = JSON.parse(localStorage.getItem('learningReportData')) || [];

elements.username.innerHTML = `<i class="fas fa-user"></i> ${savedName}`;

if (reports.length === 0) {
    elements.noReport.style.display = 'block';
} else {
    elements.statsSection.style.display = 'grid';
    
    // Calculate statistics
    const totalQuizzes = reports.length;
    const avgScore = Math.round(reports.reduce((sum, r) => sum + r.percentage, 0) / totalQuizzes);
    const bestScore = Math.max(...reports.map(r => r.percentage));
    
    elements.totalQuizzes.textContent = totalQuizzes;
    elements.avgScore.textContent = avgScore + '%';
    elements.bestScore.textContent = bestScore + '%';

    // Display reports (newest first)
    reports.slice().reverse().forEach(report => {
        const scoreClass = report.percentage >= 85 ? 'score-excellent' :
                            report.percentage >= 70 ? 'score-good' :
                            report.percentage >= 50 ? 'score-okay' : 'score-poor';
        
        const reportHTML = `
            <div class="report-item">
                <div class="report-header">
                    <div class="report-date">
                        <i class="fas fa-calendar"></i> ${report.date} - ${report.time}
                    </div>
                    <div class="report-attempt">
                        <i class="fas fa-redo"></i> Percobaan ke-${report.attempt}
                    </div>
                </div>
                <div class="report-content">
                    <div class="report-info">
                        <h3><i class="fas fa-book"></i> ${report.subject}</h3>
                        <p><i class="fas fa-bookmark"></i> ${report.chapter}</p>
                        <p><i class="fas fa-question-circle"></i> ${report.score} dari ${report.totalQuestions} benar</p>
                    </div>
                    <div class="score-display">
                        <div class="score-circle ${scoreClass}">
                            ${report.percentage}%
                        </div>
                    </div>
                </div>
            </div>
        `;
        elements.container.innerHTML += reportHTML;
    });
}

function clearReport() {
    if (confirm('🗑️ Yakin ingin menghapus semua riwayat belajar?\n\nData yang dihapus tidak bisa dikembalikan lagi.')) {
        localStorage.removeItem('learningReportData');
        window.location.reload();
    }
}
