const addbtn = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

const submit = document.querySelector(".submit");
const nameInput = document.getElementById("name");
const lcInput = document.getElementById("lc");
const imageInput = document.getElementById("image");
const descInput = document.getElementById("description");
const cardContainer = document.getElementById("cardContainer");


// Open form
addbtn.addEventListener("click", () => {
  console.log("clicked");
  form.classList.add("show");
});


// Close form
close.addEventListener("click", () => {
  form.classList.remove("show");
});


// Submit form
submit.addEventListener("click", submitForm);


function submitForm() {
  const name = nameInput.value.trim();
  const lc = lcInput.value.trim();
  const desc = descInput.value.trim();
  const file = imageInput.files[0];

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");


  // Create image
  if (file) {
    const img = document.createElement("img");

    img.src = URL.createObjectURL(file);
    img.alt = name;

    card.appendChild(img);
  }


  // Create card content
  const content = document.createElement("div");
  content.classList.add("card-content");


  // Name
  const title = document.createElement("h3");
  title.textContent = name;


  // Location
  const lcParagraph = document.createElement("p");
  lcParagraph.textContent = lc;


  // Description
  const textdesc = document.createElement("p");
  textdesc.textContent = desc;


  // Add text to content
  content.appendChild(title);
  content.appendChild(lcParagraph);
  content.appendChild(textdesc);


  // Add content to card
  card.appendChild(content);


  // Add complete card to container
  cardContainer.appendChild(card);


  // Close form
  form.classList.remove("show");


  // Clear form
  nameInput.value = "";
  lcInput.value = "";
  imageInput.value = "";
  descInput.value = "";
}