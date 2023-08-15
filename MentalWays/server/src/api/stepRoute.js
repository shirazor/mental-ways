import { AsyncRouter } from "express-async-router";
import genericController from "../controllers/genericController";
const {get,patch,delete:remove,post} = AsyncRouter();

get("/",
    genericController.createDocument);


export default AsyncRouter;    
