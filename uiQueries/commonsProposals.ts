import { firestore } from "firebase"
import { UserMetadata, UserRecord, ScreenContent } from "../types"

export const listMyProposals = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {

  return {
    mainScreen: {
      name: 'My proposals'
    },
    tabs: [
      {
        // Tab 1 - All
        name: 'All',
        ref: firestore
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .limit(10)
      },
      {
        // Tab 2 - Active
        name: 'Active',
        ref: firestore
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 3 - History
        name: 'History',
        ref: firestore
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recents.proposalIds)
          .where("status", "==", "archive")
          .limit(10)
      }
    ]
  }
}