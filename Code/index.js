'use strict';

const {
  dialogflow,
  Image,
  Suggestions
} = require('actions-on-google');

const functions = require('firebase-functions');
const app = dialogflow({debug: true});

const API_KEY = '<YOUR_API_KEY_HERE>';

app.intent('youtube', (conv, {any}) => {
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + encodeURIComponent(any)+ "&type=video&order=viewCount&videoCategoryId=10&key=" + API_KEY;
    const axios = require('axios');
    return axios.get(url)
        .then(response => {
          var output = JSON.stringify(response.data);
          var song_fields = response.data.items[1];
          return song_fields;
      }).then(output => {
		      var song_title = output.snippet.title;
          song_title = song_title.replace(/&amp;/g, '&');
          song_title = song_title.replace(/&quot;/g, '\"');
          var song_link = JSON.stringify(output.id.videoId);
          var song_thumbnail = output.snippet.thumbnails.high.url;
          conv.ask(`Fetching your request...`)
          conv.ask(new Image({
              url: song_thumbnail,
              alt: 'Song thumbnail'
            }))
          conv.close(`The most popular search is: ` + song_title + `. The link to this search is: https://www.youtube.com/watch?v=` + song_link.slice(1, -1) + `. See you next time.`);
      })
});

exports.youtube = functions.https.onRequest(app);
