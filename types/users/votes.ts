import { DocumentReference } from 'firebase/firestore';
import { BaseRecord } from '../BaseRecord';
import { UserProfile } from '../UserProfile';

export interface Vote  extends BaseRecord {
  parentData: {
    user: UserProfile;
    common: {
      id: string; // The ID of the parent common
      name: string; // The name of the parent common
      ref: DocumentReference
    };
    proposal: {
      id: string; // The ID of the parent common
      name: string; // The name of the parent common
      ref: DocumentReference
    };
  }
  voteYes: boolean   // Yes = true | No = false
}