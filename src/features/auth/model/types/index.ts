type Password = string | number;

export type AuthSchema = {
  username: string;
  password: Password;
  isLoading: boolean;
  isAuth: boolean;
  isAuthInProgress: boolean;
};
