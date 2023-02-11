const highscoresBtn = document.querySelector('#highscores-btn')

highscoresBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.location.replace('/api/highscore')
}) 

