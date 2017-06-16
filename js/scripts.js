// back end logic
function Pizza (name, size, cheese, sauce, crust, meats, veggies){
this.name = name;
this.size = size;
this.cheese = cheese;
this.sauce = sauce;
this.crust = crust;
this.meat = meat;
this.veggies = veggies;
}

pizza.prototype.calculate(function(){
  var total = 0
  if this.size == "large"{
    total += 16;
  } else if this.size == "medium" {
    total += 13;
  } else if this.size == "small" {
    total += 11;
  }
  if this.cheese == "regular" {
    total += 0;
  } else if this.cheese == "extra" {
    total += 1;
  }
  return total;
});
