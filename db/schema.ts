import { relations } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const timestamps = {
  updatedAt: timestamp()
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  createdAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const forms = pgTable("forms", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 100 }).notNull(),
  userId: varchar({ length: 50 }),
  teamId: varchar({ length: 50 }),
  layout: jsonb().$type<unknown>(),
  config: jsonb().$type<unknown>(),
  createdBy: varchar({ length: 50 }).notNull(),
  ...timestamps,
});

export const formsRelations = relations(forms, ({ many }) => ({
  submissions: many(submissions),
}));

export const submissions = pgTable("submissions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  formData: jsonb()
    .$type<Record<string, string | number | undefined | null>>()
    .notNull(),
  formId: integer()
    .references(() => forms.id)
    .notNull(),
  ...timestamps,
});

export const submissionsRelations = relations(submissions, ({ one }) => ({
  form: one(forms, {
    fields: [submissions.formId],
    references: [forms.id],
  }),
}));
