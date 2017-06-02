$(function() {
  $("#nav-row-close").click(function() {
    $(".page-main").show();
    $(".nav-row").fadeOut();
  })
  $("#nav-col-show").click(function() {
    $(".nav-row").show();
    $(".page-main").fadeOut();
  });
});
