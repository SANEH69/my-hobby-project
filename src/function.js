function learnMore() {
  let cocktail = prompt("Are you interested in discovering new cocktails?");
  let name = prompt("What is your name?");
  let email = prompt("Please provide your email adress.");

  alert(
    "Thank you," +
      name +
      "!" +
      "Stay on the lookout for new cocktail recipes, we hope you'll enjoy them and find your new favourite drink!"
  );
}

let learnButton = document.querySelector(".learnbutton");
learnButton.addEventListener("click", learnMore);

function changeTheme() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}

let themeButton = document.querySelector(".themebutton");
themeButton.addEventListener("click", changeTheme);
