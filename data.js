document.addEventListener("DOMContentLoaded", init, false);

function init() {
  console.log("loading ...");

  /***********************modified space************************ */
  swapiModule.getStarship(5,function(data) {
    document.getElementById("starshipID_5_model").innerHTML = data.model;
    document.getElementById("starshipID_5_manufacturer").innerHTML = data.manufacturer;
    document.getElementById("starshipID_5_crew").innerHTML = data.crew;
    document.getElementById("starshipID_5_edited").innerHTML = data.edited;
  });

  swapiModule.getStarship(9,function(data) {
    document.getElementById("starshipID_9_model").innerHTML = data.model;
    document.getElementById("starshipID_9_manufacturer").innerHTML = data.manufacturer;
    document.getElementById("starshipID_9_crew").innerHTML = data.crew;
    document.getElementById("starshipID_9_edited").innerHTML = data.edited;
  });

  swapiModule.getStarship(10,function(data) {
    document.getElementById("starshipID_10_model").innerHTML = data.model;
    document.getElementById("starshipID_10_manufacturer").innerHTML = data.manufacturer;
    document.getElementById("starshipID_10_crew").innerHTML = data.crew;
    document.getElementById("starshipID_10_edited").innerHTML = data.edited;
  });

  swapiModule.getStarship(11,function(data) {
    document.getElementById("starshipID_11_model").innerHTML = data.model;
    document.getElementById("starshipID_11_manufacturer").innerHTML = data.manufacturer;
    document.getElementById("starshipID_11_crew").innerHTML = data.crew;
    document.getElementById("starshipID_11_edited").innerHTML = data.edited;
  });

  swapiModule.getStarship(15,function(data) {
    document.getElementById("starshipID_15_model").innerHTML = data.model;
    document.getElementById("starshipID_15_manufacturer").innerHTML = data.manufacturer;
    document.getElementById("starshipID_15_crew").innerHTML = data.crew;
    document.getElementById("starshipID_15_edited").innerHTML = data.edited;
  });
}