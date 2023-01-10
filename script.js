const itemEl = document.querySelector(".item");
const btnEl = document.querySelector(".btn");
const btnRandom = document.querySelector(".btn.random");
let input = document.querySelector(".header input");
const maindiv = document.querySelector(".main");

let url;

btnEl.addEventListener("click", () => {
  maindiv.style.display = "block";
  let inputValue = input.value;
  if (inputValue != "" && Number(inputValue) > 0 && Number(inputValue) < 300) {
    getNumber(inputValue);
    input.value = "";
    maindiv.innerHTML = "";
  } else {
    input.value = "";
    maindiv.innerHTML = "enter un nombre entre 0 et 300";
  }
});
function getNumber(numb) {
  url = `http://numbersapi.com/${numb}`;
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      let divMain = `
        <h2>${numb}</h2>
        <p class="paragraph">
         ${data}
        </p>`;
      maindiv.innerHTML = divMain;
    })
    .catch((error) => {
      console.log(error);
      console.log("erreur de respons");
    });
}

btnRandom.addEventListener("click", () => {
  maindiv.style.display = "block";
  let randomNumber = Math.floor(Math.random() * 300);
  getNumber(randomNumber);
});
