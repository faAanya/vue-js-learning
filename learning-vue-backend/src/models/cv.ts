import { ObjectId } from "mongodb";
import Entity from "./entity";
import { Experience } from "./experience";

export class CV extends Entity {
  constructor(
    public userId: ObjectId,
    public title: string,
    public summary: string,
    public experience: Experience[] = [],
    public skills: string[] = [],
    id?: ObjectId,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
}