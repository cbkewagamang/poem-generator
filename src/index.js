function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "Roses are red..",
    autoStart: true,
    //delay: 0.5,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
