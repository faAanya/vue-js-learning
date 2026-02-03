import Express  from "express";
import {Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/db.service.js"
import {Vacancy} from "./vacancy.js";

export const vacanciesRouter = Express.Router();;

vacanciesRouter.use(Express.json());

vacanciesRouter.get("/", async (_req: Request, res: Response) => {
    try{
        const vacancies = (await collections.vacancies?.find({}).toArray()) as unknown as Vacancy[];
        res.status(200).send(vacancies);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Failed to retrieve vacancies.");
    }
});