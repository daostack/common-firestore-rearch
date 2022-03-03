import { db, DocumentReference } from 'firebase';
import { UserMetadata, UserRecord, Proposal, ScreenContent, Vote, File } from '../types';

export const create = (commonRef: DocumentReference, proposalDoc: Proposal) => {
  return commonRef.collection('proposals').add(proposalDoc);
};

export const addFile = (proposalRef: DocumentReference, proposalFileDoc: File) => {
  return proposalRef.collection('files').add(proposalFileDoc);
};


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
          ref: proposalRef.collection('votes').doc(userRef.id)
        },
        {
          name: "Files",
          ref: proposalRef.collection("files").where("type", "==", "file").orderBy("name")
        },
        {
          name: "Images",
          ref: proposalRef.collection("files").where("type", "==", "image").orderBy("name")
        }
      ]
    }
  }
}

export const listVotes = (proposalRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: "Votes"
    },
    tabs: [
      {
        name: "All",
        ref: proposalRef.collection("votes").orderBy("name")
      },
      {
        name: "Approved",
        ref: proposalRef.collection("votes")
        .where("status", "==", "yes").orderBy("name")
      },
      {
        name: "Rejected",
        ref: proposalRef.collection("votes")
        .where("status", "==", "no").orderBy("name")
      },
    ]
  }
}

export const setVote = (proposalRef: DocumentReference, voteDoc: Vote) => {
  let {voteYes, parentData: {user}, status} = voteDoc;

  status = (voteYes) ? "yes" : "no";

  return proposalRef.collection("votes").doc(user.id).set(voteDoc, {merge: true});
}