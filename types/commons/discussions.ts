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
}
