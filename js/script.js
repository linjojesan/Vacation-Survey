$(document).ready(function() {
  $(".btn btn-default").click(function(event) {

      var climate = $("input:radio[name=climate]:checked").val();
      var kind = $("input:radio[name=kind]:checked").val();
      var stay = $("input:radio[name=stay]:checked").val();
      var long = $("input:radio[name=long]:checked").val();
      var continent = $("input:radio[name=continent]:checked").val();
      console.log(climate).click(".btn btn-default");
          event.preventDefault();

// if (climate === "hot") {
//   return destination1
//
//
// }
});

// console.log(climate);
});
