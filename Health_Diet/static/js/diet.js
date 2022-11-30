var calorie = document.getElementById("calorie");
var day = document.getElementById("day");
var calorie_form = document.getElementById("calorie_form");
var cal = document.getElementsByClassName("cal");

var genderlength = document.getElementsByName("gender").length;
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var age = document.getElementById("age");
var answer = document.getElementById("answer");
var answer2 = document.getElementById("answer2");
var BMI = document.getElementById("BMI");
var yourweight = document.getElementById("yourweight");

num_day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

function calfunc() {
  for (var i = 0; i < 30; i += 1) {
    if (num_day[i] == day.value) {
      cal[i].textContent = calorie.value + "kcal";
    }
  }
}

function calfunc2() {
  if (document.getElementsByName("gender")[0].checked == true) {
    answer.textContent =
      "Your standard weight : " +
      ((height.value * height.value) / 10000) * 22 +
      " kg";
    answer2.textContent =
      "Your recommend calories per day : " +
      (((height.value * height.value) / 10000) * 22 * 30).toFixed(2) +
      " kcal";
  } else if (document.getElementsByName("gender")[1].checked == true) {
    answer.textContent =
      "Your standard weight : " +
      ((height.value * height.value) / 10000) * 21 +
      " kg";
    answer2.textContent =
      "Your recommend calories per day : " +
      (((height.value * height.value) / 10000) * 21 * 30).toFixed(2) +
      " kcal";
  }
  BMI.textContent =
    "Your BMI : " + (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
  if (weight.value / ((height.value * height.value) / 10000) < 18.5) {
    yourweight.textContent = "You have to eat more than recommend calories!";
  } else if (
    weight.value / ((height.value * height.value) / 10000) >= 18.5 ||
    weight.value / ((height.value * height.value) / 10000) < 23
  ) {
    yourweight.textContent = "You have to eat recommend calories!";
  } else {
    yourweight.textContent = "You have to eat less than recommend calories!";
  }
}
