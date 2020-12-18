alter table "public"."jobs"
           add constraint "jobs_company_id_fkey"
           foreign key ("company_id")
           references "public"."companies"
           ("id") on update restrict on delete restrict;
