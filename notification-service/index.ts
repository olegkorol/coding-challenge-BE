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

  if (!newJobPosting) {
    res.status(400).send("No new job posting data provided");
    return;
  }

  const cityFilter = newJobPosting?.city?.toLowerCase() || "";
  const keywordsFilter = newJobPosting?.title?.toLowerCase()?.split(" ") || [];

  try {
    const notification_subscriptions =
      await getNotificationSubscriptionsQuery();

    const emails = await getSubscriberEmails({
      notificationSubscriptions: notification_subscriptions,
      cityFilter,
      keywordsFilter,
    });

    await sendEmails(emails, newJobPosting);
    res.send("OK");
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
    return;
  }
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

process.on("unhandledRejection", (reason: string) => {
  console.error(reason);
});

process.on("uncaughtException", (error: Error) => {
  console.error("uncaughtException", error);
});
