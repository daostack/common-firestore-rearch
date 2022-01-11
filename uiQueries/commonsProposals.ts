import { db } from "firebase"
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
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recent.proposalIds)
          .limit(10)
      },
      {
        // Tab 2 - Active
        name: 'Active',
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recent.proposalIds)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 3 - History
        name: 'History',
        ref: db
          .collectionGroup("proposals")
          .where("__name__", "in", userMetadata.recent.proposalIds)
          .where("status", "==", "archive")
          .limit(10)
      }
    ]
  }
}