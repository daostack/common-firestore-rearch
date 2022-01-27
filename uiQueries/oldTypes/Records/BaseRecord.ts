import { Timestamp } from 'firebase';

export interface BaseRecord {
  /**
   * The main identifier of the common
   */
  id: string;

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
}
