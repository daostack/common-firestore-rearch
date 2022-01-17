import { db, DocumentReference } from "firebase"
import { UserMetadata, UserRecord, ScreenContent, Moderation } from "../types"

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

export const addModeratorReport = (proposalRef: DocumentReference, reportDoc: Moderation) => {
  // TODO: Write here updates the parent with status = hidden / reported / etc.
  return proposalRef.collection('moderatorReports').add(reportDoc);
}