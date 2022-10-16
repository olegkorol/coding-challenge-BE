import { NotificationSubscription } from "../types";

/**
 * Get emails of users who have subscribed to notifications for a given job posting (city and/or keywords)
 *
 * @export
 * @param {{
 *   notificationSubscriptions: NotificationSubscription[];
 *   cityFilter: string;
 *   keywordsFilter: string[];
 * }} {
 *   notificationSubscriptions,
 *   cityFilter,
 *   keywordsFilter,
 * }
 * @returns {string[]}
 */
export async function getSubscriberEmails({
  notificationSubscriptions,
  cityFilter,
  keywordsFilter,
}: {
  notificationSubscriptions: NotificationSubscription[];
  cityFilter: string;
  keywordsFilter: string[];
}): Promise<string[]> {
  const emails = notificationSubscriptions
    .filter((subscription: any) => subscription.active)
    .map((subscription: any) => {
      let {
        cities: subscriptionCities,
        keywords: subscriptionKeywords,
        user: { email },
      } = subscription;
      console.log({ subscriptionCities, subscriptionKeywords });

      if (!subscriptionCities) subscriptionCities = [];
      if (!subscriptionKeywords) subscriptionKeywords = [];

      const citiesMatch = subscriptionCities.some((city: string) =>
        cityFilter.includes(city.toLowerCase())
      );
      const keywordsMatch = subscriptionKeywords.some((keyword: string) =>
        keywordsFilter.includes(keyword.toLowerCase())
      );
      console.log({ citiesMatch, keywordsMatch });
      if (citiesMatch || keywordsMatch) {
        console.log("Match!");
        return email; // match; return the user's email address
      }
      console.log("No match!");
      return null; // no match
    })
    .filter(Boolean); // remove null values
  const uniqueEmails = [...new Set(emails)];
  console.log({ uniqueEmails });
  return uniqueEmails;
}

export default getSubscriberEmails;
