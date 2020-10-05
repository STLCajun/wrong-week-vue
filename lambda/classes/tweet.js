const _ = require("lodash");
const twitter = require("twitter");

class Tweets {
  constructor(credentials) {
    this.client = new twitter(credentials);
    this.tweets = {};
    this.checkTweets();
  }

  getResults(queryString) {
    let _this = this;
    return new Promise((resolve, reject) => {
      var params = { q: queryString };

      _this.client.get("search/tweets", params, (error, tweets, response) => {
        //console.dir({ error: error });
        //console.dir(response);
        //console.dir(tweets);
        if (!error) {
          tweets.statuses.forEach((tweet, index, object) => {
            if (
              typeof tweets.statuses[index].retweeted_status === "object" ||
              typeof tweets.statuses[index].retweeted_status !== "undefined" ||
              tweets.statuses[index].text.startsWith("RT")
            ) {
              tweets.statuses.splice(index, 1);
            }
          });

          //console.log(tweets.statuses[0]);

          resolve(tweets.statuses[0]);
        } else {
          reject(error);
        }
      });
    });
  }

  checkTweets(string = null) {
    if (string == null) {
      string =
        '" I picked the wrong week to" OR " we picked the wrong week to"';
    }

    return new Promise((resolve, reject) => {
      this.getResults(string)
        .then(tweet => {
          resolve(tweet);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = { Tweets };
