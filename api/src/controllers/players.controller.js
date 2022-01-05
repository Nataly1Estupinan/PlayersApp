const Player = require('../models/Player')
const  getPagination  = require('../libs/getPagination')
const AllPlayersRouter = require('express').Router()
const ClubPlayersRouter = require('express').Router()
const PageClubRouter = require('express').Router()

//método get para traer todos los jugadores
AllPlayersRouter.get('/', async (req, res) => {
  try {
    const player = await Player.find({})
    res.send(player)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

// método para traer jugadores de un equipo
ClubPlayersRouter.post('/', async (req, res) => {
  try {
    const body = req.body
    const filter = await Player.find({ club: req.body.club })
    res.json(filter)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

// método para traer jugadores de un equipo y una página en particular
//http://localhost:3000/api/v1/clubandpage?page=2&size=24&club=Juventus  Defines la página y el equipo que quieres ver

PageClubRouter.get('/', async (req, res) => {
  try {
    const { size, page, club } = req.query

    const condition = club ? {
      club: {$regex: new RegExp(club), $options: "i"},
    }: {}

    const { limit, offset } = getPagination(page, size)

    const data = await Player.paginate(condition, { offset, limit })
    res.send({
      page: data.page - 1,
      totalPages: data.totalPages,
      items: data.limit,
      totalItems: data.totalDocs,
      players: data.docs

    })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

module.exports = {
  AllPlayersRouter,
  ClubPlayersRouter,
  PageClubRouter
}
