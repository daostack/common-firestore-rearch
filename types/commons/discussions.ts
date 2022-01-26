import { BaseRecord } from "..";

export interface Discussion extends BaseRecord {
  // Add moderation notes for UI to fulfil...
  // Hidden bu {user.name} on {_created.utc}
  parentCollection: string;
}

export interface Comment extends BaseRecord {

  parentCollection: string;
}