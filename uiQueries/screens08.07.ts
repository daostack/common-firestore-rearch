const firebase = require('firebase');
const db = firebase.firestore();

// 08.07.all
  db.doc(`commons/${commonId}/subscriptions/{subscriptionId}`)