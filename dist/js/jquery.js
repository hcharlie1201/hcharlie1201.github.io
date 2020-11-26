$("#show-box-1").find("#sb-1").hide();
$("#show-box-2").find("#sb-2").hide();
$("#show-box-3").find("#sb-3").hide();
$("#show-box-4").find("#sb-4").hide();
$("#show-box-5").find("#sb-5").hide();
$("#show-box-6").find("#sb-6").hide();
$("#show-box-7").find("#sb-7").hide();
$("#show-box-8").find("#sb-8").hide();
$("#show-box-9").find("#sb-9").hide();
$("#show-box-10").find("#sb-10").hide();
$("#show-box-11").find("#sb-11").hide();
$("#show-box-12").find("#sb-12").hide();
$("#show-box-13").find("#sb-13").hide();
// for (let i = i; i <= 10; i++) {
//   let temp = "#show-box-";
//   let temp2 = "sb-";
//   $(temp + `${1}`)
//     .find(temp2 + `${1}`)
//     .hide();
// }

var activated1 = 0;
var activated2 = 0;
var activated3 = 0;
var activated4 = 0;
var activated5 = 0;
var activated6 = 0;
var activated7 = 0;
var activated8 = 0;
var activated9 = 0;
var activated10 = 0;
var activated11 = 0;
var activated12 = 0;
var activated13 = 0;

// for (let i = 1; i <= 10; i++) {
//   $(`#show-box-${i}`).click(function () {
//     //expand red div width to 200px
//     $(`#sb-${i}`).toggle("slide");
//   });
//   $(`#show-box-${i}`).on("click", function () {
//     if (`activated${i}` == 0) {
//       $(this).css("background", "rgba(161, 106, 4, 0.9)");
//       $(this).css("color", "white");
//       `activated${i}` = 1;
//     } else {
//       $(this).css("background", "#ffbc00");
//       $(this).css("color", "black");
//       `activated${i}` = 0;
//     }
//   });
// }

$("#show-box-1").click(function () {
  //expand red div width to 200px
  $("#sb-1").toggle("slide");
});
$("#show-box-1").on("click", function () {
  if (activated1 == 0) {
    $(this).css("background", "black");
    $(this).css("color", "white");
    activated1 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated1 = 0;
  }
});

$("#show-box-2").click(function () {
  //expand red div width to 200px
  $("#sb-2").toggle("slide");
});
$("#show-box-2").on("click", function () {
  if (activated2 == 0) {
    $(this).css("background", "black");
    $(this).css("color", "white");
    activated2 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated2 = 0;
  }
});

$("#show-box-3").click(function () {
  //expand red div width to 200px
  $("#sb-3").toggle("slide");
});
$("#show-box-3").on("click", function () {
  if (activated3 == 0) {
    $(this).css("background", "black");
    $(this).css("color", "white");
    activated3 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated3 = 0;
  }
});

$("#show-box-4").click(function () {
  //expand red div width to 200px
  $("#sb-4").toggle("slide");
});
$("#show-box-4").on("click", function () {
  if (activated4 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated4 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated4 = 0;
  }
});

$("#show-box-5").click(function () {
  //expand red div width to 200px
  $("#sb-5").toggle("slide");
});
$("#show-box-5").on("click", function () {
  if (activated5 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated5 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated5 = 0;
  }
});

$("#show-box-6").click(function () {
  //expand red div width to 200px
  $("#sb-6").toggle("slide");
});
$("#show-box-6").on("click", function () {
  if (activated6 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated6 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated6 = 0;
  }
});

$("#show-box-7").click(function () {
  //expand red div width to 200px
  $("#sb-7").toggle("slide");
});
$("#show-box-7").on("click", function () {
  if (activated7 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated7 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated7 = 0;
  }
});

$("#show-box-8").click(function () {
  //expand red div width to 200px
  $("#sb-8").toggle("slide");
});
$("#show-box-8").on("click", function () {
  if (activated8 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated8 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated8 = 0;
  }
});

$("#show-box-9").click(function () {
  //expand red div width to 200px
  $("#sb-9").toggle("slide");
});
$("#show-box-9").on("click", function () {
  if (activated9 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated9 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated9 = 0;
  }
});

$("#show-box-10").click(function () {
  //expand red div width to 200px
  $("#sb-10").toggle("slide");
});
$("#show-box-10").on("click", function () {
  if (activated10 == 0) {
    $(this).css("background", "rgba(58, 66, 138, 0.9)");
    $(this).css("color", "white");
    activated10 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated10 = 0;
  }
});

$("#show-box-11").click(function () {
  //expand red div width to 200px
  $("#sb-11").toggle("slide");
});
$("#show-box-11").on("click", function () {
  if (activated11 == 0) {
    $(this).css("background", "rgba(133, 61, 33, 0.9)");
    $(this).css("color", "white");
    activated11 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated11 = 0;
  }
});

$("#show-box-12").click(function () {
  //expand red div width to 200px
  $("#sb-12").toggle("slide");
});
$("#show-box-12").on("click", function () {
  if (activated12 == 0) {
    $(this).css("background", "rgba(133, 61, 33, 0.9)");
    $(this).css("color", "white");
    activated12 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated12 = 0;
  }
});

$("#show-box-13").click(function () {
  //expand red div width to 200px
  $("#sb-13").toggle("slide");
});
$("#show-box-13").on("click", function () { 
  if (activated13 == 0) {
    $(this).css("background", "rgba(255,153,0)");
    $(this).css("color", "white");
    activated13 = 1;
  } else {
    $(this).css("background", "#ffbc00");
    $(this).css("color", "black");
    activated13 = 0;
  }
});
