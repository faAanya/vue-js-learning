import { ObjectId } from "mongodb";

export class Experience {
  constructor(
    public id: ObjectId,
    public company: string,
    public position: string,
    public startDate: Date,
    public endDate?: Date,
    public description?: string
  ) {
  }
}