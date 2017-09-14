$(function(){
  var age = parseInt(prompt("what is your age?"));

  if (age >= 21) {
    $("#adults").show();
  } else {
    $("#minors").show();
    alert("No voting Rights !!!!!");
  }





});
