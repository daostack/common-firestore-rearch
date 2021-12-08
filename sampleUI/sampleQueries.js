import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, onSnapshot } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2.5 Complete your account
  const userDoc = {
    firstName: String,
    lastName: String,
    country: String,
    intro: String
  };
  
  const userRef = db.doc(`users/${user.id}`);
  await userRef.set(userDoc);

// 08.01 Account registered user empty states
  const userRef = db.doc(`users/${user.id}`);
  const commonsRef = db.collection('commons')
    .where('activeMembers', 'array-conatins', user.id);
  const proposalsRef = db.collectionGroup('proposals')
    .where('proposer.id', '==', user.id);

  // User document fetch with onSnapshot
    let {
    firstName = "", lastName = "", email = "", country = "", intro = "",
    counts: {
      commonsActive: commonsActiveCount = 0,
      proposalsActive: proposalsActiveCount = 0
    }
  } = userDS.data();

  // Common document fetch with onSnapshot
  let {
    title = "", intro = "", totalRaised = 0, currency = "USD",
    counts: {activeMembers: activeMembersCount = 0}
  } = commonsQDS.data();

  // Proposal document fetch with onSnapshot
  let {
    title, proposer, totalAmount, currency, status,
    counts: {
      votesFor: votesForCount = 0,
      votesAgainst: votesAgainstCount = 0,
      discussions: discussionsCount = 0
    } = proposalsQDS.data();
  }
