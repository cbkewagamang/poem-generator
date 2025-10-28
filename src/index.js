function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tb344ao2f3185a0fbb6a9c476d08743d";
  let context =
    "You are a romantic poem expert and love to write short poems. your mission is to write 5 line poem. sign at the end with <strong>SheCodes AI</strong> Make sure to follow user instructions. Do not start every line with 'In twilight's glow'";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem ${instructionsInput.value}</div>`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiUrl).then(displayPoem);
  //let poemElement = document.querySelector("#poem");
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
