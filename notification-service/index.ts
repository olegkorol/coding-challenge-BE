import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { NewJobPosting } from "./types";

import { getNotificationSubscriptionsQuery } from "./graphql/queries";
import getSubscriberEmails from "./utils/get-subscriber-emails";
import sendEmails from "./utils/send-emails";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/new-job-posting", async (req: Request, res: Response) => {
  const {
    body: { event },
  } = req;
  if (!event) {
    res.status(400).send("No event data provided");
    return;
  }
  console.log("New job posting created!");
  console.log({ newJob: event?.data?.new || "" });
  const newJobPosting: NewJobPosting = event?.data?.new;

  const notification_subscriptions = await getNotificationSubscriptionsQuery();

  const cityFilter = newJobPosting?.city?.toLowerCase() || "";
  const keywordsFilter = newJobPosting?.title?.toLowerCase()?.split(" ") || [];

  const emails = await getSubscriberEmails({
    notificationSubscriptions: notification_subscriptions,
    cityFilter,
    keywordsFilter,
  });

  await sendEmails(emails, newJobPosting);

  res.send("OK");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
