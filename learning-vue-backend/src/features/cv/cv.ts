import { ObjectId } from "mongodb";
import { Experience } from "../experience/experience.js";

export class CV {
  constructor(
    public id: ObjectId,
    public userId: ObjectId,
    public title: string,
    public summary: string,
    public experience: Experience[] = [],
    public skills: string[] = [],
  ) {
 
  }
}