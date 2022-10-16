import { gql } from "graphql-request";
import { NotificationSubscription } from "../types";

import graphql from "./client";

const getNotificationSubscriptions = gql`
  query getNotificationSubscriptions {
    notification_subscriptions {
      active
      user {
        email
      }
      cities
      keywords
    }
  }
`;

/**
 * Get notification subscriptions from Hasura
 *
 * @export
 * @returns {Promise<NotificationSubscription[]>}
 */
export async function getNotificationSubscriptionsQuery(): Promise<
  NotificationSubscription[]
> {
  const { notification_subscriptions } = await graphql().request(
    getNotificationSubscriptions
  );
  console.log(JSON.stringify(notification_subscriptions, null, 2));
  return notification_subscriptions;
}
