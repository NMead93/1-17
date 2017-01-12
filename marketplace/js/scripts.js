$(document).ready(function() {
  $("form#balls1").submit(function(event) {
  event.preventDefault();
  var basketball = parseInt($("#basketball").val());
  var printB = basketball + " basketball(s)";
  $(".unstyled").append(printB);
});

$("form#balls2").submit(function() {
event.preventDefault();
var football = parseInt($("#football").val());
var printF = football + " football(s)";
$(".unstyled").append(printF);
});

$("form#balls3").submit(function() {
event.preventDefault();
var golfball = parseInt($("#golfball").val());
var printG = golfball + " golfball(s)";
$(".unstyled").append(printG);
});

$("form#balls4").submit(function() {
event.preventDefault();
var tennisball = parseInt($("#tennisball").val());
var printT = tennisball + " tennisball(s)";
$(".unstyled").append(printT);
});

$("form#balls5").submit(function() {
event.preventDefault();
var soccerball = parseInt($("#soccerball").val());
var printSo = soccerball + " soccerball(s)";
$(".unstyled").append(printSo);
});

$("form#balls6").submit(function() {
event.preventDefault();
var snitchball = parseInt($("#snitchball").val());
var printSn = snitchball + " snitchball(s)";
$(".unstyled").append(printSn);
});

  });
