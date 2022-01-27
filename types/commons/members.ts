import { Timestamp } from 'firebase';
import { UserProfile } from '../index';

export interface CommonsMembers {
  // Required for Members list in a Common
  profile: UserProfile;
  joiningDateTime: {
    local: string; // ISO8601 including local offset
    timeZone: string; // The user's time zone
    utc: Timestamp;
  };
  commonsCount: number; // How many commons does this member belong to TODO: Update when user's proposal to join a common is accepted and removed.
}
