const cardContainer = document.querySelector('.card-container');

const cardData = [
    { heading: "heading1", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj asdasd asdas dass das dass das da sd asd as das d asd as das da ssd asd sadas asd afs dgs df sdf sdf sdf sd fsd f sdf sd fsd fsd gdf v cx v xcv sd fs fa ", id: 1 },
    { heading: "heading2", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 2 },
    { heading: "heading3", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 3 },
    { heading: "heading4", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 4 },
    { heading: "heading5", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 5 },
    { heading: "heading6", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 6 },
    { heading: "heading7", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 7 },
    { heading: "heading8", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 8 },
    { heading: "heading9", content: "kaknsadn ajdad asdjasd asdjasndjad ajdnasjda dajdnasd ajdf dfd fdjfdfj", id: 9 },
];

const createNotes = (array) => {
    array.forEach(cardObj => {
        const { heading, content, id } = cardObj;

        const card = document.createElement("div");
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="Edit Icon"></div></a></div><div class="card-content">${content}</div>`

        card.innerHTML = insideHtml;

        cardContainer.appendChild(card);
    });
};

createNotes(cardData);

const body = document.querySelector('body');

window.addEventListener('load', () => {
    body.classList.add('visible');
})