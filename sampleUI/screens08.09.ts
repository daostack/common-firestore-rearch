const firebase = require('firebase');
const db = firebase.firestore();

// 08.09.2 - Receive funds - Add Bank Account details
  db.collection(`users/${user.uid}/bankAccounts`).add(bankAccountDoc);
