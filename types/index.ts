import { Timestamp } from "firebase";
export * from './commons';
export * from './users';

export interface BaseRecord {
  name: string;                // The display name to show in the UI
  intro?: string;              // An introduction
  imageUrl?: string;           // The URL of the  image
  status: Status;              // enum: [ 'Active', 'Inactive', 'Deleted' ]
  created: DocumentDateTime;
  updated: DocumentDateTime;
}

enum Status {
  active = 'Active',
  inactive = 'Inactive',
  deleted = 'Deleted'
}

interface DocumentDateTime {
  user: {
    id: string;             // The ID of the user who made the update
    name: string;           // The name of the user who made the update
    profilePic: string;     // The user's profile picture in Base64 format
  }
  utc: Timestamp;             // The time that the update was made
}

export interface ScreenContent {
  mainScreen?: {
    name: string;
    components?: ScreenItem[];
  }
  tabs?: ScreenItem[];
  sections?: ScreenItem[];
}

interface ScreenItem {
  name: string;               // The section / tab / screen name
  ref: string;                // The Cloud FIrestore reference
}