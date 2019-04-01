$(document).ready(function(){
  $(".btn").click(function(){

    flavors = ["Vanilla", "Chocolate", "Strawberry"];
    flavors.forEach(function(flavor) {
      $("ul").append("<li>" + flavor + "</li>");
    // alert(flavor)
    // });

  });

});
});
