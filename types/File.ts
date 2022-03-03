import { BaseRecord } from './BaseRecord';

export interface File extends BaseRecord {
  type: string;                 // image | file
  fileBucket: string;           // If the type = file, save the bucket name here
  fileObject: string;           // If the type = file, save the object path here eg. /commons/(commonId}/discussions/{discussionId}/comments/{commentId}/filename)
}