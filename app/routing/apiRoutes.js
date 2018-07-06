// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

// LOAD DATA
var friends = require("../data/friends");

module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friends);
        var getSum = 0;
        var friendList = [];
        // this loop goes through the friends objects from the JSON
        for (var i = 0; i < res.length; i++) {
            getSum = 0;
            // this loop goes through the scores array and adds them together
            for (var x = 0; x < data[i].scores.length; x++){
                getSum += data[i].scores[x]
            }
            //adds the sum score to an array
            friendList[i] = getSum;
        }
        return friendList;
    });

    app.post("/api/survey", function(req, res) {
        
        friends.push(req.body);
        console.log("added to database");
    });
};