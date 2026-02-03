import { ObjectId } from "mongodb";
import { Company } from "../company/company.js";

export class Vacancy {
   public id: ObjectId
    public type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship' // job type
    public title: string
    public description: string
    public salary: string
    public location: string
    public company: Company
    public applicants: ObjectId[] = []
  constructor(
    id: ObjectId,
    type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship', // job type
    title: string,
    description: string,
    salary: string, 
    location: string,
    company: Company,
    applicants: ObjectId[] = [], 
  ) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.salary = salary;
    this.location = location;
    this.company = company;
    this.applicants = applicants;
  }
}