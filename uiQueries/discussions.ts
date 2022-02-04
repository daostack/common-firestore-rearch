import { DocumentReference, StorageReference } from 'firebase';
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

export const editComment = (docRef: DocumentReference, docData: Comment) => {
  return docRef.update(docData);
};

export const deleteComment = (docRef: DocumentReference, docData: Comment) => {
  return docRef.delete();
};

export const addFile = (commentRef:DocumentReference):StorageReference => {
  // Need to discuss about adding photos.  Will a comment have more than one photo?
  // Should we use the comment ID as the filename or as a holding directory
  // Should photos be resized?
  // TODO:
}

export const view = (discussionRef:DocumentReference, showHidden:boolean):ScreenContent => {

  // Show only active or active and hidden
  const showDiscussions = ['active'];
  if (showHidden) {
    showDiscussions.push('hidden');
  }

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
          ref: discussionRef.collection('comments').where('status', 'in', showDiscussions).orderBy('_updated.utc', 'desc')
        }
      ]
    }
  }
}