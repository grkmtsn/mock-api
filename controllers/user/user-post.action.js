const User = require('../../models/user');
const encrypt = require('../../helpers/encrypt');

module.exports.action = (req, res) => {
    const { password } = req.body;
    const cryptedPassword = encrypt(password);
    const userBody = {
        email: req.body.email,
        username: req.body.username,
        password: cryptedPassword
    };
    const newUser = new User(userBody);
    newUser.save(function (err, result) {
        if (err) return console.log(err);
        res.json(201, result);
    });
};