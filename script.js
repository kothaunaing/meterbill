let usedUnit = Number(localStorage.getItem('user-input')) || 0;
let cost = Number(localStorage.getItem('cost')) || 0;

if (usedUnit) document.querySelector('.user-input').value = `${usedUnit}`;
displayResult(usedUnit, cost);

function calculateBill() {
  let typingElement = document.querySelector('.typing');

  const inputElement = document.querySelector('.user-input');
  usedUnit = Number(inputElement.value);

  if (usedUnit) {
    cost = 500 + calCost(usedUnit);
  }
  else {
    usedUnit = 0;
    cost = 0;
    if (usedUnit !== 0) warning();
  }

  displayResult(usedUnit, cost);
  console.log(usedUnit);
  console.log(cost);
  typingElement.innerHTML = 'Hello 😀';
  saveStorage(usedUnit, cost);
}

function calCost(usedUnit) {
  if (usedUnit >= 0 && usedUnit <= 30) // between 1 and 30 --> 35 MMk/unit
  {
    cost = usedUnit * 35;
  }
  else if (usedUnit >= 31 && usedUnit <= 50) // between 31 and 50 --> 50 MMk/unit
  {
    cost = 1050 + (usedUnit - 30) * 50;
  }
  else if (usedUnit >= 51 && usedUnit <= 75) // between 51 and 75 --> 70 MMk/unit
  {
    cost = 2050 + (usedUnit - 50) * 70;
  }
  else if (usedUnit >= 76 && usedUnit <= 100) // between 76 and 100 --> 90 MMk/unit
  {
    cost = 3800 + (usedUnit - 75) * 90;
  }
  else if (usedUnit >= 101 && usedUnit <= 150) // between 101 and 150 --> 110 MMk/unit
  {
    cost = 6050 + (usedUnit - 100) * 110;
  }
  else if (usedUnit >= 151 && usedUnit <= 200) // between 151 and 200 --> 120 MMk/unit
  {
    cost = 11550 + (usedUnit - 150) * 120;
  }
  else // above 200 --> 125 MMk/unit
  {
    cost = 17550 + (usedUnit - 200) * 125;
  }
  return cost;
}

function displayResult(usedUnit, cost) {
  let unit = '';

  if (usedUnit <= 1) {
    unit = 'unit';
  }
  else {
    unit = 'units';
  }

  let unitElement = document.querySelector('.unit-used');
  let costElement = document.querySelector('.total-cost');

  unitElement.innerHTML = `${usedUnit} ${unit}`;
  costElement.innerHTML = `${cost} Kyats`;
}

function typing(event) {
  let typingElement = document.querySelector('.typing');
  let warnElement = document.querySelector('.warning');

  typingElement.innerHTML = 'Typing . .';
  warnElement.innerHTML = '';

  if (event.key === 'Enter') {
    calculateBill();
  }
}

function warning() {
  let warnElement = document.querySelector('.warning');
  warnElement.innerHTML = "Please don't enter letters!";
}

function saveStorage(usedUnit, cost) {
  const inputElement = document.querySelector('.user-input');
  usedUnit = Number(inputElement.value);
  localStorage.setItem('user-input', `${usedUnit}`);
  localStorage.setItem('cost', `${cost}`);
}