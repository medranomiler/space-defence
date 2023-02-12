
const router = require('express').Router();
const { User } = require('../../models')
const withAuth = require('../../utils/auth')
const sequelize = require('../../config/connection');

// will get all user names
router.get('/', withAuth, async (req, res)=> {
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
        // console.log(allScores)
    } catch (err) {
        res.status(500).json(err)
        // console.log(err)
    }
})

router.put('/:id', withAuth, async (req, res) => {
    try{
        const newScore = await User.update(req.body, {
            where: {
                id: req.params.id,
            }, 
        })
        res.status(200).json(newScore)
    } catch (err) {
        console.log(req)
        console.log(err)
        res.status(500).json(err)
    }     
})

module.exports = router;
