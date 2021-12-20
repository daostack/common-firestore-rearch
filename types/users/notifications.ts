import { BaseRecord } from "../index";

export interface Notification extends BaseRecord {
  // status: read | unread
  // name: Where the notification originates... eg. a common name or a user name
  type: string;           // newProposal | newComment | newFeaturedCommon | etc
  user: {
    uid: string;          // The UID of the user who made the comment
    name: string;         // The name of the user who made the comment
    profilePic: string;   // The Base64 encoded profile picture
  }
  message: string;        // The notification message
}