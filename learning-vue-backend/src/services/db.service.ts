import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  vacancies?: mongoDB.Collection,
  users?: mongoDB.Collection 
} = {}

export async function connectToDatabase () {
   dotenv.config();

   const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb://mongo_db:27017');
           
   await client.connect();
       
   const db: mongoDB.Db = client.db('jobhunter');
  
   const usersCollection: mongoDB.Collection = db.collection('users');
   const vacanciesCollection: mongoDB.Collection = db.collection('vacancies');

 collections.users = usersCollection;
 collections.vacancies = vacanciesCollection;
      
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${vacanciesCollection.collectionName}`);
}