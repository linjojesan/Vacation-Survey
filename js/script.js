$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var climate = parseInt($("input:radio[name=climate]:checked").val());
    var kind = parseInt($("input:radio[name=kind]:checked").val());
    var stay = parseInt($("input:radio[name=stay]:checked").val());
    var long = parseInt($("input:radio[name=long]:checked").val());
    var continent = parseInt($("input:radio[name=continent]:checked").val());
    console.log(climate);
    console.log(kind);
    console.log(stay);
    console.log(long);
    console.log(continent);







    if (climate === 1 ) {
     $("#bangkok").show();
     }
// }

//
//
    event.preventDefault();
  });

// console.log(climate);
});
