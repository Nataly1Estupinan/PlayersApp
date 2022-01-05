const Player = require('./models/Player')
const axios = require('axios')

const createPlayer = async player => {
  const newPlayer = new Player({
    firstName: player.firstName,
    lastName: player.lastName,
    position: player.position,
    nation: player.nation.name,
    club: player.club.name
  })

  await newPlayer.save()
}


const players = async page => {
    try {for (let page = 0; (page <= 908); page++) {
    const resp = await axios.get(
        `https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${page}`
    )
    console.log(page)
    const data = await resp.data.items

    data.map(player => {
        createPlayer(player)
    })
    }
    } catch (err) {
      // Handle Error Here
    console.error(err)
    }
}

players()

