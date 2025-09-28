// Import semua mata pelajaran dari struktur baru
import { ipas } from './subjects/ipas/index.js';
import { bahasa_inggris } from './subjects/bahasa_inggris/index.js';
import { pendidikan_pancasila } from './subjects/pendidikan_pancasila/index.js';

  // Export dalam format yang sama seperti sebelumnya
// Sehingga semua file yang sudah memanggil subjects.js tidak perlu diubah
export const quizData = {
    ipas,
    bahasa_inggris,
    pendidikan_pancasila
};

// Export default untuk backward compatibility
export default quizData;

