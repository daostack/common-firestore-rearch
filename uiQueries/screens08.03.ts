import { db } from "firebase";
import { UserRecord, UserMetadata, ScreenContent } from '../types'

// 08.03.1
export const fetchData_08_03_1 = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {

  return {
    mainScreen: {
      name: 'My proposals'
    },
    tabs: [
      {
        // Tab 1 - All
        name: 'All',
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .limit(10)
      },
      {
        // Tab 2 - Active
        name: 'Active',
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 3 - History
        name: 'History',
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .where("status", "==", "archive")
          .limit(10)
      }
    ]
  }
}


// 08.03.2 - my account: my commons
export const fetchData_08_03_2 = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
            .collection("commons")
            .where("__name__", "in", userMetadata.recents.commonIds)
            .where("status", "==", "active")
            .limit(10)
        }
      ]
    }
  }
}

// 08.03.3 - my account: Membership requests
export const fetchData_08_03_3 = (user: UserRecord, userMetadata: UserMetadata):ScreenContent => {

  return {
    mainScreen: {
      name: 'Membership requests'
    },
    tabs: [
      {
        // Tab 1 - Pending
        name: 'Pending',
        ref: db
          .collection("commons")
          .where("members.pending.ids", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 2 - Approved
        name: 'Approved',
        ref: db
          .collection("commons")
          .where("members.active.ids", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 3 - Rejected
        name: 'Rejected',
        ref: db
          .collection("members.rejected.ids")
          .where("rejectedMembers", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      }
    ]
  }
}