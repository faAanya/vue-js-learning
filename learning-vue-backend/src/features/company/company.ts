import { ObjectId } from "mongodb";

export class Company {
   public id: ObjectId
    public name: string
    public description: string
    public contactEmail: string
    public contactPhone: string
  constructor(
    id: ObjectId,
    name: string,
    description: string,
    contactEmail: string,
    contactPhone: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.contactEmail = contactEmail;
      this.contactPhone = contactPhone;
  }
}