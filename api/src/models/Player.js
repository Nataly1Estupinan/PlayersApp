const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const playerSchema = new Schema({
  firstName: {
    type: String,
    require: true,
    maxlength: 256,
    lowercase: true,
    uppercase: true
    
    
  },
  lastName: {
    type: String,
    require: true,
    
  },
  position: {
    type: String,
    require: true,
  },
  nation: {
    type: String,
    require: true,
  },
  club: {
    type: String,
    require: true,
  }
}, {
  versionKey: false,
  timestamps: true
})

playerSchema.plugin(mongoosePaginate)
module.exports = model('Player', playerSchema)
