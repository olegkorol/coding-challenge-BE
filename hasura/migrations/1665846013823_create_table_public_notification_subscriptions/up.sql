CREATE TABLE "public"."notification_subscriptions"
(
    "id" serial NOT NULL,
    "user_id" integer NOT NULL,
    "cities" jsonb,
    "keywords" jsonb,
    "active" boolean NOT NULL DEFAULT true,
    PRIMARY KEY ("id")
)
