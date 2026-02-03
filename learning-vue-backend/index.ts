import Express from "express";
import { connectToDatabase } from "./src/services/db.service.js"
import { vacanciesRouter } from './src/features/vacancy/vacancy.router.js';

  const app = Express();
  app.use(Express.json());

async function startServer() {
  try {
    await connectToDatabase();

    app.use('/jobs', vacanciesRouter);

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
}

startServer();


