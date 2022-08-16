const apiUrl = "https://secure-basin-07537.herokuapp.com";
const cardContainer = document.querySelector(".card-container");
const logout = document.querySelector(".logout");
const createNoteButton = document.querySelector(".new-note");
const token = localStorage.getItem("jwt");
const body = document.querySelector("body");

let cardData = [];

const createNotes = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { heading, content, noteId } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = noteId;

    const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><div class="card-options"><a href="../updateNotes/updateNotes.html?noteId=${noteId}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="Edit Icon" /></div></a><a href="#"><div class="delete-note"><img src="../../assets/delete-note.svg" alt="Delete Icon" /></div></a></div></div><div class="card-content">${content}</div>`;

    card.innerHTML = insideHtml;

    const deleteNoteButton = card.querySelector(".delete-note");

    deleteNoteButton.addEventListener("click", () => {
      if (token) {
        fetch(`${apiUrl}/note/delete/${noteId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            location.href = "/pages/dashboard/dashboard.html";
          })
          .catch((err) => {
            alert("Error deleting note");
            console.log(err);
          });
      }
    });

    cardContainer.appendChild(card);
  });
};

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetch(`${apiUrl}/note/getallnotes`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const cardData = data.data;
        createNotes(cardData);
      })
      .catch((err) => {
        alert("Error fetching notes");
        console.log(err);
      });
  }
});

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

createNoteButton.addEventListener("click", () => {
  location.href = "/pages/createNotes/createNotes.html";
});
