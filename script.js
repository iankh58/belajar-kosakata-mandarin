const vocab = [
  { pinyin: "Zao shang hao", hanzi: "早上好", arti: "Selamat pagi" },
  { pinyin: "Zao an", hanzi: "早安", arti: "Selamat pagi" },
  { pinyin: "Zhong wu hao", hanzi: "中午好", arti: "Selamat siang" },
  { pinyin: "Wu an", hanzi: "午安", arti: "Selamat siang" },
  { pinyin: "Xia wu hao", hanzi: "下午好", arti: "Selamat sore" },
  { pinyin: "Wan shang hao", hanzi: "晚上好", arti: "Selamat malam" },
  { pinyin: "Wan an", hanzi: "晚安", arti: "Selamat malam sebelum tidur" },
  { pinyin: "Xie xie", hanzi: "谢谢", arti: "Terima kasih" },
  { pinyin: "Duo xie", hanzi: "多谢", arti: "Terima kasih" },
  { pinyin: "Bu ke qi", hanzi: "不客气", arti: "Sama-sama / Jangan sungkan" },
  { pinyin: "Bu xie", hanzi: "不谢", arti: "Sama-sama / Jangan sungkan" },
  { pinyin: "Bai bai", hanzi: "拜拜", arti: "Selamat tinggal / Sampai jumpa" },
  { pinyin: "Man man zou", hanzi: "慢慢走", arti: "Hati-hati di jalan" },
  { pinyin: "Lu shang xiao xin", hanzi: "路上小心", arti: "Hati-hati di perjalanan" },
  { pinyin: "Ni", hanzi: "你", arti: "Kamu" },
  { pinyin: "Nin", hanzi: "您", arti: "Anda (sopan)" },
  { pinyin: "Wo", hanzi: "我", arti: "Saya" },
  { pinyin: "Ta", hanzi: "他/她", arti: "Dia" },
  { pinyin: "Women", hanzi: "我们", arti: "Kami / Kita" },
  { pinyin: "Nimen", hanzi: "你们", arti: "Kalian" },
  { pinyin: "Zhe", hanzi: "这", arti: "Ini" },
  { pinyin: "Na", hanzi: "那", arti: "Itu" },
  { pinyin: "Zhe li", hanzi: "这里", arti: "Di sini" },
  { pinyin: "Na li", hanzi: "那里", arti: "Di sana" },
  { pinyin: "Xihuan", hanzi: "喜欢", arti: "Suka" },
  { pinyin: "Pengyou", hanzi: "朋友", arti: "Temanku" },
  { pinyin: "Dongxi", hanzi: "东西", arti: "Barang" },
  { pinyin: "Mai", hanzi: "买", arti: "Membeli" },
  { pinyin: "Shangdian", hanzi: "商店", arti: "Toko" },
  { pinyin: "Zhege", hanzi: "这个", arti: "Ini (benda)" },
  { pinyin: "Chifan", hanzi: "吃饭", arti: "Makan" },
  { pinyin: "Chi", hanzi: "吃", arti: "Makan" },
  { pinyin: "He", hanzi: "喝", arti: "Minum" },
  { pinyin: "Xue", hanzi: "学", arti: "Belajar" },
  { pinyin: "Kan", hanzi: "看", arti: "Melihat / Membaca" },
  { pinyin: "Ai", hanzi: "爱", arti: "Mencintai / Suka" },
  { pinyin: "Qu", hanzi: "去", arti: "Pergi" },
  { pinyin: "Jintian", hanzi: "今天", arti: "Hari ini" },
  { pinyin: "Mingtian", hanzi: "明天", arti: "Besok" },
  { pinyin: "Zuotian", hanzi: "昨天", arti: "Kemarin" },
  { pinyin: "Xianzai", hanzi: "现在", arti: "Sekarang" },
  { pinyin: "Da", hanzi: "大", arti: "Besar" },
  { pinyin: "Xiao", hanzi: "小", arti: "Kecil" },
  { pinyin: "Hao", hanzi: "好", arti: "Bagus / Baik" },
  { pinyin: "Piaoliang", hanzi: "漂亮", arti: "Cantik / Indah" },
  { pinyin: "Haochi", hanzi: "好吃", arti: "Enak dimakan" },
  { pinyin: "Haohe", hanzi: "好喝", arti: "Enak diminum" },
  { pinyin: "Re", hanzi: "热", arti: "Panas" },
  { pinyin: "Leng", hanzi: "冷", arti: "Dingin" },
  { pinyin: "Mifan", hanzi: "米饭", arti: "Nasi" },
  { pinyin: "Cai", hanzi: "菜", arti: "Sayur" },
  { pinyin: "Cha", hanzi: "茶", arti: "Teh" },
  { pinyin: "Kafei", hanzi: "咖啡", arti: "Kopi" },
  { pinyin: "Shui", hanzi: "水", arti: "Air" },
  { pinyin: "Pingguo", hanzi: "苹果", arti: "Apel" },
  { pinyin: "Baba", hanzi: "爸爸", arti: "Ayah" },
  { pinyin: "Gege", hanzi: "哥哥", arti: "Kakak laki-laki" },
  { pinyin: "Jiejie", hanzi: "姐姐", arti: "Kakak perempuan" },
  { pinyin: "Meimei", hanzi: "妹妹", arti: "Adik perempuan" },
  { pinyin: "Didi", hanzi: "弟弟", arti: "Adik laki-laki" },
  { pinyin: "Yeye", hanzi: "爷爷", arti: "Kakek" },
  { pinyin: "Nainai", hanzi: "奶奶", arti: "Nenek" },
  { pinyin: "Mama", hanzi: "妈妈", arti: "Ibu" },
  { pinyin: "Shei", hanzi: "谁", arti: "Siapa?" },
  { pinyin: "Nali", hanzi: "哪里", arti: "Di mana?" },
  { pinyin: "Shenme", hanzi: "什么", arti: "Apa?" },
  { pinyin: "Ji", hanzi: "几", arti: "Berapa?" },
  { pinyin: "Jia", hanzi: "家", arti: "Rumah" },
  { pinyin: "Shu", hanzi: "书", arti: "Buku" },
  { pinyin: "Xuexiao", hanzi: "学校", arti: "Sekolah" },
  { pinyin: "Shouji", hanzi: "手机", arti: "HP" },
  { pinyin: "Dianshi", hanzi: "电视", arti: "TV" },
  { pinyin: "Diannao", hanzi: "电脑", arti: "Komputer" },
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
    // generate angka Mandarin
    const num = Math.floor(Math.random() * 1000000) + 1;
    currentQuestion = { pinyin: numberToChinese(num), hanzi: numberToChinese(num), arti: num.toString() };
  } else {
    currentQuestion = vocab[randomIndex];
  }

  document.querySelector("#question").innerText =
    currentMode === "pinyin" ? currentQuestion.pinyin : currentQuestion.hanzi;
  document.querySelector("#answer").value = "";
  document.querySelector("#feedback").innerText = "";
}

function checkAnswer() {
  const ans = document.querySelector("#answer").value.trim();
  if (ans === "") return;
  if (ans.toLowerCase() === currentQuestion.arti.toLowerCase()) {
    document.querySelector("#feedback").innerText = "✅ Benar!";
    document.querySelector("#feedback").style.color = "green";
  } else {
    document.querySelector("#feedback").innerText = `❌ Salah. Jawaban: ${currentQuestion.arti}`;
    document.querySelector("#feedback").style.color = "red";
  }
}

function goHome() {
  document.querySelector(".container").classList.remove("hidden");
  document.querySelector("#quiz").classList.add("hidden");
}

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
