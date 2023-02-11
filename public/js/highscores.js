// grab save button, add eventlister, use fecth to fecth the api route that will add the user to the database (post)
// then i need to run a get route to show that list
// on page load show the modal
// nned to add an event listener on the play again button to go back to the play page

// placeholder until game gets set up
// let roundsSurvived = 5;  


const playAgainBtn = document.querySelector('#play-again')

// changelocation = async () => {
//     const response = await fetch('/login')
//     .then((response) => document.location.replace('/'))
// }

playAgainBtn.addEventListener('click', () => {
    document.location.replace('/')
})

// const addNewScore = async (e) => {
//     e.preventDefault();

// }