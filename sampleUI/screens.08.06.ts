import { db } from "firebase";
import { CommonRecord } from './oldTypes';

// 08.06.all
export const screen = (common: CommonRecord) =>
  db.doc(`commons/${common.id}/subscriptions/{subscriptionId}`);
