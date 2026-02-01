import { ObjectId } from 'mongodb';

export default class Entity {
  constructor(
    public id?: ObjectId,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}
