import { BaseRecord } from './BaseRecord';
import { Timestamp } from 'firebase';
import { ModerationRecord } from './ModerationRecord';

export interface DiscussionRecord extends BaseRecord {
  /**
   * Title of the discussion
   */
  title: string;

  /**
   * Message content
   */
  message: string;

  /**
   * The ID of the user who created the discussion
   */
  ownerId: string;

  /**
   * The ID of the common the discussion was created in
   */
  commonId: string;

  /**
   * Time of creation
   */
  createTime: Timestamp;

  /**
   * When was the last message sent in this discussion
   */
  lastMessage: Timestamp;

  /**
   * File URLs the discussion owner added in discussion creation
   */
  files: string[];

  /**
   * Image URLs the discussion owner added in discussion creation
   */
  images: string[];

  /**
   * Users who follow this discussion
   */
  followers: string[];

  /**
   * The moderation object that handles hiding/showing proposals
   */
  moderation?: ModerationRecord;

  isModerationHidden: boolean;
}

export interface DiscussionCreatedBody {
  title: string;
  message: string;
  commonId: string;
  files: string[];
  images: string[];
  moderation?: ModerationRecord;
  isModerationHidden?: boolean;
}
