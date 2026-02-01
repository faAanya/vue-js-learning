import express from "express";
import { connectToDatabase } from "./shared/database/mongo";

async function startServer() {
  await connectToDatabase();

  const app = express();
  app.use(express.json());

  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
}

startServer().catch((err) => {
  console.error("❌ Failed to start server", err);
  process.exit(1);
});
