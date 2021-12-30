import { BaseRecord, UserProfile } from "../index";

export interface Notification extends BaseRecord {
  // status: read | unread
  // name: Where the notification originates... eg. a common name or a user name
  type: string;           // newProposal | newComment | newFeaturedCommon | etc
  user: UserProfile;
  message: string;        // The notification message
}