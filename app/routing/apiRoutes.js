// LOAD DATA
var friends = require("../data/friends");

module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friends);
       
    });

    app.post("/api/friends", function(req, res) {
        
        friends.push(req.body);
        console.log("added to database");
      
        // console.log(friends[0].scores[0]);
        var getSum = 0;
        var friendList = [];
        var holdScores = [];
        var number = 0;
        var lowestNum = 0;
       
      
        // this loop goes through the list of friend objects and focuses on the scores
        for (var i = 0; i < friends.length; i++) {
            getSum = 0;
            holdScores[i] = friends[i].scores;
           
            // this loop goes through the scores array and adds them together
            for (var x = 0; x < 9; x++){
                number = friends[i].scores[x];
                getSum += parseInt(number);
            }
            // adds the sum score to friendList array
            friendList[i] = getSum;
        }
        //holds our user's place in the friendList array
        var newestBud = friendList[friendList.length - 1];
        var scoreDiff = [];
        for (var i = 0; i < friendList.length; i++) {
            //checks the difference in the two scores and adds the difference to an array
            scoreDiff[i] = Math.abs(newestBud - friendList[i]);
        }

        for (var i = 0; i < scoreDiff.length - 1; i++) {
            if (scoreDiff[i] < scoreDiff[i+1])
            lowestNum = i;
        }
       
        console.log(friends[lowestNum]);
       
        res.json(friends[lowestNum]);
    });
};