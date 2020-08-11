let counter = 1;
let letter = 65;
let css_properties = Object.getOwnPropertyNames(document.body.style);

//fontColor =============> font-color
String.prototype.ObjectToCSS = function () {
  let property = "";
  this.split("").forEach(function (item) {
    if (item.match(/[A-Z]/g)) {
      property += "-" + item.toLowerCase();
    } else {
      property += item;
    }
  });
  return property;
};

css_properties = css_properties.map((item) => item.ObjectToCSS());

function count(type) {
  if (type == "increase" && counter < 26) {
    counter++;
    letter++;
  } else if (type == "decrease" && counter > 1) {
    counter--;
    letter--;
  }
  displayCounter();
  displayAlphabet();
  displayPropeties();
}

function displayCounter() {
  document.querySelector(".counter-text").innerHTML = formatNumber(counter);
}
function displayAlphabet() {
  document.querySelector(".alphabet").innerHTML = String.fromCharCode(letter);
}
function displayPropeties() {
  let filtered_properties = css_properties.filter(function (item) {
    return item.startsWith(String.fromCharCode(letter).toLowerCase());
  });
  let txt = "";
  filtered_properties.forEach(function (item) {
    txt += `<p>${item}</p>`;
  });

  document.querySelector(".bottom-level").innerHTML = txt;
}

function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

window.onload = function () {
  displayCounter();
  displayAlphabet();
  displayPropeties();
};
