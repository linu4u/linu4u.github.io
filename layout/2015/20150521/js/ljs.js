$(".box_1").click(function(){
  $(this).css("width","600")
  $(".box_2").css("width","150")
             .removeClass("box_on")
  $(".box_3").css("width","150")
             .removeClass("box_on")
  $(this).addClass("box_on")
});

$(".box_2").click(function(){
  $(".box_1").css("width","150")
             .removeClass("box_on")
  $(this).css("width","600")
  $(".box_3").css("width","150")
             .removeClass("box_on")
  $(this).addClass("box_on")
});

$(".box_3").click(function(){
  $(".box_1").css("width","150")
             .removeClass("box_on")
  $(".box_2").css("width","150")
             .removeClass("box_on")
  $(this).css("width","600")
  $(this).addClass("box_on")
});
