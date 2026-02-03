import { ObjectId } from "mongodb";

export class User  {
  constructor(
    public id: ObjectId,
    public name: string,
    public email: string,
    public role: UserRole,
    public cvId?: ObjectId
  ) {
   
  }
}
export type UserRole = 'jobSeeker' | 'recruiter' | 'admin';