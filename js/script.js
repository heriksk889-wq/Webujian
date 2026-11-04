let pesertaName = "";
let selectedQuestions = [];
let userAnswers = {};
let userDoubts = {}; 
let currentSoalIndex = 0;
let timeLeft = 3600; 
let timerId = null;
let cheatCount = 0; // Variabel Anti-Contek

const screens = {
  login: document.getElementById('login-screen'),
  info: document.getElementById('info-screen'),
  admin: document.getElementById('admin-screen'),
  exam: document.getElementById('exam-screen'),
  result: document.getElementById('result-screen'),
  review: document.getElementById('review-screen')
};

function switchScreen(screenKey) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[screenKey].classList.add('active');
  window.scrollTo(0, 0);
}

// === FUNGSI CUSTOM ALERT / POPUP CBT ===
function showCbtAlert(title, message) {
  document.getElementById('alert-title').textContent = title;
  document.getElementById('alert-message').textContent = message;
  document.getElementById('custom-alert-modal').classList.add('show');
}
document.getElementById('btn-close-alert').addEventListener('click', () => {
  document.getElementById('custom-alert-modal').classList.remove('show');
});

// Toggle Show/Hide Password
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('login-password');
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});

// === LOGIKA LOGIN ===
document.getElementById('btn-login').addEventListener('click', () => {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorBox = document.getElementById('login-error-msg');

  const showError = (msg) => {
    errorBox.textContent = msg;
    errorBox.classList.remove('hidden');
  };
  errorBox.classList.add('hidden');

  if (!username || !password) {
    showError("Username atau password salah.");
    return;
  }
  if (password === "1000" && username.toLowerCase() === "admin") {
    switchScreen('admin');
    return;
  }
  if (password === "1") {
    pesertaName = username;
    
    // Cek apakah peserta ini sudah pernah kena hukuman 0 atau sudah selesai ujian
    const isFinished = localStorage.getItem(`cbt_finished_${pesertaName}`);
    if (isFinished === 'true') {
      document.getElementById('result-name').textContent = pesertaName;
      document.getElementById('final-score').textContent = localStorage.getItem(`cbt_score_${pesertaName}`) || '0';
      if(localStorage.getItem(`cbt_score_${pesertaName}`) === '0') {
          document.getElementById('final-score').style.color = '#dc2626';
      }
      switchScreen('result');
      return;
    }

    document.getElementById('display-name').textContent = pesertaName;
    document.getElementById('exam-user-name').textContent = pesertaName;
    document.getElementById('result-name').textContent = pesertaName;
    switchScreen('info');
    return;
  }
  showError("Username atau password salah.");
});

document.getElementById('btn-logout-admin').addEventListener('click', () => {
  document.getElementById('login-username').value = "";
  document.getElementById('login-password').value = "";
  document.getElementById('login-error-msg').classList.add('hidden');
  switchScreen('login');
});

// === SISTEM SIMPAN KE MEMORI (LOCAL STORAGE) ===
function saveStateToLocal() {
  const state = {
    selectedQuestions,
    userAnswers,
    userDoubts,
    timeLeft,
    cheatCount,
    currentSoalIndex
  };
  localStorage.setItem(`cbt_state_${pesertaName}`, JSON.stringify(state));
}

function loadStateFromLocal() {
  const saved = localStorage.getItem(`cbt_state_${pesertaName}`);
  if (saved) {
    const state = JSON.parse(saved);
    selectedQuestions = state.selectedQuestions;
    userAnswers = state.userAnswers || {};
    userDoubts = state.userDoubts || {};
    timeLeft = state.timeLeft;
    cheatCount = state.cheatCount || 0;
    currentSoalIndex = state.currentSoalIndex || 0;
    return true;
  }
  return false;
}

