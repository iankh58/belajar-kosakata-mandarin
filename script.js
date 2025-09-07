// --- Kosakata dengan nada ---
const vocab = [
  { pinyin: "Zǎoshang hǎo", hanzi: "早上好", arti: "Selamat pagi" },
  { pinyin: "Zǎo ān", hanzi: "早安", arti: "Selamat pagi" },
  { pinyin: "Zhōngwǔ hǎo", hanzi: "中午好", arti: "Selamat siang" },
  { pinyin: "Wǔ ān", hanzi: "午安", arti: "Selamat siang" },
  { pinyin: "Xiàwǔ hǎo", hanzi: "下午好", arti: "Selamat sore" },
  { pinyin: "Wǎnshang hǎo", hanzi: "晚上好", arti: "Selamat malam" },
  { pinyin: "Wǎn ān", hanzi: "晚安", arti: "Selamat malam sebelum tidur" },
  { pinyin: "Xièxie", hanzi: "谢谢", arti: "Terima kasih" },
  { pinyin: "Duō xiè", hanzi: "多谢", arti: "Terima kasih" },
  { pinyin: "Bù kèqì", hanzi: "不客气", arti: "Sama-sama / Jangan sungkan" },
  { pinyin: "Bù xiè", hanzi: "不谢", arti: "Sama-sama / Jangan sungkan" },
  { pinyin: "Bàibài", hanzi: "拜拜", arti: "Selamat tinggal / Sampai jumpa" },
  { pinyin: "Màn man zǒu", hanzi: "慢慢走", arti: "Hati-hati di jalan" },
  { pinyin: "Lùshang xiǎoxīn", hanzi: "路上小心", arti: "Hati-hati di perjalanan" },
  { pinyin: "Nǐ", hanzi: "你", arti: "Kamu" },
  { pinyin: "Nín", hanzi: "您", arti: "Anda (sopan)" },
  { pinyin: "Wǒ", hanzi: "我", arti: "Saya" },
  { pinyin: "Tā", hanzi: "他/她", arti: "Dia" },
  { pinyin: "Wǒmen", hanzi: "我们", arti: "Kami / Kita" },
  { pinyin: "Nǐmen", hanzi: "你们", arti: "Kalian" },
  { pinyin: "Zhè", hanzi: "这", arti: "Ini" },
  { pinyin: "Nà", hanzi: "那", arti: "Itu" },
  { pinyin: "Zhèlǐ", hanzi: "这里", arti: "Di sini" },
  { pinyin: "Nàlǐ", hanzi: "那里", arti: "Di sana" },
  { pinyin: "Xǐhuān", hanzi: "喜欢", arti: "Suka" },
  { pinyin: "Péngyǒu", hanzi: "朋友", arti: "Temanku" },
  { pinyin: "Dōngxi", hanzi: "东西", arti: "Barang" },
  { pinyin: "Mǎi", hanzi: "买", arti: "Membeli" },
  { pinyin: "Shāngdiàn", hanzi: "商店", arti: "Toko" },
  { pinyin: "Zhège", hanzi: "这个", arti: "Ini (benda)" },
  { pinyin: "Chīfàn", hanzi: "吃饭", arti: "Makan" },
  { pinyin: "Chī", hanzi: "吃", arti: "Makan" },
  { pinyin: "Hē", hanzi: "喝", arti: "Minum" },
  { pinyin: "Xué", hanzi: "学", arti: "Belajar" },
  { pinyin: "Kàn", hanzi: "看", arti: "Melihat / Membaca" },
  { pinyin: "Ài", hanzi: "爱", arti: "Mencintai / Suka" },
  { pinyin: "Qù", hanzi: "去", arti: "Pergi" },
  { pinyin: "Jīntiān", hanzi: "今天", arti: "Hari ini" },
  { pinyin: "Míngtiān", hanzi: "明天", arti: "Besok" },
  { pinyin: "Zuótiān", hanzi: "昨天", arti: "Kemarin" },
  { pinyin: "Xiànzài", hanzi: "现在", arti: "Sekarang" },
  { pinyin: "Dà", hanzi: "大", arti: "Besar" },
  { pinyin: "Xiǎo", hanzi: "小", arti: "Kecil" },
  { pinyin: "Hǎo", hanzi: "好", arti: "Bagus / Baik" },
  { pinyin: "Piàoliang", hanzi: "漂亮", arti: "Cantik / Indah" },
  { pinyin: "Hǎochī", hanzi: "好吃", arti: "Enak dimakan" },
  { pinyin: "Hǎohē", hanzi: "好喝", arti: "Enak diminum" },
  { pinyin: "Rè", hanzi: "热", arti: "Panas" },
  { pinyin: "Lěng", hanzi: "冷", arti: "Dingin" },
  { pinyin: "Mǐfàn", hanzi: "米饭", arti: "Nasi" },
  { pinyin: "Cài", hanzi: "菜", arti: "Sayur" },
  { pinyin: "Chá", hanzi: "茶", arti: "Teh" },
  { pinyin: "Kāfēi", hanzi: "咖啡", arti: "Kopi" },
  { pinyin: "Shuǐ", hanzi: "水", arti: "Air" },
  { pinyin: "Píngguǒ", hanzi: "苹果", arti: "Apel" },
  { pinyin: "Bàba", hanzi: "爸爸", arti: "Ayah" },
  { pinyin: "Gēge", hanzi: "哥哥", arti: "Kakak laki-laki" },
  { pinyin: "Jiějie", hanzi: "姐姐", arti: "Kakak perempuan" },
  { pinyin: "Mèimei", hanzi: "妹妹", arti: "Adik perempuan" },
  { pinyin: "Dìdi", hanzi: "弟弟", arti: "Adik laki-laki" },
  { pinyin: "Yéye", hanzi: "爷爷", arti: "Kakek" },
  { pinyin: "Nǎinai", hanzi: "奶奶", arti: "Nenek" },
  { pinyin: "Māma", hanzi: "妈妈", arti: "Ibu" },
  { pinyin: "Shéi", hanzi: "谁", arti: "Siapa?" },
  { pinyin: "Nǎlǐ", hanzi: "哪里", arti: "Di mana?" },
  { pinyin: "Shénme", hanzi: "什么", arti: "Apa?" },
  { pinyin: "Jǐ", hanzi: "几", arti: "Berapa?" },
  { pinyin: "Jiā", hanzi: "家", arti: "Rumah" },
  { pinyin: "Shū", hanzi: "书", arti: "Buku" },
  { pinyin: "Xuéxiào", hanzi: "学校", arti: "Sekolah" },
  { pinyin: "Shǒujī", hanzi: "手机", arti: "HP" },
  { pinyin: "Diànshì", hanzi: "电视", arti: "TV" },
  { pinyin: "Diànnǎo", hanzi: "电脑", arti: "Komputer" },
];

