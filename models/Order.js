const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  list: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
      },
      cost: {
        type: Number
      }
    }
  ],
})

module.exports = mongoose.model('orders', orderSchema)