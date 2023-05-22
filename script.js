let db = [
  {
    pseudo: "Alice",
    pass: "azerty+31",
  },
  {
    pseudo: "Axone",
    pass: "azerty+32",
  },
  {
    pseudo: "Aptura",
    pass: "azerty+33",
  },
];

function getInputValue() {
  // récup des valeurs avec un OnClick sur le bouton Log In
  let username = document.getElementById("pseudostring").value;
  let password = document.getElementById("passstring").value;

  checkUserLogin(username, password);
}

function checkUserLogin(username, password) {
  let check = db.find((x) => x.pseudo == username && x.pass == password);
  if (check) {
    window.location.href = "./sucess.html";
  } else {
    window.location.href = "./error.html";
  }
}
