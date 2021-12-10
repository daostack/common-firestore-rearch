import {BaseRecord} from './BaseRecord';
import {Timestamp} from '~/Firebase';
import {PERMISSIONS} from './Permission';

export interface CommonRecord extends BaseRecord {
  fundingGoalDeadline: number;
  /**
   * The name of the common showed in the app and
   * other places (email, notification etc.)
   */
  name: string;

  /**
   * The URL of the image, used as header for
   * the common profile page
   */
  image: string;

  /**
   * The currently available funds of
   * the common in cents
   */
  balance: number;

  /**
   * The total amount of funds that the
   * common has raised to date in cents
   */
  raised: number;

  /**
   * List of all users, that are members of this common
   */
  members: ICommonMember[];

  /**
   * List of the rules, that a member must agree
   * to be a part if the common
   */
  rules: CommonRule[];

  /**
   * List of links, that the common provided
   */
  links: ICommonLink[];

  /**
   * The common metadata properties
   */
  metadata: ICommonMetadata;

  /**
   * The whitelisting status of the common
   */
  register: CommonRegister;
}

export interface CommonRule {
  /**
   * The title for the rule
   */
  title: string;

  /**
   * The description of the rule
   */
  value: string;

  /**
   * The url of the rule
   */
  url: string;
}

export interface ICommonLink {
  /**
   * The title of the link
   */
  title: string;

  /**
   * The address, to which the link is pointing
   */
  value: string;
}

export interface ICommonMetadata {
  action: string;
  byline: string;
  description: string;

  /**
   * The id of the user, who created the common
   */
  founderId: string;

  /**
   * The minimum amount in cents, required
   * to join the common
   */
  minFeeToJoin: number;

  /**
   * Whether the user should be charged every
   * month, that they are member of the common,
   * or only when they join
   */
  contributionType: ContributionType;

  zeroContribution: boolean;

  avatar?: string;
}

export type ContributionType = 'one-time' | 'monthly';

/**
 * Used to showcase whether the common is whitelisted
 *
 * na - The common is not whitelisted and thus visible only to members
 * registered - The common is whitelisted and part of the featured list
 */
export type CommonRegister = 'na' | 'registered';

export interface ICommonMember {
  userId: string;
  joinedAt?: Timestamp;
  permission?: PERMISSIONS;
}

export interface CommonCreatedBody {
  name: string;
  image: string;
  rules: CommonRule[];
  links: ICommonLink[];
  byline: string;
  description: string;
  contributionType: ContributionType;
  contributionAmount: number;
  zeroContribution: boolean;
}
