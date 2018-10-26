
$(".prev_btn").click(function() {
  if ($(".left_box").hasClass("two_click")) {
    $(".left_box, .right_box").removeClass("two_click");
  }
  else {
    $(".left_box, .right_box").removeClass("one_click");
  }
});

$(".next_btn").click(function() {
  if ($(".left_box").hasClass("one_click")) {
    $(".left_box, .right_box").addClass("two_click");
  }
  else {
    $(".left_box, .right_box").addClass("one_click");
  }
});
