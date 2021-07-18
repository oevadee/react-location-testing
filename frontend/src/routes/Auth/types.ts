export interface ResponseData {
  userId: string;
  token: string;
}

export interface CreateUser {
  username: string;
  password: string;
  confirmPassword: string;
}
