// ==========================================
// BAGIAN 1: LOGIKA ACCORDION (Untuk index.html)
// ==========================================
const buttons = document.querySelectorAll(".accordion-btn");

if (buttons.length > 0) { 
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Tutup yang lain
      buttons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("active");
          const otherContent = otherBtn.nextElementSibling;
          otherContent.classList.remove("active"); 
          otherContent.style.maxHeight = null;
        }
      });

      // Toggle yang diklik
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;
      content.classList.toggle("active");

      if (btn.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + 50 + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
}

// ==========================================
// BAGIAN 2: LOGIKA KUIS (Untuk quiz.html)
// ==========================================
const startButton = document.getElementById('start-btn');

if (startButton) {
  
  // --- DATABASE 20 SOAL LENGKAP ---
  const questions = [
    { 
      question: "Apa definisi yang paling tepat dari Algoritma?", 
      answers: [
        { text: "Memperbaiki komputer", correct: false }, 
        { text: "Langkah logis penyelesaian masalah", correct: true }, 
        { text: "Bahasa robot", correct: false }, 
        { text: "Kode mesin", correct: false }
      ] 
    },
    { 
      question: "Jika Algoritma adalah 'Resep', maka Pemrograman adalah...", 
      answers: [
        { text: "Membeli bahan", correct: false }, 
        { text: "Memakan masakan", correct: false }, 
        { text: "Kegiatan memasak (eksekusi)", correct: true }, 
        { text: "Menjual makanan", correct: false }
      ] 
    },
    { 
      question: "Tanda pengganti kurung kurawal {} di Python adalah?", 
      answers: [
        { text: "Titik Koma ;", correct: false }, 
        { text: "Indentasi (Spasi)", correct: true }, 
        { text: "Tanda Pagar #", correct: false }, 
        { text: "Tanda Kurung ()", correct: false }
      ] 
    },
    { 
      question: "Simbol untuk membuat komentar di Python?", 
      answers: [
        { text: "//", correct: false }, 
        { text: "/* */", correct: false }, 
        { text: "#", correct: true }, 
        { text: "", correct: false }
      ] 
    },
    { 
      question: "Python bersifat Case Sensitive, artinya...", 
      answers: [
        { text: "Huruf besar/kecil dianggap sama", correct: false }, 
        { text: "Huruf besar/kecil dibedakan", correct: true }, 
        { text: "Harus huruf besar semua", correct: false }, 
        { text: "Harus huruf kecil semua", correct: false }
      ] 
    },
    { 
      question: "Penulisan variabel yang BENAR di Python?", 
      answers: [
        { text: "1nama = 'Budi'", correct: false }, 
        { text: "nama user = 'Budi'", correct: false }, 
        { text: "nama-user = 'Budi'", correct: false }, 
        { text: "nama_user = 'Budi'", correct: true }
      ] 
    },
    { 
      question: "Tipe data untuk bilangan desimal (3.14) adalah?", 
      answers: [
        { text: "int", correct: false }, 
        { text: "float", correct: true }, 
        { text: "str", correct: false }, 
        { text: "bool", correct: false }
      ] 
    },
    { 
      question: "Tipe data dari: status = True", 
      answers: [
        { text: "String", correct: false }, 
        { text: "Boolean", correct: true }, 
        { text: "Integer", correct: false }, 
        { text: "Float", correct: false }
      ] 
    },
    { 
      question: "Perintah untuk menampilkan output ke layar?", 
      answers: [
        { text: "echo()", correct: false }, 
        { text: "console.log()", correct: false }, 
        { text: "print()", correct: true }, 
        { text: "printf()", correct: false }
      ] 
    },
    { 
      question: "Fitur f pada: print(f'Halo {nama}') disebut?", 
      answers: [
        { text: "f-string", correct: true }, 
        { text: "function string", correct: false }, 
        { text: "format text", correct: false }, 
        { text: "fast string", correct: false }
      ] 
    },
    { 
      question: "Hasil dari: 10 + 5 * 2", 
      answers: [
        { text: "30", correct: false }, 
        { text: "20", correct: true }, 
        { text: "25", correct: false }, 
        { text: "15", correct: false }
      ] 
    },
    { 
      question: "Operator untuk mencari sisa bagi (modulus)?", 
      answers: [
        { text: "/", correct: false }, 
        { text: "//", correct: false }, 
        { text: "%", correct: true }, 
        { text: "**", correct: false }
      ] 
    },
    { 
      question: "Hasil pembagian bulat: 10 // 3", 
      answers: [
        { text: "3.33", correct: false }, 
        { text: "3", correct: true }, 
        { text: "1", correct: false }, 
        { text: "10", correct: false }
      ] 
    },
    { 
      question: "Simbol operator pangkat di Python?", 
      answers: [
        { text: "^", correct: false }, 
        { text: "xx", correct: false }, 
        { text: "pow", correct: false }, 
        { text: "**", correct: true }
      ] 
    },
    { 
      question: "Kata kunci kondisi kedua jika 'if' salah?", 
      answers: [
        { text: "else", correct: false }, 
        { text: "elif", correct: true }, 
        { text: "second", correct: false }, 
        { text: "elseif", correct: false }
      ] 
    },
    { 
      question: "Output jika nilai=80 dan if nilai > 70?", 
      answers: [
        { text: "True", correct: false }, 
        { text: "Lulus / Jalan", correct: true }, 
        { text: "False", correct: false }, 
        { text: "Error", correct: false }
      ] 
    },
    { 
      question: "Fungsi blok 'else' adalah?", 
      answers: [
        { text: "Kondisi pertama", correct: false }, 
        { text: "Pilihan terakhir jika semua salah", correct: true }, 
        { text: "Mengulang", correct: false }, 
        { text: "Kondisi kedua", correct: false }
      ] 
    },
    { 
      question: "Hasil dari: 20 % 3", 
      answers: [
        { text: "6", correct: false }, 
        { text: "0", correct: false }, 
        { text: "2", correct: true }, 
        { text: "1", correct: false }
      ] 
    },
    { 
      question: "Jika a=5 (int) dikali 2, hasilnya?", 
      answers: [
        { text: "10", correct: true }, 
        { text: "55", correct: false }, 
        { text: "Error", correct: false }, 
        { text: "7", correct: false }
      ] 
    },
    { 
      question: "Kondisi if dijalankan ketika nilainya...", 
      answers: [
        { text: "False", correct: false }, 
        { text: "True (Benar)", correct: true }, 
        { text: "Null", correct: false }, 
        { text: "0", correct: false }
      ] 
    }
  ];

  // --- ELEMENT SELEKTOR ---
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  
  const questionText = document.getElementById('question-text');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const questionCounter = document.getElementById('question-counter');
  const scoreLive = document.getElementById('score-live');
  const progressBar = document.getElementById('progress-bar');
  const finalScoreElement = document.getElementById('final-score');
  const resultMessage = document.getElementById('result-message');
  const restartButton = document.getElementById('restart-btn');

  let shuffledQuestions, currentQuestionIndex, score;

  // --- EVENT LISTENERS ---
  startButton.addEventListener('click', startQuiz);
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      setNextQuestion();
    } else {
      showResult();
    }
  });

  restartButton.addEventListener('click', startQuiz);

  // --- FUNGSI UTAMA ---

  function startQuiz() {
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
    questionCounter.innerText = `Soal ${currentQuestionIndex + 1} / ${questions.length}`;
    scoreLive.innerText = `Skor: ${score}`;
    
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    nextButton.innerText = "Lanjut";
  }

  function showQuestion(question) {
    questionText.innerText = question.question;
    
    // Efek Fade In
    questionText.style.animation = 'none';
    questionText.offsetHeight; 
    questionText.style.animation = 'fadeIn 0.5s';

    const answers = question.answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn-option');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  // --- HANYA ADA SATU FUNGSI selectAnswer (Yang Benar) ---
  function selectAnswer(e) {
    const selectedButton = e.target;
    
    // 1. Tandai tombol yang diklik user (Agar CSS Border Biru muncul)
    selectedButton.classList.add("selected"); 
    
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
      score += 5;
      scoreLive.innerText = `Skor: ${score}`;
    }

    // 2. Tampilkan Warna Hijau/Merah pada semua tombol
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
      button.disabled = true; // Kunci tombol
    });

    nextButton.classList.remove('hide');

    if (currentQuestionIndex === questions.length - 1) {
      nextButton.innerText = "Lihat Nilai Akhir";
      progressBar.style.width = "100%";
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  function showResult() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    let startScore = 0;
    const duration = 1000;
    const increment = score > 0 ? Math.ceil(score / (duration / 16)) : 0;
    
    const timer = setInterval(() => {
        startScore += increment;
        if (startScore >= score) {
            startScore = score;
            clearInterval(timer);
        }
        finalScoreElement.innerText = startScore;
    }, 16);

    if (score === 100) {
      resultMessage.innerText = "Sempurna! Kamu jago coding!";
    } else if (score >= 70) {
      resultMessage.innerText = "Hebat! Pemahamanmu sudah bagus.";
    } else {
      resultMessage.innerText = "Tetap semangat! Coba pelajari materi lagi.";
    }
  }
}