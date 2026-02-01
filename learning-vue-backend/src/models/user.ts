import { ObjectId } from "mongodb";

export default class User{
    constructor(
        public id: ObjectId,
        public username: string, 
        public role: string,
        public email: number, 
        public dateofbirth: Date) {}
}