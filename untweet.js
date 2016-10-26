// Script to unlike/unretweet all the posts from when my account was hacked
// var tweets = document.getElementsByClassName("js-actionable-tweet"); // grab all the tweets from timelines

// for (var i = 0, tweet_count = tweets.length; i < tweet_count; i++) {
// 	var timestamp = tweets[i].getElementsByClassName("js-short-timestamp")[0].getAttribute("data-time"); //grab timestamp val from tweet
// 	if (timestamp <= 1428753665){
// 		var buttons = tweets[i].getElementsByTagName('button'); //location of retweet and like buttons in array on foreign language posts
// 		for (var j = 0, button_arr = buttons.length; j < button_arr; j++) {
// 			if (buttons[j].getElementsByClassName('ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet') || buttons[j].getElementsByClassName('ProfileTweet-action ProfileTweet-action--favorite js-toggleState')){
// 				buttons[j].click();
// 			}
// 		}
// 	}
// }

// steps 
// get all tweets
// collect all tweets before a certain time period
// loop through tweets and unlike/unshare

var tweets = document.getElementsByClassName("js-actionable-tweet"), // grab all the tweets from timelines
	tweetsToRemove = [];
for (var i = 0, x = tweets.length; i < x; i++) {
	var timestamp = tweets[i].getElementsByClassName("js-short-timestamp")[0].getAttribute("data-time"); //grab timestamp val from tweet
	if (timestamp <= 1428753665) {
		tweetsToRemove.push(tweets[i]);
	}
}

