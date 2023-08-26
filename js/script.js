$.getJSON("data/data.json", function (data) {
  // Mendapatkan waktu saat ini
  var currentTime = new Date();

  // Mendapatkan jam dari waktu saat ini
  var currentHour = currentTime.getHours();

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
  $(document).ready(function() {
      $("#masukkan").click(function() {
          var input = $("#userInput").val();
          if (input < data.x) {
              $('#alert').html(`
              <div class="alert alert-warning alert-icon" role="alert">
              <i class="uil uil-star"></i>`+data["kurang"]+`</a>.
              </div>
              `);
            } else if (input >= data.x && input < data.y) {
                $('#alert').html(`
                <div class="alert alert-primary alert-icon" role="alert">
                <i class="uil uil-star"></i>`+data["pas"]+`</a>.
                </div>
                `);
            } else {
                $('#alert').html(`
                <div class="alert alert-success alert-icon" role="alert">
                <i class="uil uil-star"></i>`+data["lebih"]+`</a>.
                </div>
                `);
            }
        });
      });
      
  // eksekusi file
  $("#salam").text(data["salam"]);  
  $("#pertanyaan").append(data["pertanyaan"]);
  $("#faq").text(data["faq"][0]["t"]);  
  $("#faq-2").text(data["faq"][1]["t"]);  
  $("#faq-3").text(data["faq"][2]["t"]);  
  $("#faq-4").text(data["faq"][3]["t"]);  
  $("#faq-5").text(data["faq"][4]["t"]);  
  $("#cfaq").text(data["faq"][0]["a"]);  
  $("#cfaq-2").text(data["faq"][1]["a"]);  
  $("#cfaq-3").text(data["faq"][2]["a"]);  
  $("#cfaq-4").text(data["faq"][3]["a"]);  
  $("#cfaq-5").text(data["faq"][4]["a"]);  
  $("#h").html(`
        <div id="h" class="col-lg-6">
            <figure class="rounded"><img src="/img/akbar.jpg" alt=""></figure>
            <h2 class="display-4 mb-3">`+data["content"][0]["h"]+`</h2>
            <p class="lead fs-lg">`+data["content"][0]["c"]+`</p>
        </div>
        `);
  $("#h2").html(`
        <div id="h" class="col-lg-6">
            <figure class="rounded"><img src="/img/akbar.jpg" alt=""></figure>
            <h2 class="display-4 mb-3">`+data["content"][1]["h"]+`</h2>
            <p class="lead fs-lg">`+data["content"][1]["c"]+`</p>
        </div>
        `);
  $("#h3").html(`
        <div id="h" class="col-lg-6">
            <figure class="rounded"><img src="/img/akbar.jpg" alt=""></figure>
            <h2 class="display-4 mb-3">`+data["content"][2]["h"]+`</h2>
            <p class="lead fs-lg">`+data["content"][2]["c"]+`</p>
        </div>
        `);
  $("#a").append(`
<div class="item-inner">
  <article>
    <div class="card">
      <figure class="card-img-top overlay overlay1 hover-scale"><a href="#"> <img src="img/akbar.jpg" alt="" /></a>
        <figcaption>
          <h5 class="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>
      <div class="card-body">
        <div class="post-header">
          <div class="post-category text-line">
            <a href="#" class="hover" rel="category">Coding</a>
          </div>
          <!-- /.post-category -->
          <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./blog-post.html">`+data["title"][0]["t"]+`</a></h2>
        </div>
        <!-- /.post-header -->
        <div class="post-content">
          <p>`+data["artikel"][0]["a"]+`</p>
        </div>
        <!-- /.post-content -->
      </div>
      <!--/.card-body -->
      <div class="card-footer">
        <ul class="post-meta d-flex mb-0">
          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>14 Apr 2021</span></li>
          <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>4</a></li>
          <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>5</a></li>
        </ul>
        <!-- /.post-meta -->
      </div>
      <!-- /.card-footer -->
    </div>
    <!-- /.card -->
  </article>
  <!-- /article -->
</div>
<!-- /.item-inner -->`);
  $("#a2").append(`
<div class="item-inner">
  <article>
    <div class="card">
      <figure class="card-img-top overlay overlay1 hover-scale"><a href="#"> <img src="img/akbar.jpg" alt="" /></a>
        <figcaption>
          <h5 class="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>
      <div class="card-body">
        <div class="post-header">
          <div class="post-category text-line">
            <a href="#" class="hover" rel="category">Workspace</a>
          </div>
          <!-- /.post-category -->
          <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./blog-post.html">`+data["title"][1]["t"]+`</a></h2>
        </div>
        <!-- /.post-header -->
        <div class="post-content">
            <p>`+data["artikel"][1]["a"]+`</p>
        </div>
        <!-- /.post-content -->
      </div>
      <!--/.card-body -->
      <div class="card-footer">
        <ul class="post-meta d-flex mb-0">
          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
          <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3</a></li>
          <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>3</a></li>
        </ul>
        <!-- /.post-meta -->
      </div>
      <!-- /.card-footer -->
    </div>
    <!-- /.card -->
  </article>
  <!-- /article -->
</div>
<!-- /.item-inner -->`);
  $("#a3").append(`
<div class="item-inner">
  <article>
    <div class="card">
      <figure class="card-img-top overlay overlay1 hover-scale"><a href="#"> <img src="/img/akbar.jpg" alt="" /></a>
        <figcaption>
          <h5 class="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>
      <div class="card-body">
        <div class="post-header">
          <div class="post-category text-line">
            <a href="#" class="hover" rel="category">Meeting</a>
          </div>
          <!-- /.post-category -->
          <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./blog-post.html">`+data["title"][2]["t"]+`</a></h2>
        </div>
        <!-- /.post-header -->
        <div class="post-content">
            <p>`+data["artikel"][2]["a"]+`</p>
        </div>
        <!-- /.post-content -->
      </div>
      <!--/.card-body -->
      <div class="card-footer">
        <ul class="post-meta d-flex mb-0">
          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
          <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>6</a></li>
          <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>3</a></li>
        </ul>
        <!-- /.post-meta -->
      </div>
      <!-- /.card-footer -->
    </div>
    <!-- /.card -->
  </article>
  <!-- /article -->
</div>
<!-- /.item-inner -->`);
});

// function add second
// prevent default (false)
