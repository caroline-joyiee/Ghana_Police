import { Router } from "express";
import { addStatement, singleStatement, updateStatment } from "../controllers/statement_controller.js";
import { getStatement } from "../controllers/statement_controller.js";

export const policeRouter = Router();


policeRouter.post('/statement',addStatement)

policeRouter.get('/statement', getStatement)
policeRouter.get('/statement/:id', singleStatement)
policeRouter.patch('/statement/:id', updateStatment)
 
