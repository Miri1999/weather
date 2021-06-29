const mongoose = require('mongoose');
const User = require('../modules/user')
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    const { name, password } = req.body;
    let flageForSlowInternet = true
    console.log("name:  ", name);
    console.log("password:  ", password);
    User.find({ name }).then((users) => {
        console.log(users);
        if (users.length === 0) {
            return res.status(401).json({
                message: 'responseNotOk'
            });
        }
        const [user] = users;
        bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
                flageForSlowInternet = false
                return res.status(401).json({
                    message: 'responseNotOk'
                })
            }


            console.log("result:    ", result)
            if (result) {
                flageForSlowInternet = false
                return res.status(200).json({
                    message: 'responseOk',
                    user
                })
            }
            if (flageForSlowInternet)
                res.status(401).json({
                    message: 'responseNotOk'
                });

        })


    }).catch(err => { console.log(err); })
}

module.exports = { login }
