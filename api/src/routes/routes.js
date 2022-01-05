const { Router } = require('express')

const AllPlayersRouter = require ('../controllers/players.controller')

const router = Router ()

router.use('/api/v1/players', AllPlayersRouter.AllPlayersRouter)
router.use('/api/v1/team', AllPlayersRouter.ClubPlayersRouter)
router.use('/api/v1/clubandpage', AllPlayersRouter.PageClubRouter)

module.exports = router