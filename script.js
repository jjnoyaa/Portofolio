const panels=document.querySelectorAll('.panel') //mendapat smua elemen panel dn menyimpan ke dalam panels
const sounds = //mendefinisikan array soud yg berisi audio yg akan di putar
 ['suara/kapall1.mp3',
 'suara/kapall2.mp3', 
 'suara/kapall3.mp3',
 'suara/kapall4.mp3', 
 'suara/kapall5.mp3', 
 'suara/kapall6.mp3', 
 'suara/kapall7.mp3', 
 'suara/kapall8.mp3', 
 'suara/kapall9.mp3', 
 'suara/kapall10.mp3'];

let currentAudio = null; //mendeklarasikan variabel currentaudio yg sebelumnya tdk berisi apa" dan akan mnyimpan objek audia yg akan di putar

panels.forEach((panel, index) => { //Menambahkan event listener untuk setiap elemen panel. Ketika panel diklik, fungsi di dalamnya dipanggil dengan parameter panel (elemen yang diklik) dan index (posisi elemen dalam NodeList).
    panel.addEventListener('click', () => { //Menetapkan event listener untuk menangani klik pada elemen panel.
        removeActiveClasses(); //Memanggil fungsi removeActiveClasses untuk menghapus kelas active dari semua panel.
        panel.classList.add('active'); //Menambahkan kelas active ke panel yang diklik.
        playSound(sounds[index]); //Memanggil fungsi playSound dengan file audio sesuai dengan indeks panel yang diklik.
    });
});

function removeActiveClasses(){ //Menghapus kelas active dari semua panel dan menghentikan pemutaran audio yang sedang berjalan, serta mengatur ulang waktu pemutaran audio ke 0.
    panels.forEach(panel=> { 
        panel.classList.remove('active')
    })

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Mengatur ulang waktu pemutaran audio
    }
}

function playSound(sound) { //Menghapus kelas active dari semua panel dan menghentikan pemutaran audio yang sedang berjalan, serta mengatur ulang waktu pemutaran audio ke 0.
    currentAudio = new Audio(sound);
    currentAudio.play();
}