const firebase = require('firebase');
const db = firebase.firestore();

// 08.05.01 - saved payment method empty
// 08.05.02 - saved payment method
// 08.05.03 - saved payment method - payment failed
  // panel 1 - Saved payment method
  db.doc(`users/${user.uid}/paymentMethods/default`)

  // panel 2 - Monthly contributions
  db.collectionGroup('subscriptions')
  .where('user.id', '==', user.uid)
  .limit(10);

// 08.05.05 update payment method - billing details
  db.doc(`users/${user.uid}/paymentMethods/default`)