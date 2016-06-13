//business logic
function Places(country, cities, time, reason, food) {
  this.country = country;
  this.cities = cities;
  this.time = time;
  this.reason = reason;
  this.food = food;
}

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
		debugger;
    var country = $("input#new-country").val();
    var cities = $("input#new-cities").val();
    var time = $("input#new-time").val();
    var reason = $("input#new-reason").val();
    var food = $("input#new-food").val();

    var newPlaces = new Places(country, cities, time, reason, food);

    $("ul#place-list").append("<li><span class='place'>" + newPlaces.country + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlaces.country);
      $(".cities").text(newPlaces.cities);
      $(".time").text(newPlaces.time);
			$(".reason").text(newPlaces.reason);
      $(".food").text(newPlaces.food);
    });

    $("input#new-country").val("");
    $("input#new-cities").val("");
		$("input#new-time").val("");
    $("input#new-reason").val("");
		$("input#new-food").val("");
  });
});
