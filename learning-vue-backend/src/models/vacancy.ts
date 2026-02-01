import { ObjectId } from "mongodb";
import Entity from "./entity";
import { Company } from "./Company";

export class Vacancy extends Entity {
  constructor(
    public type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship', // job type
    public title: string,
    public description: string,
    public salary: string, // can be string like "$50k-$60k"
    public location: string,
    public company: Company,
    public applicants: ObjectId[] = [], // array of CV ids
    id?: ObjectId,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
}