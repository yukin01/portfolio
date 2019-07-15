import * as functions from 'firebase-functions';

export const nextApp = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
