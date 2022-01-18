import { db, DocumentReference } from "firebase"
import { ScreenContent } from "../types"

export const listMembers = (commonRef: DocumentReference ):ScreenContent => {
  return {
    mainScreen: {
      name: 'Members'
    },
    tabs: [
      {
        name: 'Members',
        ref: commonRef.collection('members')
          .where('status', '==', 'active')
          .sortBy('proposer.name')
      },
      {
        name: 'Pending',
        ref: commonRef.collection('proposals')
          .where('type', '==', 'member')
          .where('status', '==', 'pending')
          .sortBy('_created.utc')             // Oldest first
      },
      {
        name: 'History',
        ref: commonRef.collection('proposals')
          .sortBy('_created.utc', 'DESC')     // Newest first
      }
   ]
  }
}