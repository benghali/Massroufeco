///automatic way with keyup event on input

/// automatic way with onclick event handler
function massroufEco() {
  var Salary = document.getElementById("salary").value;
  console.log(Salary);
  food = 0.1 * Salary;
  var transportation = 0.2 * Salary;
  var fuelCharges = 0.2 * Salary;
  var clothes = 0.05 * Salary;
  var lodging = 0.35 * Salary;
  rest = 0.1 * Salary;
  document.getElementById("demo").style.display = "block";
  document.getElementById("demo_manual").style.display = "none";
  document.getElementById("demo").innerText = "your Salary is divided on:\n" + food + "dinars on food\n" + transportation + "dinars on transportation\n" + fuelCharges + "dinars on fuel charges \n" + clothes + "dinars on clothes\n" + lodging + "dinars on lodging\n" + rest + "dinars ,the rest of your salary\n"
}
var massroufManualCalculEco = function () {
  var Salary = document.getElementById("salary").value ;
  var food =  document.getElementById("food").value;
  var transportation = document.getElementById("transportation").value;
  var fuelCharges = document.getElementById("fuel_charges").value;
  var clothes = document.getElementById("clothes").value;
  var lodging = document.getElementById("lodging").value;
  var rest = Salary -food - transportation-fuelCharges-clothes-lodging;
  document.getElementById("result").innerText =rest + "dinars is the rest of your salary\n you are able to collect :"+rest*12+" per year."
}
document.getElementById("food").addEventListener("keyup",massroufManualCalculEco);
document.getElementById("transportation").addEventListener("keyup",massroufManualCalculEco);
document.getElementById("fuel_charges").addEventListener("keyup",massroufManualCalculEco);
document.getElementById("clothes").addEventListener("keyup",massroufManualCalculEco);
document.getElementById("lodging").addEventListener("keyup",massroufManualCalculEco);


/// manuel way 

function manualMassroufEco() {
  document.getElementById("demo").style.display = "none";
  document.getElementById("demo_manual").style.display = "block";
}
///function TransportationPerMonth(salary){
    //var reuslt=0;
   /// var trans=0.1;
///reuslt=salary*trans
///return reuslt+"this is your charge of transportation per month"
//}
//function foodperMonth(priceFood){
//result=0;

///}
