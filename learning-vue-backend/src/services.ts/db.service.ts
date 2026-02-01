import { MongoClient, Db, Collection } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const collections: {
  users?: Collection;
} = {};

let client: MongoClient;

export async function connectToDatabase(): Promise<void> {
  const uri = process.env.DB_CONN_STRING;
  const dbName = process.env.DB_NAME;
  const usersCollectionName = process.env.USERS_COLLECTION_NAME;

  if (!uri || !dbName || !usersCollectionName) {
    throw new Error("Missing database environment variables");
  }

  client = new MongoClient(uri);

  await client.connect();

  const db: Db = client.db(dbName);

  collections.users = db.collection(usersCollectionName);

  console.log(
    `✅ Connected to MongoDB: ${db.databaseName}, collection: ${usersCollectionName}`
  );
}
