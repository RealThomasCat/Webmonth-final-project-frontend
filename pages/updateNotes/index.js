const createNoteInput = document.querySelector('.create-note-input');

createNoteInput.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const body = document.querySelector('body');

window.addEventListener('load', () => {
    body.classList.add('visible');
})

const urlParameter = new URLSearchParams(window.location.search);
const noteId = urlParameter.get('noteId');

console.log(noteId);
