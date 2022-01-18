import { ProposalRecord } from './ProposalRecord';
import { UserRecord } from './UserRecord';
import { BaseRecord } from './BaseRecord';
import { CommonRecord } from './CommonRecord';
import { DiscussionRecord } from './DiscussionRecord';
export interface NotificationRecord extends BaseRecord {
  eventObjectId: string;
  eventType: string;

  userFilter: Array<string>;
}

export interface BadgeProps {
  title?: string;
  bgColor?: string;
  textColor?: string;
}

export interface ProposalNotificationData {
  proposal: ProposalRecord;
  common: CommonRecord;
  user: UserRecord;
}

export interface NotificationItemData {
  missingData: boolean;
  discussion?: DiscussionRecord;
  ownerAvatar?: string;
  createdAt?: object;
  description?: string;
  descriptionBold?: string;
  header?: string;
  headerBold?: string;
  commonName?: string;
  common?: Common;
  commonId?: string;
  proposal?: Proposal;
}

export enum EventType {
  creationReqToJoin = 'creationReqToJoin', // did not find in db;
  requestToJoinCreated = 'requestToJoinCreated',
  requestToJoinExecuted = 'requestToJoinExecuted',
  requestToJoinRejected = 'requestToJoinRejected',
  requestToJoinAccepted = 'requestToJoinAccepted',
  subscriptionPaymentConfirmed = 'subscriptionPaymentConfirmed',
  subscriptionCanceledByUser = 'subscriptionCanceledByUser',
  fundingRequestAccepted = 'fundingRequestAccepted',
  fundingRequestCreated = 'fundingRequestCreated',
  fundingRequestExecuted = 'fundingRequestExecuted',
  fundingRequestRejected = 'fundingRequestRejected',
  voteCreated = 'voteCreated',
  cardCreated = 'cardCreated',
  paymentFailed = 'paymentFailed',
  messageCreated = 'messageCreated',
  commonCreated = 'commonCreated',
  commonWhitelisted = 'commonWhitelisted',
  commonMemberAdded = 'commonMemberAdded',
  welcomeNotification = 'welcomeNotification',
  discussionCreated = 'discussionCreated',
  discussionMessageReported = 'discussionMessageReported',
  proposalReported = 'proposalReported',
  discussionReported = 'discussionReported',
  membershipRequestReported = 'membershipRequestReported',
}

export const EventTitleState = {
  creationReqToJoin: 'Request To Join Created',
  requestToJoinCreated: 'New Members',
  requestToJoinExecuted: 'Request To Join Executed',
  requestToJoinAccepted: 'Membership Approved',
  requestToJoinRejected: 'Membership Rejected',
  subscriptionPaymentConfirmed: 'Subscription Payment Confirmed',
  subscriptionCanceledByUser: 'Subscription Canceled By User',
  fundingRequestAccepted: 'Proposal Accepted',
  fundingRequestCreated: 'New Proposal',
  fundingRequestExecuted: 'Proposal Executed',
  fundingRequestRejected: 'Proposal Rejected',
  cardCreated: 'Card Created',
  voteCreated: 'Vote Created',
  paymentFailed: 'Payment Failed',
  messageCreated: 'New Comment',
  commonCreated: 'Common Created',
  commonWhitelisted: 'New Featured Common',
  commonMemberAdded: 'Membership Approved',
  welcomeNotification: 'Welcome to Common!',
  discussionCreated: 'New post',
  discussionMessageReported: 'Comment Reported',
  proposalReported: 'Proposal Reported',
  discussionReported: 'Post Reported',
  membershipRequestReported: 'Membership Request Reported',
};

// NOTE: EventTypesOnNotificationList length is 10 and it is used in a firebase query with 'in' operator.
// Firebase support up to 10 elements for `in` operator, so keep in mind when adding new event.
export const EventTypesOnNotificationList = [
  EventType.commonWhitelisted,
  EventType.fundingRequestCreated,
  EventType.fundingRequestAccepted,
  EventType.fundingRequestExecuted,
  EventType.fundingRequestRejected,
  EventType.messageCreated,
  EventType.requestToJoinCreated,
  EventType.requestToJoinRejected,
  EventType.discussionCreated,
  EventType.commonMemberAdded,
];

export const EventTypesOnNotificationList1 = [
  EventType.discussionMessageReported,
  EventType.proposalReported,
  EventType.discussionReported,
];
