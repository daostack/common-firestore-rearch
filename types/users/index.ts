import { BaseRecord } from '../index';
export * from './notifications';
export * from './subscriptions';
export * from './private';

export interface UserRecord extends BaseRecord {

  uid: string;               // The Firebase Authentication User ID
  firstName?: string;        // The user's first name
  lastName?: string;         // The user's last name
  profilePic?: string;       // A Base64 encoded image
  country?: {
    code: string;           // The ISO-3166-1 alpha-3 code
    name: string;           // The display name for the country
  }
}
