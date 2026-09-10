import { z } from "zod";

export type ValidationResult<T> =
  | { success: true; data: T; errors: Record<string, never> }
  | { success: false; data: null; errors: Record<string, string> };

export function parseFormData<T>(
  formData: FormData,
  schema: z.ZodType<T>,
): ValidationResult<T> {
  const result = schema.safeParse(Object.fromEntries(formData));

  if (result.success) {
    return { success: true, data: result.data, errors: {} };
  }

  const errors = result.error.issues.reduce<Record<string, string>>(
    (accumulator, issue) => {
      const field = issue.path.join(".") || "form";
      accumulator[field] ??= issue.message;
      return accumulator;
    },
    {},
  );

  return { success: false, data: null, errors };
}

