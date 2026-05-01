class QuizApp {
    constructor() {
        this.questions = [];
        this.currentIndex = 0;
        this.answers = {};
        this.skipped = new Set();
        this.startTime = null;
        this.totalTime = 0;
        this.timerInterval = null;
        this.isPaused = false;
        this.pausedTime = 0;
        this.hintUsed = new Set();
        this.usedHints = {};
    }

    init() {
        this.questions = JSON.parse(JSON.stringify(quizData));
        this.shuffleQuestions();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => this.startQuiz());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('skipBtn').addEventListener('click', () => this.skipQuestion());
        document.getElementById('hintBtn').addEventListener('click', () => this.showHint());
        document.getElementById('pausePlayBtn').addEventListener('click', () => this.toggleTimer());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakeQuiz());
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());
        document.getElementById('backToResultsBtn').addEventListener('click', () => this.backToResults());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitFillBlank());
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    startQuiz() {
        this.switchScreen('quizScreen');
        this.startTime = Date.now() - this.pausedTime;
        this.startTimer();
        this.showQuestion();
    }

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (!this.isPaused) {
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                this.totalTime = elapsed;
                this.updateTimerDisplay();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const hours = Math.floor(this.totalTime / 3600);
        const minutes = Math.floor((this.totalTime % 3600) / 60);
        const seconds = this.totalTime % 60;
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('timerValue').textContent = timeString;
    }

    toggleTimer() {
        this.isPaused = !this.isPaused;
        const btn = document.getElementById('pausePlayBtn');
        btn.textContent = this.isPaused ? '▶ Resume' : '⏸ Pause';
        if (this.isPaused) {
            this.pausedTime = Date.now() - this.startTime;
        } else {
            this.startTime = Date.now() - this.pausedTime;
        }
    }

    showQuestion() {
        const question = this.questions[this.currentIndex];
        document.getElementById('currentQuestion').textContent = this.currentIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;
        this.updateAnsweredCount();

        document.getElementById('questionText').textContent = question.question;
        document.getElementById('optionsContainer').innerHTML = '';
        document.getElementById('fillBlankContainer').innerHTML = '';
        document.getElementById('hintBtn').disabled = false;
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'none';

        if (question.type === 'mcq') {
            this.showMCQOptions(question);
        } else if (question.type === 'tf') {
            this.showTFOptions(question);
        } else if (question.type === 'fillblank') {
            this.showFillBlank(question);
        }
    }

    showMCQOptions(question) {
        const container = document.getElementById('optionsContainer');
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.style.cursor = 'pointer';  // Make cursor indicate it's clickable
            
            if (this.answers[this.currentIndex] === index) {
                div.classList.add('selected');
            }
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = index;
            input.checked = this.answers[this.currentIndex] === index;
            input.addEventListener('change', () => this.selectAnswer(index));

            const label = document.createElement('label');
            label.textContent = option;

            div.appendChild(input);
            div.appendChild(label);
            
            // Make entire option div clickable - improved version
            div.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                input.checked = true;
                // Trigger change event manually to ensure selectAnswer is called
                input.dispatchEvent(new Event('change', { bubbles: true }));
            });
            
            container.appendChild(div);
        });
    }

    showTFOptions(question) {
        this.showMCQOptions(question);
    }

    showFillBlank(question) {
        const container = document.getElementById('fillBlankContainer');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-blank-input';
        input.placeholder = 'Type your answer here...';
        input.value = this.answers[this.currentIndex] || '';
        input.addEventListener('change', (e) => this.selectAnswer(e.target.value));
        container.appendChild(input);
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    }

    selectAnswer(answer) {
        this.answers[this.currentIndex] = answer;
        this.updateAnsweredCount();
    }

    updateAnsweredCount() {
        let correctCount = 0;
        for (const index in this.answers) {
            const question = this.questions[index];
            if (this.checkAnswer(question, this.answers[index])) {
                correctCount++;
            }
        }
        document.getElementById('answered').textContent = correctCount;
    }

    submitFillBlank() {
        const input = document.querySelector('.fill-blank-input');
        if (input.value.trim()) {
            this.updateAnsweredCount();
            this.nextQuestion();
        } else {
            alert('Please enter an answer');
        }
    }

    skipQuestion() {
        this.skipped.add(this.currentIndex);
        this.nextQuestion();
    }

    nextQuestion() {
        if (this.skipped.has(this.currentIndex) && this.answers[this.currentIndex] !== undefined) {
            this.skipped.delete(this.currentIndex);
        }

        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.completeQuiz();
        }
    }

    showHint() {
        const question = this.questions[this.currentIndex];
        if (question.type === 'fillblank') {
            alert(`💡 Hint: ${question.hint}`);
        } else {
            const options = document.querySelectorAll('.option');
            let eliminated = 0;
            for (let i = 0; i < options.length && eliminated < 2; i++) {
                if (i !== question.correct && !options[i].classList.contains('disabled')) {
                    options[i].classList.add('disabled');
                    eliminated++;
                }
            }
            if (eliminated === 0) {
                alert('All hints already used!');
            }
        }
        this.hintUsed.add(this.currentIndex);
        this.usedHints[this.currentIndex] = true;
        document.getElementById('hintBtn').disabled = true;
    }

    completeQuiz() {
        clearInterval(this.timerInterval);
        const results = this.calculateResults();
        this.showResults(results);
    }

    calculateResults() {
        let correct = 0;
        let incorrect = 0;
        const wrongAnswers = [];

        this.questions.forEach((question, index) => {
            const userAnswer = this.answers[index];
            const isCorrect = this.checkAnswer(question, userAnswer);

            if (userAnswer === undefined) {
                // Skipped
            } else if (isCorrect) {
                correct++;
            } else {
                incorrect++;
                wrongAnswers.push({
                    index: index,
                    question: question,
                    userAnswer: userAnswer,
                    usedHint: this.usedHints[index] || false
                });
            }
        });

        const skipped = this.skipped.size;
        const percentage = Math.round((correct / this.questions.length) * 100);

        return {
            correct,
            incorrect,
            skipped,
            percentage,
            wrongAnswers,
            totalTime: this.totalTime
        };
    }

    checkAnswer(question, userAnswer) {
        if (userAnswer === undefined) return false;

        if (question.type === 'fillblank') {
            return userAnswer.toLowerCase().trim() === question.correct.toLowerCase().trim();
        } else {
            return parseInt(userAnswer) === question.correct;
        }
    }

    showResults(results) {
        this.switchScreen('resultsScreen');
        document.getElementById('finalScore').textContent = results.correct;
        document.getElementById('finalWrong').textContent = results.incorrect;
        document.getElementById('finalSkipped').textContent = results.skipped;
        document.getElementById('finalTime').textContent = this.formatTime(results.totalTime);
        document.getElementById('percentageValue').textContent = results.percentage + '%';

        this.showMemoryTechniques(results.wrongAnswers);
    }

    showMemoryTechniques(wrongAnswers) {
        const container = document.getElementById('wrongAnswersContainer');
        container.innerHTML = '';

        if (wrongAnswers.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #27ae60; font-size: 1.1em;"><strong>Perfect! You got all answers correct! 🎓</strong></p>';
            return;
        }

        wrongAnswers.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'wrong-answer-card';

            const question = item.question;
            const userAnswer = item.userAnswer;
            const correctAnswer = question.correct;

            let userAnswerText = '';
            let correctAnswerText = '';

            if (question.type === 'fillblank') {
                userAnswerText = userAnswer;
                correctAnswerText = correctAnswer;
            } else {
                userAnswerText = question.options[userAnswer] || 'Not answered';
                correctAnswerText = question.options[correctAnswer];
            }

            const mnemonic = this.generateMnemonic(question, userAnswerText, correctAnswerText);

            card.innerHTML = `
                <h4>Question ${idx + 1}: ${question.question}</h4>
                <p><span class="your-answer">✗ Your answer:</span> ${userAnswerText}</p>
                <p><span class="correct-answer">✓ Correct answer:</span> ${correctAnswerText}</p>
                <div class="mnemonic-box">
                    <span class="mnemonic-label">🧠 Memory Trick:</span>
                    ${mnemonic}
                </div>
            `;

            container.appendChild(card);
        });
    }

    generateMnemonic(question, userAnswer, correctAnswer) {
        const mnemonics = [
            `Remember: "${correctAnswer}" is correct. Think about why ${userAnswer} was close but not quite right.`,
            `Key insight: The answer is "${correctAnswer}". Associate it with: ${question.hint}`,
            `Memory hook: "${correctAnswer}" - this relates to the broader theme of ${this.getTheme(question.id)}`,
            `To remember: When you see "${userAnswer}", think "No! It's actually ${correctAnswer}". ${question.hint}`,
            `Visual memory: Imagine the difference between "${userAnswer}" and "${correctAnswer}" - ${question.hint}`
        ];

        return mnemonics[Math.floor(Math.random() * mnemonics.length)];
    }

    getTheme(questionId) {
        if (questionId <= 20) return 'progress and modernity';
        if (questionId <= 45) return 'colonialism and race';
        if (questionId <= 70) return 'language, capitalism, and nations';
        return 'gender, masculinity, and identity';
    }

    showReview() {
        this.switchScreen('reviewScreen');
        const container = document.getElementById('reviewContainer');
        container.innerHTML = '';

        this.questions.forEach((question, index) => {
            const userAnswer = this.answers[index];
            const isCorrect = this.checkAnswer(question, userAnswer);
            const isSkipped = userAnswer === undefined;

            let status = 'skipped';
            if (!isSkipped) status = isCorrect ? 'correct' : 'incorrect';

            const item = document.createElement('div');
            item.className = `review-item ${status}`;

            let userAnswerDisplay = '';
            if (userAnswer !== undefined) {
                if (question.type === 'fillblank') {
                    userAnswerDisplay = `<div class="review-answer"><strong>Your answer:</strong> ${userAnswer}</div>`;
                } else {
                    userAnswerDisplay = `<div class="review-answer"><strong>Your answer:</strong> ${question.options[userAnswer]}</div>`;
                }
            }

            let correctAnswerDisplay = '';
            if (question.type === 'fillblank') {
                correctAnswerDisplay = `<div class="review-answer"><strong>Correct answer:</strong> ${question.correct}</div>`;
            } else {
                correctAnswerDisplay = `<div class="review-answer"><strong>Correct answer:</strong> ${question.options[question.correct]}</div>`;
            }

            const statusIcon = status === 'correct' ? '✓' : status === 'incorrect' ? '✗' : '⊘';
            const statusText = status === 'correct' ? 'Correct' : status === 'incorrect' ? 'Incorrect' : 'Skipped';

            item.innerHTML = `
                <div class="review-question">${statusIcon} Q${index + 1}: ${question.question}</div>
                ${userAnswerDisplay}
                ${isSkipped ? '' : correctAnswerDisplay}
                <div class="review-answer" style="font-size: 0.9em; color: #666; margin-top: 8px;"><strong>Status:</strong> ${statusText}</div>
            `;

            container.appendChild(item);
        });
    }

    backToResults() {
        this.switchScreen('resultsScreen');
    }

    retakeQuiz() {
        this.currentIndex = 0;
        this.answers = {};
        this.skipped = new Set();
        this.totalTime = 0;
        this.pausedTime = 0;
        this.hintUsed = new Set();
        this.usedHints = {};
        this.startTime = null;
        clearInterval(this.timerInterval);
        
        this.init();
        this.startQuiz();
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new QuizApp();
    app.init();
});
