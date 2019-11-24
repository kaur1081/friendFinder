var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(req);
        res.json(friends);

    });
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        // console.log(req.body);


        var userData = req.body;
        var userScores = userData.scores;
        console.log(userData.scores);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i]);
            totalDifference = 0;

            // loop through each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {
// console.log("firneds:", friends[i], "friends scores:", friends[i].scores[j]);
                console.log(userScores[j]);
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }
        }
        console.log(bestMatch);
    friends.push(userData);
    res.json(bestMatch);


    });
}