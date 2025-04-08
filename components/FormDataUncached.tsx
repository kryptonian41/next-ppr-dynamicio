import { db } from "@/db";
import { forms } from "@/db/schema";
import { eq } from "drizzle-orm";

export const FormDataUncached = async ({ formId }: { formId: number }) => {
  const form = await db.query.forms.findFirst({
    where: eq(forms.id, formId),
  });

  return <div>{form?.title}</div>;
};
