// back end logic
function Pizza (size, cheese, sauce, crust, meats, veggies){
this.size = size;
this.cheese = cheese;
this.sauce = sauce;
this.crust = crust;
this.meats = meats;
this.veggies = veggies;
}

var pizza = new Pizza();

// Pizza.prototype.calculate = function(){
//   var total = 0
//   if (this.size === "Large") {
//     total += 16;
//   } else if (this.size === "Medium") {
//     total += 13;
//   } else if (this.size === "Small") {
//     total += 11;
//   }
//   if (this.cheese === "Regular") {
//     total += 0;
//   } else if (this.cheese === "Extra") {
//     total += 1;
//   }
//   return total;
// };

// UI logic
$(document).ready(function(){
  $(".pizzaOption").submit(function(event){
  event.preventDefault();
  console.log("click");
  $(".placeholder").hide();
  $("#custName").text(inputtedName);
  $(".results").show();
  $(".totalPrice").show();
  var inputtedName = $("input#name").val();
  var inputtedSize = $(".size").val();
  var inputtedCheese = $(".cheese").val();
  var inputtedSauce = $(".sauce").val();
  var inputtedCrust = $(".crust").val();
  $("input:checkbox[name=meats]:checked").each(function(){
    var meatChoice = $(this).val();
    $('#meatResult').append(meatChoice + " ");
    });
    $("input:checkbox[name=veggies]:checked").each(function(){
      var vegChoice = $(this).val();
      $('#vegResult').append(vegChoice + " ");
      });

  var total = newPizza.calculate();

  var newPizza = new Pizza(inputtedSize, inputtedCheese, inputtedSauce, inputtedCrust, inputtedMeats, inputtedVeggies);


  });
});
