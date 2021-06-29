const mongoose = require('mongoose');
const user = mongoose.Schema({
    name: {
        type: String,
        default: 'miri',
        trim: true
    },
    mail: {
        type: String,
        require: true,
        minlength: '6'
    },
    password: {
        type: String,
        require: true,
        minlength: '4'
    },
    histories:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'history'
    }]
})

module.exports = mongoose.model('user', user);