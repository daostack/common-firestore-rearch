import { db } from "firebase";
import { ScreenContent, UserRecord } from '../types'

// 14.01...
export const listNotifications = (user: UserRecord ): ScreenContent => {
  return {
    mainScreen: {
      name: 'Notifications',
      components: [
        {
          name: 'Notifications',
          ref: db
            .collection(`users/${user.uid}/notifications`)
            .orderBy('created.utc', DESC);
          // Limit in the calling application, capture the last page token
          // and then fetch additional pages for infinite scroll
        }
      ]
    }
  }
}