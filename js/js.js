var isLoaded = false;

$(document).ready(function () {

  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'click', // يظهر عند الضغط فقط، في حالة حذفها سيضهر عند تمرير الموس على العنصر
    delay: 1000 // يختفي بعد ثانية
  });

  //go slowly
  $("a.scroll").on('click', function (event) {
    var hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 1500, function () { });
  });





  

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $("#navnar").addClass("notransparent");
    } else {
      $("#navnar").removeClass("notransparent");
    }
  });


  //circle progress

  $(window).scroll(function () {
    if(!isLoaded){
      if (checkVisible($('#statisics'))) {
        $('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          fill: "#0575e6",
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('span').html(Math.round(stepValue * 100) + '%');
        });

        isLoaded = true;

      }
    }
  });

  //validation
  $(function () {
    $("#commentForm").validate();
  });



});


//copy link
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("contact me on watsapp  : " + copyText.value);
}



function checkVisible(elm, eval) {
  eval = eval || "visible";
  var vpH = $(window).height(),
    st = $(window).scrollTop(),
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (eval == "above") return ((y < (vpH + st)));
}