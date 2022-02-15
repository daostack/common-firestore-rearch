import { db, DocumentReference } from 'firebase';
import { UserMetadata, UserRecord, ScreenContent } from '../types';

export const listMyProposals = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My proposals'
    },
    tabs: [
      {
        // Tab 1 - All
        name: 'All',
        ref: db.collectionGroup('proposals').where('__name__', 'in', userMetadata.recent.proposalIds).limit(10)
      },
      {
        // Tab 2 - Active
        name: 'Active',
        ref: db
          .collectionGroup('proposals')
          .where('__name__', 'in', userMetadata.recent.proposalIds)
          .where('status', '==', 'active')
          .limit(10)
      },
      {
        // Tab 3 - History
        name: 'History',
        ref: db
          .collectionGroup('proposals')
          .where('__name__', 'in', userMetadata.recent.proposalIds)
          .where('status', '==', 'archive')
          .limit(10)
      }
    ]
  };
};

export const view = (userRef: DocumentReference, proposalRef: DocumentReference): ScreenContent => {
  // Get the proposal and the voting result for the user
  const proposalId = proposalRef.id;
  return {
    mainScreen: {
      name: "Proposal",
      components: [
        {
          name: "Proposal",
          ref: proposalRef
        },
        {
          name: "Available balance",
          ref: proposalRef.parent.parent
        },
        {
          name: "Current voting status",
          ref: userRef.collection('votes').doc(proposalId)
        }
      ]
    }
  }
}