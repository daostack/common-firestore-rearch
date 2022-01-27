import { BaseRecord } from './BaseRecord';
import { Timestamp } from 'firebase';
import { ModerationRecord } from './ModerationRecord';

// TODO: implement IBaseEntity when the backend is refactored
export interface DiscussionMessageRecord extends BaseRecord {
  /**
   * ID of the parent discussion of this message, could be a Discussion ID, or a Proposal ID
   */
  discussionId: string;

  /**
   * The ID of the creator of the message
   */
  ownerId: string;

  /**
   * The name of the creator of the message
   */
  ownerName: string;

  /**
   * The content of the message
   */
  text: string;

  /**
   * Time of creation
   */
  createTime: Timestamp;

  /**
   * Image URLs of the user's avatar
   */
  ownerAvatar: string;

  /**
   * The moderation object that handles hiding/showing proposals
   */
  moderation?: ModerationRecord;
}
