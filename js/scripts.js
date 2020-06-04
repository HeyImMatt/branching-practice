$(document).ready(function() {
  $(".container").find("#giraffeInfo, #koalaInfo, #whaleInfo").click(function() {
    $(this).find("p").toggleClass("hidden");
    if (this.id === "giraffeInfo") {
      $("#koalaInfo, #whaleInfo").find("p").addClass("hidden");
    } else if (this.id === "koalaInfo") {
      $("#giraffeInfo, #whaleInfo").find("p").addClass("hidden");
    } else {
      $("#giraffeInfo, #koalaInfo").find("p").addClass("hidden");
    }
  })
})