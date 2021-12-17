import { db } from "firebase";
import { UserRecord, UserMetadata } from 'types/users'

// Get the user ID from Firebase Authenticationc
const user: UserRecord = {
  uid: '123456' // Firebase user ID
}

// Set the user's metadata
const userMetadata: UserMetadata = {
  counts: { commons: 0, proposals: 0 },
  recents: { commonIds: ['123'], proposalIds: ['123']}
}

// 08.03.1
  // All tab
  db
  .collectionGroup("proposals")
  .where("__name__", "in", userMetadata.recents.proposalIds)
  .limit(10),

  // Tab 2 - Active
  db
  .collectionGroup("proposals")
  .where("__name__", "in", userMetadata.recents.proposalIds)
  .where("status", "==", "active")
  .limit(10),

  // Tab 3 - History
  db
  .collectionGroup("proposals")
  .where("__name__", "in", userMetadata.recents.proposalIds)
  .where("status", "==", "archive")
  .limit(10),






  
    // 08.03.2 - my account: my commons
    myCommons: db
      .collection("commons")
      .where("__name__", "in", userMetadata.recents.commonIds)
      .where("status", "==", "active")
      .limit(10),

    // 08.03.3 - my account: Membership requests
    // Tab 1 - Pending
    myAccount: db
      .collection("commons")
      .where("pendingMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),

    // Tab 2 - Approved
    approved: db
      .collection("commons")
      .where("activeMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),

    // Tab 3 - Rejected
    rejected: db
      .collection("commons")
      .where("rejectedMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),
  };
};
