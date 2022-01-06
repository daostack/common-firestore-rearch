import { ScreenId, ScreenContent  } from 'types';

export const Screens: Record<ScreenId, ScreenContent> = {
  Screen02_05: {},
  // Screen04_01: commons,
  // Screen04_03: commons/rules,
  // Screen04_04: commons,
  // Screen08_02: userDashboard,
  // Screen08_03_1: commonsProposals.listMyProposals,
  // 08.03.2 +> commons.listMyCommons
  // Screen08_03.3: commonsMembership.listMyMembership requests,
  // 08.05.00 - userProfile.viewPaymentMethod
  // 08.05.01 - userProfile.viewPaymentMethod
  // 08.05.02 - userProfile.viewPaymentMethod
  // 08.05.03 - userProfile.viewPaymentMethod
  // 08.06.02 - Subscription - Status active
  // 08.06.03.01 => commonsMembership.viewSubscription
  // 08.06.03.02 => commonsMembership.viewSubscription
  // 08.06.03.03 => commonsMembership.viewSubscription
  // 08.06.03.04  => commonsMembership.viewSubscription- The document contains a `tag` 'paymentFailed'
  // 08.06.04  => commonsMembership.viewSubscription- Trigger onCall => Request to join again
  // 08.06.07  => commonsMembership.viewSubscription- Cancel payment - Set `cancelDate` and set a Cloud Task (with a Cloud Function)
  // 08.06.11  => commonsMembership.viewSubscription- *** Amos *** Where are these values defined? In the common?
  // 08.07 => userDashboard
  // 08.09.1 => userProfile.saveBankAccount - is shown twice.  The second version is to add a bank account with a bank list name.
  // Further clarification needed
  // 08.09.2 => userProfile.saveBankAccount
  // 08.09.3 => userProfile.viewBankAccount
  // 08.09.4 => userProfile.saveBankAccount
  // 14.01 => userProfile.listNotifications

};
