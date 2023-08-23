$.getJSON('data/data.json', function (data) {
      // Mendapatkan waktu saat ini
var currentTime = new Date();

// Mendapatkan jam dari waktu saat ini
var currentHour = currentTime.getHours();

// logika penyesuaian waktu
if (currentHour >= 4 && currentHour < 5) {
    data = data.bangun
} else if (currentHour >= 5 && currentHour < 6) {
    // data = data.olahraga
// } else if (currentHour >= 6 && currentHour < 7) {
//     data = data.persiapan
// } else if (currentHour >= 7 && currentHour < 11) {
//     data = data.aktivitas
// } else if (currentHour >= 11 && currentHour < 13) {
//     data = data.istirahat
// } else if (currentHour >= 13 && currentHour < 16) {
//     data = data.minum
// } else if (currentHour >= 16 && currentHour < 17) {
//     data = data.hiling
// } else if (currentHour >= 17 && currentHour < 20) {
//     data = data.family
// } else if (currentHour >= 20 && currentHour < 23) {
//     data = data.tidur
// } else if (currentHour >= 23 && currentHour < 4) {
//     data = data.begadang
}else {
    data = data.bangun
}
console.log("kamu tidur berapa jam yang? ")
// logika pertanyaan
let input = 10
if (input < data.x) {
    console.log(data.kurang)
}else if( input >= data.x && input < data.y){
    console.log(data.pas)
}else{
    console.log(data.lebih)
}

// eksekusi file
let str = '<img src="img/'+data["gambar"][0]["g"]+'" class="figure-img img-fluid rounded" alt="..."></img>'
$('#salam').text(data["salam"])
$('#content').text(data["content"][0]["c"])
$('#content2').text(data["content"][1]["c"])
$('#content3').text(data["content"][2]["c"])
$('#h').text(data["judul"][0]["h"])
$('#h2').text(data["judul"][1]["h"])
$('#h3').text(data["judul"][2]["h"])
$('#t').text(data["title"][0]["t"])
$('#t2').text(data["title"][1]["t"])
$('#t3').text(data["title"][2]["t"])
$('#a').append('<div>'+data["artikel"][0]["a"]+'</>')
$('#a2').append('<div>'+data["artikel"][1]["a"]+'</>')
$('#a3').append('<div>'+data["artikel"][2]["a"]+'</>')
$('#caption').text(data["caption"])
$('#gambar').html(str)
});

// function add second
// prevent default (false)