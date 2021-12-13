const firebase = require('firebase');
const db = firebase.firestore();

// 08.03.1 - my account proposals
  // Tab 1 - All
  db.collectionGroup('proposals')
    .where('__name__', 'in', user.recentProposalsIds)
    .limit(10);

  // Tab 2 - Active
    db.collectionGroup('proposals')
    .where('__name__', 'in', user.recentProposalsIds)
    .where('status', '==', 'active')
    .limit(10);

  // Tab 3 - History
  db.collectionGroup('proposals')
  .where('__name__', 'in', user.recentProposalsIds)
  .where('status', '==', 'archive')
  .limit(10);

// 08.03.2 - my account: my commons
  db.collection('commons')
  .where('__name__', 'in', user.recentCommonsIds)
  .where('status', '==', 'active')
  .limit(10);

// 08.03.3 - my account: Membership requests
  // Tab 1 - Pending
  db.collection('commons')
  .where('pendingMembers', 'array-contains', user.uid)
  .where('status', '==', 'active')
  .limit(10);

  // Tab 2 - Approved
  db.collection('commons')
  .where('activeMembers', 'array-contains', user.uid)
  .where('status', '==', 'active')
  .limit(10);

  // Tab 3 - Rejected
  db.collection('commons')
  .where('rejectedMembers', 'array-contains', user.uid)
  .where('status', '==', 'active')
  .limit(10);