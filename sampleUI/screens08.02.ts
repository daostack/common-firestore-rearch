import { db } from "firebase";
import { UserRecord, UserMetadata } from './types'

// 08.01 Account registered user empty states
// 08.02.1 account registered user (my account view)
// 08.02.2 account registered user scrolled proposals
// 08.02.3 account registered user scroll
// User document fetch with onSnapshot
// Common document fetch with onSnapshot

export const fetchData = (user: UserRecord, userMetadata: UserMetadata) => {
  return {
    mainScreen: {
      // Fetch the publicly viewable user record
      db.doc(`users/${user.uid}`)

      // Fetch the user's private metadata
      db.doc(`users/${user.uid}/private/metadata`)
    },
    sections: [
      {
        // Commons section
        name: 'Commons',
        ref: db.collection('commons')
          .where('__name__', 'in', userMetadata.recents.commonIds)
          .where('status', '==', 'active')
          .limit(10)
      },
      {
        // Proposals card
        name: 'Proposals',
        ref: db.collectionGroup('proposals')
          .where('__name__', 'in', userMetadata.recents.proposalIds)
          .where('status', '==', 'active')
          .limit(10)
      },
      {
        // Membership requests card
        name: 'Membership requests',
        ref: db.collection('commons')
          .where('members.pending.ids', 'array-contains', user.uid)
          .where('status', '==', 'active')
          .limit(10)
      }
    ]
  }
}