import { db, DocumentReference } from 'firebase';
import { Common, UserMetadata, ScreenContent, Transaction } from 'types';

export const create = (docData: Common) => {
  // TODO: onCreate add user as an accepted proposal to have a function add to members and history Set intro: 'Created this Common'
  return db.collection('commons').add(docData);
};

export const save = (commonRef: DocumentReference, docData: Common) => {
  return commonRef.set(docData);
};

export const view = (commonId: string, showHidden?: boolean): ScreenContent => {
  // TODO: Add showHidden for Proposals - AMOS include hidden commons and discussions?
  // TODO: Add showHidden in the user dashboard proposals for own proposals
  const commonRef = db.doc(`commons/${commonId}`);
  
  // Show only active or active and hidden
  let showDiscussions = ['active'];
  if(showHidden) {showDiscussions.push('hidden');}

  return {
    mainScreen: {
      name: 'commonDoc.name',
      components: [
        {
          name: 'commonDoc.name',
          ref: commonRef,
        },
      ],
    },
    tabs: [
      {
        name: 'Discussions',
        ref: commonRef
          .collection('discussions')
          .where('status', 'in', showDiscussions),
      },
      {
        name: 'Proposals',
        ref: commonRef.collection('proposals').where('status', '==', 'active'),
      },
      {
        name: 'History',
        ref: commonRef.collection('proposals').where('status', '!=', 'active'),
      },
    ],
  };
};

export const listRecent = (userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
            .collection('commons')
            .where('__name__', 'in', userMetadata.recent.commonIds)
            .where('status', '==', 'active')
            .limit(10),
        },
      ],
    },
  };
};

export const listAll = (userId: string): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
            .collection('commons')
            .where('members.active', 'array-contains', userId)
            .where('status', '==', 'active')
            .limit(10),
        },
      ],
    },
  };
};

export const remove = (commonRef: DocumentReference) => {
  return commonRef.delete();
};

export const addTransaction = (
  commonRef: DocumentReference,
  docData: Transaction
) => {
  return commonRef.collection('transactions').add(docData);
};
