$.getJSON("data/data.json", function (data) {
  function time(){
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    var h2 = h;
    h2 = h2 % 12;
    $('#jamku').text(h2+" : "+m+(h>12?' PM':' AM'));
    $('#jamku2').text(h2+" : "+m+(h>12?' PM':' AM'));
    console.log(h)
}

setInterval(time,1000);
  // Mendapatkan waktu saat ini
  var currentTime = new Date();


  // Mendapatkan jam dari waktu saat ini
  // var currentHour = currentTime.getHours();
  var currentHour = 4;

  // logika penyesuaian waktu
  if (currentHour >= 4 && currentHour < 5) {
    data = data.bangun;
  } else if (currentHour >= 5 && currentHour < 6) {
    data = data.olahraga
  } else if (currentHour >= 6 && currentHour < 7) {
        data = data.persiapan
  } else if (currentHour >= 7 && currentHour < 11) {
        data = data.aktivitas
  } else if (currentHour >= 11 && currentHour < 13) {
        data = data.istirahat
  } else if (currentHour >= 13 && currentHour < 16) {
        data = data.minum
  } else if (currentHour >= 16 && currentHour < 17) {
        data = data.sore
  } else if (currentHour >= 17 && currentHour < 20) {
        data = data.keluarga
  } else if (currentHour >= 20 && currentHour < 23) {
        data = data.tidur
  } else if (currentHour >= 23 && currentHour < 4) {
        data = data.begadang
  } else {
    data = data.olahraga;
  }
  // logika pertanyaan
  $('#pertanyaan').text(data.pertanyaan);
  $(document).ready(function() {
    $("#tombol-input").click(function() {
        // Mengambil nilai inputan pengguna
        var userInput = parseInt($("#userInput").val());
        console.log(userInput);
        // Memeriksa apakah input lebih dari lima
        if (userInput < data.x) {
          $('#alertku').html(`<div class="alert alert-warning" role="alert">`+data.kurang+`</div>`)
        } else if (userInput >= data.x && userInput < data.y) {
          $('#alertku').html(`<div class="alert alert-info" role="alert">`+data.pas+`</div>`)
        } else {
          $('#alertku').html(`<div class="alert alert-success" role="alert">`+data.lebih+`</div>`)
        }
    });
});


  // artiekl
  $('#artikel').append(`<div class="col-lg-4">
  <div class="card">
    <img class="card-img-top mb-2" src="https://source.unsplash.com/`+data["artikel"][0]["g"]+`/600x600" alt="card img" />
    <div class="card-body">
      <div class="artikel-genre rounded-5 bg-opacity-25 d-inline py-1 px-4 ">kesehatan</div>
      <span class="artikel-tanggal"> 11 nov 2023 </span>

      <h4 class="card-title mt-3">`+data["title"][0]["t"]+`</h4>
      <!-- Button trigger modal -->
      <button type="button" class="tombol-artikel" data-bs-toggle="modal" data-bs-target="#artikel-1">
        <p class="card-text">
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="11" fill="#688BFE" />
            <path
              d="M7 10.5C6.72386 10.5 6.5 10.7239 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5L7 10.5ZM14.3536 11.3536C14.5488 11.1583 14.5488 10.8417 14.3536 10.6464L11.1716 7.46447C10.9763 7.2692 10.6597 7.2692 10.4645 7.46447C10.2692 7.65973 10.2692 7.97631 10.4645 8.17157L13.2929 11L10.4645 13.8284C10.2692 14.0237 10.2692 14.3403 10.4645 14.5355C10.6597 14.7308 10.9763 14.7308 11.1716 14.5355L14.3536 11.3536ZM7 11.5H14V10.5H7L7 11.5Z"
              fill="white"
            />
          </svg>
        </p>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="artikel-1" tabindex="-1" aria-labelledby="artikelku-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="artikelku-1">`+data["title"][0]["t"]+`</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">`+data["artikel"][0]["a"]+`</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  $('#artikel').append(`<div class="col-lg-4">
  <div class="card">
    <img class="card-img-top mb-2" src="https://source.unsplash.com/`+data["artikel"][1]["g"]+`/600x600" alt="card img" />
    <div class="card-body">
      <div class="artikel-genre rounded-5 bg-opacity-25 d-inline py-1 px-4 bg-faq3">kesadaran</div>
      <span class="artikel-tanggal"> 9 Jan 2023 </span>

      <h4 class="card-title mt-3">`+data["title"][1]["t"]+`</h4>
      <!-- Button trigger modal -->
      <button type="button" class="tombol-artikel" data-bs-toggle="modal" data-bs-target="#artikel-2">
        <p class="card-text">
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="11" fill="#688BFE" />
            <path
              d="M7 10.5C6.72386 10.5 6.5 10.7239 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5L7 10.5ZM14.3536 11.3536C14.5488 11.1583 14.5488 10.8417 14.3536 10.6464L11.1716 7.46447C10.9763 7.2692 10.6597 7.2692 10.4645 7.46447C10.2692 7.65973 10.2692 7.97631 10.4645 8.17157L13.2929 11L10.4645 13.8284C10.2692 14.0237 10.2692 14.3403 10.4645 14.5355C10.6597 14.7308 10.9763 14.7308 11.1716 14.5355L14.3536 11.3536ZM7 11.5H14V10.5H7L7 11.5Z"
              fill="white"
            />
          </svg>
        </p>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="artikel-2" tabindex="-1" aria-labelledby="artikelku-2" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="artikelku-2">`+data["title"][1]["t"]+`</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">`+data["artikel"][1]["a"]+`</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  $('#artikel').append(`<div class="col-lg-4">
  <div class="card">
    <img class="card-img-top mb-2" src="https://source.unsplash.com/`+data["artikel"][2]["g"]+`/600x600" alt="card img" />
    <div class="card-body">
      <div class="artikel-genre rounded-5 bg-opacity-25 d-inline py-1 px-4">kesehatan</div>
      <span class="artikel-tanggal"> 8 feb 2023 </span>

      <h4 class="card-title mt-3">`+data["title"][2]["t"]+`</h4>
      <!-- Button trigger modal -->
      <button type="button" class="tombol-artikel" data-bs-toggle="modal" data-bs-target="#artikel-3">
        <p class="card-text">
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="11" fill="#688BFE" />
            <path
              d="M7 10.5C6.72386 10.5 6.5 10.7239 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5L7 10.5ZM14.3536 11.3536C14.5488 11.1583 14.5488 10.8417 14.3536 10.6464L11.1716 7.46447C10.9763 7.2692 10.6597 7.2692 10.4645 7.46447C10.2692 7.65973 10.2692 7.97631 10.4645 8.17157L13.2929 11L10.4645 13.8284C10.2692 14.0237 10.2692 14.3403 10.4645 14.5355C10.6597 14.7308 10.9763 14.7308 11.1716 14.5355L14.3536 11.3536ZM7 11.5H14V10.5H7L7 11.5Z"
              fill="white"
            />
          </svg>
        </p>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="artikel-3" tabindex="-1" aria-labelledby="artikelku-3" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="artikelku-3">`+data["title"][2]["t"]+`</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">`+data["artikel"][2]["a"]+`</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);

// faq
$('#faq-1').append(`
<!-- item -->
<div class="col-lg-6 mb-2">
<div class="tab">
  <input id="tab-1" type="checkbox" />
  <label class="`+data.warna[2]["a"]+` judul-table p-3" for="tab-1">
    <p>`+data["faq"][0]["t"]+`</p>
  </label>

  <div class="`+data.warna[2]["a"]+` content p-3">
    <p>`+data["faq"][0]["a"]+`</p>
  </div>
</div>
</div>
<!-- end item -->
<!-- item -->
<div class="col-lg-6 mb-2">
<div class="tab">
  <input id="tab-2" type="checkbox" />
  <label class="`+data.warna[2]["a"]+` judul-table p-3" for="tab-2">
    <p>`+data["faq"][1]["t"]+`</p>
  </label>

  <div class="`+data.warna[2]["a"]+` content p-3">
    <p>`+data["faq"][1]["a"]+`</p>
  </div>
</div>
</div>
<!-- end item -->
<!-- item -->
<div class="col-lg-6 mb-2">
<div class="tab">
  <input id="tab-3" type="checkbox" />
  <label class="`+data.warna[2]["a"]+` judul-table p-3" for="tab-3">
    <p>`+data["faq"][2]["t"]+`</p>
  </label>

  <div class="`+data.warna[2]["a"]+` content p-3">
    <p>`+data["faq"][2]["a"]+`</p>
  </div>
</div>
</div>
<!-- end item -->
<!-- item -->
<div class="col-lg-6 mb-2">
<div class="tab">
  <input id="tab-4" type="checkbox" />
  <label class="`+data.warna[2]["a"]+` judul-table p-3" for="tab-4">
    <p>`+data["faq"][3]["t"]+`</p>
  </label>

  <div class="`+data.warna[2]["a"]+` content p-3">
    <p>`+data["faq"][3]["a"]+`</p>
  </div>
</div>
</div>
<!-- end item -->
<!-- item -->
<div class="col-lg-6 mb-2">
<div class="tab">
  <input id="tab-5" type="checkbox" />
  <label class="`+data.warna[2]["a"]+` judul-table p-3" for="tab-5">
    <p>`+data["faq"][4]["t"]+`</p>
  </label>

  <div class="`+data.warna[2]["a"]+` content p-3">
    <p>`+data["faq"][4]["a"]+`</p>
  </div>
</div>
</div>
<!-- end item -->
`)
// warna bola
$('#warnaku-2').attr('class',data.warna[1]["a"]+' rounded-5 bg-opacity-25 d-inline py-1 px-4')
$('#warnaku').attr('class',data.warna[1]["a"]+' rounded-5 bg-opacity-25 d-inline py-1 px-4')

  // eksekusi file
  const main = document.getElementById('main');
  // logika penyesuaian waktu
  if (currentHour >= 4 && currentHour < 5) {
    fetch('/bangun.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 5 && currentHour < 6) {
    fetch('/olahraga.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 6 && currentHour < 7) {
    fetch('/persiapan.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 7 && currentHour < 11) {
    fetch('/aktivitas.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 11 && currentHour < 13) {
    fetch('/istirahat.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 13 && currentHour < 16) {
    fetch('/minum.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 16 && currentHour < 17) {
    fetch('/sore.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 17 && currentHour < 20) {
    fetch('/keluarga.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 20 && currentHour < 22) {
    fetch('/tidur.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else if (currentHour >= 23 && currentHour < 4) {
    fetch('/begadang.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  } else {
    fetch('/minum.html').then(snap => snap.text()).then(result => {
      main.innerHTML = result
    })
  }
});

// function add second
// prevent default (false)
