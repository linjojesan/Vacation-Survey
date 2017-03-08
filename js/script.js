$(document).ready(function() {
  $("form#survey").submit(function(event) {


    var climate = parseInt($("input:radio[name=climate]:checked").val());
    var kind = parseInt($("input:radio[name=kind]:checked").val());
    var stay = parseInt($("input:radio[name=stay]:checked").val());
    var long = parseInt($("input:radio[name=long]:checked").val());
    var continent = parseInt($("input:radio[name=continent]:checked").val());


    if (climate === 1 ) {
     $("#bangkok").show();
   }
      else if  (climate === 2) {
      $("#seattle").show();
    }
      else {
      return alert("Who want's to go to someplace cold for vacation?");
      }
});

      if (kind === 1) {
        $("#bangkok").show();
        $("#costa-rica").show();
      }
       else  if (kind === 2  ) {
          return alert("If you want to relax that's not going to happen")
      {
       if (kind === 3) {
          $("#rome").show();
          $("#paris").show();

        }

        if (continent <= 1) {
          $("#seattle").show();
        }
          else if(continent === 2) {
          ("#costa-rica").show();
        }
          else if  (continent <= 3) {
          $("#rome").show();
          $("#paris").show();
          }
          else   if (continent <= 4) {
            $("#bangkok").show();
                }
        
          else if (continent === 5) {
            ("#sydney").show();
          }

            event.preventDefault();

          });
        });













// console.log(climate);
