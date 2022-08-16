const apiUrl = "https://secure-basin-07537.herokuapp.com";
const urlParameter = new URLSearchParams(window.location.search);
const noteId = urlParameter.get("noteId");
const updateNoteButton = document.querySelector(".update-note-button");
const token = localStorage.getItem("jwt");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

updateNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".update-note-input").value;
  const heading = document.querySelector(".update-note-heading").value;

  if (token) {
    fetch(`${apiUrl}/note/update/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/pages/dashboard/dashboard.html";
        }
      })
      .catch((err) => {
        alert("Error creating note");
        console.log(err);
      });
  }
});
