import { db } from "@/db";
import { forms } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_cacheLife as cacheLife } from "next/cache";

const getFormData = async () => {
  "use cache";
  cacheLife("minutes");
  const form = await db.query.forms.findFirst({
    where: eq(forms.id, 114),
  });

  return form;
};

export const FormData = async () => {
  const form = await getFormData();
  return <div>{form?.title}</div>;
};
