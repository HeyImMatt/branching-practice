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
  const chooseAnimal = prompt("Do you want to learn about giraffes, koalas, or killer whales?").toLowerCase();
  if (chooseAnimal === "giraffes") {
    $("#giraffeInfo").find("p").removeClass("hidden");
  } else if (chooseAnimal === "koalas") {
    $("#koalaInfo").find("p").removeClass("hidden");
  } else if (chooseAnimal === "killer whales") {
    $("#whaleInfo").find("p").removeClass("hidden");
  } else {
    alert("We weren\'t sure which animal you wanted to learn more about. Click on a photo to learn more.");
  }
})