export interface ResponseData {
  id: string;
  username: string;
  password: string;
}

export interface CreateUser {
  username: string;
  password: string;
  confirmPassword: string;
}
