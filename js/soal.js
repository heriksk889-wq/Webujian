// ============================================================
// BANK SOAL MATEMATIKA TINGKAT LANJUT (100 SOAL)
// Format: JavaScript - siap pakai untuk aplikasi kuis
// ============================================================

const bankSoal = [

  // ==========================================================
  // BAGIAN 1: PILIHAN GANDA (Soal 1-50)
  // Pilih SATU jawaban yang paling tepat
  // ==========================================================

  { id: 1, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari lim(x→0) sin(3x)/x adalah...",
    pilihan: ["0", "1", "2", "3"],
    jawaban: 3,
    pembahasan: "lim(x→0) sin(3x)/x = 3 · lim(x→0) sin(3x)/(3x) = 3·1 = 3" },

  { id: 2, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari f(x) = x⁴ adalah...",
    pilihan: ["x³", "3x³", "4x³", "4x⁴"],
    jawaban: 2,
    pembahasan: "Aturan pangkat: d/dx(xⁿ) = n·xⁿ⁻¹ → d/dx(x⁴) = 4x³" },

  { id: 3, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ 3x² dx adalah...",
    pilihan: ["x³ + C", "3x³ + C", "6x + C", "x² + C"],
    jawaban: 0,
    pembahasan: "∫3x² dx = 3·(x³/3) + C = x³ + C" },

  { id: 4, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari i⁴ (i = satuan imajiner) adalah...",
    pilihan: ["-1", "0", "1", "i"],
    jawaban: 2,
    pembahasan: "i² = -1, maka i⁴ = (i²)² = (-1)² = 1" },

  { id: 5, tipe: "pilihan_ganda",
    pertanyaan: "Determinan matriks [[2,3],[1,4]] adalah...",
    pilihan: ["5", "8", "11", "-5"],
    jawaban: 0,
    pembahasan: "det = 2·4 - 3·1 = 8 - 3 = 5" },

  { id: 6, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→∞) (2x²+3)/(x²-1) adalah...",
    pilihan: ["0", "1", "2", "∞"],
    jawaban: 2,
    pembahasan: "Bagi pembilang & penyebut dengan x²: (2+3/x²)/(1-1/x²) → 2/1 = 2" },

  { id: 7, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari cos x adalah...",
    pilihan: ["sin x", "-sin x", "cos x", "-cos x"],
    jawaban: 1,
    pembahasan: "d/dx(cos x) = -sin x" },

  { id: 8, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ (1/x) dx adalah...",
    pilihan: ["x² + C", "ln|x| + C", "-1/x² + C", "e^x + C"],
    jawaban: 1,
    pembahasan: "∫(1/x)dx = ln|x| + C" },

  { id: 9, tipe: "pilihan_ganda",
    pertanyaan: "Nilai sin(π/6) adalah...",
    pilihan: ["0", "1/2", "√2/2", "√3/2"],
    jawaban: 1,
    pembahasan: "sin(π/6) = sin 30° = 1/2" },

  { id: 10, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari e^(2x) adalah...",
    pilihan: ["e^(2x)", "2e^(2x)", "2xe^(2x)", "e^(2x)/2"],
    jawaban: 1,
    pembahasan: "Aturan rantai: d/dx(e^(2x)) = e^(2x)·2 = 2e^(2x)" },

  { id: 11, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari ∫₀¹ x dx adalah...",
    pilihan: ["1/4", "1/3", "1/2", "1"],
    jawaban: 2,
    pembahasan: "∫₀¹ x dx = [x²/2]₀¹ = 1/2 - 0 = 1/2" },

  { id: 12, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari log₂(8) adalah...",
    pilihan: ["2", "3", "4", "8"],
    jawaban: 1,
    pembahasan: "2³ = 8, sehingga log₂(8) = 3" },

  { id: 13, tipe: "pilihan_ganda",
    pertanyaan: "Modulus dari bilangan kompleks 3+4i adalah...",
    pilihan: ["3", "4", "5", "7"],
    jawaban: 2,
    pembahasan: "|3+4i| = √(3²+4²) = √(9+16) = √25 = 5" },

  { id: 14, tipe: "pilihan_ganda",
    pertanyaan: "Jumlah 10 bilangan asli pertama (1+2+...+10) adalah...",
    pilihan: ["45", "50", "55", "60"],
    jawaban: 2,
    pembahasan: "S₁₀ = 10·11/2 = 55" },

  { id: 15, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→0) (1-cos x)/x² adalah...",
    pilihan: ["0", "1/4", "1/2", "1"],
    jawaban: 2,
    pembahasan: "Gunakan identitas 1-cos x = 2sin²(x/2), sehingga limit = 1/2" },

  { id: 16, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari tan x adalah...",
    pilihan: ["sec x", "sec² x", "csc² x", "cot x"],
    jawaban: 1,
    pembahasan: "d/dx(tan x) = sec² x" },

  { id: 17, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ cos x dx adalah...",
    pilihan: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    jawaban: 0,
    pembahasan: "∫cos x dx = sin x + C" },

  { id: 18, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari e^(iπ) adalah...",
    pilihan: ["0", "1", "-1", "i"],
    jawaban: 2,
    pembahasan: "Identitas Euler: e^(iπ) = cos π + i·sin π = -1 + 0 = -1" },

  { id: 19, tipe: "pilihan_ganda",
    pertanyaan: "Determinan matriks [[1,2,3],[4,5,6],[7,8,10]] adalah...",
    pilihan: ["-3", "0", "3", "6"],
    jawaban: 0,
    pembahasan: "det = 1(50-48) - 2(40-42) + 3(32-35) = 2+4-9 = -3" },

  { id: 20, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→2) (x²-4)/(x-2) adalah...",
    pilihan: ["0", "2", "4", "∞"],
    jawaban: 2,
    pembahasan: "Faktorkan: (x-2)(x+2)/(x-2) = x+2 → 4" },

  { id: 21, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari x·ln x adalah...",
    pilihan: ["ln x", "ln x + 1", "1/x", "x + ln x"],
    jawaban: 1,
    pembahasan: "Aturan produk: 1·ln x + x·(1/x) = ln x + 1" },

  { id: 22, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari ∫₀^π sin x dx adalah...",
    pilihan: ["0", "1", "2", "π"],
    jawaban: 2,
    pembahasan: "[-cos x]₀^π = -cos π + cos 0 = 1 + 1 = 2" },

  { id: 23, tipe: "pilihan_ganda",
    pertanyaan: "Nilai dari √(-16) adalah...",
    pilihan: ["-4", "4i", "-4i", "4"],
    jawaban: 1,
    pembahasan: "√(-16) = √16 · √(-1) = 4i" },

  { id: 24, tipe: "pilihan_ganda",
    pertanyaan: "Banyak susunan berbeda dari huruf A, B, C adalah...",
    pilihan: ["3", "6", "9", "27"],
    jawaban: 1,
    pembahasan: "Permutasi 3 huruf: 3! = 3·2·1 = 6" },

  { id: 25, tipe: "pilihan_ganda",
    pertanyaan: "Peluang muncul angka pada pelemparan satu koin adalah...",
    pilihan: ["1/4", "1/3", "1/2", "1"],
    jawaban: 2,
    pembahasan: "Ruang sampel {angka, gambar}, P(angka) = 1/2" },

  { id: 26, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari √x adalah...",
    pilihan: ["1/√x", "1/(2√x)", "2√x", "√x/2"],
    jawaban: 1,
    pembahasan: "d/dx(x^(1/2)) = (1/2)x^(-1/2) = 1/(2√x)" },

  { id: 27, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ e^(3x) dx adalah...",
    pilihan: ["e^(3x) + C", "3e^(3x) + C", "(1/3)e^(3x) + C", "e^(3x)/3x + C"],
    jawaban: 2,
    pembahasan: "∫e^(3x)dx = (1/3)e^(3x) + C" },

  { id: 28, tipe: "pilihan_ganda",
    pertanyaan: "Nilai cos(π) adalah...",
    pilihan: ["0", "1", "-1", "π"],
    jawaban: 2,
    pembahasan: "cos(π) = cos 180° = -1" },

  { id: 29, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→0) (e^x - 1)/x adalah...",
    pilihan: ["0", "1", "e", "∞"],
    jawaban: 1,
    pembahasan: "Limit standar: lim(x→0)(e^x-1)/x = 1" },

  { id: 30, tipe: "pilihan_ganda",
    pertanyaan: "Determinan matriks identitas 2×2 adalah...",
    pilihan: ["0", "1", "2", "-1"],
    jawaban: 1,
    pembahasan: "det(I₂) = 1·1 - 0·0 = 1" },

  { id: 31, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari arctan x adalah...",
    pilihan: ["1/x", "1/(1+x²)", "1/√(1-x²)", "sec² x"],
    jawaban: 1,
    pembahasan: "d/dx(arctan x) = 1/(1+x²)" },

  { id: 32, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ (2x+1) dx adalah...",
    pilihan: ["x² + x + C", "2x² + x + C", "x² + C", "2x + C"],
    jawaban: 0,
    pembahasan: "∫(2x+1)dx = x² + x + C" },

  { id: 33, tipe: "pilihan_ganda",
    pertanyaan: "Jumlah deret geometri tak hingga 1 + 1/2 + 1/4 + ... adalah...",
    pilihan: ["1", "3/2", "2", "∞"],
    jawaban: 2,
    pembahasan: "S∞ = a/(1-r) = 1/(1-1/2) = 2" },

  { id: 34, tipe: "pilihan_ganda",
    pertanyaan: "Nilai (1+i)² adalah...",
    pilihan: ["2", "2i", "1+2i", "-2i"],
    jawaban: 1,
    pembahasan: "(1+i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i" },

  { id: 35, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→1) (x²-1)/(x-1) adalah...",
    pilihan: ["0", "1", "2", "∞"],
    jawaban: 2,
    pembahasan: "(x-1)(x+1)/(x-1) = x+1 → 2" },

  { id: 36, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari x^x adalah...",
    pilihan: ["x^x", "x·x^(x-1)", "x^x(ln x + 1)", "x^x ln x"],
    jawaban: 2,
    pembahasan: "Logaritma: ln y = x ln x → y'/y = ln x + 1 → y' = x^x(ln x+1)" },

  { id: 37, tipe: "pilihan_ganda",
    pertanyaan: "Nilai ∫₁² (1/x) dx adalah...",
    pilihan: ["1", "ln 2", "e", "2"],
    jawaban: 1,
    pembahasan: "[ln x]₁² = ln 2 - ln 1 = ln 2" },

  { id: 38, tipe: "pilihan_ganda",
    pertanyaan: "Nilai tan(π/4) adalah...",
    pilihan: ["0", "1/2", "1", "√3"],
    jawaban: 2,
    pembahasan: "tan(π/4) = tan 45° = 1" },

  { id: 39, tipe: "pilihan_ganda",
    pertanyaan: "Nilai C(5,2) adalah...",
    pilihan: ["5", "10", "20", "25"],
    jawaban: 1,
    pembahasan: "C(5,2) = 5!/(2!·3!) = 120/(2·6) = 10" },

  { id: 40, tipe: "pilihan_ganda",
    pertanyaan: "Rata-rata data {2,4,6,8,10} adalah...",
    pilihan: ["4", "5", "6", "7"],
    jawaban: 2,
    pembahasan: "Mean = (2+4+6+8+10)/5 = 30/5 = 6" },

  { id: 41, tipe: "pilihan_ganda",
    pertanyaan: "Simpangan baku dari data konstan {5,5,5,5} adalah...",
    pilihan: ["0", "1", "5", "tidak terdefinisi"],
    jawaban: 0,
    pembahasan: "Semua data sama → simpangan = 0" },

  { id: 42, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari ln(sin x) adalah...",
    pilihan: ["cos x", "cot x", "tan x", "1/sin x"],
    jawaban: 1,
    pembahasan: "Aturan rantai: (1/sin x)·cos x = cot x" },

  { id: 43, tipe: "pilihan_ganda",
    pertanyaan: "Hasil dari ∫ sin²x dx adalah...",
    pilihan: ["x/2 - sin(2x)/4 + C", "x/2 + sin(2x)/4 + C", "-cos²x/2 + C", "sin³x/3 + C"],
    jawaban: 0,
    pembahasan: "sin²x = (1-cos2x)/2 → ∫ = x/2 - sin(2x)/4 + C" },

  { id: 44, tipe: "pilihan_ganda",
    pertanyaan: "Nilai lim(x→∞) (1+1/x)^x adalah...",
    pilihan: ["0", "1", "e", "∞"],
    jawaban: 2,
    pembahasan: "Bentuk limit standar bilangan e ≈ 2,718" },

  { id: 45, tipe: "pilihan_ganda",
    pertanyaan: "Untuk z = a+bi, |z|² sama dengan...",
    pilihan: ["a² - b²", "a² + b²", "a + b", "|a| + |b|"],
    jawaban: 1,
    pembahasan: "|z|² = z·z̄ = (a+bi)(a-bi) = a² + b²" },

  { id: 46, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari e^(-x²) adalah...",
    pilihan: ["e^(-x²)", "-2x·e^(-x²)", "2x·e^(-x²)", "-e^(-x²)"],
    jawaban: 1,
    pembahasan: "Aturan rantai: e^(-x²)·(-2x) = -2x·e^(-x²)" },

  { id: 47, tipe: "pilihan_ganda",
    pertanyaan: "Nilai ∫₀^(π/2) cos x dx adalah...",
    pilihan: ["0", "1/2", "1", "π/2"],
    jawaban: 2,
    pembahasan: "[sin x]₀^(π/2) = sin(π/2) - sin 0 = 1 - 0 = 1" },

  { id: 48, tipe: "pilihan_ganda",
    pertanyaan: "Nilai ln(e) adalah...",
    pilihan: ["0", "1", "e", "2,718"],
    jawaban: 1,
    pembahasan: "ln(e) = 1 karena e¹ = e" },

  { id: 49, tipe: "pilihan_ganda",
    pertanyaan: "Rumus Σ(k²) dari k=1 sampai n adalah...",
    pilihan: ["n(n+1)/2", "n(n+1)(2n+1)/6", "n²(n+1)²/4", "n(n+1)(n+2)/3"],
    jawaban: 1,
    pembahasan: "Jumlah kuadrat: Σk² = n(n+1)(2n+1)/6" },

  { id: 50, tipe: "pilihan_ganda",
    pertanyaan: "Turunan dari (ln x)/x adalah...",
    pilihan: ["1/x²", "(1-ln x)/x²", "(1+ln x)/x²", "-1/x²"],
    jawaban: 1,
    pembahasan: "Aturan kuosien: [x·(1/x) - ln x·1]/x² = (1-ln x)/x²" },

  // ==========================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (Soal 51-75)
  // Pilih SEMUA jawaban yang benar (lebih dari satu)
  // ==========================================================

  { id: 51, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Manakah pernyataan BENAR tentang f(x) = x²?",
    pilihan: ["f'(x) = 2x", "f adalah fungsi genap", "f punya minimum di x=0", "f'(0) = 1", "f''(x) = 2"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "f'(x)=2x, f genap karena f(-x)=f(x), min di x=0, f'(0)=0 (bukan 1), f''=2" },

  { id: 52, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Manakah pernyataan BENAR tentang bilangan kompleks?",
    pilihan: ["i² = -1", "(a+bi)(a-bi) = a²+b²", "|i| = 1", "i³ = -i", "e^(iπ) = 1"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "e^(iπ) = -1, bukan 1. Pernyataan lain benar." },

  { id: 53, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Manakah hasil integral berikut yang BENAR?",
    pilihan: ["∫x²dx = x³/3 + C", "∫e^x dx = e^x + C", "∫(1/x)dx = ln|x| + C", "∫cos x dx = -sin x + C", "∫sec²x dx = tan x + C"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "∫cos x dx = sin x + C (bukan -sin x + C)" },

  { id: 54, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Sifat limit yang BENAR adalah...",
    pilihan: ["lim(f+g) = lim f + lim g", "lim(f·g) = lim f · lim g", "lim(f/g) = lim f / lim g jika lim g ≠ 0", "lim(c) = c untuk konstanta c", "lim(f/g) selalu = lim f / lim g"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "Limit kuosien hanya berlaku jika lim g ≠ 0" },

  { id: 55, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Manakah matriks berikut yang memiliki INVERS?",
    pilihan: ["[[1,2],[3,4]]", "[[1,2],[2,4]]", "[[2,0],[0,3]]", "[[0,1],[1,0]]", "[[1,1],[1,1]]"],
    jawaban: [0, 2, 3],
    pembahasan: "Matriks singular (det=0): [[1,2],[2,4]] dan [[1,1],[1,1]]. Sisanya memiliki det ≠ 0." },

  { id: 56, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Identitas trigonometri yang BENAR adalah...",
    pilihan: ["sin²x + cos²x = 1", "sin(2x) = 2sin x·cos x", "cos(2x) = cos²x - sin²x", "tan x = sin x / cos x", "sin(-x) = sin x"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "sin(-x) = -sin x (fungsi ganjil)" },

  { id: 57, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Manakah deret berikut yang KONVERGEN?",
    pilihan: ["Σ(1/n²)", "Σ(1/n)", "Σ(1/2ⁿ)", "Σ(1/n!)", "Σn"],
    jawaban: [0, 2, 3],
    pembahasan: "Deret harmonik Σ(1/n) dan Σn divergen. Sisanya konvergen." },

  { id: 58, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Turunan yang BENAR adalah...",
    pilihan: ["d/dx(sin x) = cos x", "d/dx(cos x) = sin x", "d/dx(tan x) = sec²x", "d/dx(e^x) = e^x", "d/dx(ln x) = 1/x"],
    jawaban: [0, 2, 3, 4],
    pembahasan: "d/dx(cos x) = -sin x (bukan sin x)" },

  { id: 59, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang vektor adalah...",
    pilihan: ["Panjang vektor (3,4) adalah 5", "Dot product (1,0)·(0,1) = 0", "Vektor (1,1) sejajar dengan (2,2)", "Cross product bersifat komutatif", "Norm vektor selalu ≥ 0"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "Cross product anti-komutatif: a×b = -(b×a)" },

  { id: 60, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Sifat peluang yang BENAR adalah...",
    pilihan: ["0 ≤ P(A) ≤ 1", "P(A∪B) = P(A)+P(B)-P(A∩B)", "P(A') = 1 - P(A)", "P(A∩B) selalu = P(A)·P(B)", "P(A) + P(A') = 1"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "P(A∩B) = P(A)·P(B) hanya jika A dan B independen" },

  { id: 61, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Integral tentu yang BENAR adalah...",
    pilihan: ["∫₀^π sin x dx = 2", "∫₀¹ x dx = 1/2", "∫₁^e (1/x) dx = 1", "∫₀^(π/2) sin x dx = 1", "∫₋₁¹ x² dx = 2/3"],
    jawaban: [0, 1, 2, 3, 4],
    pembahasan: "Semua hasil integral tentu tersebut benar." },

  { id: 62, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang statistika adalah...",
    pilihan: ["Median adalah nilai tengah data terurut", "Modus adalah nilai yang paling sering muncul", "Mean selalu lebih besar dari median", "Range = nilai maks - nilai min", "Varians selalu ≥ 0"],
    jawaban: [0, 1, 3, 4],
    pembahasan: "Mean tidak selalu > median (tergantung distribusi)" },

  { id: 63, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang kekontinuan fungsi adalah...",
    pilihan: ["f(x)=x² kontinu di seluruh R", "f(x)=1/x tidak kontinu di x=0", "Semua fungsi kontinu di semua titik", "sin x kontinu di R", "|x| kontinu di R"],
    jawaban: [0, 1, 3, 4],
    pembahasan: "Tidak semua fungsi kontinu di semua titik (contoh: 1/x di x=0)" },

  { id: 64, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Sifat logaritma yang BENAR adalah...",
    pilihan: ["log(ab) = log a + log b", "log(a/b) = log a - log b", "log(aⁿ) = n·log a", "log(a+b) = log a + log b", "logₐ(a) = 1"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "log(a+b) ≠ log a + log b (kesalahan umum)" },

  { id: 65, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Turunan lanjutan yang BENAR adalah...",
    pilihan: ["d/dx(x²e^x) = 2xe^x + x²e^x", "d/dx(ln(x²)) = 2/x", "d/dx(sin²x) = sin(2x)", "d/dx(√(x²+1)) = x/√(x²+1)", "d/dx(x^x) = x^x"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "d/dx(x^x) = x^x(ln x + 1), bukan x^x" },

  { id: 66, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Sifat matriks yang BENAR adalah...",
    pilihan: ["(AB)ᵀ = BᵀAᵀ", "det(AB) = det(A)·det(B)", "AB selalu sama dengan BA", "det(Aᵀ) = det(A)", "Invers dari matriks identitas adalah dirinya sendiri"],
    jawaban: [0, 1, 3, 4],
    pembahasan: "AB = BA hanya jika A,B komutatif; tidak berlaku umum" },

  { id: 67, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang barisan adalah...",
    pilihan: ["Barisan 1, 1/2, 1/3, ... konvergen ke 0", "Barisan 1, 2, 3, ... divergen", "Barisan (-1)ⁿ divergen", "Barisan 2, 2, 2, ... konvergen ke 2", "Semua barisan konvergen"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "Tidak semua barisan konvergen (contoh: (-1)ⁿ)" },

  { id: 68, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang koordinat polar adalah...",
    pilihan: ["r = √(x²+y²)", "θ = arctan(y/x) dengan koreksi kuadran", "x = r·cos θ", "y = r·sin θ", "r selalu bisa negatif"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "Pada koordinat polar standar, r ≥ 0" },

  { id: 69, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Solusi PDB berikut yang BENAR adalah...",
    pilihan: ["dy/dx = y → y = Ce^x", "dy/dx = 2x → y = x² + C", "dy/dx = -y → y = Ce^(-x)", "dy/dx = y² → y = 1/(C-x)", "Semua PDB bersifat linear"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "dy/dx = y² adalah PDB non-linear" },

  { id: 70, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang bilangan adalah...",
    pilihan: ["√2 irasional", "π irasional", "0,333... = 1/3", "Setiap bilangan real adalah rasional", "e irasional"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "Tidak semua bilangan real rasional (contoh: √2)" },

  { id: 71, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang limit tak hingga adalah...",
    pilihan: ["lim(x→∞) 1/x = 0", "lim(x→∞) x² = ∞", "lim(x→∞) sin x tidak ada", "lim(x→∞) (x+1)/x = 1", "lim(x→∞) e^(-x) = 1"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "lim(x→∞) e^(-x) = 0, bukan 1" },

  { id: 72, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Pernyataan BENAR tentang geometri analitik adalah...",
    pilihan: ["Lingkaran pusat (0,0) radius r: x²+y² = r²", "Gradien garis tegak lurus = negatif kebalikan", "Parabola y = x² berpuncak di (0,0)", "Garis y = 2x+1 bergradien 1", "Jarak titik ke garis selalu ≥ 0"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "Garis y=2x+1 bergradien 2, bukan 1" },

  { id: 73, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Rumus kombinatorika yang BENAR adalah...",
    pilihan: ["n! = n·(n-1)!", "C(n,k) = C(n, n-k)", "P(n,k) = n!/(n-k)!", "C(n,k) selalu = P(n,k)", "0! = 1"],
    jawaban: [0, 1, 2, 4],
    pembahasan: "C(n,k) = P(n,k)/k!, jadi C(n,k) ≠ P(n,k) secara umum" },

  { id: 74, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Rumus trigonometri lanjutan yang BENAR adalah...",
    pilihan: ["sin(A+B) = sin A cos B + cos A sin B", "cos(A+B) = cos A cos B - sin A sin B", "sin(2x) = 2 sin x cos x", "tan(A+B) = (tan A + tan B)/(1 - tan A tan B)", "sin(A-B) = sin A - sin B"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "sin(A-B) = sin A cos B - cos A sin B, bukan sin A - sin B" },

  { id: 75, tipe: "pilihan_ganda_kompleks",
    pertanyaan: "Sifat eksponen dan logaritma yang BENAR adalah...",
    pilihan: ["e^(ln x) = x untuk x>0", "ln(e^x) = x", "a^x · a^y = a^(x+y)", "(a^x)^y = a^(xy)", "a^0 = 0"],
    jawaban: [0, 1, 2, 3],
    pembahasan: "a⁰ = 1, bukan 0 (untuk a ≠ 0)" },

  // ==========================================================
  // BAGIAN 3: BENAR / SALAH (Soal 76-100)
  // Pilih BENAR atau SALAH
  // ==========================================================

  { id: 76, tipe: "benar_salah",
    pertanyaan: "lim(x→0) sin x / x = 1.",
    jawaban: true,
    pembahasan: "Ini limit trigonometri fundamental yang bernilai 1." },

  { id: 77, tipe: "benar_salah",
    pertanyaan: "Turunan dari sebuah konstanta adalah konstanta itu sendiri.",
    jawaban: false,
    pembahasan: "Turunan konstanta adalah 0, bukan konstanta itu sendiri." },

  { id: 78, tipe: "benar_salah",
    pertanyaan: "∫ 0 dx = C (konstanta).",
    jawaban: true,
    pembahasan: "Integral dari 0 adalah konstanta sembarang C." },

  { id: 79, tipe: "benar_salah",
    pertanyaan: "Setiap bilangan kuadrat selalu lebih besar atau sama dengan nol.",
    jawaban: true,
    pembahasan: "x² ≥ 0 untuk setiap bilangan real x." },

  { id: 80, tipe: "benar_salah",
    pertanyaan: "Turunan dari |x| ada di titik x = 0.",
    jawaban: false,
    pembahasan: "|x| tidak memiliki turunan di x=0 karena terdapat 'sudut tajam'." },

  { id: 81, tipe: "benar_salah",
    pertanyaan: "Determinan matriks 3×3 dapat dihitung menggunakan aturan Sarrus.",
    jawaban: true,
    pembahasan: "Aturan Sarrus valid untuk matriks 3×3." },

  { id: 82, tipe: "benar_salah",
    pertanyaan: "Nilai i² = -1, di mana i adalah satuan imajiner.",
    jawaban: true,
    pembahasan: "Definisi dasar satuan imajiner: i² = -1." },

  { id: 83, tipe: "benar_salah",
    pertanyaan: "Bilangan kompleks memiliki sifat urutan (ordering) seperti bilangan real.",
    jawaban: false,
    pembahasan: "Bilangan kompleks TIDAK dapat diurutkan (no natural ordering)." },

  { id: 84, tipe: "benar_salah",
    pertanyaan: "Deret harmonik Σ(1/n) adalah deret konvergen.",
    jawaban: false,
    pembahasan: "Deret harmonik divergen (meskipun suku-sukunya menuju 0)." },

  { id: 85, tipe: "benar_salah",
    pertanyaan: "e^(iπ) + 1 = 0 (identitas Euler).",
    jawaban: true,
    pembahasan: "Identitas Euler yang terkenal: e^(iπ) = -1, sehingga e^(iπ)+1 = 0." },

  { id: 86, tipe: "benar_salah",
    pertanyaan: "Fungsi cos x adalah fungsi ganjil.",
    jawaban: false,
    pembahasan: "cos x adalah fungsi GENAP karena cos(-x) = cos(x)." },

  { id: 87, tipe: "benar_salah",
    pertanyaan: "Setiap fungsi kontinu dapat diturunkan (memiliki turunan).",
    jawaban: false,
    pembahasan: "Kontinu tidak menjamin diferensiabel (contoh: |x| di x=0)." },

  { id: 88, tipe: "benar_salah",
    pertanyaan: "Setiap fungsi yang dapat diturunkan pasti kontinu.",
    jawaban: true,
    pembahasan: "Diferensiabel ⇒ kontinu (kebalikan belum tentu)." },

  { id: 89, tipe: "benar_salah",
    pertanyaan: "Jumlah sudut dalam segitiga pada geometri Euclidean adalah 180°.",
    jawaban: true,
    pembahasan: "Ini adalah teorema dasar geometri Euclidean." },

  { id: 90, tipe: "benar_salah",
    pertanyaan: "Gradien garis y = 3x + 2 adalah 3.",
    jawaban: true,
    pembahasan: "Bentuk y = mx + c, gradien m = 3." },

  { id: 91, tipe: "benar_salah",
    pertanyaan: "∫ e^x dx = e^x + C.",
    jawaban: true,
    pembahasan: "e^x adalah satu-satunya fungsi (hingga konstanta) yang turunannya sama dengan dirinya sendiri." },

  { id: 92, tipe: "benar_salah",
    pertanyaan: "Determinan matriks segitiga sama dengan hasil kali elemen diagonal utamanya.",
    jawaban: true,
    pembahasan: "Sifat penting matriks segitiga: det = ∏ aᵢᵢ." },

  { id: 93, tipe: "benar_salah",
    pertanyaan: "π adalah bilangan rasional.",
    jawaban: false,
    pembahasan: "π adalah bilangan irasional (tidak dapat dinyatakan sebagai p/q)." },

  { id: 94, tipe: "benar_salah",
    pertanyaan: "Setiap bilangan prima yang lebih besar dari 2 adalah bilangan ganjil.",
    jawaban: true,
    pembahasan: "Bilangan prima genap hanya 2. Semua prima > 2 ganjil." },

  { id: 95, tipe: "benar_salah",
    pertanyaan: "Turunan dari sin x adalah cos x.",
    jawaban: true,
    pembahasan: "d/dx(sin x) = cos x." },

  { id: 96, tipe: "benar_salah",
    pertanyaan: "Vektor nol memiliki panjang (norm) sama dengan 0.",
    jawaban: true,
    pembahasan: "Vektor nol (0,0,...) memiliki norm = 0." },

  { id: 97, tipe: "benar_salah",
    pertanyaan: "Cross product antara dua vektor bersifat komutatif (a×b = b×a).",
    jawaban: false,
    pembahasan: "Cross product bersifat ANTI-komutatif: a×b = -(b×a)." },

  { id: 98, tipe: "benar_salah",
    pertanyaan: "Varians dari suatu kumpulan data selalu bernilai ≥ 0.",
    jawaban: true,
    pembahasan: "Varians adalah rata-rata kuadrat deviasi → selalu ≥ 0." },

  { id: 99, tipe: "benar_salah",
    pertanyaan: "Simpangan baku (standar deviasi) dari data yang semua nilainya sama adalah 0.",
    jawaban: true,
    pembahasan: "Tidak ada penyebaran → simpangan baku = 0." },

  { id: 100, tipe: "benar_salah",
    pertanyaan: "Setiap matriks singular memiliki invers.",
    jawaban: false,
    pembahasan: "Matriks singular (det = 0) TIDAK memiliki invers." }

];

// ============================================================
// UTILITAS PENGGUNAAN
// ============================================================

// Filter berdasarkan tipe soal
function getByTipe(tipe) {
  return bankSoal.filter(s => s.tipe === tipe);
}

// Statistik soal
function statistik() {
  return {
    total: bankSoal.length,
    pilihan_ganda: getByTipe("pilihan_ganda").length,
    pilihan_ganda_kompleks: getByTipe("pilihan_ganda_kompleks").length,
    benar_salah: getByTipe("benar_salah").length,
  };
}

// Acak soal
function acakSoal() {
  return [...bankSoal].sort(() => Math.random() - 0.5);
}

// Ambil soal berdasarkan id
function getSoalById(id) {
  return bankSoal.find(s => s.id === id);
}

// Cek jawaban
function cekJawaban(id, jawabanUser) {
  const soal = getSoalById(id);
  if (!soal) return { benar: false, pesan: "Soal tidak ditemukan" };
  
  let benar = false;
  
  if (soal.tipe === "pilihan_ganda") {
    benar = jawabanUser === soal.jawaban;
  } else if (soal.tipe === "pilihan_ganda_kompleks") {
    const userArr = Array.isArray(jawabanUser) ? [...jawabanUser].sort() : [];
    const jawabArr = [...soal.jawaban].sort();
    benar = JSON.stringify(userArr) === JSON.stringify(jawabArr);
  } else if (soal.tipe === "benar_salah") {
    benar = jawabanUser === soal.jawaban;
  }
  
  return {
    benar,
    jawabanBenar: soal.jawaban,
    pembahasan: soal.pembahasan
  };
}

// Export (untuk Node.js / ES module)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { bankSoal, getByTipe, statistik, acakSoal, getSoalById, cekJawaban };
}

// ============================================================
// CONTOH PENGGUNAAN
// ============================================================
/*
console.log(statistik());
// Output: { total: 100, pilihan_ganda: 50, pilihan_ganda_kompleks: 25, benar_salah: 25 }

console.log(cek jawaban user:
cekJawaban(1, 3));   // { benar: true, ... }
cekJawaban(51, [0,1,2,4]); // { benar: true, ... }
cekJawaban(76, true);      // { benar: true, ... }
*/