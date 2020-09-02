const Message = require('../models/message')

module.exports = {
    index,
    create
}

function index (req, res) {
    Message.find({})
    .then ((messages) => {
        res.render("messages/index", {
            title: "Message Board",
            user: req.user, 
            messages: messages.reverse()
        })
    })
}

function create (req, res) {
    req.body.postedBy = req.user.name;
    req.body.avatar = req.user.avatar;
    Message.create(req.body)
    .then(() => {
        res.redirect('/messages');
    });
}