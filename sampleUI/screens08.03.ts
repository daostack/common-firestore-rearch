import { db } from "firebase";
import { FundingRequestProposal, UserRecord } from "types";

export const proposalTabCell = (proposal: FundingRequestProposal, proposer: UserRecord) => {
  return {
    title: proposal.description,
    proposerPhotoUrl: proposer.photoURL,
    amount: proposal,
  }
}

// 08.03.1 - my account proposals
export const screen = (user: UserRecord) => {
  // Tab 1 - All
  return {
    tab: [
      {
        title: 'All',
        value: user.proposals.all,
      },
      {
        title: 'Active',
        value: user.proposals.active,
      },
      {
        title: 'History',
        value: user.proposals.history,
      },
    ],
    tab1ContentQuery: db
      .collectionGroup("proposals")
      .where("__name__", "in", user.recentProposalsIds)
      .limit(10),

    // Tab 2 - Active
    tab2ContentQuery: db
      .collectionGroup("proposals")
      .where("__name__", "in", user.recentProposalsIds)
      .where("status", "==", "active")
      .limit(10),

    // Tab 3 - History
    tab3ContentQuery: db
      .collectionGroup("proposals")
      .where("__name__", "in", user.recentProposalsIds)
      .where("status", "==", "archive")
      .limit(10),

    // 08.03.2 - my account: my commons
    myCommons: db
      .collection("commons")
      .where("__name__", "in", user.recentCommonsIds)
      .where("status", "==", "active")
      .limit(10),

    // 08.03.3 - my account: Membership requests
    // Tab 1 - Pending
    myAccount: db
      .collection("commons")
      .where("pendingMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),

    // Tab 2 - Approved
    approved: db
      .collection("commons")
      .where("activeMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),

    // Tab 3 - Rejected
    rejected: db
      .collection("commons")
      .where("rejectedMembers", "array-contains", user.uid)
      .where("status", "==", "active")
      .limit(10),
  };
};
