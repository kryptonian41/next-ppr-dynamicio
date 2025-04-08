import { db } from "@/db";
import { forms } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_cacheLife as cacheLife } from "next/cache";

export const FormData2 = async ({ formId }: { formId: number }) => {
  "use cache";
  cacheLife("minutes");

  const form = await db.query.forms.findFirst({
    where: eq(forms.id, formId),
  });

  return <div>{form?.title}</div>;
};