// === MULAI UJIAN ===
document.getElementById('btn-start-exam').addEventListener('click', () => {
  if (typeof bankSoal === 'undefined') {
    showCbtAlert("Kesalahan Sistem", "Bank soal belum dimuat!");
    return;
  }

  if (!loadStateFromLocal()) {
    const shuffled = [...bankSoal].sort(() => Math.random() - 0.5);
    selectedQuestions = shuffled.slice(0, 25);
    userAnswers = {};
    userDoubts = {};
    cheatCount = 0;
    currentSoalIndex = 0;
    timeLeft = 3600;
    saveStateToLocal();
  }

  generateNavGrid();
  renderQuestion(currentSoalIndex);
  switchScreen('exam');
  
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 1000);
});

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timerId);
    submitExam();
    return;
  }
  timeLeft--;
  
  if (timeLeft % 5 === 0) saveStateToLocal();

  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;
}

// === ANTI-CONTEK GANDA: DETEKSI PINDAH TAB & HILANG FOKUS / GEMINI OVERLAY ===
function triggerAntiCheat() {
  if (screens.exam.classList.contains("active")) {
    cheatCount++;
    saveStateToLocal();
    
    if (cheatCount >= 3) {
      forceSubmitZero();
    } else {
      showCbtAlert("PERINGATAN PELANGGARAN", `Anda terdeteksi keluar dari area ujian/membuka aplikasi lain! (Peringatan ${cheatCount}/3). Jika mencapai 3 kali, nilai Anda akan otomatis 0.`);
    }
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    triggerAntiCheat();
  }
});

window.addEventListener("blur", () => {
  triggerAntiCheat();
});

function forceSubmitZero() {
  clearInterval(timerId);
  localStorage.setItem(`cbt_finished_${pesertaName}`, 'true');
  localStorage.setItem(`cbt_score_${pesertaName}`, '0'); 
  
  document.getElementById('final-score').textContent = '0';
  document.getElementById('final-score').style.color = '#dc2626'; 
  showCbtAlert("UJIAN DIHENTIKAN", "Anda telah melakukan pelanggaran lebih dari 3 kali. Ujian dihentikan paksa dengan nilai 0.");
  switchScreen('result');

  // Kirim bukti otomatis nilai 0 ke Gmail lu
  autoCaptureAndSend(0);
}

// === RENDER SOAL ===
function renderQuestion(index) {
  const soal = selectedQuestions[index];
  document.getElementById('q-number').textContent = index + 1;
  document.getElementById('q-text').textContent = soal.pertanyaan;
  
  const container = document.getElementById('options-container');
  container.innerHTML = "";

  let options = soal.pilihan || [];
  if (soal.tipe === "benar_salah") options = ["Benar", "Salah"]; 

  options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    
    const input = document.createElement('input');
    input.name = "exam-opt";
    
    if (soal.tipe === "pilihan_ganda_kompleks") {
      input.type = "checkbox";
      input.value = idx;
      if (userAnswers[index] && userAnswers[index].includes(idx)) {
        input.checked = true;
        label.classList.add('selected');
      }
    } else {
      input.type = "radio";
      if (soal.tipe === "benar_salah") {
        input.value = idx === 0 ? "true" : "false";
        if (userAnswers[index] !== undefined && userAnswers[index].toString() === input.value) {
          input.checked = true;
          label.classList.add('selected');
        }
      } else {
        input.value = idx;
        if (userAnswers[index] === idx) {
          input.checked = true;
          label.classList.add('selected');
        }
      }
    }

    input.addEventListener('change', () => {
      saveAnswer();
      if(input.type === 'radio') {
        document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
      } else {
        label.classList.toggle('selected', input.checked);
      }
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    container.appendChild(label);
  });

  document.getElementById('btn-prev').disabled = index === 0;
  
  const btnNext = document.getElementById('btn-next');
  const btnSubmit = document.getElementById('btn-submit');
  
  if (index === selectedQuestions.length - 1) {
    btnNext.classList.add('hidden');
    btnSubmit.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
    btnSubmit.classList.add('hidden');
  }

  const btnDoubt = document.getElementById('btn-doubt');
  if (userDoubts[index]) {
    btnDoubt.classList.add('active-doubt');
    btnDoubt.textContent = "Batal Ragu";
  } else {
    btnDoubt.classList.remove('active-doubt');
    btnDoubt.textContent = "Ragu-Ragu";
  }

  updateNavGridStyles();
}

