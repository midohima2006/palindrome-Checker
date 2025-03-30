const chckBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results-div");
const result = document.getElementById("result");
const chckpd = () => {
const inputField = document.getElementById("text-input");
const rawTxt = inputField.value;
if (rawTxt === "") {
  alert("Please input a value");
} else {
const cleanTxt = rawTxt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const reverseTxt = cleanTxt.split('').reverse().join('');
resultsDiv.style.display = "flex";
if (reverseTxt === cleanTxt) {
  result.innerText = `${rawTxt} is a palindrome!`
} else {
  result.innerText = `${rawTxt} is not a palindrome!`
}
}
}
chckBtn.addEventListener("click", chckpd);