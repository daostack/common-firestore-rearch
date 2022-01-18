import { BaseRecord, UserProfile } from "types";

// TODO: Create internaL Proposal bas record and extend externalmember and funding proposals

export interface FundingProposal extends Proposal {
  type: string;                 // Always 'funding'
  amount?: number;              // The amount of the proposal
  currency?: string;            // The currency code
}

export interface MemberProposal extends Proposal {
  type: string;                 // Always 'member'
  memberCommonCounts?: number;  // If this is a member proposal, how many commonns do they belong to
}

interface Proposal extends BaseRecord {
  proposer: UserProfile;        // The profile of the proposing member
  // status: string                enum: pending | accepted | rejected

  counts: {
    votes: {
      yes: number;            // The number of yes votes for this proposal
      no: number;             // The number of no votes for this proposal
    }
    discussions: number;      // The numbner of discussions in this proposal
  }
}

export interface Report {
  // Write selection to the name field
  // Write the note to the notes field
}