import { ObjectId } from "mongodb";

export default class Cv {
    constructor(
        public id: ObjectId,
        public role: string, 
        public description: string, 
        public dateofbirth: Date) {}
}