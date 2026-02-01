import express from "express";
import { connectToDatabase } from "./src/services/db.service.ts"

  const app = express();
  app.use(express.json());

  app.listen(3000, connectToDatabase()
    .then(() => {
        app.listen(3000, () => {
            console.log(`Server started`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
        process.exit();
    })); 


