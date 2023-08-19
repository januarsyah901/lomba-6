$.getJSON('data/data.json', function (data) {
      // Mendapatkan waktu saat ini
var currentTime = new Date();

// Mendapatkan jam dari waktu saat ini
var currentHour = currentTime.getHours();

// Variabel untuk menyimpan nilai waktu
var waktu = 0;

// Memetakan waktu ke nilai yang diinginkan
if (currentHour >= 4 && currentHour < 10) {
    // console.log(data.pagi);
    data.pagi
} else if (currentHour >= 10 && currentHour < 17) {
    // console.log(data.siang);
    data.siang
} else if (currentHour >= 17) {
    // console.log(data.malam);
    data.malam
}
$.
});