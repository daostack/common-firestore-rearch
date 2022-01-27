import { BaseRecord } from './BaseRecord';

export interface VoteRecord extends BaseRecord {
  /**
   * The id of the user who created this vote
   */
  voterId: string;

  /**
   * The id of the proposal, for witch this vote was created
   */
  proposalId: string;

  /**
   * The id of the common, for witch the proposal, that
   * this vote is for, was created
   */
  commonId: string;

  /**
   * The outcome of this voter of this proposal
   */
  outcome: VoteOutcome;
}

export type VoteOutcome = 'approved' | 'rejected';

export interface CreateVotePayload {
  outcome: VoteOutcome;
  proposalId: string;
}