let currentQuestion = null;
let currentMode = "pinyin";

function startQuiz(mode) {
  currentMode = mode;
  document.querySelector(".container").classList.add("hidden");
  document.querySelector("#quiz").classList.remove("hidden");
  document.querySelector("#quiz-title").innerText =
    mode === "pinyin" ? "Tebak dari Pinyin" : "Tebak dari Hanzi";
  nextQuestion();
}

function nextQuestion() {
  const randomIndex = Math.floor(Math.random() * (vocab.length + 1));

  if (randomIndex === vocab.length) {
    // soal angka random
    const num = Math.floor(Math.random() * 1000000) + 1;
    currentQuestion = { 
      pinyin: numberToChinese(num), 
      hanzi: numberToChinese(num), 
      arti: num.toString() 
    };
  } else {
    currentQuestion = vocab[randomIndex];
  }

  document.querySelector("#question").innerText =
    currentMode === "pinyin" ? currentQuestion.pinyin : currentQuestion.hanzi;

  generateOptions(currentQuestion);
  document.querySelector("#feedback").innerText = "";
}

function generateOptions(correct) {
  const optionsContainer = document.querySelector("#options");
  optionsContainer.innerHTML = "";

  let options = [correct.arti];
  while (options.length < 4) {
    const rand = vocab[Math.floor(Math.random() * vocab.length)].arti;
    if (!options.includes(rand)) options.push(rand);
  }

  options = shuffleArray(options);

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, opt);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(button, chosen) {
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach(b => b.disabled = true);

  if (chosen === currentQuestion.arti) {
    button.classList.add("correct");
    document.querySelector("#feedback").innerText = "✅ Benar!";
  } else {
    button.classList.add("wrong");
    document.querySelector("#feedback").innerText = `❌ Salah. Jawaban: ${currentQuestion.arti}`;
    optionButtons.forEach(b => {
      if (b.innerText === currentQuestion.arti) b.classList.add("correct");
    });
  }
}

function goHome() {
  document.querySelector(".container").classList.remove("hidden");
  document.querySelector("#quiz").classList.add("hidden");
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// --- fungsi konversi angka sederhana ---
function numberToChinese(num) {
  const units = ["", "十", "百", "千", "万", "十万", "百万"];
  const digits = ["零","一","二","三","四","五","六","七","八","九"];
  let str = "";
  let n = num;
  let i = 0;
  while (n > 0) {
    const d = n % 10;
    if (d !== 0) {
      str = digits[d] + units[i] + str;
    }
    n = Math.floor(n / 10);
    i++;
  }
  return str || "零";
}
