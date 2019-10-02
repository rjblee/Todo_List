// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
  
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

//Click on X to delete a Todo

$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
})

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //Grab new todo text from input
    var todoText = $(this).val();

    $(this).val("");

    //Create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
})

$(".fa-balance-scale").click(function() {
  $("input[type='text']").fadeToggle();
})