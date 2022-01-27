import { Query, DocumentReference } from 'firebase';

interface ScreenItem {
  name: string; // The section / tab / screen name
  ref: Query | DocumentReference; // The Cloud FIrestore reference
}

export interface ScreenContent {
  mainScreen?: {
    name: string;
    components?: ScreenItem[];
  };
  tabs?: ScreenItem[];
  sections?: ScreenItem[];
}
