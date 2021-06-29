const mongoose = require('mongoose');
const history = mongoose.Schema({
    date: {
        type: Date,
        default:new Date(Date.now())
    },
    city: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    temp: {
        type: Number,
        require: true
    },
    maxTemp: {
        type: Number
    },
    minTemp: {
        type: Number
    },
    icon:{
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    }
})

module.exports = mongoose.model('history', history);
