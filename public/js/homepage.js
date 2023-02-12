const highscoresBtn = document.querySelector('#highscores-btn')
const playBtn = document.querySelector('#play-btn')

highscoresBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.location.replace('/api/highscore')
}) 

playBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.location.replace('/api/game')
}) 