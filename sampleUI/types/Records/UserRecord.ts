import {Timestamp} from '~/Firebase';
import {BaseRecord} from './BaseRecord';

export interface UserRecord extends BaseRecord {
  // TODO: remove "uid" from the users collection and use "id";
  // The users collection is the only one that has & use "uid" instead of "id" for representing the unique id.
  // However in the IBaseEntity there is "id" both in mobile app and cloud functions.
  uid: string;

  email: string;
  photoURL: string;

  firstName: string;
  lastName: string;
  country: string;

  intro: string;
  onboarded: boolean;
  // That field is used only in the commonMembers list
  joinedAt: Timestamp;
}

export interface UserPublicData {
  createdAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  photoURL: string;
  uid: string;
}
