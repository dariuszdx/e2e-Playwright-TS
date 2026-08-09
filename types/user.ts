export interface User {
  userName:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender?: 'Male' | 'Female';
  birthDate?: string;
  country?: string;
  phoneNumber?: string;
}
