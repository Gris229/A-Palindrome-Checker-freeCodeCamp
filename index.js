const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const rez = document.querySelector("#rez");

function palindrome() {
  if(input.value ==="") {
    alert("Please input a value");
  
  }

  const regex = /[a-z0-9]/i;
  let word0 = input.value;
  let word1 = [];
  let word2;
  let word3;

  for (let w of word0) {
    if(regex.test(w)) {
      word1.push(w)
    }
  }

  word2 = word1.join("").toLowerCase()
  word3 = word1.reverse().join("").toLowerCase()

  if(word2 === word3) {
    rez.hidden = true;
    result.textContent = `${input.value} is a palindrome`;
  } else {
    rez.hidden = true;
    result.textContent = `${input.value} is not a palindrome`;
  }

}

input.addEventListener("focus", () => {
  result.textContent = "";
  rez.hidden = false;
})
checkBtn.addEventListener("click", palindrome)
