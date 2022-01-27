import { Timestamp } from 'firebase';

interface Change {
  object: 'proposal'; // expand this type
  previous: unknown;
  current: unknown;
}

export interface Event {
  utc: Timestamp; // The time that the update was made
  eventType: 'create' | 'update' | 'delete' | 'orch';
  // how to remove Create/Update/Delete events, and
  // how to remove orchestrated events.
  initiator:
    | {
        type: 'user';
        uid: string;
      }
    | {
        type: 'action';
        requestedByUid: string;
      };
  object: 'proposal'; // expand this type
  objectId: string;
  type: 'accepted' | 'declined';
  subtype: 'join' | 'funding';
  previous: Record<string, Change>; // An object containing the previous version of the document
  _restore?: boolean; // Set this to 'TRUE' to restore this document version.
}
