//import { json } from "express";

const addbtn = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

addbtn.addEventListener("click", () => {
  console.log("clicked");
  form.classList.add("show");
});

close.addEventListener("click", () => {
  form.classList.remove("show");
});


const authorSearch = document.getElementById("authorSearch")

authorSearch.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let authors = document.querySelectorAll(".card-content");
  authors.forEach(author => {
    const card = author.closest(".card");

    if (author.textContent.toLowerCase().includes(currentValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});



const submit = document.querySelector(".submit");
const nameInput = document.getElementById("name");
const lcInput = document.getElementById("lc");
const imageInput = document.getElementById("image");
const descInput = document.getElementById("description");
const cardContainer = document.getElementById("cardContainer");

async function  submitForm() {
  const name = nameInput.value.trim();
  const lc = lcInput.value.trim();
  const desc = descInput.value.trim();
  const file = imageInput.files[0];

  const card = document.createElement("div");
  card.classList.add("card");


  if (file) {
    const img = document.createElement("img");

    img.src = URL.createObjectURL(file);

    card.appendChild(img);

    //file.readAsDataURL(file)
  }


  const content = document.createElement("div");
  content.classList.add("card-content");

  const title = document.createElement("h3");
  title.textContent = name;
  const lcParagraph = document.createElement("p");
  lcParagraph.textContent = lc;
  const textdesc = document.createElement("p");
  textdesc.textContent = desc;

  //content.append(content);
  content.appendChild(title);
  content.appendChild(lcParagraph);
  content.appendChild(textdesc);
  card.appendChild(content);
  cardContainer.appendChild(card);

  const item = {
    name : name,
    description : desc
  };

  const response =
  await fetch ("/items", {
    method: "POST", 
    headers: {
      "content-type":
      "application/json"
    },
    body:
      JSON.stringify(item)
  });

  const result = await response.json();

  console.log (result);

  form.classList.remove("show");

  nameInput.value = "";
  lcInput.value = "";
  imageInput.value = "";
  descInput.value = "";
}
