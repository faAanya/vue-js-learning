import { ObjectId } from "mongodb";
import Entity from './entity.ts'

export class User extends Entity {
  constructor(
    public name: string,
    public email: string,
    public role: UserRole,
    public cvId?: ObjectId,
    id?: ObjectId,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
}
export type UserRole = 'jobSeeker' | 'recruiter' | 'admin';