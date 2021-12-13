const firebase = require('firebase');
const db = firebase.firestore();

// 08.06.all
  db.doc(`commons/${commonId}/subscriptions/{subscriptionId}`)