
// can do a post route saying (do you want to post your highscore) if yes, then on button click add highscore to db and then display all users (name and score only)

const router = require('express').Router();
const { User } = require('../../models')
const withAuth = require('../../utils/auth')
const sequelize = require('../../config/connection');

// will get all user names
router.get('/', async (req, res)=> {
    try {
        const allScoresData = await User.findAll({
            attributes: ['name', "score"],
            order: sequelize.literal('score DESC')
        })

        const allScores = allScoresData.map((score) => score.get({plain: true}))
        res.render('highscores', {
            allScores, 
            user_id: req.session.user_id
        })
        console.log(allScores)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

router.put('/:id' ,async (req, res) => {
    try{
        const newScore = await User.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }, 
        })
        res.status(200).json(newScore)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }     
})


// router.get('/us', withAuth, async (req, res)=> {
//     try {
//         const singleScoreData = await User.findByPk(req.session.user_id, {
//             attributes: [["score", "name"],{
//             include: [
//                 [
//                     sequalize.literal(
//                         'INSERT INTO user(score) VALUES (?)'
//                     ), 5
//                 ]
//             ]
//         }]
//     })
//         const singleScore = singleScoreData.get({plain: true})

//         res.render('highscore-modal', {singleScore})
//         console.log(singleScore)
//     } catch (err) {
//         res.status(500).json(err)
//         console.log(err)
//     }
// })

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
