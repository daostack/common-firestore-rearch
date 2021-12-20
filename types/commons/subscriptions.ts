import { BaseRecord } from "..";

export interface CommonSubscription extends BaseRecord{
  user: {
    uid: string;              // The ID of the user who created the subscription
    name: string;             // The name of the user who created the subscription
  }
  
}