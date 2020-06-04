$(document).ready(function() {
  $(".container").find("#giraffeInfo, #koalaInfo, #whaleInfo").click(function() {
    $(this).find('p').toggleClass("hidden");
  })
})