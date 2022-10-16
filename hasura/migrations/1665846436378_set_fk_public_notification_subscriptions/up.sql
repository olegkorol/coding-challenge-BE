ALTER TABLE "public"."notification_subscriptions" 
  ADD CONSTRAINT "notification_subscriptions_user_id_fkey" 
  FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") 
  ON UPDATE RESTRICT ON DELETE RESTRICT;
