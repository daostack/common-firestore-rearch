import {Timestamp} from 'firebase';

export interface UserRecord {
  
  /**
   * The time that the entity
   * was created
   */
   createdAt: Timestamp;

   /**
    * The last time that the entity
    * was modified
    */
   updatedAt: Timestamp;

   /**
    * 
    */
  recentProposalsIds: string[];
  
  /**
   * 
   */
  recentCommonsIds: string[];


  /**
   * 
   */
   recentMembershipRequest: string[];

  /**
   * 
   */
  proposals: {
    all: number,
    active: number,
    history: number
  }

  // TODO: remove "uid" from the users collection and use "id";
  // The users collection is the only one that has & use "uid" instead of "id" for representing the unique id.
  // However in the IBaseEntity there is "id" both in mobile app and cloud functions.
  uid: string;

  email: string;
  photoURL: string;

  firstName: string;
  lastName: string;
  country: string;

  intro: string;
  onboarded: boolean;
  // That field is used only in the commonMembers list
  joinedAt: Timestamp;
}

export interface UserPublicData {
  createdAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export interface UserPaymentMethod {
  cardType: string,
  cardHolderName: string;
  cardNumberLast4Digits: number;
  cardExpiry: {
    month: number;
    year: number;
  }
}