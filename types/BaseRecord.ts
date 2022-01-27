import { UserProfile } from './UserProfile';
import { Timestamp } from 'firebase';

export interface DocumentDateTime {
  user: UserProfile;
  utc: Timestamp; // The time that the update was made
}

export interface BaseRecord {
  name: string; // The display name to show in the UI
  intro?: string; // An introduction
  imageUrl?: string; // The URL of the  image
  status: string; // enum: [ 'Active', 'Inactive', 'Deleted' ]
  notes?: string;
  tags?: string[]; // Tags for a document
  hiddenBy?: DocumentDateTime;
  _created: DocumentDateTime;
  _updated: DocumentDateTime;
}
