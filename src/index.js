function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: `Roses are red,
Violets are blue,
My heart finds its rhythm,
When thinking of you.

The moonlight may whisper,
Of love pure and true,
But no words could capture,
What I feel for you..🌹
`,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
