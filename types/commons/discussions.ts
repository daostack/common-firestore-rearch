import { DocumentReference } from 'firebase/firestore';
import { BaseRecord } from '../BaseRecord';

export interface FileObject {
  filename: string;
  bucket: string;
  objectPath: string;
}

export interface Discussion extends BaseRecord {
  // Add moderation notes for UI to fulfil...
  // Hidden by {user.name} on {_created.utc}
  parentCollection: string;
  /*
    UI developer notes
    ==================
    Title: name
    Profile picture: _created.user.profilePic
    User name: _created.user.name
    Date created: _created.utc
  */
  counts: {
    comments: number;
  };
  files: FileObject[];
}

export interface Comment extends BaseRecord {
  parentCollection: string;
  replyRef: DocumentReference;  // The comment which the user is replying to
  type: string;                 // text | file
  fileBucket: string;           // If the type = file, save the bucket name here
  fileObject: string;           // If the type = file, save the object path here eg. /commons/(commonId}/discussions/{discussionId}/comments/{commentId}/filename)
}
