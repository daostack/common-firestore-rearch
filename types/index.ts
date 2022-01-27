import { Timestamp, Query, DocumentReference } from "firebase";
export * from "./commons";
export * from "./users";
export * from "./screensIds";

export interface BaseRecord {
  name: string; // The display name to show in the UI
  intro?: string; // An introduction
  imageUrl?: string; // The URL of the  image
  status: string; // enum: [ 'Active', 'Inactive', 'Deleted' ]
  notes?: string;
  tags?: string[]; // Tags for a document
  hiddenBy?: DocumentDateTime
  _created: DocumentDateTime;
  _updated: DocumentDateTime;
}

/*
The page for showing Proposal history in the Members section will require the following fields:
* UserProfile (Name, ProfilePic, etc.)
* Member of x commons
* Number of votes accepted, rejected
* Number of discussions
* Fixed / monthly subscription
* The profile pic of a user with a tick (clarification needed)
*/

interface Change {
  object: 'proposal', // expand this type
  previous: any,
  current: any
}

export interface Event {
  utc: Timestamp; // The time that the update was made
  eventType: 'create' | 'update' | 'delete' | 'orch'
  // how to remove Create/Update/Delete events, and
  // how to remove orchestrated events.
  initiator: {
    type: 'user',
    uid: string
  } | {
    type: 'action',
    requestedByUid: string
  }
  object: 'proposal' // expand this type
  objectId: string,
  type: 'accepted' | 'declined'
  subtype: 'join' | 'funding'
  previous: Record<string, Change>; // An object containing the previous version of the document
  _restore?: boolean; // Set this to 'TRUE' to restore this document version.
}

interface DocumentDateTime {
  user: UserProfile;
  utc: Timestamp; // The time that the update was made
}

export interface FileObject {
  filename: string
  bucket: string;
  objectPath: string;
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

export interface Transaction { // TODO:
  amount: number;
}

export interface Moderation { // TODO:
  // name: Problem
  // notes: Moderator note
  setHidden: boolean;
}