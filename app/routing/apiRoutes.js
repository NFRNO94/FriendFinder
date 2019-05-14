let friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //switch case for answers after more friends are added
        if (friends) {
            friends.push(req.body);
            res.json(true);
        }

    });
};
