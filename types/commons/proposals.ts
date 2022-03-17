import { DocumentReference } from 'firebase';
import { Timestamp } from 'firebase/firestore';
import { BaseRecord, Currency, UserProfile } from 'types';

// TODO: Create internaL Proposal bas record and extend external member and funding proposals

export interface Proposal extends BaseRecord {
  proposer: UserProfile; // The profile of the proposing member
  // status: string                enum: pending | accepted | rejected
  parentData: {
    common: {
      id: string; // The ID of the parent common
      name: string; // The name of the parent common
      ref: DocumentReference
    }
  }

  // Finance proposals
  amount?: number;      // The amount of the (funding) proposal
  currency?: Currency;  // The currency of the funding proposal

  // Membership proposals
  intro?: string;       // Introduction to the member
  externalProfiles?: [
    {
      name: string;       // The name of the profile provider eg. Facebook, Twitter, etc.
      url: string;        // The URL to the user's profile
    }
  ]
  commonsRulesAccepted?: boolean; // Has the user accepted the rules of the common?

  counts: {
    votes: {
      yes: number; // The number of yes votes for this proposal
      no: number; // The number of no votes for this proposal
    };
    discussions: number; // The numbner of discussions in this proposal
    memberProposalExistingMembership?: number  // If this is a member proposal, how many commons do they already belong to?
  };

  votingEnds: Timestamp;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Report {
  // TODO:
  // Write selection to the name field
  // Write the note to the notes field
}