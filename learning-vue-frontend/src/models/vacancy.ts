import type Company from "./company";

export default interface Vacancy
{
    id?: number; 
    type: string ,
    title: string,
    description:string,
    salary:string,
    location:string,
    company: Company
}