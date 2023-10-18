import { AuthSchema } from "@/features/auth";

export type StateSchema = {
  auth: AuthSchema;
};

export type ThunkConfig<T> = {
  rejectValue: T;
};
