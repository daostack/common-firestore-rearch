const firebase = require('firebase');
const db = firebase.firestore();

// 2.5 Complete your account
  const userDoc = {
    firstName: String,
    lastName: String,
    country: String,
    intro: String
  };
  
  await db.doc(`users/${user.id}`).set(userDoc);

// 08.01 Account registered user empty states
// 08.02.1 account registered user (my account view)
// 08.02.2 account registered user scrolled proposals
// 08.02.3 account registered user scroll
  // User document fetch with onSnapshot
    const userRef = db.doc(`users/${user.id}`);

    const unsubUser = userRef.onSnapshot((userDS) => {
      let {
        firstName = "", lastName = "", email = "", country = "", intro = "",
        counts: {
          commonsActive: commonsActiveCount = 0,
          proposalsActive: proposalsActiveCount = 0
        }
      } = userDS.data();
    });

  // Common document fetch with onSnapshot
  const commonsRef = db.collection('commons')
    .where('activeMembers', 'array-contains', user.id)
    .where('status', '==', 'active')
    .limit(10);
  const unsubCommons = commonsRef.onSnapshot((commonsQS => {
    const commonsData = commonsQS.map((commonsQDS) => {
      let {
        title = "", intro = "", totalRaised = 0, currency = "USD",
        counts: {activeMembers: activeMembersCount = 0}
      } = commonsQDS.data();
      
      return {title, intro, totalRaised, currency, activeMembersCount};
    })
    console.log(commonsData);
  }))


  // Proposal document fetch with onSnapshot
  const proposalsRef = db.collectionGroup('proposals')
    .where('proposer.id', '==', user.id)
    .where('status', '==', 'active')
    .limit(10);
  const unsubProposale = proposalsRef.onSnapshot((proposalsQS) => {
    const proposalsData = proposalsQS.map((proposalsQDS) => {
      let {
        title = "",
        proposer: {id = "", firstName = "", lastName = "", profilePic = ""},
        totalAmount = 0, currency = "USD", status = "inactive",
        counts: {
          votesFor: votesForCount = 0,
          votesAgainst: votesAgainstCount = 0,
          discussions: discussionsCount = 0
        } = proposalsQDS.data();
      }
      return {
        title, proposer, totalAmount, currency, status,
        votesForCount, votesAgainstCount, discussionsCount
      };
    })
  })

  // Membership request document fetch with onSnapshot
  const commonsRef = db.collection('commons')
    .where('pendingMembers', 'array-conatins', user.id)
    .where('status', '==', 'active')
    .limit(10);
  const unsubCommons = commonsRef.onSnapshot((commonsQS => {
    const membershipRequestsData = commonsQS.map((commonsQDS) => {
      let {
        title = "", intro = "", totalRaised = 0, currency = "USD",
        counts: {activeMembers: activeMembersCount = 0}
      } = commonsQDS.data();
      
      return {title, intro, totalRaised, currency, activeMembersCount};
    })
    console.log(membershipRequestsData);
  }))
