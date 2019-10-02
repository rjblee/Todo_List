// Check off specific Todos by clicking
$("li").click(function() {
  
  // // if li is gray
  //   //turn it black
  // //else
  //   //turn it grey
  // if($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // } else {
  //   $(this).css({
  //     color: "grey",
  //     textDecoration: "line-through"
  //   });
  // }

  $(this).toggleClass("completed");
  
});