export interface ResponseData {
  userId: number;
  token: string;
}

export interface CreateUser {
  username: string;
  password: string;
  confirmPassword: string;
}