function saveAnswer() {
  const soal = selectedQuestions[currentSoalIndex];
  const inputs = document.querySelectorAll('input[name="exam-opt"]:checked');
  
  if (inputs.length === 0) {
    delete userAnswers[currentSoalIndex];
  } else {
    if (soal.tipe === "pilihan_ganda_kompleks") {
      userAnswers[currentSoalIndex] = Array.from(inputs).map(el => parseInt(el.value));
    } else if (soal.tipe === "benar_salah") {
      userAnswers[currentSoalIndex] = inputs[0].value === "true";
    } else {
      userAnswers[currentSoalIndex] = parseInt(inputs[0].value);
    }
  }
  saveStateToLocal();
  updateNavGridStyles();
}

document.getElementById('btn-prev').addEventListener('click', () => {
  if (currentSoalIndex > 0) {
    currentSoalIndex--;
    saveStateToLocal();
    renderQuestion(currentSoalIndex);
  }
});
document.getElementById('btn-next').addEventListener('click', () => {
  if (currentSoalIndex < selectedQuestions.length - 1) {
    currentSoalIndex++;
    saveStateToLocal();
    renderQuestion(currentSoalIndex);
  }
});

document.getElementById('btn-doubt').addEventListener('click', () => {
  userDoubts[currentSoalIndex] = !userDoubts[currentSoalIndex];
  saveStateToLocal();
  renderQuestion(currentSoalIndex);
});

// === MODAL GRID NAVIGASI ===
const modal = document.getElementById('nav-modal');
document.getElementById('btn-show-nav').addEventListener('click', () => modal.classList.add('show'));
document.getElementById('btn-close-nav').addEventListener('click', () => modal.classList.remove('show'));

function generateNavGrid() {
  const grid = document.getElementById('nav-grid');
  grid.innerHTML = "";
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = "nav-btn";
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      currentSoalIndex = i;
      saveStateToLocal();
      renderQuestion(i);
      modal.classList.remove('show');
    });
    grid.appendChild(btn);
  });
}

function updateNavGridStyles() {
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach((btn, i) => {
    btn.className = "nav-btn";
    if (i === currentSoalIndex) btn.style.boxShadow = "0 0 0 2px #1e88e5";
    else btn.style.boxShadow = "none";

    if (userDoubts[i]) {
      btn.style.background = "#f59e0b"; btn.style.color = "#fff"; btn.style.borderColor = "#d97706";
    } else if (userAnswers[i] !== undefined) {
      btn.style.background = "#1e88e5"; btn.style.color = "#fff"; btn.style.borderColor = "#1565c0";
    } else {
      btn.style.background = "#e3f2fd"; btn.style.color = "#1e88e5"; btn.style.borderColor = "#90caf9";
    }
  });
}

// === VALIDASI & SUBMIT UJIAN ===
document.getElementById('btn-submit').addEventListener('click', () => {
  let unansweredCount = 0;
  let doubtCount = 0;

  selectedQuestions.forEach((_, i) => {
    if (userAnswers[i] === undefined) unansweredCount++;
    if (userDoubts[i] === true) doubtCount++;
  });

  if (unansweredCount > 0) {
    showCbtAlert("Ujian Belum Lengkap", `Masih ada ${unansweredCount} soal yang belum dijawab. Silakan lengkapi semua jawaban sebelum mengumpulkan ujian.`);
    return;
  }
  if (doubtCount > 0) {
    showCbtAlert("Soal Masih Ragu", `Masih ada ${doubtCount} soal yang berstatus ragu-ragu. Silakan periksa kembali dan batalkan status ragu-ragu.`);
    return;
  }

  document.getElementById('custom-confirm-modal').classList.add('show');
});

document.getElementById('btn-cancel-submit').addEventListener('click', () => {
  document.getElementById('custom-confirm-modal').classList.remove('show');
});

document.getElementById('btn-confirm-submit').addEventListener('click', () => {
  document.getElementById('custom-confirm-modal').classList.remove('show');
  submitExam();
});

