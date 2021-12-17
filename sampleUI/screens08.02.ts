import { db } from "firebase";
import { UserRecord, UserMetadata } from './types'

// 08.01 Account registered user empty states
// 08.02.1 account registered user (my account view)
// 08.02.2 account registered user scrolled proposals
// 08.02.3 account registered user scroll
// User document fetch with onSnapshot
// Common document fetch with onSnapshot

// Get the user ID from Firebase Authenticationc
const user: UserRecord = {
  uid: '123456', // Firebase user ID
  name: 'Joe Smith',
  created: {user: {id: '123456', name: 'Joe Smith', profilePic: 'ZXCVBN'}, utc: 123456789},
  updated: {user: {id: '123456', name: 'Joe Smith', profilePic: 'ZXCVBN'}, utc: 123456789},
}

// Fetch the publicly viewable user record
db.doc(`users/${user.uid}`)

// Fetch the user's private metadata
db.doc(`users/${user.uid}/private/metadata`)

// Set the user's metadata
const userMetadata: UserMetadata = {
  counts: { commons: 0, proposals: 0 },
  recents: { commonIds: ['123'], proposalIds: ['123']}
}

// Commons card
db.collection('commons')
  .where('__name__', 'in', userMetadata.recents.commonIds)
  .where('status', '==', 'active')
  .limit(10)

// Proposals card
db.collectionGroup('proposals')
  .where('__name__', 'in', userMetadata.recents.proposalIds)
  .where('status', '==', 'active')
  .limit(10)

// Membership requests card
db.collection('commons')
  .where('members.pending.ids', 'array-contains', user.uid)
  .where('status', '==', 'active')
  .limit(10)