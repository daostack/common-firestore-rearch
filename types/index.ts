import { Timestamp, Query, DocumentReference } from "firebase";
export * from "./commons";
export * from "./users";
export * from "./screensIds";

export interface BaseRecord {
  name: string; // The display name to show in the UI
  intro?: string; // An introduction
  imageUrl?: string; // The URL of the  image
  status: string; // enum: [ 'Active', 'Inactive', 'Deleted' ]
  tags?: string[]; // Tags for a document
  created: DocumentDateTime;
  updated: DocumentDateTime;
}

export interface History {
  change: DocumentDateTime; // The time when the update was made
  data: any; // An object containing the previous version of the document
  _restore?: boolean; // Set this to 'TRUE' to restore this document version.
}

interface DocumentDateTime {
  user: UserProfile;
  utc: Timestamp; // The time that the update was made
}

export interface ScreenContent {
  mainScreen?: {
    name: string;
    components?: ScreenItem[];
  };
  tabs?: ScreenItem[];
  sections?: ScreenItem[];
}

export interface UserProfile {
  id: string; // The ID of the user who made the update
  name: string; // The name of the user who made the update
  profilePic?: string; // The user's profile picture in Base64 format
}

interface ScreenItem {
  name: string; // The section / tab / screen name
  ref: Query | DocumentReference; // The Cloud FIrestore reference
}

export interface Currency {
  code: string; // The 3 character currency code
  name: string; // The currency display name
  symbol: string; // The symbol to display £ | $ | € etc.
}
