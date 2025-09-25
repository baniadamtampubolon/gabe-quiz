const quizData = {
    'ipas': {
        subjectName: 'Ilmu Pengetahuan Alam dan Sosial',
        chapters: [
            {
                title: 'Bab 1: Tumbuhan sebagai Sumber Kehidupan',
                // --- TAMBAHKAN BAGIAN INI ---
                summary: [
                    { term: "Akar", definition: "Bagian tumbuhan di dalam tanah yang menyerap air dan nutrisi." },
                    { term: "Batang", definition: "Bagian tumbuhan yang menopang daun dan mengalirkan air ke seluruh bagian." },
                    { term: "Daun", definition: "Tempat tumbuhan 'memasak' makanannya sendiri melalui proses fotosintesis." },
                    { term: "Fotosintesis", definition: "Proses pembuatan makanan pada tumbuhan dengan bantuan cahaya matahari, air, dan karbon dioksida." },
                    { term: "Bunga", definition: "Alat perkembangbiakan generatif pada tumbuhan yang menarik serangga." },
                    { term: "Generatif", definition: "Cara perkembangbiakan tumbuhan melalui biji (hasil penyerbukan)." },
                    { term: "Vegetatif", definition: "Cara perkembangbiakan tumbuhan tanpa melalui biji, misalnya stek atau cangkok." }
                ],
                questions: [
                    // --- SOAL IPAS BAB 1 DIMULAI DARI SINI ---
                    {
                        question: "Bagian tumbuhan yang biasanya ada di dalam tanah dan berfungsi menyerap air adalah...",
                        options: ["Daun", "Batang", "Akar", "Bunga"],
                        answer: 2,
                        explanation: "Akar adalah fondasi tumbuhan yang kuat di dalam tanah. Tugas utamanya adalah menyedot air dan nutrisi."
                    },
                    {
                        question: "Apa fungsi utama dari batang pada tumbuhan?",
                        options: ["Membuat makanan", "Menopang tumbuhan dan mengalirkan air", "Menyerap sinar matahari", "Menjadi buah"],
                        answer: 1,
                        explanation: "Batang membuat tumbuhan berdiri tegak dan menjadi jalan bagi air dari akar ke daun."
                    },
                    {
                        question: "Tempat terjadinya proses memasak makanan pada tumbuhan (fotosintesis) adalah...",
                        options: ["Akar", "Buah", "Bunga", "Daun"],
                        answer: 3,
                        explanation: "Daun adalah dapur super canggih milik tumbuhan! Di sinilah makanan (energi) untuk tumbuhan dibuat."
                    },
                    {
                        question: "Zat hijau pada daun yang sangat penting untuk fotosintesis disebut...",
                        options: ["Oksigen", "Klorofil", "Karbon dioksida", "Air"],
                        answer: 1,
                        explanation: "Klorofil adalah pigmen hijau yang menangkap energi cahaya matahari untuk proses fotosintesis."
                    },
                    {
                        question: "Bagian tumbuhan yang paling cantik dan berwarna-warni untuk menarik serangga adalah...",
                        options: ["Bunga", "Daun", "Batang", "Akar"],
                        answer: 0,
                        explanation: "Warna dan aroma bunga berfungsi untuk mengundang serangga agar membantu proses penyerbukan."
                    },
                    {
                        question: "Setelah bunga mengalami penyerbukan, ia akan berkembang menjadi...",
                        options: ["Daun baru", "Akar baru", "Buah dan biji", "Batang baru"],
                        answer: 2,
                        explanation: "Setelah pembuahan terjadi, bakal buah akan berkembang menjadi buah yang melindungi biji di dalamnya."
                    },
                    {
                        question: "Gas yang dihirup oleh tumbuhan untuk melakukan fotosintesis adalah...",
                        options: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
                        answer: 2,
                        explanation: "Tumbuhan 'menghirup' karbon dioksida dari udara sebagai bahan baku utama untuk membuat makanannya."
                    },
                    {
                        question: "Hasil dari proses fotosintesis yang sangat dibutuhkan oleh manusia untuk bernapas adalah...",
                        options: ["Karbon dioksida", "Air", "Oksigen", "Makanan"],
                        answer: 2,
                        explanation: "Oksigen adalah 'produk sisa' dari fotosintesis yang sangat penting bagi pernapasan makhluk hidup."
                    },
                    {
                        question: "Selain cahaya matahari dan karbon dioksida, apa lagi yang dibutuhkan tumbuhan untuk fotosintesis?",
                        options: ["Angin dan tanah", "Air dan klorofil", "Bunga dan buah", "Oksigen dan pupuk"],
                        answer: 1,
                        explanation: "Fotosintesis membutuhkan 4 hal penting: air, karbon dioksida, cahaya matahari, dan klorofil."
                    },
                    {
                        question: "Mengapa tumbuhan disebut sebagai sumber kehidupan di Bumi?",
                        options: ["Karena tumbuhan bisa berjalan", "Karena tumbuhan menghasilkan oksigen dan makanan", "Karena semua tumbuhan berwarna hijau", "Karena tumbuhan membutuhkan air"],
                        answer: 1,
                        explanation: "Tanpa oksigen dan makanan dari tumbuhan, makhluk hidup lain di Bumi tidak akan bisa bertahan hidup."
                    },
                    {
                        question: "Perkembangbiakan tumbuhan yang melalui proses penyerbukan pada bunga disebut perkembangbiakan...",
                        options: ["Vegetatif", "Generatif", "Buatan", "Alami"],
                        answer: 1,
                        explanation: "Perkembangbiakan generatif melibatkan pertemuan sel kelamin jantan (serbuk sari) dan betina (putik)."
                    },
                    {
                        question: "Menanam kembali potongan batang dari sebuah tumbuhan disebut dengan cara...",
                        options: ["Merunduk", "Mencangkok", "Menyetek", "Biji"],
                        answer: 2,
                        explanation: "Menyetek atau stek adalah cara mudah memperbanyak tanaman seperti singkong atau mawar."
                    },
                    {
                        question: "Contoh perkembangbiakan tanpa melalui biji adalah...",
                        options: ["Menanam biji mangga", "Menanam biji jagung", "Menanam ubi dengan batangnya (stek)", "Menanam biji semangka"],
                        answer: 2,
                        explanation: "Menanam ubi dengan batangnya adalah contoh perkembangbiakan vegetatif (tanpa kawin/biji)."
                    },
                    {
                        question: "Proses jatuhnya serbuk sari di atas kepala putik disebut...",
                        options: ["Fotosintesis", "Pembuahan", "Penyerbukan", "Penguapan"],
                        answer: 2,
                        explanation: "Penyerbukan adalah langkah pertama dalam proses perkembangbiakan generatif pada tumbuhan berbunga."
                    },
                    {
                        question: "Biji yang ada di dalam buah berfungsi sebagai...",
                        options: ["Hiasan buah", "Makanan untuk tumbuhan", "Cadangan air", "Alat perkembangbiakan (calon tumbuhan baru)"],
                        answer: 3,
                        explanation: "Di dalam biji terdapat embrio atau calon individu baru yang siap tumbuh jika kondisinya sesuai."
                    },
                    {
                        question: "Kentang dan ubi jalar berkembang biak menggunakan...",
                        options: ["Bunga", "Daun", "Umbi batang", "Biji"],
                        answer: 2,
                        explanation: "Kentang adalah contoh umbi batang, yaitu batang yang menggembung di dalam tanah sebagai cadangan makanan."
                    },
                    {
                        question: "Bagian tumbuhan yang melindungi biji adalah...",
                        options: ["Buah", "Daun", "Bunga", "Batang"],
                        answer: 0,
                        explanation: "Daging buah berfungsi untuk melindungi biji di dalamnya dan kadang membantu penyebarannya."
                    },
                    {
                        question: "Energi utama yang digunakan dalam proses fotosintesis berasal dari...",
                        options: ["Bulan", "Angin", "Air", "Matahari"],
                        answer: 3,
                        explanation: "Cahaya matahari adalah sumber energi utama yang diubah oleh klorofil menjadi energi kimia (makanan)."
                    },
                    {
                        question: "Makanan hasil fotosintesis yang disimpan tumbuhan dalam bentuk buah atau umbi disebut...",
                        options: ["Karbohidrat", "Oksigen", "Klorofil", "Karbon dioksida"],
                        answer: 0,
                        explanation: "Karbohidrat (bisa berupa gula atau pati) adalah bentuk makanan atau energi yang disimpan oleh tumbuhan."
                    },
                    {
                        question: "Proses mencangkok biasanya dilakukan pada tumbuhan yang memiliki...",
                        options: ["Daun yang lebar", "Batang berkayu", "Akar yang kuat", "Bunga yang wangi"],
                        answer: 1,
                        explanation: "Mencangkok lebih mudah berhasil pada tanaman berkayu (memiliki kambium) seperti mangga atau jambu."
                    },
                    {
                        question: "Tumbuhan mengambil air dan mineral dari dalam tanah menggunakan...",
                        options: ["Daun", "Batang", "Akar", "Bunga"],
                        answer: 2,
                        explanation: "Akar memiliki rambut-rambut halus yang berfungsi untuk memaksimalkan penyerapan air dan mineral dari tanah."
                    },
                    {
                        question: "Perkembangbiakan vegetatif adalah perkembangbiakan yang...",
                        options: ["Membutuhkan dua tumbuhan", "Menggunakan biji", "Tidak menggunakan biji", "Terjadi di bunga"],
                        answer: 2,
                        explanation: "Perkembangbiakan vegetatif (tak kawin) menggunakan bagian tubuh tumbuhan itu sendiri, seperti batang, daun, atau umbi."
                    },
                    {
                        question: "Apa yang akan terjadi jika di dunia ini tidak ada tumbuhan?",
                        options: ["Hewan dan manusia akan kesulitan bernapas dan kekurangan makanan", "Tidak akan terjadi apa-apa", "Bumi akan menjadi lebih dingin", "Air di laut akan bertambah"],
                        answer: 0,
                        explanation: "Ini menunjukkan betapa vitalnya peran tumbuhan sebagai produsen oksigen dan makanan utama di Bumi."
                    },
                    {
                        question: "Tanaman jahe, kunyit, dan lengkuas berkembang biak dengan cara...",
                        options: ["Biji", "Stek daun", "Rizoma (akar tinggal)", "Tunas"],
                        answer: 2,
                        explanation: "Jahe dan kunyit adalah contoh batang yang menjalar di bawah tanah yang disebut rizoma atau akar tinggal."
                    },
                    {
                        question: "Membengkokkan cabang tanaman ke dalam tanah hingga tumbuh akar disebut...",
                        options: ["Mencangkok", "Menempel", "Merunduk", "Menyetek"],
                        answer: 2,
                        explanation: "Teknik merunduk dilakukan dengan cara membengkokkan cabang ke tanah agar tumbuh akar baru tanpa memotongnya."
                    }
                ]
            }, // <-- KURUNG PENUTUP BAB 1
            {
                title: 'Bab 2: Wujud Zat dan Perubahannya',
                summary: [
                    { term: "Benda Padat", definition: "Wujud benda yang bentuk dan volumenya selalu tetap. Contoh: batu, kayu." },
                    { term: "Benda Cair", definition: "Wujud benda yang bentuknya mengikuti wadahnya, tetapi volumenya tetap. Contoh: air, sirup." },
                    { term: "Benda Gas", definition: "Wujud benda yang bentuk dan volumenya selalu berubah mengisi seluruh ruangan. Contoh: udara, asap." },
                    { term: "Membeku", definition: "Perubahan wujud dari cair menjadi padat. Contoh: air menjadi es." },
                    { term: "Mencair", definition: "Perubahan wujud dari padat menjadi cair. Contoh: es menjadi air." },
                    { term: "Menguap", definition: "Perubahan wujud dari cair menjadi gas. Contoh: air mendidih menjadi uap." },
                    { term: "Mengembun", definition: "Perubahan wujud dari gas menjadi cair. Contoh: titik air di luar gelas es." }
                ],
                questions: [
                    { 
                        question: "Berikut ini yang termasuk benda padat adalah...", 
                        options: ["Kecap", "Asap", "Batu", "Udara"], 
                        answer: 2, 
                        explanation: "Batu adalah benda padat karena bentuk dan volumenya selalu tetap." 
                    },
                    { 
                        question: "Perubahan wujud dari benda cair menjadi gas disebut...", 
                        options: ["Membeku", "Mencair", "Menguap", "Menyublim"], 
                        answer: 2, 
                        explanation: "Menguap adalah proses ketika air dipanaskan hingga menjadi uap air (gas)." 
                    },
                    { 
                        question: "Benda yang bentuknya selalu berubah mengikuti wadahnya tetapi volumenya tetap adalah...", 
                        options: ["Benda padat", "Benda cair", "Benda gas", "Benda beku"], 
                        answer: 1, 
                        explanation: "Sifat benda cair adalah bentuknya mengikuti wadah (misalnya air di dalam gelas) tapi jumlahnya (volume) tetap." 
                    },
                    { 
                        question: "Kapur barus yang diletakkan di lemari lama-kelamaan akan habis. Peristiwa ini disebut...", 
                        options: ["Mencair", "Mengembun", "Menyublim", "Membeku"], 
                        answer: 2, 
                        explanation: "Menyublim adalah perubahan wujud dari benda padat langsung menjadi gas, tanpa menjadi cair terlebih dahulu." 
                    },
                    { 
                        question: "Titik-titik air di bagian luar gelas yang berisi es adalah contoh dari proses...", 
                        options: ["Menguap", "Mengembun", "Membeku", "Mencair"], 
                        answer: 1, 
                        explanation: "Mengembun terjadi ketika uap air di udara yang dingin berubah kembali menjadi titik-titik air (cair)." 
                    }
                ]
            }
        ]
    },

    'bahasa_inggris': {
        subjectName: 'Bahasa Inggris',
        chapters: [
            {
                title: 'Unit 1: What are you doing?',
                questions: [
                    {
                        question: "She is ___ a book.",
                        options: ["read", "reads", "reading", "to read"],
                        answer: 2,
                        explanation: "Gunakan 'reading' (verb-ing) setelah 'is' untuk menyatakan kegiatan yang sedang berlangsung."
                    },
                    {
                        question: "What are you doing? I am ___ television.",
                        options: ["watching", "look", "see", "watches"],
                        answer: 0,
                        explanation: "Gunakan 'watching' setelah 'am'. 'Watch' adalah kata kerja yang tepat untuk TV."
                    },
                    {
                        question: "They are ___ football in the park.",
                        options: ["play", "playing", "plays", "played"],
                        answer: 1,
                        explanation: "Setelah 'are', kita menggunakan kata kerja bentuk -ing, yaitu 'playing'."
                    },
                    {
                        question: "He is ___ to music with his headphones.",
                        options: ["listen", "listening", "listens", "listened"],
                        answer: 1,
                        explanation: "Kegiatan mendengarkan musik saat ini disebut 'listening to music'."
                    },
                    {
                        question: "Look! The bird is ___ in the sky.",
                        options: ["fly", "flying", "flies", "flew"],
                        answer: 1,
                        explanation: "Karena kejadiannya sekarang ('Look!'), kita gunakan 'is flying'."
                    },
                    {
                        question: "My mother is ___ a delicious cake in the kitchen.",
                        options: ["cooks", "cooking", "cooked", "cook"],
                        answer: 1,
                        explanation: "'is cooking' berarti sedang memasak saat ini."
                    },
                    {
                        question: "Why are you crying? Because I am ___ sad.",
                        options: ["feel", "feels", "feeling", "felt"],
                        answer: 2,
                        explanation: "'I am feeling sad' berarti saya sedang merasa sedih sekarang."
                    },
                    {
                        question: "The students are ___ their homework.",
                        options: ["do", "does", "doing", "did"],
                        answer: 2,
                        explanation: "Untuk menyatakan 'sedang mengerjakan', kita gunakan 'are doing'."
                    },
                    {
                        question: "Please be quiet, the baby is ___.",
                        options: ["sleeps", "slept", "sleeping", "sleep"],
                        answer: 2,
                        explanation: "'is sleeping' berarti bayinya sedang tidur sekarang."
                    },
                    {
                        question: "I am ___ a picture of a mountain.",
                        options: ["draws", "drew", "drawing", "draw"],
                        answer: 2,
                        explanation: "Kegiatan 'sedang menggambar' dalam bahasa Inggris adalah 'drawing'."
                    },
                    {
                        question: "What is he doing? He is ___ his bicycle.",
                        options: ["ride", "rides", "riding", "rode"],
                        answer: 2,
                        explanation: "'is riding' adalah bentuk yang benar untuk menyatakan 'sedang mengendarai'."
                    },
                    {
                        question: "We are ___ for the bus at the bus stop.",
                        options: ["waiting", "waits", "wait", "waited"],
                        answer: 0,
                        explanation: "'are waiting' berarti 'sedang menunggu'."
                    },
                    {
                        question: "My father is ___ a newspaper.",
                        options: ["reading", "writing", "eating", "drinking"],
                        answer: 0,
                        explanation: "Kegiatan yang paling cocok untuk koran (newspaper) adalah membaca (reading)."
                    },
                    {
                        question: "The cat is ___ milk from the bowl.",
                        options: ["eating", "sleeping", "drinking", "running"],
                        answer: 2,
                        explanation: "Untuk benda cair seperti susu (milk), kita menggunakan kata kerja 'drinking' (sedang minum)."
                    },
                    {
                        question: "I ___ brushing my teeth.",
                        options: ["is", "am", "are", "be"],
                        answer: 1,
                        explanation: "Untuk subjek 'I', selalu gunakan 'am' dalam present continuous tense."
                    },
                    {
                        question: "You ___ walking too fast!",
                        options: ["is", "am", "are", "be"],
                        answer: 2,
                        explanation: "Untuk subjek 'You', selalu gunakan 'are'."
                    },
                    {
                        question: "Santi ___ singing a beautiful song.",
                        options: ["is", "am", "are", "be"],
                        answer: 0,
                        explanation: "Untuk subjek tunggal seperti 'Santi' (sama dengan 'she'), gunakan 'is'."
                    },
                    {
                        question: "My brother and I ___ cleaning our room.",
                        options: ["is", "am", "are", "be"],
                        answer: 2,
                        explanation: "Subjek 'My brother and I' sama dengan 'we' (kami), jadi kita gunakan 'are'."
                    },
                    {
                        question: "Which sentence is correct?",
                        options: ["He is sleeps.", "He is sleeping.", "He are sleeping.", "He am sleeping."],
                        answer: 1,
                        explanation: "Kalimat yang benar adalah 'He is sleeping' (Subject + is + verb-ing)."
                    },
                    {
                        question: "The fish are ___ in the aquarium.",
                        options: ["swimming", "running", "jumping", "walking"],
                        answer: 0,
                        explanation: "Ikan (fish) melakukan kegiatan berenang (swimming)."
                    },
                    {
                        question: "I am ___ an email to my friend.",
                        options: ["talking", "sending", "calling", "looking"],
                        answer: 1,
                        explanation: "Email biasanya 'dikirim', jadi kata kerja yang tepat adalah 'sending'."
                    },
                    {
                        question: "The teacher is ___ to the students.",
                        options: ["talking", "crying", "eating", "sleeping"],
                        answer: 0,
                        explanation: "'talking' (berbicara) adalah kegiatan yang paling umum dilakukan guru kepada murid."
                    },
                    {
                        question: "It is raining. I am ___ my umbrella.",
                        options: ["closing", "putting", "taking", "holding"],
                        answer: 3,
                        explanation: "'holding' berarti sedang memegang. Ini adalah kata yang paling cocok untuk payung saat hujan."
                    },
                    {
                        question: "He is ___ because the movie is funny.",
                        options: ["crying", "shouting", "laughing", "sleeping"],
                        answer: 2,
                        explanation: "Jika filmnya lucu (funny), maka reaksi yang tepat adalah tertawa (laughing)."
                    },
                    {
                        question: "They are ___ in a big house.",
                        options: ["living", "going", "sitting", "looking"],
                        answer: 0,
                        explanation: "'living' berarti tinggal. 'They are living in a big house' artinya mereka sedang tinggal di sebuah rumah besar."
                    }
                ]
            }
        ]
    }
};