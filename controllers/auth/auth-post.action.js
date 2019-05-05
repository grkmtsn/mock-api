const User = require('../../models/user');
const config = require('../../config');
const encrypt = require('../../helpers/encrypt');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const encPassword = encrypt(password);

    const query = User.findOne({ 'username': username, 'password': encPassword }).select('username email');
    query.exec(function (err, user) {
        if (err) console.log(err);
        if (user && user.username) {
            const token = jwt.sign({ sub: user.id }, config.development.secret);
            const result = {
                user,
                token
            }
            res.status(201).json(result);
        } else {
            res.status(400).json({ message: 'Kullanıcı Adı veya şifre hatalı!.' })
        }
    })
};