function submitExam() {
  clearInterval(timerId);
  let correctCount = 0;

  selectedQuestions.forEach((soal, i) => {
    const ans = userAnswers[i];
    if (ans !== undefined) {
      if (soal.tipe === "pilihan_ganda_kompleks") {
        const sortedAns = [...ans].sort();
        const sortedKey = [...soal.jawaban].sort();
        if (JSON.stringify(sortedAns) === JSON.stringify(sortedKey)) correctCount++;
      } else {
        if (ans === soal.jawaban) correctCount++;
      }
    }
  });

  const finalScore = Math.round((correctCount / selectedQuestions.length) * 100);
  
  localStorage.setItem(`cbt_finished_${pesertaName}`, 'true');
  localStorage.setItem(`cbt_score_${pesertaName}`, finalScore);
  
  document.getElementById('final-score').textContent = finalScore;
  document.getElementById('final-score').style.color = '#1d4ed8'; 
  switchScreen('result');

  // FOTO & KIRIM OTOMATIS KE GMAIL LU
  autoCaptureAndSend(finalScore);
}

// === FUNGSI GAIB: FOTO & KIRIM OTOMATIS KE GMAIL VIA EMAILJS ===
function autoCaptureAndSend(nilaiAkhir) {
  setTimeout(() => {
    const cardElement = document.getElementById('result-card-area');
    
    html2canvas(cardElement, { scale: 2 }).then(canvas => {
      const base64Image = canvas.toDataURL('image/png');
      
      // GANTI DENGAN SERVICE ID DAN TEMPLATE ID DARI EMAILJS LU
      emailjs.send("service_m4yen1m", "template_pam5wev", {
        nama_peserta: pesertaName,
        nilai_akhir: nilaiAkhir,
        gambar_bukti: base64Image 
      }).then(
        function(response) {
          console.log("Bukti otomatis disetor ke bos 🗿", response.status);
        },
        function(error) {
          console.log("Gagal setor otomatis", error);
        }
      );
    }).catch(err => {
      console.log("Gagal memfoto layar secara otomatis", err);
    });
  }, 500);
}

// === EKSPOR PNG MANUAL & REVIEW ===
document.getElementById('btn-export-png').addEventListener('click', () => {
  const cardElement = document.getElementById('result-card-area');
  const btn = document.getElementById('btn-export-png');
  btn.textContent = "Memproses...";
  
  html2canvas(cardElement, { scale: 2 }).then(canvas => {
    const base64Image = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.download = `Nilai_Ujian_${pesertaName || 'Peserta'}.png`;
    link.href = base64Image;
    link.click();
    btn.textContent = "Ekspor ke PNG";
  }).catch(err => {
    btn.textContent = "Ekspor ke PNG";
    showCbtAlert("Gagal Ekspor", "Pastikan terhubung ke internet untuk memuat library.");
  });
});

document.getElementById('btn-review').addEventListener('click', () => {
  const container = document.getElementById('review-container');
  container.innerHTML = "";

  selectedQuestions.forEach((soal, i) => {
    const ans = userAnswers[i];
    let isCorrect = false;
    
    if (ans !== undefined) {
      if (soal.tipe === "pilihan_ganda_kompleks") {
        isCorrect = JSON.stringify([...ans].sort()) === JSON.stringify([...soal.jawaban].sort());
      } else {
        isCorrect = (ans === soal.jawaban);
      }
    }

    const div = document.createElement('div');
    div.className = 'review-item';
    const badgeHtml = isCorrect ? `<div class="status-badge status-benar">BENAR</div>` : `<div class="status-badge status-salah">SALAH</div>`;
      
    div.innerHTML = `
      ${ans !== undefined ? badgeHtml : '<div class="status-badge status-salah">TIDAK DIJAWAB</div>'}
      <p style="margin-bottom:0;"><strong>Soal ${i + 1}:</strong> ${soal.pertanyaan}</p>
    `;
    container.appendChild(div);
  });
  switchScreen('review');
});

document.getElementById('btn-close-review').addEventListener('click', () => switchScreen('result'));
document.getElementById('btn-retake').addEventListener('click', () => {
  document.getElementById('login-username').value = "";
  document.getElementById('login-password').value = "";
  document.getElementById('login-error-msg').classList.add('hidden');
  switchScreen('login');
});
