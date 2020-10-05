require('dotenv').config();

const { Tweets } = require('./classes/tweet');
const credentials = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

exports.handler = function(event, context, callback) {
  let tweets = new Tweets(credentials);
  tweets.checkTweets().then(tweet => {
    callback(null, {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({
        text: tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''),
        user: tweet.user,
      }),
    });
  });
};
