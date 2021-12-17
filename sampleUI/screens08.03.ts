import { db } from "firebase";
import { UserRecord, UserMetadata } from './types'

// Get the user ID from Firebase Authenticationc
const user: UserRecord = {
  uid: '123456', // Firebase user ID
  name: 'Joe Smith',
  created: {user: {id: '123456', name: 'Joe Smith', profilePic: 'ZXCVBN'}, utc: 123456789},
  updated: {user: {id: '123456', name: 'Joe Smith', profilePic: 'ZXCVBN'}, utc: 123456789},
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
  .limit(10)

  // Tab 2 - Active
  db
  .collectionGroup("proposals")
  .where("__name__", "in", userMetadata.recents.proposalIds)
  .where("status", "==", "active")
  .limit(10)

  // Tab 3 - History
  db
  .collectionGroup("proposals")
  .where("__name__", "in", userMetadata.recents.proposalIds)
  .where("status", "==", "archive")
  .limit(10)


// 08.03.2 - my account: my commons
  db
  .collection("commons")
  .where("__name__", "in", userMetadata.recents.commonIds)
  .where("status", "==", "active")
  .limit(10)

// 08.03.3 - my account: Membership requests
  // Tab 1 - Pending
  db
  .collection("commons")
  .where("members.pending.ids", "array-contains", user.uid)
  .where("status", "==", "active")
  .limit(10)

  // Tab 2 - Approved
  db
  .collection("commons")
  .where("members.active.ids", "array-contains", user.uid)
  .where("status", "==", "active")
  .limit(10)

  // Tab 3 - Rejected
  db
  .collection("members.rejected.ids")
  .where("rejectedMembers", "array-contains", user.uid)
  .where("status", "==", "active")
  .limit(10)
