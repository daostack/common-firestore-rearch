import { db } from "firebase";
import { UserRecord, UserPaymentMethod } from "types";
  
// 08.05.01 - saved payment method empty
// 08.05.02 - saved payment method
// 08.05.03 - saved payment method - payment failed
  // panel 1 - Saved payment method
  export const paymentMethodsPanel1 = (user: UserRecord) => {
    const paymentMethodDS = await db.doc(`users/${user.uid}/paymentMethods/default`).get();
    const paymentMethod: UserPaymentMethod = paymentMethodDS.data();
    return {
      cardType: paymentMethod.cardType,
      cardHolder: paymentMethod.cardHolderName,
      cardNumber: '**** **** ' + paymentMethod.cardNumberLast4Digits,
      cardexpiry: paymentMethod.cardExpiry.month + '/' + paymentMethod.cardExpiry.year
    }
  }
  
  export const screen = (user: UserRecord) => {
    // panel 2 - Monthly Contributions (use onSnapshot)
    return {
      tab1ContentQuery:db
      .collectionGroup('subscriptions')
      .where('user.id', '==', user.uid)
      .limit(10),
    };
  };
  