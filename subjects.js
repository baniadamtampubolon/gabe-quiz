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
    },

    'pendidikan_pancasila': {
        subjectName: 'Pendidikan Pancasila',
        chapters: [
            {
                title: 'Bab 1: Tokoh Perumus dan Nilai-Nilai Pancasila',
                summary: [
                    { term: "Dasar Negara", definition: "Fondasi atau landasan utama berdirinya sebuah negara. Dasar negara kita adalah Pancasila." },
                    { term: "BPUPKI", definition: "Singkatan dari Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia, badan yang bertugas merumuskan dasar negara." },
                    { term: "Tokoh Perumus Pancasila", definition: "Ada tiga tokoh utama yang mengusulkan rumusan dasar negara, yaitu Mohammad Yamin, Soepomo, dan Ir. Soekarno." },
                    { term: "Ir. Soekarno", definition: "Tokoh yang pertama kali mengusulkan nama 'Pancasila' pada pidatonya tanggal 1 Juni 1945." },
                    { term: "Panitia Sembilan", definition: "Panitia kecil yang dibentuk BPUPKI untuk menyempurnakan rumusan dasar negara dan menghasilkan Piagam Jakarta." },
                    { term: "Sila ke-1: Ketuhanan", definition: "Contohnya adalah rajin beribadah sesuai agama masing-masing dan menghormati teman yang berbeda agama." },
                    { term: "Sila ke-2: Kemanusiaan", definition: "Contohnya adalah menolong teman yang jatuh atau membantu orang tua di rumah." },
                    { term: "Sila ke-3: Persatuan", definition: "Contohnya adalah bermain dengan teman tanpa membedakan suku dan mengikuti upacara bendera dengan khidmat." },
                    { term: "Sila ke-4: Kerakyatan", definition: "Contohnya adalah melakukan musyawarah untuk memilih ketua kelas dan menghargai pendapat orang lain." },
                    { term: "Sila ke-5: Keadilan Sosial", definition: "Contohnya adalah melaksanakan piket kelas sesuai jadwal dan tidak boros." },
                    { term: "Bangga Berbahasa Indonesia", definition: "Menggunakan Bahasa Indonesia yang baik dan benar dalam percakapan sehari-hari sebagai wujud cinta tanah air." }
                ],
                questions: [
                    {
                        question: "Siapa sajakah tiga tokoh utama yang mengusulkan rumusan dasar negara Indonesia?",
                        options: ["Ir. Soekarno, M. Hatta, Sutan Syahrir", "Moh. Yamin, Soepomo, Ir. Soekarno", "Ki Hajar Dewantara, Soepomo, M. Hatta", "Moh. Yamin, B.J. Habibie, Soekarno"],
                        answer: 1,
                        explanation: "Tiga tokoh perumus dasar negara yang berpidato dalam sidang BPUPKI adalah Mohammad Yamin, Soepomo, dan Ir. Soekarno."
                    },
                    {
                        question: "Tokoh yang pertama kali memberi nama 'Pancasila' untuk dasar negara kita adalah...",
                        options: ["Drs. Mohammad Hatta", "Mr. Soepomo", "Mr. Mohammad Yamin", "Ir. Soekarno"],
                        answer: 3,
                        explanation: "Ir. Soekarno mengusulkan nama Pancasila dalam pidatonya pada tanggal 1 Juni 1945, yang kemudian diperingati sebagai Hari Lahir Pancasila."
                    },
                    {
                        question: "Badan yang dibentuk Jepang untuk mempersiapkan kemerdekaan Indonesia dan merumuskan dasar negara adalah...",
                        options: ["PPKI", "Panitia Sembilan", "BPUPKI", "KNIP"],
                        answer: 2,
                        explanation: "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) adalah badan yang bertugas menyusun rancangan dasar negara."
                    },
                    {
                        question: "Salah satu karakter baik yang dimiliki oleh para tokoh perumus Pancasila adalah...",
                        options: ["Mementingkan diri sendiri", "Tidak mau mendengarkan orang lain", "Mendahulukan kepentingan bangsa", "Memaksakan kehendak"],
                        answer: 2,
                        explanation: "Para tokoh perumus Pancasila memiliki jiwa nasionalisme yang tinggi dan selalu mendahulukan kepentingan bangsa di atas kepentingan pribadi."
                    },
                    {
                        question: "Panitia kecil yang dibentuk untuk menyempurnakan rumusan dasar negara dikenal sebagai...",
                        options: ["Panitia Tiga", "Panitia Delapan", "Panitia Sembilan", "Panitia Sepuluh"],
                        answer: 2,
                        explanation: "Panitia Sembilan bertugas menyempurnakan usulan-usulan dasar negara dan menghasilkan Piagam Jakarta."
                    },
                    {
                        question: "Rajin beribadah sesuai agama dan kepercayaan masing-masing adalah contoh penerapan Pancasila sila ke-...",
                        options: ["1", "2", "3", "4"],
                        answer: 0,
                        explanation: "Rajin beribadah adalah cerminan dari nilai Ketuhanan Yang Maha Esa, yaitu sila pertama."
                    },
                    {
                        question: "Menolong teman yang sedang kesusahan di sekolah adalah penerapan nilai...",
                        options: ["Ketuhanan", "Kemanusiaan", "Persatuan", "Keadilan"],
                        answer: 1,
                        explanation: "Menolong sesama adalah wujud dari nilai Kemanusiaan yang adil dan beradab, yaitu sila kedua."
                    },
                    {
                        question: "Bermain dengan semua teman tanpa membeda-bedakan suku dan agama adalah contoh penerapan sila ke-...",
                        options: ["2", "3", "4", "5"],
                        answer: 1,
                        explanation: "Tidak membeda-bedakan teman menunjukkan sikap bersatu dan menjaga kerukunan, sesuai dengan sila ketiga, Persatuan Indonesia."
                    },
                    {
                        question: "Melakukan musyawarah untuk memilih ketua kelas adalah penerapan Pancasila di lingkungan...",
                        options: ["Rumah", "Sekolah", "Masyarakat", "Negara"],
                        answer: 1,
                        explanation: "Kegiatan pemilihan ketua kelas melalui musyawarah adalah contoh penerapan sila keempat di lingkungan sekolah."
                    },
                    {
                        question: "Menghargai pendapat teman saat sedang berdiskusi kelompok mencerminkan nilai sila ke-...",
                        options: ["2", "3", "4", "5"],
                        answer: 2,
                        explanation: "Menghargai pendapat orang lain adalah inti dari nilai kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan (Sila ke-4)."
                    },
                    {
                        question: "Membantu ibu membersihkan rumah adalah contoh penerapan Pancasila di lingkungan...",
                        options: ["Sekolah", "Masyarakat", "Rumah", "Bangsa"],
                        answer: 2,
                        explanation: "Membantu orang tua adalah kewajiban anak dan merupakan penerapan nilai kemanusiaan (Sila ke-2) di lingkungan rumah."
                    },
                    {
                        question: "Melaksanakan piket kelas sesuai jadwal yang ditentukan adalah wujud dari sikap...",
                        options: ["Keadilan", "Persatuan", "Ketuhanan", "Kemanusiaan"],
                        answer: 0,
                        explanation: "Melaksanakan tugas piket secara adil sesuai jadwal adalah cerminan dari nilai Keadilan sosial bagi seluruh rakyat Indonesia (Sila ke-5)."
                    },
                    {
                        question: "Mengikuti upacara bendera dengan khidmat setiap hari Senin adalah wujud dari...",
                        options: ["Rasa malas", "Cinta tanah air", "Sikap ingin dipuji", "Kewajiban terpaksa"],
                        answer: 1,
                        explanation: "Mengikuti upacara bendera dengan khidmat adalah salah satu cara kita menunjukkan rasa cinta dan bangga pada negara, sesuai nilai persatuan (Sila ke-3)."
                    },
                    {
                        question: "Sikap yang menunjukkan rasa bangga berbahasa Indonesia adalah...",
                        options: ["Sering menggunakan bahasa asing agar terlihat keren", "Menggunakan bahasa Indonesia yang baik dan benar", "Hanya mau berbicara dengan bahasa daerah", "Mencampur aduk bahasa Indonesia dan bahasa asing"],
                        answer: 1,
                        explanation: "Menggunakan bahasa Indonesia yang baik dan benar dalam kehidupan sehari-hari adalah sikap yang menunjukkan rasa bangga dan cinta pada bahasa persatuan kita."
                    },
                    {
                        question: "Di bawah ini yang BUKAN merupakan penerapan sila pertama di rumah adalah...",
                        options: ["Berdoa sebelum makan", "Mengingatkan adik untuk sholat", "Pergi ke gereja bersama keluarga", "Memilih ketua RT"],
                        answer: 3,
                        explanation: "Memilih ketua RT adalah contoh penerapan sila keempat (musyawarah) di lingkungan masyarakat, bukan sila pertama di rumah."
                    },
                    {
                        question: "Tidak mengganggu teman yang sedang beribadah adalah contoh sikap...",
                        options: ["Toleransi", "Egois", "Tidak peduli", "Permusuhan"],
                        answer: 0,
                        explanation: "Sikap menghormati dan tidak mengganggu teman yang berbeda agama disebut toleransi, sesuai dengan sila pertama."
                    },
                    {
                        question: "Bekerja sama membersihkan lingkungan sekitar rumah adalah penerapan Pancasila di lingkungan...",
                        options: ["Sekolah", "Rumah", "Masyarakat", "Negara"],
                        answer: 2,
                        explanation: "Kerja bakti atau gotong royong membersihkan lingkungan adalah contoh penerapan nilai persatuan dan kemanusiaan di lingkungan masyarakat."
                    },
                    {
                        question: "Tidak menyontek saat ulangan adalah perbuatan yang mencerminkan sikap...",
                        options: ["Jujur", "Penakut", "Cerdas", "Sombong"],
                        answer: 0,
                        explanation: "Bersikap jujur dengan tidak menyontek sesuai dengan nilai-nilai luhur Pancasila, terutama sila pertama dan kedua."
                    },
                    {
                        question: "Lambang dari sila 'Kemanusiaan yang adil dan beradab' adalah...",
                        options: ["Bintang", "Rantai", "Pohon Beringin", "Padi dan Kapas"],
                        answer: 1,
                        explanation: "Sila kedua dilambangkan dengan rantai emas yang menunjukkan hubungan antarmanusia yang tidak terputus."
                    },
                    {
                        question: "Menjaga fasilitas umum seperti taman bermain adalah tanggung jawab...",
                        options: ["Pemerintah saja", "Ketua RT saja", "Petugas kebersihan", "Semua warga masyarakat"],
                        answer: 3,
                        explanation: "Menjaga fasilitas umum adalah tanggung jawab kita bersama sebagai wujud penerapan nilai persatuan dan keadilan sosial."
                    },
                    {
                        question: "Jika ada masalah di kelas, sebaiknya diselesaikan dengan cara...",
                        options: ["Berkelahi", "Saling menyalahkan", "Musyawarah", "Didiamkan saja"],
                        answer: 2,
                        explanation: "Sesuai sila keempat, cara terbaik menyelesaikan masalah bersama adalah dengan musyawarah untuk mufakat."
                    },
                    {
                        question: "Bunyi sila ketiga Pancasila adalah...",
                        options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Keadilan sosial bagi seluruh rakyat Indonesia", "Kemanusiaan yang adil dan beradab"],
                        answer: 1,
                        explanation: "Sila ketiga, yang dilambangkan dengan Pohon Beringin, berbunyi 'Persatuan Indonesia'."
                    },
                    {
                        question: "Hemat dalam menggunakan uang jajan adalah contoh penerapan sila ke-...",
                        options: ["2", "3", "4", "5"],
                        answer: 3,
                        explanation: "Sikap tidak boros dan hidup hemat adalah salah satu cerminan dari nilai keadilan sosial (Sila ke-5)."
                    },
                    {
                        question: "Mengapa kita harus bangga berbahasa Indonesia?",
                        options: ["Karena bahasa Indonesia sulit dipelajari", "Karena merupakan bahasa pemersatu bangsa", "Karena semua negara memakainya", "Karena terdengar lebih keren"],
                        answer: 1,
                        explanation: "Bahasa Indonesia adalah bahasa persatuan yang menyatukan beragam suku bangsa di seluruh nusantara."
                    },
                    {
                        question: "Para tokoh perumus Pancasila rela berkorban demi kepentingan...",
                        options: ["Keluarga", "Diri sendiri", "Golongan", "Bangsa dan negara"],
                        answer: 3,
                        explanation: "Jiwa patriotisme para pahlawan ditunjukkan dengan sikap rela berkorban dan mendahulukan kepentingan bangsa dan negara."
                    }
                ]
            }
        ]
    }
};