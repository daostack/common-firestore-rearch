import { DocumentReference } from 'firebase';
import { ScreenContent } from '../types';

export const listMembers = (commonRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: 'Members',
    },
    tabs: [
      {
        name: 'Members',
        ref: commonRef
          .collection('members')
          .where('status', '==', 'active')
          .orderBy('proposer.name'),
      },
      {
        name: 'Pending',
        ref: commonRef
          .collection('proposals')
          .where('type', '==', 'member')
          .where('status', '==', 'pending')
          .orderBy('_created.utc'), // Oldest first
      },
      {
        name: 'History',
        ref: commonRef.collection('proposals').orderBy('_created.utc', 'desc'), // Newest first
      },
    ],
  };
};
