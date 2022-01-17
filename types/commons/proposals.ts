export interface FundingProposal {
  memberUid: string;         // The ID of the proposing member
  memberProfilePic: string;  // The Base64 encoded profile picture of the proposing member
  name: string;              // The title of the proposal
  amount: number;            // The amount of the proposal
  currency: string;          // The currency code

  counts: {
    votes: {
      yes: number;            // The number of yes votes for this proposal
      no: number;             // The number of no votes for this proposal
    }
    discussions: number;      // The numbner of discussions in this proposal
  }
}

export interface MemberProposal {

}

export interface Report {
  // Write selection to the name field
  // Write the note to the notes field
}