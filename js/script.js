$(document).ready(function() {
$(".radio1, .radio").click(function() {
var climate = $("input:radio[name=climate]:checked").val();
var kind = $("input:radio[name=kind]:checked").val();
var stay = $("input:radio[name=stay]:checked").val();
var long = $("input:radio[name=long]:checked").val();
var continent = $("input:radio[name=continent]:checked").val();
console.log(stay);


event.preventDefault();
});
});
