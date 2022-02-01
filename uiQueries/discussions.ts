import { DocumentReference } from 'firebase';
import { Discussion, Comment, ScreenContent } from 'types';

export const addDiscussion = (parentRef: DocumentReference, docData: Discussion) => {
  // Identify the parent type
  docData.parentCollection = parentRef.parent;

  // TODO: Security Rules: Discussion must be a child of a common or proposal
};

export const addComment = (parentRef: DocumentReference, docData: Comment) => {
  /*
  Identify the type of the comment's great grandparent
  ====================================================

  Commons:   /commons/{commonId}/discussions/{discussionId}
              ^^^^^^^
  Proposals: /commons/{commonId}/proposals/{proposalId}/discussions/{discussionId}
                                 *********
  */

  // Add the grandparent type and save
  docData.parentCollection = parentRef.parent.parent.parent;
  return parentRef.collection('comments').add(docData);
  // TODO: Security Rules: Comment must be a child of a discussion
};

export const list = (discussionRef:DocumentReference):ScreenContent => {
  return {
    mainScreen: {
      name: '{discussion.name}',
      components: [
        {
          name: 'Discussion',
          ref: discussionRef
        },
        {
          name: 'Comments',
          ref: discussionRef.collection('comments')
        }
      ]
    }
  }
}