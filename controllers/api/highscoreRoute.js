
// can do a post route saying (do you want to post your highscore) if yes, then on button click add highscore to db and then display all users (name and score only)

const router = require('express').Router();
const { User } = require('../../models')

// will get all user names
router.get('/', async (req, res)=> {
    try {
        const allScoresData = await User.findAll({
            attributes: ['name', "id"]
        })

        const allScores = allScoresData.map((score) => score.get({plain: true}))
        res.render('highscores', {allScores})
        console.log(allScores)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router;


// updating database so that the user model now has the user score associated to it
// router.put('/:id', async (req, res) => {
//     try {
//         const userScore = await User.set(req.body, {
//             where
//         })
//     }
// })

// if they want to add thier highscore, then just run a get route update the highscores page?
