import { AsyncRouter } from "express-async-router";
import {addDocument,showAllDocuments,removeDocument,changeDocument} from "../controllers/genericController.js";

const convoRoute = AsyncRouter();
const {get,patch,delete:remove,post} = convoRoute;


export default convoRoute;    
