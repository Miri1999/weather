const mongoose = require('mongoose');
const User = require('../modules/user');
const History = require('../modules/history');


const createNewHistory = async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await User.findById(req.params.id)
        console.log(user);
        if (user) {
            const history = new History({
                date: req.body.date,
                city: req.body.city,
                description: req.body.description,
                temp: req.body.temp,
                maxTemp: req.body.maxTemp,
                minTemp: req.body.minTemp,
                icon: req.body.icon,
                userId: user._id
            });
            await history.save();
            await user.histories.push(history);
            user.save();
            res.status(200).json({ message: "ResponseOk", history: history });
        }
    }
    catch (err) {
        console.log(err)
        res.status(200).json({ message: "ResponseNotOk", err: err });
    }
}

const getUserHistories = async (req, res) => {
    try {
        console.log("histories ");
        console.log("got to try ");
        console.log("req:  " + req.params.id);

        let histories = await User.findById(req.params.id).populate({ path: 'histories' });
        console.log(histories)
        res.status(200).json({ message: "responseOk", histories: histories.histories })
    }
    catch (err) {
        console.log("histories ");
        console.log("catch err ", err);

        res.status(200).json({ message: "responseNotOk", err: err });
    }
}


module.exports = { createNewHistory, getUserHistories }

