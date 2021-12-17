import { Timestamp } from "firebase";
export * from './commons';
export * from './users';

export interface BaseRecord {
  name: string;             // The display name to show in the UI
  intro?: string;            // An introduction
  image?: string;           // The URL of the  image
  created: DocumentDateTime;
  updated: DocumentDateTime;
}

interface DocumentDateTime {
  user: {
    id: string;             // The ID of the user who made the update
    name: string;           // The name of the user who made the update
    profilePic: string;     // The user's profile picture in Base64 format
  }
  utc: Timestamp;             // The time that the update was made
}